# Fizzday

# EXACT RECREATION PROMPT — "MANA-style" Playful D2C Beverage Site
### Reference: manayerbamate.com (researched 2026-10-07, desktop 1440px + page-text inventory)
### Build for: YOUR OWN brand — do NOT copy MANA's name, logo, product photos, or full copy. Recreate the DESIGN SYSTEM, LAYOUT RHYTHM, SECTIONS, and MOTION LANGUAGE 1:1, with your own brand assets and words.

> **How to use:** Paste this entire prompt into Manus (or any full-stack AI builder). It is tool-agnostic. Recommended stack: Next.js + React + Tailwind CSS + GSAP (ScrollTrigger) + lottie-web. All copy below marked [WRITE YOUR OWN] must be replaced with your brand's words — structure and tone mirror the reference.

---

## 0. THE VIBE (read first, obey always)

A maximalist, candy-colored Gen-Z playground that treats an energy drink like a cartoon universe. Every section explodes with hand-drawn doodles, animated characters, and tilted rainbow typography on a warm cream canvas. Design language = **"sticker book meets skate park"**: thick black outlines, hard offset shadows (zero blur), full-bleed flavor color-blocking, playful microcopy with a wink. Constant motion — falling cans, drifting clouds, letter-by-letter headlines, a PLAYABLE footer mini-game. The whole site must feel alive, mischievous, proudly un-corporate. **Nothing here may look like a generic SaaS template. If a section looks "clean and minimal," you have failed.**

---

## 1. GLOBAL DESIGN TOKENS

### 1.1 Palette (use EXACT hexes)
```css
--cream:   #FEF7E6;  /* page background, footer */
--ink:     #0E0E0E;  /* text, outlines, hard shadows */
--navy:    #2B3D73;  /* announcement bar, dark accents */
--coral:   #F04E37;  /* primary CTA, red accents */
--pink:    #F6B1CF;  /* soft pink fills */
--sky:     #88C1F8;  /* light blue fills */
--gold:    #FFD16E;  /* golden yellow fills */
--sage:    #A9C68F;  /* hero green backdrop (approx, verified from screenshots) */
--leaf:    #1F6B2D;  /* deep green banners (approx) */
--sun:     #FFCE5C;  /* instagram band yellow (approx) */
```
Flavor color-blocking (full-bleed panels, can renders match):
```css
--flavor-melon:      #6FBF44;  /* bright melon green (approx) */
--flavor-grapefruit: #FFC93C;  /* golden grapefruit yellow (approx) */
--flavor-blackberry: #4A90D9;  /* bright blackberry blue (approx) */
--flavor-tropical:   #F04E37;  /* tropical coral/red (approx) */
```
**[TODO-USER]: confirm/adjust the 4 approx colors against your own can designs.**

### 1.2 Typography
- Headlines: heavy rounded geometric sans, ALL UPPERCASE, tight leading (0.95–1.0), letter-spacing -0.02em. Closest Google Font: **"Baloo 2" ExtraBold (800)**. Fallback: "Fredoka" 700.
- Body: same family, regular/medium, sentence case, 18–22px desktop.
- Signature treatments (use constantly):
  - **Rainbow letters**: headline split per-letter, each letter a different palette color (black/mustard/pink/red/navy/coral cycle).
  - **Tilted headlines**: `transform: rotate(-4deg)` on giant headlines; alternating tilt on cards (`-3deg` / `+2deg`).
  - **Outlined display**: cream fill + thin dark outline via `-webkit-text-stroke: 2px #0E0E0E` (story hero).
  - **Spaced hero**: letter-spacing 0.35em for the subscription hero ("N E V E R  O U T  O F  M A N A" pattern → use your own phrase).
  - **Scattered letters** (FAQ hero): each letter individually rotated (-12°…+12°) and colored, pop-in on load with stagger.

