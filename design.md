# Jiggsaw Design File

This file documents the current live design direction for the `design-audit-redesign` branch. Use it as the reference before making any visual or layout changes.

## Brand Feel

Jiggsaw should feel like a sharp, premium, proof-led marketing systems studio. The website is bold, direct and high-contrast, with strong typography and controlled motion.

The design should not feel like a generic SaaS template, a soft agency brochure or an over-decorated landing page.

## Typography

Primary font pairing:

- Display and headings: `Montserrat`
- Body, navigation and UI copy: `Sora`

Rules:

- Display headings are heavy, confident and often uppercase.
- Body copy is compact, readable and direct.
- Avoid changing fonts across sections.
- Avoid excessive line breaks in major headings.
- Do not introduce new font families without approval.

## Color System

Core colors:

- Brand ink: `#08090d`
- Brand paper: `#f5f2ec`
- White: `#ffffff`
- Black: `#000000`

Accent colors:

- Brand orange: `#ff4901`
- Brand blue: `#0469e3`
- Brand yellow: `#fbff15`
- Brand magenta: `#ff3bd7`

Usage:

- Orange is the primary action/accent color.
- Black and white carry the core visual identity.
- Paper is used for warm section backgrounds.
- Yellow/blue/magenta should be controlled accents, not dominant section themes.

## Logo

Use the final PNG logo:

- `/jiggsaw-logo-final.png`

The same logo should be used in:

- Header
- Footer
- Any future branded sections

Do not resize, crop or restyle the logo unless explicitly requested.

## Layout System

Global page rhythm:

- Sticky top navigation.
- Large page hero sections.
- Strong section breaks with borders.
- Full-width bands for major sections.
- Cards only for repeated items or framed content.

Page width:

- Header and hero content use a max width of `1520px`.
- Sections may use full-width split layouts when the design calls for it.
- Avoid random centered narrow containers unless the approved layout uses them.

## Header And Navigation

Header behavior:

- Sticky at top.
- White background with subtle blur.
- Logo on the left.
- Navigation centered.
- Black `Start` CTA on the right.
- Active page uses orange underline.
- Scroll progress line appears at the bottom of the header.

Do not change the header layout casually; it is part of the approved design.

## Page Hero

Current hero pattern:

- White background.
- Optional orange eyebrow.
- Large black Montserrat headline.
- Supporting copy below the headline.
- Bottom border separates hero from page content.

Rules:

- Keep supporting copy under the headline.
- Do not move hero copy into a far-right column.
- Keep headings compact and readable.
- Avoid filler labels unless needed for page identity.

## Cards

Card direction:

- White or paper-based surfaces.
- Clear border and compact spacing.
- Strong black typography.
- Hover interaction may be used where already established.

Avoid:

- Oversized empty cards.
- Stretched content boxes.
- Nested cards.
- Cards that look unrelated to the rest of the site.

## Contact Page Layout

The contact page has a full-width split section:

- Left: black contact information panel.
- Right: paper form panel.

Rules:

- Do not center the whole contact section into a narrow box.
- Avoid blank side margins around the split section.
- Keep the form fields aligned and not overly stretched.
- Keep the contact options visually aligned with the form.
- Only adjust this section when fixing contact layout issues.

## Motion And Interaction

Approved interactions:

- Navigation active underline.
- Header scroll progress.
- Subtle hover states.
- GSAP reveal animations for section entrance.
- Media/card hover lift where already used.

Motion should feel premium and restrained. Do not add random particles, heavy animations or layout-shifting effects unless approved.

## Content Rules

The writing should be:

- Specific.
- Practical.
- Proof-led.
- Short.
- Human.

Avoid:

- Generic agency filler.
- Overexplaining every section.
- AI-sounding labels.
- Repeating the same positioning line unnecessarily.

## Do Not Change Without Approval

- Font pairing.
- Header structure.
- Logo asset.
- Core palette.
- Overall high-contrast brand direction.
- Approved page layouts outside the requested section.

## Key Implementation Files

- `src/app/globals.css`
- `src/components/site/site-header.tsx`
- `src/components/site/site-footer.tsx`
- `src/components/site/page-hero.tsx`
- `src/app/page.tsx`
- `src/app/services/page.tsx`
- `src/app/work/page.tsx`
- `src/app/about/page.tsx`
- `src/app/resources/page.tsx`
- `src/app/contact/page.tsx`

Before making future design changes, check this file first.
