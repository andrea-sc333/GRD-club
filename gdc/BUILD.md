# Website Build Brief

## 1. Project Overview

GRD is a landing page for a Graphic Design Club. The website introduces the
club, presents its team members, shares graphic design learning resources,
promotes upcoming events, and encourages visitors to join the community.

The target audience includes:
- Students and beginners interested in graphic design.
- Creative individuals looking to develop their design skills.
- Existing club members seeking resources and event information.

## 2. Design Reference

**Figma file:** [GRD](https://www.figma.com/design/JlytXK7AKI5nWi2D5hHBgJ/GRD?node-id=1-2&m=dev)

**Intended page frame:** `Landing_page` (Figma node `1:2`), on the `Landing page`
canvas. The frame is 1433 × 3829 px, positioned at x=43, y=52 in the canvas.
The design has a black (`#000000`) background.

The measurements below are values exposed by the Figma frame/design context,
unless marked as visual observation or recommendation. The frame is a desktop
design; no alternate viewport frames or explicit breakpoint specifications
were found.

## 3. Page Structure

### 1. Header

- **Purpose:** Establish the club's identity and provide access to the main
  website sections.
- **Content:** Small Graphic Design Club logo; navigation links for Home,
  About Us, Content, Events, and Get Involved.
- **Layout:** 1327 × 60 px, centered horizontally near the top of the frame
  (y=32 px).
- **Typography:** Navigation uses `BBH_Bogle:Regular`, 25 px.
- **Colours and background:** White navigation and logo on the black page
  background. The design context specifies white as `#FFFFFF`.
- **Assets:** Small typographic logo; no separate logo image was identified
  in the retrieved asset list.
- **Spacing and alignment:** Horizontal navigation; logo aligned at the left
  edge of the header.

### 2. Hero

- **Purpose:** Introduce the club's creative identity and visual style.
- **Content:** “Design is better with friends.”
- **Layout:** Large centered headline with decorative design-related imagery
  arranged around it, some extending beyond the frame edges.
- **Typography:** “Design” uses `Jacquard_12:Regular` at 160 px; “is better
  with” uses `Imperial_Script:Regular` at 80 px; “friends” uses
  `Goblin_One:Regular` at 70 px.
- **Colours and background:** White text on black.
- **Assets:** Multiple decorative images of art/design tools; see Assets.
- **Spacing and alignment:** Headline centered; surrounding images are
  rotated and positioned asymmetrically. Exact coordinates are present in
  Figma but are not repeated here because they are tied to the fixed desktop
  composition.

### 3. About / team

- **Purpose:** Explain who the club is and introduce its team.
- **Content:** “who we are” heading; a centered Lorem ipsum paragraph; three
  team profiles:
  - Scarlet Remy — President
  - John Smith — Vice president
  - Susan Moira — Social media manager
- **Layout:** Centered heading and paragraph above three horizontally aligned
  profile cards. The heading begins at y=727 px; the paragraph begins at
  y=864 px; the cards begin at y=1175 px. Each card is 243 × 317 px.
- **Typography:** Heading uses `BBH_Bartle:Regular`, 70 px, purple. Paragraph
  uses `Intel_One_Mono:Regular`, 25 px, white. Names use Inter Semibold,
  25 px; roles use Inter Light, 20 px.
- **Colours and background:** Black background, purple heading, white text.
  Profile images have rounded corners; the design context uses a 30 px
  corner value.
- **Assets:** Three team portrait images.
- **Spacing and alignment:** About content is centered; cards are evenly
  arranged in one row with consistent gaps.

### 4. Content

- **Purpose:** Showcase graphic design learning content and resources.
- **Content:** Category labels for Tutorials, Resources, and Interviews.
  Visible content cards include “How to make a zine,” “Halftone effect,”
  “Collage stop motion,” and “Camera basics,” each with an author credit.
- **Layout:** A 1301 × 639 px content area positioned at x=66, y=1639 px.
  The composition has a colored panel, category labels, and four image cards
  in a row.
- **Typography:** Category headings use `Jacquarda_Bastarda_9:Regular`,
  45 px. Card titles use Inter Semibold, 25 px; credits use Inter Light
  Italic, 20 px.
- **Colours and background:** Black page background with bright colored
  category/panel surfaces. Pink (`#f972b0`) is visible in the supplied
  design render; green and yellow are also present in the design palette.
- **Assets:** Three section-background SVGs and illustrated content-card
  images.
- **Spacing and alignment:** Four cards are laid out evenly across the
  panel; images have rounded corners. The Figma context exposes a 30 px
  corner value.

### 5. Upcoming events

- **Purpose:** Promote club activities and provide a sign-up path.
- **Content:** “UPCOMING EVENTS” heading and event cards. Visible examples:
  - “Procreate basics,” by Nina Silva, dated 21 November, 2026.
  - “Halloween poster,” a contest dated 1–25 October, 2026.
  - Each card includes descriptive placeholder text, an image, and a
    “SIGN UP” button.
- **Layout:** Heading starts around x=74, y=2414 px and uses two lines.
  Event row starts around x=71, y=2650 px, with a 1360 × 428 px viewport.
  Cards are 915 × 403 px with a 60 px gap; part of the second card extends
  beyond the visible row.
- **Typography:** Section heading uses `BBH_Bartle:Regular`, 70 px, purple.
  Event titles use `Jacquarda_Bastarda_9:Regular`, 40 px. Event metadata uses
  Inter at 20 px. Descriptions use `Intel_One_Mono:Regular`, 16 px. Sign-up
  labels use Inter Bold, 30 px.
- **Colours and background:** Colored event-card surfaces (green and yellow
  are visible in the render), black text, and black sign-up buttons with
  contrasting labels.
- **Assets:** Event-card background SVGs and event artwork images.
- **Spacing and alignment:** Text occupies the left portion of each card;
  artwork sits to the right. The Figma context specifies horizontal overflow
  on the event row.

### 6. Community call to action

- **Purpose:** Encourage visitors to join the club.
- **Content:** “Become part of our community” and a “JOIN NOW” button.
- **Layout:** Centered heading and button. The heading begins around
  y=3223 px; the button is positioned at x=584, y=3379 px and measures
  261 × 59 px.
- **Typography:** Heading uses `BBH_Bartle:Regular`, 50 px, white. Button
  label uses Inter Bold, 30 px, black.
- **Colours and background:** Purple button (`#7067e7`) on the black page.
- **Assets:** No separate imagery identified for this section.
- **Spacing and alignment:** Heading and button are centered relative to
  the page.

### 7. Footer

- **Purpose:** Repeat key navigation and provide social links.
- **Content:** Large Graphic Design Club typographic logo; navigation groups
  for Home, About Us, Content, Events, and Get Involved; social-media icons.
- **Layout:** 1324 × 185 px, centered horizontally and positioned at y=3576 px.
- **Typography:** Navigation headings use `BBH_Bogle:Regular`, 25 px.
  Sub-links use Inter Light, 16 px. The logo combines decorative display
  typefaces.
- **Colours and background:** White content on black.
- **Assets:** Large typographic logo and three social-media icons.
- **Spacing and alignment:** Navigation is distributed into columns beside
  the logo; social icons form a compact horizontal group.

## 4. Design System

### Colours

| Figma variable | Value | Notes |
|---|---|---|
| `Purple/purple_500` | `#7067e7` | Purple accent; used on headings and CTA button. |
| `Green/green_800` | `#99d929` | Green palette value. |
| `Green/green_600` | `#a9d955` | Green palette value; used for an event sign-up label in the design context. |
| `Yellow/yellow_600` | `#fcee50` | Yellow palette value; used for an event sign-up label in the design context. |
| `Pink/pink_500` | `#f972b0` | Pink palette value; visible in the content section. |
| `corner` | `30` | Used as a 30 px corner-radius value in the design context; the variable's stored type/unit was not returned. |

Black (`#000000`) and white (`#FFFFFF`) are used in the design. These are
literal colors visible in the design context; they were not returned as
variables. Other literal values may also be present.

### Typography

| Typeface/style returned by Figma | Observed roles and sizes |
|---|---|
| `Jacquard_12:Regular` | Hero display text, 160 px |
| `Imperial_Script:Regular` | Hero and logo script text, 80 px |
| `Goblin_One:Regular` | Hero display text, 70 px; logo text, 30–50 px |
| `BBH_Bogle:Regular` | Header and footer navigation, 25 px |
| `BBH_Bartle:Regular` | Major headings, 50–70 px |
| `Intel_One_Mono:Regular` | About copy, 25 px; event descriptions, 16 px |
| `Jacquarda_Bastarda_9:Regular` | Content labels, 45 px; event titles, 40 px |
| `Inter` | Profile text, card titles/credits, metadata, and buttons; 16–30 px with Light, Italic, Semibold, and Bold styles |

These are font-family/style values exposed by the design context, not
verified named Figma text styles. Line-height and font files were not
provided.

### Spacing, widths, and component patterns

- Desktop frame: 1433 × 3829 px.
- Header: 1327 × 60 px.
- Content area: 1301 × 639 px.
- Profile cards: 243 × 317 px.
- Event cards: 915 × 403 px; 60 px gap; 1360 px row viewport.
- CTA button: 261 × 59 px.
- Footer: 1324 × 185 px.
- Corner value: 30 px where exposed in the design context.
- Footer list groups use 15 px gaps in the generated design context.
- Repeated visual patterns include navigation labels, profile cards, content
  cards, event cards, buttons, and footer link groups. The context does not
  establish that every repeated pattern is a published Figma component.

The variable response did not include collection names, modes, alias
relationships, or usage locations. The names include slash-separated color
families and mixed capitalization; preserve the exact names rather than
renaming them.

## 5. Assets

The Figma design context references 20 PNG images and 5 SVGs. Names below are
the layer/asset identifiers returned by Figma; exact file contents should be
matched to their Figma placements when obtaining the assets.

| Asset/layer identifiers | Intended use |
|---|---|
| `Image4`, `Image6`–`Image12` | Decorative hero artwork. |
| `Rectangle8`–`Rectangle10` | Team profile portraits. |
| `Image13`–`Image16` | Content card imagery and artwork. |
| `ContentSection`, `ContentSection1`, `ContentSection2` (SVG) | Colored content/category panel artwork. |
| `Image21`, `Image22` | Event imagery. |
| `Event`, `Event1` (SVG) | Event card backgrounds. |
| `Image18`–`Image20` | Footer social-media icons. |
| Typographic logos in the header and footer | Logo artwork is composed from text in the design context; no standalone logo file was identified. |

The identified font families are listed in Design System. No font binaries or
font licensing information were retrieved. Figma MCP asset URLs are temporary;
do not use those URLs as permanent website asset paths.

## 6. Technical Requirements

- Use semantic HTML5 landmarks and elements for the header, navigation,
  main content, sections, and footer.
- Use maintainable CSS with reusable custom properties for the verified
  colors and corner value. Avoid unnecessary frameworks or dependencies.
- Use JavaScript only where required for confirmed interactions. Do not
  assume the design's tabs, navigation, or calls to action have defined
  behavior until destinations and interaction requirements are confirmed.
- Keep source, styles, scripts, and downloaded assets organized consistently
  with the existing project. Confirm the current project structure before
  implementation.
- Use accessible names and keyboard support for interactive controls,
  sufficient contrast, meaningful image alternatives where images convey
  content, and empty alternatives for decorative art.
- Use local/approved font files or a permitted font-loading method once
  font availability and licensing are confirmed. Provide sensible fallbacks.
- Do not use temporary Figma asset URLs at runtime.

## 7. Responsive Behaviour

The inspected design provides a desktop frame only; tablet/mobile frames,
breakpoints, and responsive behavior are not specified.

Responsive implementation requirements (recommendations, not verified Figma
rules):
- Preserve section order and content hierarchy at every viewport.
- Reflow the header/navigation for narrow screens without losing access to
  its destinations.
- Reflow team and content cards into fewer columns on smaller screens.
- Keep event cards usable on small screens; horizontal scrolling may be
  retained only if it is intentional, keyboard-accessible, and does not
  cause page-level horizontal overflow.
- Scale and reposition hero artwork so it does not obscure text or create
  unwanted overflow.
- Verify layout and text legibility at desktop, tablet, and mobile widths.

Confirm exact breakpoint values and mobile interaction patterns before
treating them as design requirements.

## 8. Acceptance Criteria

- The single-page website represents the GRD Graphic Design Club and includes
  the sections in the order documented above.
- The desktop implementation reflects the Figma frame's visual hierarchy,
  black background, verified palette, typeface choices, artwork, and major
  dimensions.
- The hero, team profiles, content cards, event cards, CTA, and footer use the
  correct Figma assets and intended placements.
- Buttons and navigation have defined, working destinations or actions;
  placeholder destinations are not presented as finished functionality.
- Interactive elements are keyboard accessible and have appropriate
  semantics, focus states, and accessible names.
- The layout adapts to desktop, tablet, and mobile, preserves content
  hierarchy, and does not introduce unintended horizontal overflow.
- All image paths and stylesheet references resolve; no temporary Figma
  asset URLs remain in production code.
- The finished page is visually checked against the Figma frame at the
  desktop reference size and inspected at representative tablet and mobile
  sizes.
- Unspecified responsive behavior, placeholder copy, and unresolved
  interaction choices are documented and confirmed before final approval.

## 9. Outstanding Questions

- What should the About and event placeholder copy say in the finished site?
- What are the destinations/actions for the navigation links, content
  categories, event sign-up buttons, and “JOIN NOW” button?
- Are the Tutorials, Resources, and Interviews labels interactive tabs,
  separate sections, or visual category labels?
- Should the event row scroll horizontally, wrap, or change to another
  layout at narrower widths?
- What tablet/mobile layouts and breakpoints are intended?
- Are the listed font families available for web use, and what are their
  licensing/hosting requirements?
- Which social platforms and URLs should the footer icons link to?
- Are there additional Figma variables, collections, modes, styles, or
  component variants that should be applied? The available MCP responses did
  not expose that metadata.
- Should the October 2026 Halloween contest remain visible after its listed
  date, or should event cards be time-sensitive?

## 10. Answers to 9.

- It can stay as a placeholder for now.
- There´s no destination for now, only the landing page.
- They should be separte cards that come to the front when you click the title. 
- The event row should scroll horizontally.
- For mobile and vertical tablet layouts, keep it all the same, the only change is to make the content section with Tutorials, Resources, and Interviews responsive, so that instead of 4 sub section in the same row, theres 2 rows of 2 subsections. The website should be responsive across desktop, tablet, and mobile devices. On desktop, the layout should follow the provided Figma design. On tablets, spacing and card layouts should adjust to fit the screen. On mobile, content should stack vertically where appropriate, navigation should become a compact menu, and all text, images, and buttons should remain readable and usable. Suggested breakpoints are 1024px for desktop, 768px for tablet, and below 768px for mobile. These breakpoints can be adjusted during development based on the layout. 
- Yes they are, keep all the same fonts. 
- No need to link any icon to any social media URL yet.
- No additional variables, only whats on the project file.
- The landing page is only an example, so no need to make anything time-sensitive.