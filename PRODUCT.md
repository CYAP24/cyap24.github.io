# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Delegated: **Astro** (recommended and accepted). Rationale — MGP version 2 is a multi-page, content-led marketing site starting with the homepage. Astro ships zero JavaScript by default (fast on mobile, where the audience books), gives clean per-page URLs and strong SEO (important for the upcoming paid-ads campaigns and for preserving service-page slugs), and lets one header/footer/nav be shared across every page as the site grows beyond the homepage. Hosts anywhere static. Fonts via self-hosted or Google Fonts. This supersedes v1's hand-written static HTML/CSS/JS.

## Users

Source: `context_research/Persona.png`, `context_research/Market.png`. Lower Templestowe / Manningham catchment: median age 45, 78.8% families, 20.4% aged 65+, weekly household income ~$1,920, and 48% speaking a language other than English (ancestry: Chinese 21.1%, English 18.6%, Australian 17.6%, Italian 12.1%, Greek 11.7%).

**Primary — "Elena P.":** 41, Greek-Australian, bilingual (English-first), the family's health organiser. Books and reschedules her 72-year-old mother's appointments, orders repeat scripts, checks results, and sits in on visits to translate and take notes. Also manages the household's own GP needs. Researches and books on her **phone**, usually online and **after hours**, between work and her kids. Emotionally: time-pressured, protective, stressed.
- *Pain points:* phone-only booking that forces calls during work hours; confusing navigation with no clear online booking; not knowing which doctors speak her language or are taking new patients; no visibility of fees before the visit; repeating the same information across separate appointments for different family members.
- *Needs:* fast mobile online booking **for someone other than herself**; doctor profiles showing specialties, languages, and availability; upfront fees and opening hours; the ability to manage several family members' care in one place.

