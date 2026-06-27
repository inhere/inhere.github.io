---
name: glm-blog-poster
description: Generate reusable technical blog poster images with GLM Image backgrounds plus local deterministic text overlays. Use when creating article cover images, blog hero posters, release post graphics, or technical diagrams that need AI visual polish but accurate titles, commands, file names, or flow labels.
metadata:
  version: 0.1.0
---

# GLM Blog Poster

Use `scripts/make_poster.py` to generate a background with BigModel `glm-image`, then overlay accurate text locally with Pillow. This keeps model-generated visual texture separate from exact article text, commands, package names, and file names.

## Workflow

1. Put the BigModel token in the project root `.env`:

```env
BIGMODEL_API_KEY=...
```

2. Generate a poster. Default output size is `1280x720`. The GLM background request defaults to `1728x960`, then the script crops it locally to the output size. Save the raw GLM background with `--bg-out`; keep it so later text changes can reuse the same image.

```bash
python .agents/skills/glm-blog-poster/scripts/make_poster.py \
  --title "rotatefile" \
  --subtitle "log rotation, gzip, and cleanup for Go" \
  --flow "app.log|app.20260624.log|app.20260624.log.gz" \
  --command "filecleaner --dry-run -c filecleaner.json" \
  --note "keep 7 days / max 20 backups" \
  --prompt "Clean technical blog poster background for Go log rotation, no text, no logos" \
  --out static/img/blog/rotatefile-poster.png \
  --bg-out output/imagegen/rotatefile-glm-bg.png
```

3. To adjust only the overlay text, reuse the saved raw background and write a new final poster:

```bash
python .agents/skills/glm-blog-poster/scripts/make_poster.py \
  --from-bg output/imagegen/rotatefile-glm-bg.png \
  --title "rotatefile" \
  --subtitle "log rotation, gzip, and cleanup for Go" \
  --flow "app.log|app.20260624.log|app.20260624.log.gz" \
  --command "filecleaner --dry-run -c filecleaner.json" \
  --note "keep 7 days / max 20 backups" \
  --out static/img/blog/rotatefile-poster.png
```

4. Inspect the output with `view_image` when available, then run the site build.

## GLM size rules

Use one of GLM's recommended background sizes when possible:

- `1280x1280` default
- `1568x1056`
- `1056x1568`
- `1472x1088`
- `1088x1472`
- `1728x960`
- `960x1728`

Custom `--glm-size` values must use `WIDTHxHEIGHT`, keep both dimensions as multiples of `32`, stay in the recommended `1024px` to `2048px` range, and keep total pixels at or below `2^22`.

For a final `1280x720` poster, use these candidate background sizes:

- `1728x960`: GLM recommended value, close to 16:9, default for this skill.
- `1280x704`: valid custom size, slightly shorter than 16:9.
- `1280x736`: valid custom size, slightly taller than 16:9; crop locally to `1280x720`.

## Rules

- Ask the image model for a background with no text, no logos, and no watermark.
- Put exact text, commands, package names, versions, and file names in the local overlay, not in the model prompt.
- Keep raw GLM output images under `output/imagegen/` and reuse them with `--from-bg` when only the overlay text changes.
- Use `--local-only` for quick validation when no API key is available.
- Keep generated project assets under `static/img/blog/` unless the user names another destination.
