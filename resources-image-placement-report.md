# Resources Image Placement Report

## Files Changed
- `src/app/resources/page.tsx`
- `src/app/globals.css`
- `public/resources/resource-launch-content.png`
- `public/resources/resource-ai-discovery.png`
- `public/resources/resource-paid-media-checklist.png`
- `public/resources/resource-events-assets.png`
- `public/resources/resource-landing-page-enquiry.png`
- `public/resources/resource-social-content-planning.png`

## Image Mapping
- `How one launch can feed a month of content` -> `public/resources/resource-launch-content.png`
- `What AI-led discovery means for brand visibility` -> `public/resources/resource-ai-discovery.png`
- `A practical checklist before running paid media` -> `public/resources/resource-paid-media-checklist.png`
- `How events become long-term digital assets` -> `public/resources/resource-events-assets.png`
- `What every landing page should answer before enquiry` -> `public/resources/resource-landing-page-enquiry.png`
- `How to plan social content without chasing every trend` -> `public/resources/resource-social-content-planning.png`

## Fit Adjustments
- Added `resource-card-media` to remove only the old placeholder overlay/background from Resources image slots.
- Added `resource-card-image` with `object-fit: cover`, centered positioning, slight contrast/saturation polish, and controlled scale.
- Used `scale(1.18)` to `scale(1.22)` depending on image composition so the subjects read clearly in the shallow card slot.
- Launch and checklist use the strongest zoom because those concepts had the most empty margin around the subject.
- Added a minimal existing-style hover polish that increases image scale slightly inside the same fixed container.

## Ambiguity Notes
- The requested folder `C:\Users\surya\Downloads\portfolio for jiggsaw` contained portfolio case-study images, not the six resource-topic visuals.
- The matching six ChatGPT resource images were found in `C:\Users\surya\Downloads\Resources` and were mapped by visual topic.

## Design Confirmation
- Card layout, typography, heading style, colors, spacing, borders, animations, and content were not changed.
- Only the placeholder image areas in the Resources cards were replaced with images.

## Desktop/Mobile Notes
- Images are inserted with Next `Image` using responsive `sizes`.
- The existing card/image slot dimensions remain unchanged.
- Image fit is handled with CSS cropping/scale only, without stretching the files.
- Desktop was checked at 1440px; all six thumbnails render in the existing three-column card grid.
- Mobile was checked at 390px; all six cards stack correctly and reveal normally while scrolling.
