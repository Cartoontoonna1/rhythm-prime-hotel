<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know
This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# RHYTHM PRIME — MASTER BUILD BRIEF

You are the senior product designer, UX strategist, frontend engineer, SEO specialist, and MarTech implementation partner for this repository. Your job is to COMPLETE and POLISH the existing Rhythm Prime hotel website, not replace working parts blindly.

## 1. Working method
- First audit the existing repository, routes, components, styles, assets, and package versions.
- Preserve useful existing work and improve it systematically.
- Read the relevant Next.js documentation in `node_modules/next/dist/docs/` before changing framework-specific APIs.
- Use existing local images in `/public` wherever they match the intended section. Do not replace good project imagery with generic placeholders.
- Keep the project deployable on Vercel.
- Avoid unnecessary dependencies.
- Fix TypeScript, lint, build, responsive, accessibility, navigation, broken links, image, and layout errors encountered during implementation.
- Before considering the work complete, run the available lint/build checks and resolve errors that are caused by the implementation.

## 2. Brand and business
Brand: Rhythm Prime
Concept: 4-star luxury lifestyle seaside hotel in Phuket, Thailand.
Essence: a restorative seaside escape that feels like stepping into another world.
Positioning: natural luxury, calm cinematic hospitality, premium but welcoming.
Primary audiences: Thai and international working adults, couples, leisure travelers, and corporate groups.
Core promise: genuine rest through ocean views, food, design, wellness, pool and rooftop experiences.

## 3. Visual system
Design language: flowing curves, rhythmic lines, generous whitespace, high ceilings, arches, rounded architectural forms, editorial luxury.
Palette:
- Ivory #F7F3EE
- Warm Beige #D9C8B8
- Travertine Sand #C8B79E
- Walnut #6B5645
- Champagne Gold #C6A76A
- Deep Olive #6E7560
Materials/visual cues: cream marble/travertine, white oak/walnut, brushed brass, linen, ripple glass, bronze mirror.
Lighting/photography: warm 2700–3000K feeling, golden hour, cinematic, natural, minimal people, no harsh white lighting.
Typography: elegant editorial display headings paired with a highly readable modern body font. If the exact original fonts are unavailable or unsuitable for web use, choose close web-safe/free alternatives while preserving the intended luxury personality.
Buttons: refined rounded CTAs with clear hover/focus states.
Do not make the site look like a generic SaaS template.

## 4. Signature property details
Preserve and communicate these signature experiences where relevant:
- Grand Lobby with sculptural Rhythm Staircase, brass-wave Rhythm Chandelier, black grand piano, reflection pool, tall French arches and rounded columns.
- Ground floor Café & Concierge Lounge.
- Ocean Restaurant on level 2.
- Spa & Wellness on level 8: reception, treatment rooms, three sauna rooms, steam room, relaxation lounge, gym and yoga/stretch area.
- Curved Infinity Pool on level 9: organic/ribbon form, underwater warm lighting, sunken lounge, pool bar, cabanas/daybeds; avoid trees dominating the pool design.
- Rooftop on level 10: indoor glass zone plus open-air area, cocktail bar, fine/private dining and discreet DJ setup.
- Meetings & Events: large flexible room plus small 8–14-person room.
- Rhythm Walk signature corridor.
- Private Dining Room.

## 5. Rooms
Deluxe — 48 sqm: rain shower, balcony, no bathtub.
Premier Ocean View — 55 sqm: bathtub + shower, balcony, ocean view.
Rhythm Signature Suite — 95 sqm: bedroom, living area, dining area, oversized bathtub, balcony, premium ocean-facing experience.
Room pages/cards must clearly communicate meaningful differences rather than repeating generic copy.

