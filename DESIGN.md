---
name: Manningham General Practice
description: A mobile-first booking launcher for a time-poor family health organiser.
colors:
  blue: "#2980b9"
  blue-700: "#1f6591"
  blue-800: "#17527a"
  blue-300: "#8fbce0"
  blue-100: "#d5e6f2"
  blue-050: "#eaf3f9"
  blue-tint: "#eaf3fa"
  amber: "#feb161"
  amber-600: "#f4a049"
  navy: "#0c2748"
  paper: "#f9f7f5"
  paper-warm: "#f8f7f5"
  white: "#ffffff"
  ink: "#212529"
  ink-2: "#47505a"
  ink-3: "#6b747e"
  line: "#e4e2de"
  line-strong: "#d3d0cb"
  on-navy: "#eef3f8"
  on-navy-2: "#a9bcd2"
  clinic-purple: "#6d4a9c"
  clinic-purple-light: "#9070c2"
  clinic-purple-soft: "#d9c7f2"
  clinic-purple-deep: "#4a2d73"
  clinic-green: "#2f6d50"
  clinic-green-light: "#4f9773"
  clinic-green-soft: "#bcd9c9"
  clinic-green-deep: "#1f4a35"
  clinic-pink: "#a63a6c"
  clinic-pink-light: "#ca5f92"
  clinic-pink-soft: "#f7b3d2"
  clinic-pink-deep: "#7a2249"
  clinic-orange: "#b45c1e"
  clinic-orange-light: "#dd8541"
  clinic-orange-soft: "#f8cb9c"
  clinic-orange-deep: "#7b3c10"
  motif-orange: "#f36223"
  motif-teal: "#3fc8a9"
  motif-magenta: "#e259c9"
typography:
  display:
    fontFamily: "Public Sans Variable, Public Sans, system-ui, sans-serif"
    fontSize: "clamp(2.35rem, 1.4rem + 4.2vw, 3.9rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Public Sans Variable, Public Sans, system-ui, sans-serif"
    fontSize: "clamp(1.7rem, 1.15rem + 2.4vw, 2.6rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Public Sans Variable, Public Sans, system-ui, sans-serif"
    fontSize: "clamp(1.2rem, 1.05rem + 0.7vw, 1.45rem)"
    fontWeight: 600
    lineHeight: 1.15
  category:
    fontFamily: "Public Sans Variable, Public Sans, system-ui, sans-serif"
    fontSize: "1.5625rem"
    fontWeight: 400
    lineHeight: 1.2
  lead:
    fontFamily: "Public Sans Variable, Public Sans, system-ui, sans-serif"
    fontSize: "clamp(1.075rem, 1rem + 0.4vw, 1.3rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Public Sans Variable, Public Sans, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Public Sans Variable, Public Sans, system-ui, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.08em"
rounded:
  none: "0"
  xs: "0.25rem"
  sm: "0.5rem"
  md: "0.875rem"
  lg: "1.25rem"
  xl: "1.75rem"
  pill: "999px"
spacing:
  sp-1: "0.25rem"
  sp-2: "0.5rem"
  sp-3: "0.75rem"
  sp-4: "1rem"
  sp-5: "1.5rem"
  sp-6: "2rem"
  sp-7: "3rem"
  sp-8: "4rem"
  sp-9: "6rem"
  sp-10: "8rem"
