# Jiggsaw Design Source Of Truth

This document protects the approved first-draft visual direction recovered from the initial GitHub version. Future page edits must preserve this system unless the user explicitly approves a redesign.

## Source Reference

- Original recovered commit: `23611c7`
- Key files from the approved draft:
  - `src/app/layout.tsx`
  - `src/app/globals.css`
  - `src/app/page.tsx`

## Core Principle

Jiggsaw should feel like a sharp creative, media and technology studio for serious B2B and industrial brands. The site should be bold, direct, kinetic and premium, not soft, generic, beige, template-like or AI-generated.

The approved design language is:

- Big black uppercase typography.
- White and near-white sections with high contrast.
- Controlled black sections for impact.
- Sharp orange, electric blue and lime/yellow accents.
- Interactive media, video, marquee and motion as part of the brand experience.
- Compact, confident writing with no filler labels.

## Typography

Use the original type pairing everywhere:

- Display/headings: `Montserrat`
- Body/UI: `Sora`

Rules:

- Main headings use `Montserrat`, uppercase, heavy weight, tight but readable line-height.
- Body copy uses `Sora`, medium weight, neutral grey/black.
- Do not introduce another font family.
- Do not allow different page sections to feel like different websites.
- Large desktop headings should usually resolve into 1-2 lines where the copy allows.
- Avoid excessive word wrapping that creates tall empty vertical space.

## Color Palette

Approved base:

- Black: `#000000`, `#08090d`, `#111111`
- White: `#ffffff`
- Near-white: use sparingly for section contrast only.

Approved accents:

- Orange: `#ff4901` or `#ff6b00`
- Blue: `#0469e3`
- Lime/yellow: `#fbff15` or close equivalent
- Pink/magenta only inside the interactive media/video treatment, not as a general page theme.

Avoid:

- Muted beige blocks that make the page look like a different brand.
- Soft grey CTA areas that do not match the first draft.
- One-off pastel card headers.
- Random gradients that are not part of the original interactive media language.

## Approved Homepage Structure

The homepage should keep the recovered first-draft placement and rhythm:

1. Sticky white header with Jiggsaw logo, centered navigation and black CTA.
2. Large white hero with bold black uppercase headline and compact body copy underneath.
3. CTA row under the hero copy.
4. Outline marquee with repeated kinetic brand line.
5. Large interactive media/video section:
   - Full-width aspect video or image area.
   - Color overlay, grid overlay and mouse/scroll glow.
   - Labels such as strategy, culture, creative, media and technology may appear as visual anchors.
6. Client logo section with readable, optimized logos in marquee rows.
7. Work/services/about/resource sections must continue the same typography, contrast and motion language.

## Media And Placeholder Rules

The original design used a premium interactive media block, not generic placeholders. When images or videos are not ready:

- Use a placeholder that looks like the approved media system.
- Prefer black/white grid, orange/blue/lime accents, scan lines, browser-frame motifs or video-frame treatments.
- Avoid beige placeholder cards.
- Avoid low-contrast washed-out placeholder banners.
- Placeholders should signal where real image/video will go without weakening the design.

## Cards And Sections

Cards may be used for repeated work, service or resource items only.

Rules:

- Keep cards sharp, structured and readable.
- Use consistent border, shadow and padding across card groups.
- Resource cards should follow the same visual language as work cards.
- Do not use page sections as floating cards.
- Do not nest cards inside cards.
- Do not add large blank space just to make a section feel tall.

## Navigation And Interaction

Navigation must show the current page clearly.

Approved interaction direction:

- Active nav underline or accent in orange.
- Subtle scroll progress is acceptable.
- Hover states should feel tactile but restrained.
- Scroll/mouse reactions should enhance the premium feel without changing layout.
- Motion should be smooth and intentional, not decorative clutter.

## Content Presentation

Page hero rules:

- Headline on top.
- Supporting copy directly under the headline.
- Do not place supporting copy in a far-right column on service, work, about, resources or contact pages.
- Avoid blue eyebrow labels.
- Avoid filler phrases such as "What Jiggsaw does" or generic process labels unless they are necessary navigation.
- Buttons should align with the sentence or content block they support and should not float awkwardly in far corners.

## Do Not Change Without Approval

- Font pairing.
- Core color palette.
- Approved homepage structure.
- Interactive media direction.
- Header/nav style.
- Logo treatment.
- Overall bold black-and-white visual identity.

## Implementation Anchors

Current files that should follow this document:

- `src/app/page.tsx`
- `src/app/services/page.tsx`
- `src/app/work/page.tsx`
- `src/app/about/page.tsx`
- `src/app/resources/page.tsx`
- `src/app/contact/page.tsx`
- `src/components/site/site-header.tsx`
- `src/components/site/page-hero.tsx`
- `src/components/site/logo-marquee.tsx`
- `src/components/site/service-grid.tsx`
- `src/components/site/system-canvas.tsx`
- `src/app/globals.css`

Before changing visual code, check this file first.
