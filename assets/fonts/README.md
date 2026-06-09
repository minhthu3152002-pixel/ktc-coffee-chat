# Fonts — SVN-Servetica (display)

The headline face is **SVN-Servetica** (the brand's Vietnamese-localised Helvetica),
supplied by the brand as two real weights. Drop the binaries here:

| File | Weight | Used for |
|---|---|---|
| `SVN-Servetica-Medium.otf` | Medium (declared `font-weight: 400 900`) | All headings — the workhorse |
| `SVN-Servetica-Thin.otf`   | Thin (declared `font-weight: 100 300`) | Oversized light display moments |

These are referenced by the `@font-face` declarations in `index.html`.
Until the `.otf` files are present, headings gracefully fall back to
`'Helvetica Neue', Helvetica, Arial, sans-serif`.

Body text uses **Be Vietnam Pro**, loaded from Google Fonts (no local file needed).