### 1.3 Buttons — the "btnOmbre" sticker system (EXACT)
```css
.btn-ombre {
  border-radius: 999px;
  border: 2px solid #0E0E0E;
  box-shadow: 5px 5px 0 #0E0E0E;   /* hard offset, ZERO blur */
  font-weight: 700;
  padding: 16px 34px;
  transition: transform .15s ease, box-shadow .15s ease;
}
.btn-ombre:hover  { transform: translate(2px, 2px); box-shadow: 3px 3px 0 #0E0E0E; }
.btn-ombre:active  { transform: translate(5px, 5px); box-shadow: 0 0 0 #0E0E0E; }
```
Variants: white pill, black pill (white text), coral pill (white text), sage-green pill (ink text). Nav pills: white bg, ink text, NO border/shadow, small chevron for dropdowns. Circular arrow buttons: white circle 64px, ink arrow SVG, subtle shadow. Social buttons: yellow circles 56px with navy hard shadow.

### 1.4 Illustration & texture language
- Flat hand-drawn doodles: thick ink outlines (3–4px), solid bright fills, imperfect wobbly paths. Subjects: smiling hands, flowers, basketball, surfboard + clouds, watermelon-slice sunburst, leaves, sparkles (4-point star SVGs), wavy ribbons.
- Characters: simple Lottie-style mascots (round bodies, dot eyes, big smiles). You may substitute CSS/SVG animated characters if Lottie files unavailable.
- Product: photoreal 3D can renders, one per flavor, matching flavor color. **[TODO-USER]: generate with AI (see §8) or supply your own.**
- Rules: thin black divider lines (2px), thick black photo borders (6–8px) on collage frames, wavy SVG section transitions between every major color change.

---

## 2. MOTION SYSTEM (all animations below are REQUIRED, not optional)

### 2.1 Page loader
Full-screen cream overlay. Center: tagline in rainbow letters (e.g. "INFUSE OF BIO ENERGY" pattern → [WRITE YOUR OWN]), letters pop in with 60ms stagger, hold 400ms, overlay slides up (600ms ease). Skip on repeat visits (sessionStorage).

### 2.2 Split-letter headlines (global component: `<RainbowHead>`)
- JS splits headline text into per-letter `<span>`s.
- On scroll into view (IntersectionObserver, threshold 0.3): letters animate `translateY(110%) → 0` + `rotate(-6deg → 0)`, 700ms `cubic-bezier(.2,.8,.2,1)`, 25ms stagger.
- Optional `rainbow` prop cycles letter colors through palette.

### 2.3 Hero flavor carousel
- 4 slides (one per flavor). Auto-advance every 6s + white circular arrow buttons (left/right).
- On change (800ms crossfade): page background color morphs to flavor color, doodle set crossfades, 3D can swaps with springy scale (0.9→1.05→1), bottom pill button updates (flavor name + flavor-dark bg).
- Doodle positions: absolutely positioned around can, each with slow float loop (translateY ±12px, 4–6s, alternate).

### 2.4 Scroll-linked falling can (intro section)
- GSAP ScrollTrigger `scrub: 1`. As user scrolls through the intro, the hero can detaches and tumbles: `rotation: 0 → 360deg`, `y: 0 → 60vh`, `scale: 1 → 1.35`, slight x drift. Ends overlapping the giant tilted headline.
- Bubble particles: 14 absolutely-positioned circles, CSS float animation, parallax speeds via `data-speed`.

### 2.5 Marquee ticker
Infinite CSS marquee: `translateX(0 → -50%)`, 22s linear infinite, content duplicated 2×. Used on story page ("…TO THE ENERGY EFFECT…" pattern → [WRITE YOUR OWN]) and collection band.

### 2.6 Sticky product gallery (product page)
Gallery `position: sticky; top: 100px`. Detail sections (ingredients accordion, nutrition table) swap gallery images with 400ms crossfade via IntersectionObserver.

### 2.7 Footer runner mini-game (REQUIRED — signature element)
- Center: animated running character (Lottie or canvas sprite — blue face, navy body, red legs, yellow sun behind, drifting hand-drawn clouds).
- White pill button "Press Space to jump" (→ [WRITE YOUR OWN] label, keep the mechanic).
- Mechanic: endless runner on a 2D canvas strip; Space/↑ jumps over obstacles; score = distance; game over → restart prompt. Keep it SIMPLE but fully playable (~120 lines canvas JS).
- This is the single most memorable element — do not skip or simplify into a static image.