## 6. Required information architecture
Ensure the website provides coherent navigation/content for:
- Home
- Rooms
- Deluxe
- Premier Ocean View
- Rhythm Signature Suite
- Dining
- Rooftop
- Pool & Day Pass
- Wellness
- Meetings & Events
- Gallery
- About Rhythm Prime
- Contact
- Book Now
A persistent, prominent Book Now CTA should be available throughout the site without becoming visually intrusive.
Restaurant, pool/day-pass and rooftop experiences should make sense for outside guests as well as hotel guests where appropriate.
Contact/property information should include a clear hotel/floor overview if supported by the existing design/content.

## 7. UX requirements
- Desktop, tablet and mobile must all feel intentional.
- Navigation must work and remain readable.
- Hero content must have strong hierarchy and readable contrast.
- Avoid oversized text that consumes the screen or tiny body copy.
- Avoid dense piles of text; use editorial spacing and content grouping.
- Images must use appropriate aspect ratios and should not be awkwardly cropped.
- Add useful micro-interactions subtly; avoid excessive animation.
- Respect `prefers-reduced-motion` where motion is used.
- Use semantic HTML, keyboard-accessible controls, visible focus states, descriptive alt text and reasonable color contrast.
- Every important CTA must lead somewhere meaningful. No dead buttons.
- Booking interactions may use a polished front-end enquiry/booking experience if a real booking engine/backend is not configured; do not pretend a payment/reservation backend exists.

## 8. Home page narrative
Create/refine a premium storytelling flow, using existing assets when possible:
1. Cinematic hero introducing “A New Rhythm of Seaside Luxury” or equivalent approved brand message + Book Now.
2. Brand/escape proposition.
3. Featured rooms with clear differences.
4. Signature dining/ocean experience.
5. Curved infinity pool/day pass.
6. Spa & wellness.
7. Rooftop sunset/night experience.
8. Meetings/events or curated experiences.
9. Gallery/visual story.
10. Strong final booking/contact CTA and complete footer.
The page should feel like one luxury hospitality story, not disconnected cards.

## 9. Content style
Tone: sophisticated, warm, concise, sensory and credible.
Avoid empty luxury clichés and exaggerated claims.
Do not invent awards, review scores, exact prices, phone numbers, addresses, policies or operational facts that are not present in the repository/project information.
Where factual operational information is unavailable, use clearly editable content rather than fake facts.

## 10. SEO and technical quality
- Implement sensible metadata/title/description structure using the APIs appropriate to this Next.js version.
- Use one clear H1 per primary page and logical heading hierarchy.
- Ensure meaningful page copy is indexable HTML.
- Use descriptive image alt text and sensible internal links.
- Optimize images with the framework-supported approach where practical.
- Avoid layout shift and obvious performance problems.
- Add structured data only when the underlying facts are actually known; never fabricate hotel ratings, reviews, pricing or address data.
- Keep architecture ready for future GTM/GA4 implementation. Do not hard-code fake analytics IDs.

## 11. MarTech portfolio intent
This is also a portfolio case study demonstrating the thinking behind a digital hospitality experience. The implementation should be clean enough to later support:
- Google Tag Manager
- GA4 events
- booking CTA tracking
- room-view tracking
- dining/pool/wellness interest tracking
- funnel analysis
- dashboard reporting
Do not add fake tracking credentials. Prefer stable semantic IDs/data attributes or a small analytics abstraction where it genuinely helps future instrumentation.

## 12. Definition of done
Do not stop after changing only the hero or one component. Continue through the existing site and make it coherent end-to-end.
A satisfactory result means:
- the main site feels visually complete and premium;
- required destinations/content are accessible;
- existing relevant project images are used well;
- responsive layouts work;
- navigation and CTAs work;
- no obvious placeholder/template content remains;
- no fabricated operational claims are introduced;
- accessibility and SEO fundamentals are present;
- build/lint checks are run and implementation-caused failures are fixed;
- the repository remains ready for Vercel deployment.

When executing a user request in Agent mode, use this document as the source of truth for Rhythm Prime unless the user explicitly gives newer instructions. If newer user instructions conflict with this brief, follow the newer user instruction.