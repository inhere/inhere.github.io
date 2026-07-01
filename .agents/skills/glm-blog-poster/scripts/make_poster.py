#!/usr/bin/env python3
"""Generate a GLM background and overlay exact blog-poster text locally."""

from __future__ import annotations

import argparse
import base64
import json
import os
import urllib.request
from urllib.error import HTTPError
from io import BytesIO
from pathlib import Path

from PIL import Image, ImageColor, ImageDraw, ImageFont


API_URL = "https://open.bigmodel.cn/api/paas/v4/images/generations"
RECOMMENDED_GLM_SIZES = {
    "1280x1280",
    "1568x1056",
    "1056x1568",
    "1472x1088",
    "1088x1472",
    "1728x960",
    "960x1728",
}
MAX_GLM_PIXELS = 2**22


def find_project_root(start: Path) -> Path:
    for path in [start, *start.parents]:
        if (path / ".git").exists() or (path / "config.toml").exists():
            return path
    return start


def load_env(root: Path) -> None:
    env_path = root / ".env"
    if not env_path.exists():
        return
    for raw in env_path.read_text(encoding="utf-8").splitlines():
        line = raw.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, val = line.split("=", 1)
        os.environ.setdefault(key.strip(), val.strip().strip('"').strip("'"))


def parse_size(value: str, label: str) -> tuple[int, int]:
    try:
        width, height = [int(part) for part in value.lower().split("x", 1)]
    except ValueError as err:
        raise SystemExit(f"{label} must use WIDTHxHEIGHT, got: {value}") from err
    if width <= 0 or height <= 0:
        raise SystemExit(f"{label} dimensions must be positive, got: {value}")
    return width, height


def validate_glm_size(value: str) -> None:
    if value in RECOMMENDED_GLM_SIZES:
        return

    width, height = parse_size(value, "--glm-size")
    if width % 32 != 0 or height % 32 != 0:
        raise SystemExit(f"--glm-size must use dimensions divisible by 32, got: {value}")
    if width < 1024 or width > 2048 or height < 1024 or height > 2048:
        raise SystemExit(f"--glm-size dimensions should stay within 1024px-2048px, got: {value}")
    if width * height > MAX_GLM_PIXELS:
        raise SystemExit(f"--glm-size exceeds 2^22 pixels, got: {value}")


def parse_crop(value: str) -> tuple[int, int, int, int]:
    try:
        parts = [int(part.strip()) for part in value.split(",")]
    except ValueError as err:
        raise SystemExit(f"--bg-crop must use left,top,right,bottom pixels, got: {value}") from err
    if len(parts) != 4 or any(part < 0 for part in parts):
        raise SystemExit(f"--bg-crop must use four non-negative pixel values, got: {value}")
    return parts[0], parts[1], parts[2], parts[3]


def parse_color(value: str, label: str) -> tuple[int, int, int, int]:
    try:
        r, g, b = ImageColor.getrgb(value)
    except ValueError as err:
        raise SystemExit(f"{label} must be a valid color, got: {value}") from err
    return r, g, b, 255


def crop_background(img: Image.Image, crop: tuple[int, int, int, int]) -> Image.Image:
    left, top, right, bottom = crop
    if not any(crop):
        return img
    if left + right >= img.width or top + bottom >= img.height:
        raise SystemExit(f"--bg-crop is larger than source image size {img.size}")
    return img.crop((left, top, img.width - right, img.height - bottom))


