# KTC 2026 × FPT Software Korea — Coffee Chat Design System

A light, clean, corporate design system for the **KTC 2026 × FPT Software Korea Coffee Chat** —
a landing page that recruits Vietnamese IT developers for on-site positions in Korea and lets them
register for an online "coffee chat" with FPT Software Korea.

> **Co-brand event.** KTC (K-Tech College 2026, run by LIKELION) connects Vietnamese tech talent with
> Korean companies. FPT Software Korea is the partner company hiring. The page is written entirely in
> **Vietnamese**, with bilingual (Việt–Hàn) support as a core selling point.

---

## Sources

- **Reference build (GitHub):** [`minhthu3152002-pixel/ktc-coffee-chat`](https://github.com/minhthu3152002-pixel/ktc-coffee-chat)
  — a single-file `index.html` landing page. This design system extracts its tokens, components and
  page structure into a reusable library. Explore the repo to recover any copy or detail not captured here.
- **Uploaded brand assets:** the KTC × FPT event lockup, the FPT Software Korea logo, and the
  government / platform partner strip (Ministry of SMEs and Startups · KOSME · LIKELION · JOBKOREA).
  See `assets/logos/`.

---

## Brand at a glance

| | |
|---|---|
| **Voice** | Direct, honest, peer-to-peer. "Hỏi thẳng — trả lời thật." |
| **Mandated colors** | Navy `#0F2050` · Blue `#1A56DB` · Pink `#EC174C` · Cyan `#0E8BFD` |
| **Headline font** | **SVN-Servetica** (authentic — Medium + Thin, served locally) |
| **Body font** | **Be Vietnam Pro** |
| **Mood** | Clean, professional, corporate. Light theme, soft blue-tinted shadows, generous whitespace. |

---

## CONTENT FUNDAMENTALS

**Language.** 100% Vietnamese, with English tech terms left untranslated where natural
(*Fresher*, *Onsite Korea*, *AI/ML Engineer*, *Q&A Session*, *Embedded*, *MLOps*). This code-switching
is authentic to the Vietnamese IT community — never "fix" it into pure Vietnamese or pure English.

**Tone.** Confident, warm, and refreshingly plain-spoken. The product positions itself *against*
corporate webinar-speak: section titles literally read **"Không phải webinar. Không có script."**
(Not a webinar. No script.). Copy reassures rather than hypes.

**Person.** Speaks to the reader as **"bạn"** (you) — informal, respectful second person.
The organiser refers to itself as **KTC**; the company as **FPT Software Korea** (full name, never
abbreviated to just "FPT" in body copy). No first-person "tôi/chúng tôi" marketing voice.

**Casing.** Sentence case everywhere in headings and body. **UPPERCASE** is reserved for
micro-labels only — eyebrows (`COFFEE CHAT · THÁNG 6 · 2026`), field labels (`HỌ VÀ TÊN`),
and table headers. Job codes are uppercase alphanumerics (`FPT401`, `FPT402`).

**Punctuation rhythm.** Em-dashes and en-dashes for asides and ranges
(`Hỏi thẳng — trả lời thật`, `14:00 – 15:00`, `Việt–Hàn`, `2–3 lần/năm`). Mid-dots `·` separate
inline metadata (`Online · Zoom`, `Fresher / Junior · Onsite Korea`). The arrow `→` is the signature
glyph — it prefixes requirement bullets, follows CTA labels, and appears in the audience lists.

**Numbers & specifics.** Copy is concrete and trust-building: exact salaries (`2,300,000 KRW/tháng`),
exact times (`ICT 14:00 – 14:15 (15 phút)`), exact capacity (`10–20 người`), exact visa class (`E-7`).
Never vague. Money in KRW with thousands separators.

**Emoji.** Effectively retired. Wayfinding glyphs are now the custom gradient-duotone `Icon` set (see
Iconography). The only surviving emoji is a single 🎉 on the registration success state. Never use emoji
in headlines or body sentences.

**Microcopy examples.**
- Eyebrow: `COFFEE CHAT · THÁNG 6 · 2026`
- CTA: `Đăng ký giữ slot →` / `Đăng ký ngay` / `Xem chi tiết & Apply →`
- Scarcity chip: `Slot có hạn · Đóng khi đủ số lượng`
- Badges: `Fresher welcome` · `Phiên dịch Việt–Hàn` · `Miễn phí` · `Hot`
- Reassurance: `Sau khi đăng ký, bạn sẽ nhận email xác nhận và link Zoom tham gia.`

---

## VISUAL FOUNDATIONS

**Theme.** Light only. Page background is a near-white cool grey (`--surface-1` `#F5F7FA`); cards and
raised surfaces are pure white. Sections alternate between white and a slightly cooler `--surface-2`
(`#EEF2F8`) to create rhythm down the page — never more than these two section backgrounds.

**Color usage.**
- **Navy `#0F2050`** is the brand anchor: all headings, the agenda table header, the footer, logo text.
- **Blue `#1A56DB`** is the single primary action color — every button, link, eyebrow, focus ring,
  and the highlighted agenda row tint.
- **Pink `#EC174C`** is the KTC accent — used as a *spark*, not a field: the "FPT Software" word in the
  hero, the `Hot` badge, the danger/scarcity tone, and one stop in the KTC gradient. Keep it < 5% of any view.
- **Cyan `#0E8BFD`** is a bright secondary accent for occasional emphasis and tints.
- **FPT logo colors** (blue `#1E50A2` / orange `#F37021` / green `#66B22E`) appear **only** within the
  FPT logo itself — never repurpose them as UI colors.
- **Green `#16A34A`** = success / salary figures. **Amber `#F97316`** = warnings & the "chưa apply" path.

**Typography.** Display set in **SVN-Servetica** (the brand's Vietnamese-localised Helvetica; the
Medium weight is the workhorse, widened across the heavy range so headings render true Medium glyphs)
with tight tracking (`-0.5px`) for hero and section titles; body in **Be Vietnam Pro** 400–600 at
15–16px with relaxed 1.7 line-height for paragraphs. Eyebrows are 11px, 700, uppercase, 2.5px tracking.
The type contrast is *weight and case*, not family flamboyance — it stays corporate.

**Backgrounds.** No photography, no illustration, no texture. The hero uses one soft diagonal wash
(`--grad-hero`, `160deg` pale-blue → white) with two faint off-canvas radial glows (blue top-right,
pink bottom-left) for depth. Everything else is flat fills. Gradients are reserved for: the hero wash,
the KTC pink→blue brand gradient (logo/accent moments), and the navy→blue sweep.

**Cards.** White fill, `1px` hairline border (`#E2E8F0`), radius `12–16px` (small cards 12, feature/job
cards 14, the form & big panels 16). Default state is borderline-flat; **elevation arrives on hover** —
a soft, *blue-tinted* shadow (`0 8px 32px rgba(26,86,219,0.12)`) plus a 1–2px upward `translateY` and a
border that warms to pale blue. Shadows are never grey/black-heavy; they always carry the brand blue.

**Buttons.** Solid royal-blue fill, radius 7px, 700 weight, `0.3px` tracking. Hover = slightly lighter
blue **+** `translateY(-1px)` **+** a blue glow shadow. No press-scale. Outline and ghost (pale-blue)
variants exist for secondary actions; navy and pink solids for special emphasis.

**Forms.** Fields sit on the page-grey (`--surface-1`) with a hairline border; on focus the border turns
blue, the fill flips to white, and a 3px translucent-blue ring appears (`rgba(26,86,219,0.08)`). Labels
are tiny uppercase. Selects carry a custom grey chevron. The hero form card is sticky and the most
elevated object on the page (`--shadow-form`).

**Borders & dividers.** One hairline weight (`#E2E8F0`) throughout; a stronger `#CBD5E1` for input
outlines and emphasis. Section tops are separated by a single hairline `border-top`.

**Radii.** 7 (controls) · 9 (icon tiles) · 12 (small cards) · 14 (feature/job cards) · 16 (form/panels)
· 100px (pills/badges/eyebrows). Nothing fully sharp; nothing playfully round.

**Motion.** Restrained and functional. `cubic-bezier(0.4,0,0.2,1)` easing, 0.15s for hover/press,
0.2s for accordions. The only looping animation is a gentle 2s pulse on the eyebrow status dot. No
bounces, no parallax, no scroll-jacking. Accordions reveal with a simple show/hide; the FAQ toggle
rotates `+` to `×` (45°). Respect `prefers-reduced-motion`.

**Transparency & blur.** Used in exactly one place: the sticky top bar (`rgba(255,255,255,0.95)` +
`blur(12px)`). Elsewhere surfaces are opaque.

**Layout.** Centered `1100px` max-width container, `48px` desktop side gutters (`20px` mobile),
`80px` vertical section padding, `64px` sticky topbar. The hero is a two-column grid (content +
`420px` sticky form). Everything collapses to a single column under `900px`.

**Imagery vibe.** The only raster imagery is logos (full-color, on white). No filters, no duotone.
The palette does the work; the page stays bright, cool, and trustworthy.

---

## ICONOGRAPHY

The brand uses a custom **gradient duotone "glassy" icon set** (the `Icon` component) for all primary
wayfinding glyphs — a deep brand-blue base shape with a translucent **mint→cyan** glass overlay; where
the two overlap the colour blends to teal for a frosted-glass look. (This replaced the original build's
plain Unicode emoji at the brand's request.) Icons are inline SVG on a 48×48 grid, their gradient stops
read the brand blue tokens, so they stay on-palette automatically.

- **`Icon` set (8 glyphs):** `target · chat · globe · timer · clock · calendar · monitor · users`.
- **Event-meta rows** (hero): `calendar · clock · monitor · users` — one per row, inside a pale-blue
  rounded tile (`MetaItem`).
- **Feature cards** (Về Coffee Chat): `target · chat · globe · timer` — one per card, floating (no tile).
- **List markers:** `→` (requirements, audience lists, CTA suffix) and `✓` (benefits, in green) — CSS glyphs.
- **FAQ toggle:** a CSS `+` that rotates to `×`.
- **Select chevron:** a single inline data-URI SVG (grey, 1.5px stroke).
- **Success state:** 🎉 — the one remaining emoji, kept deliberately for the celebratory confirmation moment.

**Adding glyphs.** Extend `components/core/Icon.jsx` (add a shape under the same `deep`/`glass` gradient
recipe) rather than introducing a second icon style or an emoji. The colours are intentionally blue→cyan
(not the indigo→mint of generic glass-icon packs) to stay within the navy/blue/cyan brand. If you need a
large general-purpose set beyond these eight, substitute **Lucide** (CDN) and flag the substitution.

**Logos** (in `assets/logos/`) are the real brand marks — always use these, never recreate them:
- `ktc-fpt-lockup.png` — the primary co-brand event lockup (KTC 2026 × FPT Software Korea).
- `fpt-software-korea.png` — the FPT Software Korea company mark (use in the partner/company section).
- `partners-strip.png` — government & platform partners (Ministry of SMEs and Startups · KOSME ·
  LIKELION · JOBKOREA), for footers / credibility strips.

---

## FONTS

The headline face **SVN-Servetica** (the brand's Vietnamese-localised Helvetica) ships as two real
weights — **Thin** and **Medium** — supplied by the brand and served locally from `assets/fonts/`
(`tokens/fonts.css` declares both via `@font-face`). Medium is the workhorse and its `font-weight`
range is widened to `400 900` so heavy headings use real Medium glyphs rather than a faux-bold
synthesis; Thin covers `100 300` for oversized light display moments. Body font **Be Vietnam Pro**
loads from Google Fonts. `--font-display` leads with `'SVN-Servetica'`.

---

## INDEX — what's in this system

**Root**
- `styles.css` — import-only entry point. Consumers link this one file.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill front-matter so the system can be used in Claude Code.

**`tokens/`** — design tokens, each `@import`ed by `styles.css`
- `fonts.css` (SVN-Servetica + Be Vietnam Pro) · `colors.css` · `typography.css` · `spacing.css`
  · `effects.css` (shadows, gradients, motion) · `base.css` (minimal element defaults)
  · fonts served from `assets/fonts/` (SVN-Servetica Thin + Medium `.otf`)

**`components/`** — reusable React primitives (compiled to `window.KTCFPTCoffeeChatDesignSystem_4d8682`)
- `core/` — **Button**, **Badge**, **Icon** (gradient duotone icon set)
- `forms/` — **Input**, **Select**, **Textarea**
- `content/` — **SectionHeading** (+ **Eyebrow**), **Card** (+ **FeatureCard**), **MetaItem**,
  **JobCard**, **FaqItem**

**`ui_kits/coffee-chat/`** — the full landing-page recreation
- `index.html` (interactive, also a Starting Point) + `sections-top/mid/bottom.jsx` + `README.md`

**`guidelines/`** — foundation specimen cards (rendered in the Design System tab): Colors (core, tints,
neutrals, semantic/partner), Type (display, body, scale), Spacing (scale, radii & shadows),
Brand (lockup, partners, gradients).

**`assets/logos/`** — the three real brand logos.

---

## Using the components

```jsx
const { Button, Badge, JobCard, SectionHeading, Input, Select, Textarea, FaqItem }
  = window.KTCFPTCoffeeChatDesignSystem_4d8682;
```

In a `@dsCard` HTML file: link `styles.css`, then `<script src="…/_ds_bundle.js">` (the compiler
generates the bundle — never write it yourself), then read components off the namespace in a
`text/babel` block. See any `*.card.html` for the exact pattern.