### 2.8 Micro-motion
- Buttons: btnOmbre press physics (§1.3).
- Cards: hover lift `translateY(-6px)` + shadow grow.
- Social icons: hover wiggle (rotate ±8°, 300ms).
- Accordion (+ icons): rotate 45° on open, 300ms.
- `prefers-reduced-motion: reduce` → disable ALL motion above; show static states.

---

## 3. SITE MAP (build ALL pages)
1. `/` — Homepage (§4)
2. `/collections/all` — Shop (§5)
3. `/products/[flavor]` — Product page, data-driven × 4 flavors + discovery box (§6)
4. `/pages/subscription` — Subscription landing (§7)
5. `/pages/story` — Brand/ingredient story (§8 in original: /pages/yerba-mate)
6. `/pages/faq` — FAQ (§9)
7. `/pages/contact` — Contact (§10)
8. `/pages/stores` — Store locator (§10)
9. `/pages/terms`, `/pages/refund`, `/pages/privacy` — Legal, simple styled (§10)
10. `/404` — playful 404 (tilted headline + doodles + home button)

Global chrome on every page: announcement bar + sticky pill nav + game footer (§4.1, §4.2, §4.11).

---

## 4. HOMEPAGE (`/`) — section by section, in order

### 4.1 Announcement bar
Full-width navy `#2B3D73` band, height ~36px. Center: white uppercase 13px tracking-wide text (pattern: "FREE SHIPPING ON ALL PURCHASES OF $X OR MORE — [REGIONS]" → [WRITE YOUR OWN]). Right: white × close button (dismissible, sessionStorage). Sits ABOVE nav, scrolls away (not sticky).

### 4.2 Sticky nav
- Transparent background, floats over content; on scroll > 40px: cream pill container appears behind (rounded-full, subtle shadow).
- Left: custom wavy wordmark logo (your brand name in wavy rounded letters, ink color — draw as SVG text on wave path). **[TODO-USER]: supply logo or generate.**
- Right: white pill buttons — "Shop" (chevron, dropdown: All products / each flavor / Discovery box), "Learn" (chevron, dropdown: Store locator / Our story / FAQ / Contact), "Subscription" (pill, links /pages/subscription), "Fr" (language toggle pill → [YOUR 2ND LANGUAGE] or hide), account icon pill, cart icon pill with count badge (coral circle).
- Mobile: hamburger → full-screen cream overlay menu, giant tilted links, doodle accents.

### 4.3 Hero — flavor carousel (100vh)
- Background: flat flavor color (starts sage `#A9C68F`), full-bleed; subtle PNG grain optional.
- Center: photoreal 3D can render (~420px tall) on a cream circle backdrop (~520px).
- Below can: dark-flavor pill button (btnOmbre style) naming current flavor ("Melon & Mint" pattern → your flavor names).
- Scattered doodles per flavor (5–7 each): smiling red hand w/ flowers, basketball, surfboard + clouds, watermelon-slice sunburst, big flowers, leaves. Each floats (loop).
- Left/right: white circular arrow buttons (64px) at mid-height edges.
- SEO: visually-hidden `h1` with brand + category (screen-reader-only).
- Behavior: §2.3. Flavor data: `[{ name, color, darkColor, canImage, doodles[] }]` × 4.

### 4.4 Intro — "what are we talking about" (cream #FEF7E6)
- Wavy SVG divider from hero (sage → cream).
- Giant headline ~90px, `rotate(-4deg)`, black uppercase: two-line pattern "[BRAND]? [CATEGORY]? / WHAT ARE WE TALKING ABOUT?" → [WRITE YOUR OWN]. Use `<RainbowHead>` on scroll.
- Parenthetical subline in lighter weight beneath (pattern: "(we're going to tell each other the real things)" → [WRITE YOUR OWN]).
- The hero can TUMBLES through this section on scroll (§2.4) with bubble particles.
- Min-height 110vh to give the scroll animation room.