components:
  button-primary:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.navy}"
    rounded: "{rounded.none}"
    padding: "0.95rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.amber-600}"
    textColor: "{colors.navy}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.navy}"
    rounded: "{rounded.none}"
    padding: "0.95rem 1.5rem"
  button-sm:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.navy}"
    rounded: "{rounded.none}"
    padding: "0.65rem 1.05rem"
  button-ghost-light:
    backgroundColor: "transparent"
    textColor: "{colors.on-navy}"
    rounded: "{rounded.none}"
    padding: "0.95rem 1.5rem"
  link-cta:
    backgroundColor: "transparent"
    textColor: "{colors.amber}"
    typography: "{typography.body}"
  link-cta-navy:
    backgroundColor: "transparent"
    textColor: "{colors.navy}"
    typography: "{typography.body}"
  chip:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.pill}"
    padding: "0.45rem 0.8rem"
  language-chip:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.pill}"
    padding: "0.2rem 0.55rem"
  quick-tile:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
    rounded: "{rounded.md}"
    padding: "{spacing.sp-4}"
  service-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
    rounded: "{rounded.md}"
  clinic-tile:
    backgroundColor: "{colors.clinic-purple}"
    textColor: "{colors.white}"
    rounded: "{rounded.xs}"
    padding: "1.75rem"
  clinic-tile-hover:
    rounded: "{rounded.lg}"
  review-card:
    backgroundColor: "{colors.blue-050}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.md}"
    padding: "{spacing.sp-5}"
  doctor-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
    rounded: "{rounded.md}"
    padding: "{spacing.sp-5}"
---

# Design System: Manningham General Practice

## Overview

**Creative North Star: "The Calm Front Desk"**

MGP's homepage behaves like the best possible reception counter: warm, uncluttered, and organised so a stressed family organiser on a phone can grasp trust in one glance and reach "Book" in one move. The system is light-first by conviction. Bands of pale blue, white and warm paper carry the reading; brand blue does the wayfinding; a single warm amber marks action.

The build has since matured in two directions worth stating plainly. First, **photography now carries real weight** — a full-bleed hero portrait, a per-service picture on every card, a split consulting-room band behind the opening hours, and a teaching-practice photograph beside the independence statement. The early "no imagery, proof instead of atmosphere" stance has been replaced by "real imagery, and proof as well". Second, **geometry has sharpened**: buttons are square, the specialist tiles rest at a near-sharp 4px, and softness is now something a surface earns on hover rather than wears at rest.

Density stays deliberately low: generous vertical rhythm, one idea per band, and cards that read at arm's length in daylight or after hours. Motion is rationed but purposeful — a hero entrance, a scroll reveal on the testimonials, and hover states that bleed, glow or invert rather than merely lift.

**Key Characteristics:**
- Light-first grounds — pale blue, white and warm paper bands, with navy reserved for text and the footer
- Amber as the conversion colour, and an amber underlined link as its quieter sibling
- Public Sans throughout; semibold headings, light-weight category labels, heavy weights only for data
- Real photography in every major band, cropped and colour-matched to the palette
- Near-sharp corners at rest that soften on interaction
- Four saturated clinic tones that exist only inside the specialist tiles

## Colors

A warm, trustworthy palette where paper and white do the reading, blue does the navigating, navy grounds authority, a single amber carries every call to action, and four saturated clinic hues appear in exactly one place.

