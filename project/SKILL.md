---
name: ktc-fpt-design
description: Use this skill to generate well-branded interfaces and assets for the KTC 2026 × FPT Software Korea Coffee Chat (Vietnamese IT recruitment landing page for onsite-Korea positions), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference
- **Colors:** navy `#0F2050`, blue `#1A56DB` (primary action), pink `#EC174C` (KTC accent — use sparingly), cyan `#0E8BFD`. Light theme only.
- **Type:** headline `SVN-Servetica` (Thin + Medium, served from `assets/fonts/`), body `Be Vietnam Pro`. Defined in `tokens/`.
- **Language:** Vietnamese, peer-to-peer voice ("bạn"), with English tech terms left untranslated. See README "Content Fundamentals".
- **Tokens:** link `styles.css` to inherit every CSS custom property.
- **Components:** React primitives under `components/` — Button, Badge, Input, Select, Textarea, SectionHeading, Card, FeatureCard, MetaItem, JobCard, FaqItem. Exposed on `window.KTCFPTCoffeeChatDesignSystem_4d8642` via the compiled bundle.
- **Full example:** `ui_kits/coffee-chat/` recreates the entire event landing page.
- **Logos:** `assets/logos/` — `ktc-fpt-lockup.png`, `fpt-software-korea.png`, `partners-strip.png`.
