Peppa Pig vs Eevee — Website Plan and Rules
==========================================

Site map and page purposes
--------------------------
- Home: hero contrasting Peppa Pig vs Eevee, quick CTAs to explore stories, gallery, game.
- Characters: bios for Peppa, Eevee, friends; strengths/quirks comparison table.
- Storylines: episodic matchups or collaborative adventures with timeline/chapters.
- Gallery: image/video grid with lightbox; filters by character, theme, episode.
- Mini-Game: simple JS game (turn-based or clicker) themed around Peppa vs Eevee; scoreboard.
- Fan Corner: user submissions (quotes/art placeholder), code of conduct, moderation notice.
- About & Credits: project purpose, acknowledgments, open-source licenses.
- Accessibility & Settings (panel or page): theme toggle, font size, motion reduction.
- 404/Redirect: friendly character message guiding back to Home.

Information architecture notes
------------------------------
- Keep global nav consistent; include logo, clear page names, theme toggle.
- Use breadcrumbs on deep pages (Storylines detail, Gallery filters) plus back-to-list links.
- Use cards and tabs for dense content; avoid walls of text.
- Provide persistent CTA to the Mini-Game from Home, Characters, and Storylines.

Core UI components
------------------
- Header/nav bar with mobile drawer.
- Hero sections with split layout (Peppa vs Eevee), CTA buttons.
- Comparison table (responsive stacking on small screens).
- Card grid for characters and episodes; include badges for type (Peppa-side, Eevee-side, team-up).
- Lightbox-enabled gallery with filters and lazy loading.
- Game UI: scoreboard, turn log, action buttons, win/lose modal.
- Footer with social links, credits, and licenses.

Styling and theming
-------------------
- Use Tailwind CSS (latest 3.x CDN or build). Prefer utility-first with small component classes via @apply.
- Palette: pastel Peppa pinks vs Pokémon-style Eevee browns; ensure 4.5:1 contrast for text.
- Provide light/dark themes; honor prefers-color-scheme; store preference in localStorage.
- Use CSS custom properties for theme tokens (colors, spacing) to keep utilities DRY.

Interaction and UX
------------------
- Smooth scroll for in-page anchors; reduce motion when prefers-reduced-motion is true.
- Hover/focus states on all interactive elements; visible focus rings.
- Keyboard navigation for menus, tabs, lightbox, and game controls.
- Forms: inline validation, helpful error copy, success states.
- Provide loading and empty states for gallery and game data.

Performance and delivery
------------------------
- Preload critical hero image; lazy-load gallery assets.
- Use modern image formats (WebP/AVIF) with fallbacks.
- Defer non-critical JS; tree-shake and avoid heavy bundles.
- Use CSS via Tailwind CDN for prototype; move to build pipeline (PostCSS) before launch.

Content guidelines
------------------
- Keep tone light, family-friendly, and respectful to both franchises.
- Avoid implying official affiliation; include fan-work disclaimer.
- Keep copy concise; use headings and lists over long paragraphs.
- Add alt text for all images; describe character actions, not just names.

Accessibility checklist
-----------------------
- Semantic HTML5 layout; ARIA only when necessary.
- Color contrast: text ≥ 4.5:1; large text ≥ 3:1.
- Focus management for modals/lightbox; trap focus and return on close.
- Provide captions/transcripts for videos and audio.
- Ensure game controls usable via keyboard and touch.

Open-source libraries (latest stable)
-------------------------------------
- Tailwind CSS 3.x (utility CSS): https://cdn.tailwindcss.com
- Alpine.js 3.x (lightweight interactivity) or Vanilla JS for minimal footprint.
- Headless UI (if needed for accessible components): https://headlessui.com
- A11y dialogs/lightbox: https://github.com/KittyGiraudel/a11y-dialog or similar.
- Lenis/GSAP for optional motion (guarded by reduced-motion checks).

Example HTML includes (CDN prototype)
-------------------------------------
- Tailwind: `<script src="https://cdn.tailwindcss.com"></script>`
- Configure theme via `tailwind.config = { theme: { extend: { colors: {...} } } }`
- Alpine: `<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>`

Best practices
--------------
- Keep JS modular; avoid global leakage. Namespaces for game logic and gallery.
- Extract component classes with @apply for repeated patterns.
- Prefer CSS grid/flex over absolute positioning; test responsive at 320px–1440px.
- Lint and format (Prettier, ESLint) before deploy; run accessibility checks (axe, Lighthouse).
- Version assets; cache static files; set appropriate cache-control headers.
- Keep third-party deps minimal; no unused scripts.

Page-level content suggestions
------------------------------
- Home: hero split, quick facts, CTA to Characters and Game.
- Characters: cards with stats, favorite moves, voice lines (text), toggle to compare.
- Storylines: episodic cards, timeline view, “who won?” badge; add filters.
- Gallery: masonry grid with tags; open in lightbox with keyboard controls.
- Mini-Game: turn-based actions (Peppa slapstick vs Eevee moves), random events, scoreboard; pause and reset.
- Fan Corner: submission guidelines, moderation rules, featured safe comments.
- About: acknowledge Peppa Pig and Pokémon owners; link to licenses and libraries used.

Data and state notes
--------------------
- Store theme preference, last viewed character, and game scores in localStorage (with guards).
- Consider JSON data files for characters/storylines to keep HTML clean.
- Validate all user inputs; sanitize any rendered user content before display.

Deployment checklist
--------------------
- Minify HTML/CSS/JS; generate critical CSS if build pipeline exists.
- Optimize images; include width/height to avoid layout shift.
- Test on Safari, Chrome, Firefox, and mobile browsers.
- Run Lighthouse for performance/accessibility/SEO; fix blocking issues.