### 4.5 Benefit cards ×4 (carousel)
- 4 cards, alternating tilt (-3°/+2°), white, radius 24px, thin ink border, max-width 520px, centered as carousel with circular arrow buttons.
- Card anatomy: top banner (full-bleed colored strip, radius top 24px) with white uppercase label; body: black 20px text (2–3 lines); bottom: simple colored SVG icon (leaf / lightning / shield / sprout).
- Banners: deep green `#1F6B2D`, coral `#F04E37`, sage, navy — one per card.
- Card themes (pattern → [WRITE YOUR OWN] words, keep 4 health/energy claims): "WITHOUT THE CRASH" / "NATURAL CAFFEINE" / "ANTIOXIDANT" / "VEGAN".

### 4.6 "ONLY THE BEST" + photo collage
- Slanted giant headline (~110px, rotate -3°), black uppercase: "ONLY THE BEST" → [WRITE YOUR OWN 3-word boast].
- Below: 2-column lifestyle photo collage, each photo with thick black border (6px) + slight rotations, thin black divider rule between. Photos: lifestyle/UGC style (cans in real life). **[TODO-USER]: supply or AI-generate 4–6 lifestyle shots.**

### 4.7 FLAVORS — full-bleed panels
- Giant headline ~150px black uppercase "FLAVORS" (→ your word, e.g. "TASTE THE RAINBOW" — keep it one huge word) + small sparkle SVGs + small uppercase subline bottom-left.
- 3 full-height (85vh) vertical panels, side by side, each solid flavor color (green / yellow / blue — 4th flavor reachable via arrows): flavor name black uppercase at top (~48px), large 3D can center, small character illustration, thin black vertical dividers between panels.
- White circular side arrows cycle panels; active panel gets white pill CTA "Discover this product" (→ product page); small orange circular "+" button (quick-add → opens cart drawer).
- Mobile: horizontal snap-scroll carousel.

### 4.8 Recommended products
- Centered `h2` ~40px "Recommended products" (→ [WRITE YOUR OWN]).
- Left: black pill button "See all our products" → /collections/all.
- Carousel: 5 product cards (your 4 flavors + discovery/bundle box), side arrows. Card: square flavor-colored image, thin black border, name below, price, mini add button.

### 4.9 Subscription CTA (cream)
- Giant rainbow headline ~120px `<RainbowHead rainbow tilt>`: "YOU DRINK EVERY DAY" pattern → [WRITE YOUR OWN 3–4 word hook, e.g. "NEVER RUN DRY"].
- Pink flower doodle with caption "WE HAVE WHAT YOU NEED" (→ [WRITE YOUR OWN]).
- Rocket-with-rainbow-trail doodle flying across on scroll (translateX -20vw → 20vw, scrub).
- Centered body text (pattern: "Sign up for automatic delivery and save 10% on your orders." → [WRITE YOUR OWN offer]).
- Coral btnOmbre "Subscribe" → /pages/subscription.
- Playful tiny footnote (pattern: "*We don't deliver in space yet, but who knows…" → [WRITE YOUR OWN wink]).

### 4.10 Instagram band (solid sun yellow #FFCE5C)
- Small centered handle "@[YOURHANDLE]" (~20px).
- Giant black headline ~90px: "FOR A DOSE OF ENERGY IN YOUR FEED." → [WRITE YOUR OWN].
- 4 tilted lifestyle photos (rounded 20px, alternating ±4°), slight hover straighten.
- Orange circular Instagram icon button with navy hard shadow → your profile. **[TODO-USER]: real handle + 4 photos.**

### 4.11 Footer — game footer (cream, on EVERY page)
- Center: Lottie/canvas running character (blue face, navy body, red legs, yellow sun, drifting clouds) — §2.7 playable runner: white pill "Press Space to jump".
- Below: 3 yellow circular social buttons (Facebook / Instagram / TikTok → [YOUR LINKS]) with navy hard shadows.
- Bottom bar: left "© 2026 [YOUR BRAND]" ; right links: Terms / Refund policy / Credits (→ legal pages). NO newsletter block (reference has none — keep it that way).
- Wavy SVG divider into footer from previous section.

