#!/usr/bin/env python3
"""Generate a blog post poster locally, without any image API.

Draws the same poster family used by the blog (title block, three linked cards,
dark terminal strip) with Pillow, so the output is deterministic and offline.

Examples:
    python script/make-poster.py \
        --title "miglite v0.8.0" \
        --subtitle "embed your migrations in the binary" \
        --card "//go:embed|migrations/*.sql" \
        --card "embed.FS|SetFS(migrationFS)" \
        --card "mig.Up()|no migrations dir" \
        --command "./app up --yes" \
        --note "embedded migrations / own your *sql.DB" \
        --out static/img/blog/miglite-v080-poster.png

    # reuse a background generated before, change only the text
    python script/make-poster.py --bg output/poster-bg.png ... 
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

SIZE = (1280, 720)

# palette shared with the existing poster family
BG_TOP = (247, 249, 251)
BG_BOTTOM = (232, 238, 244)
INK = (27, 39, 51)
MUTED = (91, 106, 120)
CARD_BG = (255, 255, 255)
CARD_SHADOW = (203, 213, 225)
TERMINAL_BG = (27, 39, 51)
TERMINAL_DIM = (148, 163, 184)
ACCENTS = [(13, 148, 136), (37, 99, 235), (217, 119, 6)]  # teal / blue / amber
GHOST = [(13, 148, 136, 12), (37, 99, 235, 10), (217, 119, 6, 9)]

FONT_CANDIDATES = {
    "bold": [
        "C:/Windows/Fonts/segoeuib.ttf",
        "C:/Windows/Fonts/arialbd.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    ],
    "regular": [
        "C:/Windows/Fonts/segoeui.ttf",
        "C:/Windows/Fonts/arial.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    ],
    "mono": [
        "C:/Windows/Fonts/consola.ttf",
        "C:/Windows/Fonts/CascadiaMono.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf",
    ],
    "mono_bold": [
        "C:/Windows/Fonts/consolab.ttf",
        "C:/Windows/Fonts/CascadiaMono.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSansMono-Bold.ttf",
    ],
    # CJK fallbacks, used when the text is not ASCII
    "cjk_bold": [
        "C:/Windows/Fonts/msyhbd.ttc",
        "C:/Windows/Fonts/simhei.ttf",
        "/usr/share/fonts/opentype/noto/NotoSansCJK-Bold.ttc",
    ],
    "cjk_regular": [
        "C:/Windows/Fonts/msyh.ttc",
        "C:/Windows/Fonts/simsun.ttc",
        "/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc",
    ],
}


def pick_font(kind: str, size: int, text: str = "") -> ImageFont.FreeTypeFont:
    """Load a font, preferring a CJK face when the text needs one."""
    kinds = [kind]
    if not text.isascii():
        kinds = [f"cjk_{kind}", f"cjk_regular", kind, "regular"]
    for name in kinds:
        for candidate in FONT_CANDIDATES.get(name, []):
            if Path(candidate).exists():
                try:
                    return ImageFont.truetype(candidate, size)
                except OSError:
                    continue
    return ImageFont.load_default(size)


def parse_card(value: str) -> tuple[str, str]:
    if "|" not in value:
        raise argparse.ArgumentTypeError(f"card must be 'heading|subtitle', got: {value}")
    heading, subtitle = value.split("|", 1)
    return heading.strip(), subtitle.strip()


def background(size: tuple[int, int]) -> Image.Image:
    """Vertical gradient plus a few ghost shapes, drawn deterministically."""
    width, height = size
    img = Image.new("RGB", size, BG_TOP)
    draw = ImageDraw.Draw(img)
    for y in range(height):
        ratio = y / max(1, height - 1)
        draw.line(
            [(0, y), (width, y)],
            fill=tuple(round(BG_TOP[i] + (BG_BOTTOM[i] - BG_TOP[i]) * ratio) for i in range(3)),
        )

    ghosts = Image.new("RGBA", size, (0, 0, 0, 0))
    gdraw = ImageDraw.Draw(ghosts)
    # corner accents only: they must stay clear of the title and card text
    gdraw.ellipse((1010, -190, 1450, 250), fill=GHOST[1])
    gdraw.ellipse((-260, 500, 160, 920), fill=GHOST[0])
    gdraw.rounded_rectangle((560, 706, 1340, 830), radius=40, fill=GHOST[2])
    gdraw.line((0, 250, 1280, 160), fill=(37, 99, 235, 8), width=3)
    ghosts = ghosts.filter(ImageFilter.GaussianBlur(1.5))
    return Image.alpha_composite(img.convert("RGBA"), ghosts).convert("RGB")


def draw_shadow(base: Image.Image, box: tuple[int, int, int, int], radius: int) -> None:
    shadow = Image.new("RGBA", base.size, (0, 0, 0, 0))
    sdraw = ImageDraw.Draw(shadow)
    x0, y0, x1, y1 = box
    sdraw.rounded_rectangle((x0, y0 + 8, x1, y1 + 8), radius=radius, fill=CARD_SHADOW + (150,))
    shadow = shadow.filter(ImageFilter.GaussianBlur(10))
    base.paste(Image.alpha_composite(base.convert("RGBA"), shadow).convert("RGB"), (0, 0))


def draw_arrow(draw: ImageDraw.ImageDraw, x: int, y: int, color: tuple[int, int, int]) -> None:
    draw.polygon([(x, y - 11), (x + 16, y), (x, y + 11)], fill=color)
    draw.rectangle((x - 12, y - 2, x, y + 2), fill=color)


def wrap(text: str, font: ImageFont.FreeTypeFont, max_width: int) -> list[str]:
    words = text.split(" ")
    lines: list[str] = []
    current = ""
    for word in words:
        trial = f"{current} {word}".strip()
        if font.getlength(trial) <= max_width or not current:
            current = trial
        else:
            lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def build(args: argparse.Namespace) -> Path:
    size = (args.width, args.height)
    img = background(size) if not args.bg else Image.open(args.bg).convert("RGB").resize(size)
    draw = ImageDraw.Draw(img)

    # ---- title block ---------------------------------------------------
    title_font = pick_font("bold", args.title_size, args.title)
    subtitle_font = pick_font("regular", 26, args.subtitle)
    # a trailing version token ("v0.8.0") is drawn in the brand accent
    head, sep, tail = args.title.rpartition(" ")
    if sep and tail[:1] == "v" and tail[1:2].isdigit():
        draw.text((80, 62), head, font=title_font, fill=INK)
        draw.text((80 + title_font.getlength(head + " "), 62), tail, font=title_font, fill=ACCENTS[0])
    else:
        draw.text((80, 62), args.title, font=title_font, fill=INK)
    if args.subtitle:
        draw.text((82, 62 + title_font.size + 12), args.subtitle, font=subtitle_font, fill=MUTED)

    # ---- cards ---------------------------------------------------------
    cards = args.card or []
    if cards:
        gap = 66
        total = len(cards)
        card_w = min(340, (size[0] - 160 - gap * (total - 1)) // total)
        card_h = 152
        card_y = 296
        x = 80
        heading_font = pick_font("mono_bold", 25)
        body_font = pick_font("mono", 17)

        for idx, (heading, subtitle) in enumerate(cards):
            box = (x, card_y, x + card_w, card_y + card_h)
            draw_shadow(img, box, 14)
            draw = ImageDraw.Draw(img)
            draw.rounded_rectangle(box, radius=14, fill=CARD_BG)
            accent = ACCENTS[idx % len(ACCENTS)]
            draw.rounded_rectangle((box[0], box[1], box[2], box[1] + 7), radius=3, fill=accent)

            text_y = card_y + 40
            draw.text((x + 24, text_y), heading, font=heading_font, fill=INK)
            text_y += heading_font.size + 14
            for line in wrap(subtitle, body_font, card_w - 48)[:3]:
                draw.text((x + 24, text_y), line, font=body_font, fill=MUTED)
                text_y += body_font.size + 6

            if idx < total - 1:
                draw_arrow(draw, x + card_w + (gap - 16) // 2, card_y + card_h // 2, ACCENTS[(idx + 1) % len(ACCENTS)])
            x += card_w + gap

    # ---- terminal strip ------------------------------------------------
    if args.command or args.note:
        strip = (80, 536, size[0] - 80, 660)
        draw.rounded_rectangle(strip, radius=12, fill=TERMINAL_BG)
        for i, color in enumerate([(248, 113, 113), (250, 204, 21), (74, 222, 128)]):
            cx = strip[0] + 26 + i * 22
            draw.ellipse((cx - 6, strip[1] + 16, cx + 6, strip[1] + 28), fill=color)

        mono = pick_font("mono", 22)
        mono_small = pick_font("mono", 18)
        if args.command:
            draw.text((strip[0] + 24, strip[1] + 42), f"$ {args.command}", font=mono, fill=(226, 232, 240))
        if args.note:
            draw.text((strip[0] + 24, strip[1] + 78), args.note, font=mono_small, fill=ACCENTS[0])
        if args.tag:
            tag_font = pick_font("mono", 18)
            tag_w = tag_font.getlength(args.tag)
            draw.text((strip[2] - 24 - tag_w, strip[1] + 46), args.tag, font=tag_font, fill=TERMINAL_DIM)

    out = Path(args.out)
    out.parent.mkdir(parents=True, exist_ok=True)
    img.save(out, format="PNG", optimize=True)
    if args.bg_out:
        bg_path = Path(args.bg_out)
        bg_path.parent.mkdir(parents=True, exist_ok=True)
        background(size).save(bg_path, format="PNG", optimize=True)
    return out


def main(argv: list[str]) -> int:
    parser = argparse.ArgumentParser(description="Generate a blog post poster locally (no image API).")
    parser.add_argument("--title", required=True, help="poster title, drawn top-left")
    parser.add_argument("--subtitle", default="", help="one line under the title")
    parser.add_argument("--title-size", type=int, default=62, help="title font size (default 62)")
    parser.add_argument("--card", action="append", type=parse_card, default=[], metavar="HEADING|SUBTITLE",
                        help="middle card, repeat up to 3 times")
    parser.add_argument("--command", default="", help="command line shown in the terminal strip")
    parser.add_argument("--note", default="", help="second, dimmer terminal line")
    parser.add_argument("--tag", default="", help="dim label on the right of the terminal strip")
    parser.add_argument("--out", required=True, help="output PNG path")
    parser.add_argument("--bg", default="", help="reuse an existing background image instead of drawing one")
    parser.add_argument("--bg-out", default="", help="also save the generated background to this path")
    parser.add_argument("--width", type=int, default=SIZE[0])
    parser.add_argument("--height", type=int, default=SIZE[1])
    args = parser.parse_args(argv)

    if len(args.card) > 3:
        parser.error("at most 3 cards are supported")

    out = build(args)
    print(f"poster written: {out} ({args.width}x{args.height})")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