**Secondary audiences (from market research):**
- **Older established residents (65+)** — the heaviest users of general practice, least likely to book online; value a consistent, familiar GP, clear proof of competence, and phone or in-person booking. A family member often books for them (this is Elena's job).
- **Multicultural & non-English-speaking** — the largest cohort is Chinese-speaking, alongside Italian, Greek, and Persian/Farsi speakers. Access to a doctor who speaks their language is vital.
- **Time-poor families & working adults** — want one comprehensive practice for the whole household; strongly mobile-first and online-booking oriented; likely users of weekend and after-hours services.

## Product Purpose

The public website for Manningham General Practice (MGP), beginning with the homepage. It helps time-poor patients — often booking on behalf of an elderly parent or child — quickly understand what MGP offers, find the right doctor (including by language and specialty), see access and how billing works, and **book in a minute or call a real person**. The homepage's single most important job is to **get the visitor to book an appointment** (online via AutoMed, or by phone).

Within 5 seconds a visitor should grasp (source: `context_research/Web strategy.png`):
- **Services** — a comprehensive one-stop clinic for everyone in the family.
- **Doctors** — expert doctors offering multilingual service.
- **Access** — after-hours and weekend clinic, for convenience.
- **Premium with transparency** — private billing backed by doctor-led care.
- **The goal** — to make the healthcare experience easy and accessible, from booking to appointment.

## Positioning

Source: `context_research/Brand direction.png`, `context_research/Opportunity.png`, `context_research/MGP.png`.

Approved positioning lines (use as-is or close):
- "All your healthcare needs under one roof."
- "Open during hours convenient to you."
- "Providing care in your language."
- "GP, pathology, pharmacy and skin clinic, all in the same building."
- "Book online in a minute, or call and speak to a real person."
- "Specialised services on site — minor surgery, iron infusions and skin checks."

Differentiators a neighbouring practice could not truthfully copy:
- **All healthcare under one roof** — GP, pathology, pharmacy, radiology and skin clinic in the same building; multi-disciplinary and specialist clinics on site.
- **Independent & doctor-owned** — clinical decisions and referrals serve the patient's interest only.
- **Care in your language** — multilingual doctors, surfaced in doctor profiles, matched to the catchment's languages.
- **Access** — 7 days, walk-ins, dedicated after-hours and weekend care; same-day where possible.
- **Credentialled** — University of Melbourne and RACGP teaching practice; doctors participate in ethical medical research.

Competitive gap to exploit (source: `context_research/Competitors.png`): nearby South-east providers show dated website design, impersonal branding, generic stock imagery (no real staff photos), inconsistent CTAs and complex navigation, and absent testimonials. MGP wins by being the opposite: modern, personal, clear single-path CTAs, real proof.

## Operating Context

- Patients research and book on **mobile**, frequently **after hours**; Elena books and manages care on behalf of family members.
- Walk-ins, same-day, weekend and after-hours/urgent presentations are normal use.
- **Opening hours (confirmed):** Mon–Fri 8am–8pm · Sat 9am–5pm · Sun 9am–1pm.
- **Online booking (confirmed):** AutoMed. Live URL to wire into every "Book online" CTA: `https://automedsystems.com.au/ams/clinics/1864/manningham-general-practice-lower-templestowe-3107/doctors/loc/2`.
- **Phone (confirmed):** (03) 8840 1400 — use tap-to-call on mobile.
- **Address (confirmed):** Street Level (Level 4), Manningham Medical Centre, 200 High Street, Lower Templestowe, VIC 3107 (corner of High Street and Manningham Road).
- **Parking & access (confirmed):** 200+ vehicle parking (front, side, rear; undercover via High Street entry, Levels 1–2); accessible via Main Entry or lift from the undercover car park; public transport and private car; disabled access and facilities provided.
- The site must support **upcoming paid-ads campaigns** — landing quality, message match, and clear conversion paths matter.

**To confirm before publishing (do not fabricate):**
- Exact bulk-billed items and concession eligibility (billing decision below).
- Real Google review quotes (the 4.6★ / 779-review count is confirmed; the quotes are not).
- Per-doctor spoken languages (roster below).

## Capabilities and Constraints

**Services on site (source: `context_research/MGP.png`):** Medical Centre / general practice, Weekend Medical Clinic, After Hours GP, Women's Health, Men's Health, Diabetes Clinic, Immunisations, Quit Smoking, Weight Management Clinic, Minor Surgical Procedures, Musculoskeletal & Fracture Clinic, Sexual Health Clinic, The Travel Clinic, Fertility Assessment Clinic. On-site specialised procedures include minor surgery, iron infusions and skin checks.

**Partner / external clinics within the Centre (link out to their own sites):** Skin Cancer Clinic; Arthritis, Fractures & Sports Injuries Clinic.

**Also on site under one roof:** pathology, pharmacy, radiology.

**Doctors:** in-house doctors, all vocationally registered with ongoing CME and quality assurance. Doctor profiles should show photo, specialty, languages spoken, and availability. Roster of 22 named doctors supplied in `content/homepage.md`. **Count discrepancy to reconcile:** the intro copy says "25 in-house doctors" but 22 are named — confirm the correct number with the practice before publishing.

**SEO:** preserve service-page slugs/URLs when the site expands; homepage and future pages must be crawlable and fast to support paid-ads campaigns.

**OPEN DECISION — Billing:** MGP is mainly **private billing**, with some items and concession visits bulk billed. Exact bulk-billed items and concession eligibility are **not yet confirmed** and must be verified with the practice before publishing. The research calls for displaying appointment prices for transparency — do this only with confirmed figures. Keep billing language factual, never promotional or unsubstantiable (also required for Google Ads).

**OPEN DECISION — Doctor languages:** per-doctor spoken languages are **not yet confirmed**. Do not assign a language to a named doctor without confirmation. Priority languages for the catchment: Mandarin/Cantonese (Chinese), Italian, Greek, Persian/Farsi.

## Brand Commitments

- **Name:** Manningham General Practice (MGP).
- **Voice (source: `context_research/Brand direction.png`):** straightforward and no-frills, so information is quick to access and cognitive load stays low. **Avoid clichés and over-claims** — explicitly not "state of the art GP services," "committed to your wellbeing," or "servicing the health of the community." No wellness fluff.
- **Independence** is a stated commitment: no financial interest in other Centre tenants; referrals and clinical decisions in the patient's interest only.
- Prefer real staff/practice photography over stock — a deliberate contrast with competitors.

### Binding brand kit (source: `context_brand/`)

These are supplied, binding constraints. Recorded factually here; the full design system (scale, usage rules, states) is established later in DESIGN.md/new-work.

- **Logo (supplied, `assets/`):** MGP circle-cross mark + "MANNINGHAM GENERAL PRACTICE" wordmark.
  - `assets/Light-logo.png` — full-colour lockup for light backgrounds (blue mark, blue/black wordmark).
  - `assets/dark-logo.png` — reversed lockup for dark backgrounds (blue mark, white wordmark).
  - Files are PNG; SVG versions would be preferable for crisp scaling if available.
- **Typeface:** **Public Sans** for all UI and headings.
- **Palette:**
  - `#2980B9` — primary blue (brand core)
  - `#FEB161` — warm amber (accent; used as the primary-button fill)
  - `#0C2748` — deep navy (dark surfaces / headings)
  - `#F9F7F5` — off-white (light surface)
  - `#212529` — near-black (ink / darkest surface)
  - blue→amber **gradient** (from the two brand hues) as an accent treatment
- **Button pattern observed in the reference:** primary = amber (`#FEB161`) fill with navy text; secondary = outlined with navy text. Cards shown on light, tinted-blue, and navy surfaces.
- **Brand motifs (supplied, `assets/`; reference `context_brand/Visual motifs.png`):**
  - *Brand motif* — `assets/brand motif.png` — an abstract medical cross (four quarter-curve "petals" forming a cross/pinwheel), in primary blue.
  - *Motif pattern* — `assets/motif-pattern.png` — the motif tessellated into a repeating field (mix of solid + outline tiles), themed **"Connection."**
  - *Motif variation* — `assets/motif variation.png` — a blue roof/triangle with a multi-colour rainbow arc beneath it, expressing **"All services under one roof."**
- **Other marks:** University of Melbourne and RACGP teaching-practice marks still to be supplied as usable files for v2.

## Evidence on Hand

- **Credentials (safe to use):** University of Melbourne and RACGP teaching practice; doctors participate in ethical medical research.
- **Factual claims safe to use:** GP, pathology, pharmacy, radiology and skin clinic in one building; walk-ins; 7-day, weekend and dedicated after-hours care; independent and doctor-owned; the service list above.
- **Google reviews:** **4.6 stars from 779 reviews (confirmed).** Seven real, named review quotes supplied in `content/reviews.md`. Use verbatim/trimmed with attribution; do not fabricate or reassign. (One reviewed name, "Dr Sarah Sun," is not in the roster — reconcile.)
- **Absences future work must not invent:** real per-doctor languages, exact bulk-billed items/eligibility.
- **Research pack:** `context_research/` — Brand direction, Competitors, Market, MGP snapshot, Opportunity, Persona, Web strategy.
- **Brand pack:** `context_brand/` — Branding reference (logo, palette, type, buttons) and Visual motifs (brand motif, pattern, variation).
- **Homepage content:** `content/homepage.md` — client-supplied section-by-section copy and structure (source of truth for homepage copy and CTAs).

## Product Principles

1. **Booking is the goal** — the fastest, plainest path to book online or call beats decoration; a time-poor organiser should reach "book" in one clear move.
2. **Mobile-first, for someone acting on behalf of others** — design for a time-poor family organiser on a phone, after hours, booking for a parent or child.
3. **Lowest cognitive load wins** — no-frills, scannable content; clear single-path CTAs, unlike the confusing competitor sites.
4. **Lead with one-roof access and trust** — one building, 7 days, after-hours; reviews, teaching-practice credentials, and independence.
5. **Transparency without over-claiming** — factual fees, hours and billing; never a claim that can't be substantiated (also protects paid-ads eligibility).
6. **Multilingual inclusion is a differentiator, not a garnish** — finding care in your language is a first-class, surfaced feature, matched to the real catchment.

## Accessibility & Inclusion

- Accessibility is a project priority: WCAG-minded contrast, visible focus states, generous tap targets, semantic structure, and respect for reduced-motion preferences.
- Serves a highly multilingual audience (48% speak a language other than English) and a large 65+ cohort who are the least confident online — the interface must be legible, low-friction, and phone-booking-friendly as well as online-booking-friendly.
- Physical access provisions (disabled access/parking) to be confirmed and stated where true.