def request_glm_image(prompt: str, size: str, out_bg: Path, watermark_enabled: bool) -> Image.Image:
    token = os.getenv("BIGMODEL_API_KEY")
    if not token:
        raise SystemExit("BIGMODEL_API_KEY is missing. Put it in project .env or the shell environment.")

    payload = json.dumps({
        "model": "glm-image",
        "prompt": prompt,
        "size": size,
        "watermark_enabled": watermark_enabled,
    }).encode("utf-8")
    req = urllib.request.Request(
        API_URL,
        data=payload,
        headers={"Authorization": f"Bearer {token}", "Content-Type": "application/json"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=180) as resp:
            data = json.loads(resp.read().decode("utf-8"))
    except HTTPError as err:
        body = err.read().decode("utf-8", errors="replace")
        raise SystemExit(f"GLM image request failed: HTTP {err.code} {err.reason}\n{body}") from err

    item = (data.get("data") or [{}])[0]
    out_bg.parent.mkdir(parents=True, exist_ok=True)
    if item.get("url"):
        urllib.request.urlretrieve(item["url"], out_bg)
        return Image.open(out_bg).convert("RGB")
    if item.get("b64_json"):
        raw = base64.b64decode(item["b64_json"])
        out_bg.write_bytes(raw)
        return Image.open(BytesIO(raw)).convert("RGB")
    raise SystemExit(f"Unsupported GLM response: {json.dumps(data, ensure_ascii=False)[:1000]}")


def local_background(size: tuple[int, int]) -> Image.Image:
    w, h = size
    img = Image.new("RGB", size, "#eef6f5")
    draw = ImageDraw.Draw(img)
    for y in range(h):
        r = int(246 - y * 18 / h)
        g = int(249 - y * 8 / h)
        b = int(250 - y * 20 / h)
        draw.line([(0, y), (w, y)], fill=(r, g, b))
    for x in range(0, w, 80):
        draw.line([(x, 0), (x, h)], fill=(214, 226, 228))
    for y in range(0, h, 72):
        draw.line([(0, y), (w, y)], fill=(214, 226, 228))
    return img


def font(name: str, size: int, bold: bool = False) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    candidates = [
        Path(os.environ.get("WINDIR", "C:/Windows")) / "Fonts" / name,
        Path("/usr/share/fonts/truetype/dejavu") / name,
    ]
    for path in candidates:
        if path.exists():
            return ImageFont.truetype(str(path), size)
    fallback = "arialbd.ttf" if bold else "arial.ttf"
    try:
        return ImageFont.truetype(fallback, size)
    except OSError:
        return ImageFont.load_default()


def cover_crop(img: Image.Image, size: tuple[int, int]) -> Image.Image:
    target_w, target_h = size
    src_w, src_h = img.size
    scale = max(target_w / src_w, target_h / src_h)
    resized = img.resize((int(src_w * scale), int(src_h * scale)), Image.LANCZOS)
    left = (resized.width - target_w) // 2
    top = (resized.height - target_h) // 2
    return resized.crop((left, top, left + target_w, top + target_h))


def draw_card(draw: ImageDraw.ImageDraw, xy: tuple[int, int, int, int], accent: str) -> None:
    x1, y1, x2, y2 = xy
    draw.rectangle((x1 + 8, y1 + 10, x2 + 8, y2 + 10), fill=(20, 39, 52, 38))
    draw.rectangle(xy, fill=(255, 255, 255, 235), outline=(20, 39, 52, 50), width=1)
    draw.rectangle((x1, y1, x2, y1 + 8), fill=accent)


def overlay(img: Image.Image, args: argparse.Namespace, size: tuple[int, int]) -> Image.Image:
    img = cover_crop(img.convert("RGB"), size).convert("RGBA")
    layer = Image.new("RGBA", size, (255, 255, 255, 0))
    draw = ImageDraw.Draw(layer)
    w, h = size

    title_font = font("segoeuib.ttf", 66, True)
    sub_font = font("segoeui.ttf", 30)
    mono_bold = font("consolab.ttf", 29, True)
    mono = font("consola.ttf", 24)
    small = font("segoeui.ttf", 21)

    draw.rectangle((0, 0, w, h), fill=(246, 249, 250, 75))
    draw.text((70, 52), args.title, font=title_font, fill=parse_color(args.title_color, "--title-color"))
    draw.text((76, 134), args.subtitle, font=sub_font, fill=parse_color(args.subtitle_color, "--subtitle-color"))

    flow = [part.strip() for part in args.flow.split("|") if part.strip()]
    flow_subtitles = [part.strip() for part in args.flow_subtitles.split("|") if part.strip()]
    card_w, card_h, gap = 280, 126, 56
    total = len(flow) * card_w + max(0, len(flow) - 1) * gap
    x = max(54, (w - total) // 2)
    y = 270
    colors = ["#00849b", "#239e6c", "#e18526", "#6c63ff"]
    for idx, label in enumerate(flow):
        x1 = x + idx * (card_w + gap)
        x2 = x1 + card_w
        draw_card(draw, (x1, y, x2, y + card_h), colors[idx % len(colors)])
        draw.text((x1 + 20, y + 32), label, font=mono_bold, fill=(20, 39, 52, 255))
        sub = flow_subtitles[idx] if idx < len(flow_subtitles) else ["current writer", "rotated file", "compressed", "cleaned"][min(idx, 3)]
        draw.text((x1 + 20, y + 80), sub, font=small, fill=(86, 103, 115, 255))
        if idx < len(flow) - 1:
            ax1 = x2 + 14
            ax2 = x2 + gap - 14
            ay = y + card_h // 2
            draw.line((ax1, ay, ax2, ay), fill=(0, 132, 155, 190), width=4)
            draw.polygon([(ax2, ay), (ax2 - 12, ay - 8), (ax2 - 12, ay + 8)], fill=(0, 132, 155, 190))

    term = (76, h - 166, w - 76, h - 50)
    draw.rectangle(term, fill=(20, 39, 52, 235))
    draw.rectangle((term[0], term[1], term[2], term[1] + 30), fill=(30, 55, 70, 255))
    for i, color in enumerate(["#f05e58", "#f3b741", "#4dbe75"]):
        draw.ellipse((term[0] + 20 + i * 20, term[1] + 10, term[0] + 30 + i * 20, term[1] + 20), fill=color)
    draw.text((term[0] + 28, term[1] + 48), f"$ {args.command}", font=mono, fill=(225, 235, 240, 255))
    draw.text((term[0] + 28, term[1] + 80), args.note, font=mono, fill=(80, 205, 145, 255))

    return Image.alpha_composite(img, layer).convert("RGB")


def main() -> int:
    parser = argparse.ArgumentParser(description="Generate a GLM blog poster with deterministic local text overlay.")
    parser.add_argument("--prompt", help="Prompt for GLM background. Ask for no text/logos/watermarks.")
    parser.add_argument("--title", default="")
    parser.add_argument("--subtitle", default="")
    parser.add_argument("--title-color", default="#122432")
    parser.add_argument("--subtitle-color", default="#526470")
    parser.add_argument("--flow", default="app.log|app.20260624.log|app.20260624.log.gz")
    parser.add_argument("--flow-subtitles", default="")
    parser.add_argument("--command", default="filecleaner --dry-run -c filecleaner.json")
    parser.add_argument("--note", default="keep 7 days / max 20 backups")
    parser.add_argument("--size", default="1280x720", help="Final poster size.")
    parser.add_argument(
        "--glm-size",
        default="1728x960",
        help="GLM background generation size. Recommended: 1280x1280, 1568x1056, 1056x1568, 1472x1088, 1088x1472, 1728x960, 960x1728.",
    )
    parser.add_argument("--out", required=True)
    parser.add_argument("--bg-out", default="output/imagegen/poster-bg.png")
    parser.add_argument("--from-bg", help="Reuse an existing raw background image and only redraw the local text overlay.")
    parser.add_argument("--bg-crop", default="0,0,0,0", help="Crop raw background before overlay: left,top,right,bottom pixels.")
    parser.add_argument("--background-only", action="store_true", help="Save the cropped background as --out without local text overlay.")
    parser.add_argument("--watermark", action="store_true", help="Enable GLM watermark. Default is disabled.")
    parser.add_argument("--local-only", action="store_true", help="Skip GLM and use a generated local background.")
    args = parser.parse_args()

    root = find_project_root(Path.cwd())
    load_env(root)
    width, height = parse_size(args.size, "--size")
    size = (width, height)
    bg_crop = parse_crop(args.bg_crop)
    out = Path(args.out)
    bg_out = Path(args.bg_out)

    if args.from_bg:
        bg = Image.open(args.from_bg).convert("RGB")
    elif args.local_only:
        bg = local_background(size)
        bg_out.parent.mkdir(parents=True, exist_ok=True)
        bg.save(bg_out)
    else:
        if not args.prompt:
            raise SystemExit("--prompt is required unless --from-bg or --local-only is used.")
        validate_glm_size(args.glm_size)
        bg = request_glm_image(args.prompt, args.glm_size, bg_out, args.watermark)

    bg = crop_background(bg, bg_crop)
    if args.background_only:
        final = cover_crop(bg, size)
    else:
        if not args.title:
            raise SystemExit("--title is required unless --background-only is used.")
        final = overlay(bg, args, size)
    out.parent.mkdir(parents=True, exist_ok=True)
    final.save(out)
    print(out)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