---

## 5. SHOP / COLLECTION (`/collections/all`)
- Top: 5-column product carousel (square flavor-colored images, thin black borders, name under each) + coral pill "All our products".
- Yellow band: giant thin-weight black headline ~250px "STOCK YOUR FRIDGE" (→ [WRITE YOUR OWN]) + subline uppercase "GET YOUR DOSE OF ENERGY IN JUST A FEW CLICKS." (→ yours) + floating can doodles + sparkles; word "WARDROBE"→ [YOUR WORD] written vertically rotated at right edge (quirky detail — keep it).
- Main grid: 5 product cards (2 rows responsive), same card anatomy as §4.8.
- Marquee ticker divider → game footer.
- Note: reference has scroll-jack feel here — implement gentle scroll-snap on the yellow band only, never trap the user.

## 6. PRODUCT PAGE (`/products/[flavor]`) — data-driven template
- 2-column top: LEFT = large square gallery (flavor-colored bg), 3D can image, white circular arrows, red circular sticker badge "ORGANIC • BIOLOGIQUE" (→ [YOUR CERTIFICATION]) overlapping bottom-right, rotated -12°. RIGHT = `h1` flavor name ~64px uppercase; price bold left ("$36.99" pattern → [YOUR PRICE]) + "Energizing Infusion" label right (→ [YOUR TAGLINE]); centered description paragraph; variant pill selector ("12 × 355ml" / "24 × 355ml" → [YOUR SIZES]); quantity stepper pill (−/+); big sage-green btnOmbre "Add to cart" (black hard shadow) → cart drawer.
- Below: 4 icon+label benefit rows (reuse §4.5 icons, horizontal).
- Large left-aligned body paragraph ~32px (brand story snippet per flavor → [WRITE YOUR OWN]).
- Ingredients accordion: uppercase rows, thin black dividers, circled "+" toggles (rotate 45° open) — [YOUR INGREDIENTS].
- "DAILY VALUE" nutrition table beside sticky gallery (§2.6 crossfade).
- Slanted "ONLY THE BEST" + benefit-card carousel (reuse §4.5/§4.6).
- "Recommended products": 3 full-height flavor color panels with black vertical dividers (reuse §4.7, 3-up variant).
- Game footer.
- Data file: `flavors.json` — name, color, darkColor, canImage, gallery[], price, sizes[], description, ingredients[], nutrition{}, benefits[].

## 7. SUBSCRIPTION PAGE (`/pages/subscription`)
- Hero: giant spaced-letter headline `letter-spacing: .35em` — "N E V E R  O U T  O F  M A N A" pattern → [YOUR PHRASE, e.g. "N E V E R  R U N  D R Y"], per-letter fade-up on load.
- Subline: "Sign up for automatic delivery and save 10% on your orders." → [YOUR OFFER].
- 3 steps, numbered, each with doodle icon: ① "Choose the flavor of your choice" ② "Change, pause or cancel at any time" ③ "10% discount on all subscriptions" → [YOUR WORDING, keep 3-step structure].
- "Choose your flavor and subscribe!" (~48px) + product cards per flavor with per-card "Subscribe" pill → pre-selects subscription in cart.
- Short looping video banner (playful brand clip) — [TODO-USER] or CSS-animated doodle collage fallback.
- FAQ mini-accordion (3–4 subscription questions) → link to /pages/faq.
- Game footer.

---

## 8. STORY PAGE (`/pages/story` — reference: /pages/yerba-mate)
- Full-bleed photo hero (ingredient macro, e.g. yerba leaves / your hero ingredient): giant cream headline ~200px uppercase with thin dark outline (`-webkit-text-stroke: 2px #0E0E0E`): "THE MAGIC DRINK" → [YOUR 3-WORD HOOK]. Sparkle SVGs + small bottom-right legend text.
- Marquee band (navy bg, cream text): repeating "…TO THE WELLNESS EFFECT • TO THE ENERGY EFFECT • TO THE SUPER POWER EFFECT…" → [YOUR 3 "EFFECTS"], wavy curved top/bottom edges into cream.
- "THE LITTLE EXTRA FOR YOUR HEALTH" section (→ [YOUR HEADLINE]): 3 columns — left uppercase subhead ~20px; center macro photo with thin black border; right flat cute illustration (smiling ingredient character, yellow square bg, black border). Big body paragraph below (~24px).
- Slanted "ONLY THE BEST" (final letters multicolored) + benefit card carousel (reuse §4.5).
- "Air-dried" style section (→ [YOUR PROCESS STEP]): macro photo left + big body text right + black pill button "Frequently asked questions" → /pages/faq.
- Game footer.