### Primary
- **Brand Blue** (#2980b9): The wayfinding hue. Carries icons, focus rings, the headline highlight, section grounds (the quick-access band is solid brand blue), the partner-card fill, and every pale-blue surface tint.
- **Deep Blue** (#1f6591 / #17527a): Link text and hover states; the darker stop closes gradients and sets the language-chip greeting.

### Secondary
- **Warm Amber** (#feb161): The conversion colour. Fills every primary button (navy text) and colours the underlined "Book now" / "Learn more" text links and the review stars. Hover deepens to #f4a049.

### Tertiary
- **Light Blue** (#8fbce0): The on-dark accent — icons, quote marks and arrows on navy or photographic grounds, where full brand blue lacks contrast.
- **Blue Tints** (#eaf3f9 / #eaf3fa / #d5e6f2): Section grounds and icon-chip fills. The two pale blues are near-identical by history, not by intent — #eaf3f9 is the token, #eaf3fa appears where a band was set by hand.
- **Clinic Tones** (purple #6d4a9c, green #2f6d50, pink #a63a6c, orange #b45c1e): Each specialist clinic owns one hue, expressed as a four-step family — `light` opens the gradient, the base sits mid-card, `soft` fills the icon box, `deep` colours the icon itself.
- **Motif Colours** (orange #f36223, teal #3fc8a9, magenta #e259c9): The corner motif beside each service-category heading. Drawn from the supplied brand motif family, one per category.

### Neutral
- **Warm Paper** (#f9f7f5 / #f8f7f5): The default page ground and the testimonials band.
- **White** (#ffffff): Card fill, the services band, and the hours band behind its split photograph.
- **Deep Navy** (#0c2748): All heading text on light, the gradient's dark end, photographic scrims, and the footer.
- **Ink** (#212529 / #47505a / #6b747e): Body text, secondary and lead text, tertiary captions.
- **Hairlines** (#e4e2de / #d3d0cb): Card borders and dividers on light.
- **On-Navy Text** (#eef3f8 / #a9bcd2): Primary and muted text on navy or scrimmed photography.

### Named Rules
**The Amber-For-Action Rule.** Amber marks the primary action on a surface, and its underlined text-link form marks the secondary read-more. It is never a background, never decoration. It now appears more than once per screen — each specialist tile carries a Book now link and a Learn more button — so its scarcity is scoped to the band, not the page.

**The Light-Blue-On-Dark Rule.** On navy, on scrimmed photography and on the saturated clinic tiles, accents switch to Light Blue (#8fbce0) or white. Full brand blue is a light-surface colour only.

**The Clinic-Tone Containment Rule.** The four clinic hues exist inside the specialist tiles and nowhere else. They never leak into buttons, icons, links or section grounds.

## Typography

**Display / Body / Label Font:** Public Sans Variable (self-hosted, with `Public Sans`, system-ui, sans-serif fallbacks). One family does every job.

**Character:** A clear, civic, humanist sans that reads as trustworthy and no-frills rather than styled. Personality comes from weight and rhythm, not from a second face.

### Hierarchy
- **Display** (600, clamp 2.35–3.9rem, line-height 1.1, tracking -0.02em): The hero H1 only, capped at 19ch so it breaks to two lines.
- **Headline** (600, clamp 1.7–2.6rem, line-height 1.15): Section H2s.
- **Title** (600, clamp 1.2–1.45rem, line-height 1.15): Card and subsection H3s.
- **Category** (400, 25px, line-height 1.2): Service-category headings inside the services band — deliberately large but light, so the categories separate the page without competing with its H2s.
- **Lead** (400, clamp 1.075–1.3rem, line-height 1.5): Section intros. Several bands override this to 16px where the copy sits beside an image.
- **Body** (400, 1.0625rem, line-height 1.6): Default reading text, and the size of the underlined CTA links.
- **Label** (600, 0.85rem, tracking 0.08em, uppercase): Footer column headings and the partner tag.
- **Small / Fine** (400–600, 0.9rem / 0.795rem): Captions, chips, badge metadata.

### Named Rules
**The Semibold-Ceiling Rule.** Headings are semibold (600), never heavier. Weights 700–800 are reserved for buttons and numeric emphasis — rating figures, opening-hours times, the language greeting.

**The Local-Measure Rule.** `--measure` (66ch) resolves against each element's own font size, so a 20.8px lead capped at 66ch runs far past a comfortable line. Bands that place copy beside an image set their own measure in ch (the hours lead uses 46ch, the billing copy 46ch) rather than inheriting the global cap.

## Layout

A single centred column model. Content sits in a `.wrap` capped at 1464px with a fluid gutter of `clamp(1.1rem, 4vw, 3rem)`; a 900px `--wrap-narrow` exists for centred bands. Sections carry vertical rhythm of `clamp(3rem, 6vw, 5.5rem)`, multiplied where a band needs presence — the hours band runs 3.05× that at the top and 1.1× at the base.

The page is a vertical stack of full-bleed bands that alternate ground — pale blue, white, warm paper, brand blue — to segment the story. Grids are mobile-first single-column and step up at 560px, 900px and 1100px.

Two bands deliberately break the model. **The specialist clinics grid is lifted out of the wrap entirely** and runs to a 40px inset from each viewport edge; it is a real DOM sibling of the wrap rather than a negative-margin trick, because a `100vw` calculation inside the wrap cannot account for the scrollbar. **The billing band drops its vertical padding altogether** so the artwork sets the band's height and bleeds off the bottom.

### Named Rules
**The Wrap-Escape Rule.** A band that must reach the viewport edge is moved outside `.wrap` in the markup and given its own `padding-inline`. Never widen it with `calc(50% - 50vw)` from inside the wrap: the scrollbar makes that asymmetric.

## Elevation & Depth

Depth is now the exception rather than the resting state. Most cards are flat with a hairline border, and interaction is expressed through colour, gradient movement and scale rather than shadow. Shadows remain for the two surfaces that genuinely float above photography, and for the raised hours card.

### Shadow Vocabulary
- **Hairline** (`0 1px 2px rgba(12,39,72,0.06), 0 2px 6px rgba(12,39,72,0.06)`): The scrolled header and small chips.
- **Card rest** (`0 4px 10px rgba(12,39,72,0.08), 0 12px 28px rgba(12,39,72,0.10)`): The hours card and doctor-card hover.
- **Card raised** (`0 10px 24px rgba(12,39,72,0.12), 0 30px 60px rgba(12,39,72,0.16)`): Reserved; no longer applied on the homepage.
- **Amber glow** (`0 6px 16px rgba(244,160,73,0.35)`): Available for the primary button; not currently applied.

### Named Rules
**The Colour-Before-Shadow Rule.** Hover is expressed by colour movement first — a gradient bleeding in, a gradient sliding up, a fill inverting — and by lift second. Service cards lift 4px with no shadow at all.

## Shapes

The form language has sharpened. **All buttons are square (0 radius)** — the single most visible departure from the original soft-cornered system. Cards sit on a four-step scale: 4px on the specialist tiles, 8px (`--r-sm`) on icon chips and focus outlines, 14px (`--r-md`) on service, doctor, review and quick tiles, and 20px (`--r-lg`) on partner cards and large panels. Pills (999px) remain for chips, flags and language tags. Circles are used only for doctor avatars.

Borders are 1px hairlines in warm grey on light; on dark surfaces they become low-opacity white washes. Two cards carry a 2px transparent border at rest purely so a coloured border can appear on hover without shifting layout.

The recurring signature shapes are the **icon chip** (a small tinted rounded square holding a line icon) and the **brand corner motif** — a quarter-arc mark, recoloured per use, that leads every service-category heading.

### Named Rules
**The Square-Button Rule.** Every button on the site has a 0 radius. Rounded buttons are out of system.

**The Soften-On-Interaction Rule.** Specialist tiles rest at 4px and expand to 20px on hover. Sharpness is the resting state; softness is a response.

**The Straightening-Arrow Rule.** Every CTA arrow rests angled and straightens to horizontal on hover — up-right arrows rotate +45°, the service-card arrow rests at −45° and returns to 0°. The angle is the resting state; alignment is the response.

## Components

### Buttons
- **Shape:** 0 radius, 2px transparent border baseline, weight 700, single-line, icon + label with 0.55em gap.
- **Primary:** Amber fill (#feb161), navy text; hover deepens to #f4a049. The conversion button.
- **Secondary:** Transparent fill, navy text, strong hairline border; hover borders navy and fills white.
- **Ghost-light:** For navy and photographic surfaces — transparent fill, light text, translucent white border.
- **Sizes:** default (0.95rem 1.5rem); `-sm` (0.65rem 1.05rem); `-block` (full width).

### Text CTA Links (signature)
An underlined 17px semibold link with a trailing up-right arrow, in two tones: **amber** on saturated and dark grounds, **navy with a brand-blue arrow** on light. On hover the arrow translates 3px and rotates 45° to horizontal. This is the read-more voice that sits beside, not instead of, the amber button.

### Chips
- **Trust / info chip:** White fill, hairline border, pill, weight 600; holds a rating, a credential or a fact with a leading blue icon.
- **Language chip:** White pill with a pale-blue border, the greeting set in heavy deep-blue ahead of the language name. It floats to the top-right of a doctor card and the name wraps around it.
- **Flag:** Used on light grounds as a white pill with a blue-100 border and a blue icon.

### Cards / Containers
- **Service card:** 14px radius, white, hairline border, 16:9 photograph above a label row. Hover lifts 4px while a navy→blue→amber gradient sweeps in beneath the label through a blurred radial mask, fading 0→100% as it grows; label text, icon and arrow reverse to white and the arrow straightens from −45° to horizontal.
- **Specialist tile:** 4px radius, a clinic-hue gradient running light → base → navy, sized to 175% height so hover can slide it and draw the navy end upward like a moving glow; corners expand to 20px on the same 0.7s curve.
- **Partner card:** No fill. A 2.27:1 photograph over an icon, heading, body and amber button, with a 1px transparent border that turns brand blue on hover while the photograph eases to 97%.
- **Doctor card:** 14px radius, white, 2px transparent border filled by a blue→amber gradient stroke on hover with a 6px lift. A 64px circular portrait, the language chip floated top-right, and a "View profile" link.
- **Review card:** 14px radius, pale blue (#eaf3f9), quote mark, name, five amber stars and the quote.
- **Quick tile:** 14px radius, white on the brand-blue band, with a rounded-square icon box that inverts on hover — the light-blue fill giving way to the brand gradient as the icon reverses to white, both fading rather than switching.

### Navigation
- **Header:** Sticky, translucent white with backdrop blur, flat until scrolled. Desktop nav links are navy weight-600 with an amber underline on hover; actions cluster right with a plain-text phone number and a small amber Book button.
- **Mobile:** Below 900px the nav collapses to a sheet menu, and a fixed bottom action bar always offers Call + Book.

### Motion
- **Hero entrance:** copy rises 16px and fades in, staggered 0.06–0.3s.
- **Testimonial reveal:** the grid fires once as a group when it enters view, columns staggered 0/130/260ms, each card rising 16px and fading over 3.3s on `cubic-bezier(0.16, 1, 0.3, 1)`. It resets when scrolled away so it replays on return.
- **Reduced motion:** every reveal is disabled and shown immediately; a 2.5s failsafe reveals content if the observer never reports.

### Named Rules
**The JS-Gated-Hide Rule.** Anything hidden for a scroll reveal is hidden by a class the script itself adds. If the script never runs, the content is visible. A hidden-by-default reveal is a broken page waiting to happen.

## Do's and Don'ts

### Do:
- **Do** keep amber to the primary action and the read-more link; pair a button with a text link rather than two buttons.
- **Do** use real photography in feature bands, cropped square for portraits and colour-matched to the pale-blue palette.
- **Do** express hover through colour movement — gradient bleed, gradient slide, fill inversion — and let lift play the supporting role.
- **Do** set a local `ch` measure on any copy that sits beside an image; the global 66ch cap is too generous at lead size.
- **Do** move a band outside `.wrap` when it must reach the viewport edge.
- **Do** reserve heavy weights (700–800) for buttons and numeric data, and keep headings at semibold.

### Don't:
- **Don't** round a button. Every button is 0 radius.
- **Don't** place full brand blue on navy, on a clinic tile, or on scrimmed photography — switch to light blue or white.
- **Don't** let the clinic tones appear outside the specialist tiles.
- **Don't** hide content for a scroll reveal using CSS alone.
- **Don't** compute a full-bleed width with `100vw` from inside `.wrap`; the scrollbar makes it asymmetric.
- **Don't** introduce a second typeface; Public Sans does every role.