## 9. FAQ PAGE (`/pages/faq`)
- Mustard/pale-gold background (`#E8C96A` approx — warm gold, distinct from sun yellow).
- Hero: "FOIRE AUX QUESTIONS" pattern → [YOUR "FAQ" TITLE, e.g. "QUESTIONS? ANSWERS!"], each letter individually rotated (-12°…+12°), scaled (0.9–1.15), colored (black/white/blue/pink/red/coral), pop-in stagger on load.
- Small caption beneath ("SPARKLING TEA" pattern → [YOUR CATEGORY]).
- Category subheads, centered uppercase ~18px: SPARKLING TEA / ARTISTS / DELIVERY / RETURNS / RETAIL → [YOUR 4–5 CATEGORIES].
- Accordion rows: white rounded-2xl rectangles, black question left, circled "+" SVG right; JS animated open/close (grid-template-rows trick or max-height), plus rotates 45°. `<details>` fallback for no-JS.
- 6–10 Q&As per category → [WRITE YOUR OWN].
- Game footer.

## 10. UTILITY PAGES
- **Contact (`/pages/contact`)**: cream bg, giant tilted "SAY HELLO" headline, doodle accents; contact form (name/email/message) in white rounded card with ink border; form → success state with confetti doodles (no backend: `mailto:` fallback + [TODO-USER] form endpoint).
- **Store locator (`/pages/stores`)**: headline "FIND US NEAR YOU", search-by-city input + playful illustrated map placeholder + store list cards (name/city/address). [TODO-USER]: real store data or embed Google Maps.
- **Legal (`/pages/terms`, `/pages/refund`, `/pages/privacy`)**: cream bg, max-width 800px, serif-ish readable body, giant small tilted headline each. [WRITE YOUR OWN] or paste your real policies.
- **404**: full-cream, giant tilted "OOPS!" rainbow letters, lost-can doodle, black pill "Back home".

---

## 11. ASSET PIPELINE (what to generate — you may NOT hotlink the reference site's images)

### 11.1 3D can renders ×4 (one per flavor) — AI image prompts
Use your builder's image generation with prompts like:
> "Photorealistic 3D render of a tall slim aluminum beverage can, [FLAVOR COLOR] background-matched label, huge wavy white wordmark '[YOUR BRAND]' down the front, playful flat illustrations (fruit, leaves, clouds) on the label, small text 'YERBA MATE / [FLAVOR NAME] / 355 ml', studio lighting, soft shadow, centered, plain [FLAVOR COLOR] background, commercial product photography"
- One prompt per flavor, swapping color + fruit motifs. Keep camera angle, can size, lighting IDENTICAL across all 4.
- Sizes: 1200×1600 PNG (transparent or flat flavor-color bg).

### 11.2 Doodle set (SVG, hand-drawn style)
Generate or hand-write ~15 SVGs: smiling hand, 3 flowers, basketball, surfboard, cloud, watermelon-slice sunburst, leaf sprig, 4-point sparkle (3 sizes), wavy ribbon, rocket with rainbow trail, pink flower, star burst. Style: 3–4px ink strokes, wobbly paths, solid bright fills. Keep stroke-linecap round.

### 11.3 Characters (Lottie or fallback)
- Runner character (footer game): if no Lottie, build a 3-frame canvas sprite (blue round face, navy body, red legs) — spec in §2.7.
- Flavor panel characters: one cute mascot per flavor (simple SVG, ~200px), reuse doodle style.

### 11.4 Lifestyle photos ×8
AI-generate or shoot: cans in real-life moments (fridge, picnic, desk, gym bag). Warm film-photo grade, slight grain. Rounded corners + rotations applied in CSS (§4.6, §4.10).

### 11.5 Video (subscription page)
15s looping brand clip → [TODO-USER]; fallback: CSS-animated doodle collage (floating cans + sparkles, 8s loop).

---

## 12. RESPONSIVE (mobile-first checks)
- ≤640px: hero can 260px, headlines clamp via `clamp(2.5rem, 12vw, 9rem)`; flavor panels → horizontal snap carousel; benefit cards 1-up; nav → hamburger overlay; footer game canvas full-width (touch = tap to jump); announcement bar text truncates.
- 640–1024px: 2-col grids, panels 2-up.
- All tilted/rotated elements must never cause horizontal overflow: `overflow-x: clip` on body, decorative SVGs `pointer-events: none`.
- Touch: tap = click (no hover states); hero arrows ≥48px targets.

## 13. PERFORMANCE & SEO
- Images: AVIF/WebP with PNG fallback, `loading="lazy"` below fold, explicit width/height (no CLS).
- Fonts: Baloo 2 via Google Fonts `display=swap`, preconnect.
- Animations: transform/opacity only (GPU); `content-visibility: auto` on long sections.
- SEO: unique `<title>` + meta description per page; OG/Twitter cards with can render; JSON-LD Product schema on product pages; semantic HTML (one h1 per page); alt text on every image.
- Target: Lighthouse ≥90 mobile on homepage.

## 14. QA CHECKLIST (verify ALL before calling it done)
- [ ] Loader plays once, rainbow letters stagger, no flash of unstyled content
- [ ] Hero carousel: 4 flavors, bg/doodles/can/button all swap, auto + arrows work
- [ ] Falling-can scroll animation smooth, no jank, bubbles float
- [ ] Every `<RainbowHead>` animates letter-by-letter on scroll into view
- [ ] btnOmbre on all CTAs: 5px hard shadow → press physics on hover/active
- [ ] Benefit carousel cycles, cards tilted alternately
- [ ] Flavor panels: 3-up desktop, snap carousel mobile, CTAs link correctly
- [ ] Product page: variant pills, qty stepper, add-to-cart → cart drawer opens
- [ ] Subscription page: spaced hero, 3 steps, per-flavor subscribe cards
- [ ] FAQ: scattered-letter hero, accordions open/close, + rotates
- [ ] Footer runner game actually playable (Space/tap jumps, obstacles, score, restart)
- [ ] Marquee loops seamlessly (no gap jump)
- [ ] `prefers-reduced-motion`: all motion off, content still readable
- [ ] 390px mobile: no horizontal scroll, tap targets ≥48px
- [ ] No console errors; Lighthouse ≥90 mobile
- [ ] Zero MANA branding/copy/images remain — everything is YOUR brand

## 15. WHAT NOT TO DO
- Do NOT copy MANA's brand name, logo, can artwork, photos, or full text — recreate the design language with original assets.
- Do NOT "clean up" the maximalism into minimalism. More doodles, more tilt, more color — when in doubt, add a sparkle.
- Do NOT replace the footer game with a static illustration.
- Do NOT invent prices, reviews, store addresses, or certifications — use [TODO-USER] placeholders.
- Do NOT ship without the loader, the falling can, and letter-by-letter headlines — these three ARE the site's identity.

---

### [TODO-USER] — things only you can provide:
1. Brand name + wavy SVG logo
2. 4 flavor names + can colors + 3D can renders (or approve AI-generated ones)
3. Real copy (EN + [2nd language]): hero lines, benefits, story, FAQs, subscription offer, footer
4. Product prices, sizes, nutrition/ingredients per flavor
5. Lifestyle photos (8) + Instagram handle + 4 IG photos
6. Subscription video clip (or approve CSS fallback)
7. Store list (for locator), contact email, form endpoint
8. Legal pages text (terms/refund/privacy)

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://fizzday.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/aa63618d-81eb-490a-bffb-db7d264ca887).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
