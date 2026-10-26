# GRD Design System Report

## 1. Design system overview

**Figma file:** [GRD](https://www.figma.com/design/JlytXK7AKI5nWi2D5hHBgJ)

The file has three pages:

| Page | Node | Contents |
|---|---|---|
| `Landing page` | `0:1` | Website landing-page design |
| `Components` | `49:30` | Reusable component definitions, variants, and instances |
| `Colour scale` | `52:355` | Color-family swatches |

The intended website frame is `Landing_page` (`1:2`), **1433 × 3829 px**, at
x=43, y=52 on the page. Its background is black.

The design uses a dark canvas, colorful accent families, decorative display
typography, reusable component sets, and a fixed desktop composition. No
alternate viewport frame or explicit responsive breakpoint information was
found.

## 2. Variable collections and modes

The variable definitions retrieved for the landing frame were:

| Exact variable name | Returned value | Type / unit | Collection | Mode | Alias / reference | Usage exposed |
|---|---|---|---|---|---|---|
| `corner` | `30` | Numeric; unit/type not returned. Used as a 30 px corner-radius fallback in the design context. | Not returned | Not returned | Not returned | Rounded images, cards, and button backgrounds |
| `Purple/purple_500` | `#7067e7` | Color | Not returned | Not returned | Not returned | Purple headings and CTA background |
| `Green/green_800` | `#99d929` | Color | Not returned | Not returned | Not returned | Green palette value |
| `Green/green_600` | `#a9d955` | Color | Not returned | Not returned | Not returned | Event sign-up label in design context |
| `Yellow/yellow_600` | `#fcee50` | Color | Not returned | Not returned | Not returned | Event sign-up label in design context |
| `Pink/pink_500` | `#f972b0` | Color | Not returned | Not returned | Not returned | Pink palette value, visible in content section |

Figma did not expose collection names, modes, alias references, or variable
usage metadata. An earlier response included `purple_10`; the user confirmed
that it was changed to `purple_500`. This report uses the current exact name
`Purple/purple_500` and does not treat `purple_10` as an alias.

## 3. Colour tokens

The `Colour scale` page has four rows of ten 89 × 89 px swatches. The following
hex values are converted from the swatches' Figma solid-fill RGB values to
8-bit hex. Values are ordered left to right by swatch position. The rectangle
layers have generic names rather than individual shade-token names.

| Family | Swatch fills, left to right |
|---|---|
| Purple | `#DCDBE7`, `#C7C4E7`, `#B1ADE7`, `#9C96E7`, `#867FE7`, `#7067E7`, `#5B51E7`, `#463AE7`, `#3023E7`, `#1B0CE7` |
| Pink | `#F9EFF4`, `#F9D6E6`, `#F9BDD9`, `#F9A4CB`, `#F98BBE`, `#F972B0`, `#F95AA3`, `#F94195`, `#F92888`, `#F90F7A` |
| Yellow | `#FCFAE8`, `#FCF8CF`, `#FCF6B5`, `#FCF49C`, `#FCF283`, `#FCF06A`, `#FCEE50`, `#FCEC37`, `#FCEA1E`, `#FCE705` |
| Green | `#D8D9D7`, `#D0D9C1`, `#C8D9AB`, `#C1D996`, `#B9D980`, `#B1D96A`, `#A9D955`, `#A1D93F`, `#99D929`, `#91D913` |

The named variables match these swatches:

| Variable | Matching swatch |
|---|---|
| `Purple/purple_500` | `#7067E7` |
| `Pink/pink_500` | `#F972B0` |
| `Yellow/yellow_600` | `#FCEE50` |
| `Green/green_600` | `#A9D955` |
| `Green/green_800` | `#99D929` |

The color-scale page groups shades visually by family, but individual shade
names, collection/mode information, and aliases were not exposed.

Black (`#000000`) and white (`#FFFFFF`) also appear in the landing-page design
context as literal colors; they were not returned as variables.

## 4. Typography tokens and text styles

The design context exposes font properties, but searches did not find named
text styles. These are observed text properties, not verified text-style
tokens.

| Typeface/style returned by Figma | Observed role and size |
|---|---|
| `Jacquard_12:Regular` | Hero “Design,” 160 px |
| `Imperial_Script:Regular` | Hero text and logo text, 80 px |
| `Goblin_One:Regular` | Hero “friends,” 70 px; logo text, 30–50 px |
| `BBH_Bogle:Regular` | Navigation labels, 25 px |
| `BBH_Bartle:Regular` | Section headings, 70 px; community heading, 50 px |
| `Intel_One_Mono:Regular` | About copy, 25 px; event descriptions, 16 px |
| `Jacquarda_Bastarda_9:Regular` | Content headings, 45 px; event titles, 40 px |
| `Inter` | Profile names, card titles, event metadata, and buttons; 16–30 px with Light, Italic, Semibold, and Bold styles |

Font files, line-height tokens, licensing information, and text-style
collections were not retrieved.

## 5. Spacing and layout tokens

No spacing scale or spacing variables were returned. The values below are
dimensions and properties observed in the design context, not evidence of a
named spacing-token system.

| Element | Observed dimensions / positioning |
|---|---|
| Landing frame | 1433 × 3829 px |
| Header | 1327 × 60 px; y=32 px |
| About heading | Begins at y=727 px |
| About paragraph | Begins at y=864 px |
| Team cards | Each 243 × 317 px; begin at y=1175 px |
| Content area | 1301 × about 638 px; positioned at x=66, y=1639 px |
| Events heading | Begins around x=74, y=2414 px |
| Event row viewport | 1360 × 428 px; positioned around x=71, y=2650 px |
| Event cards | Each 915 × 403 px; 60 px gap |
| CTA button | 261 × 59 px; positioned at x=584, y=3379 px |
| Footer | 1324 × 185 px; positioned at y=3576 px |
| Footer list gap | 15 px |
| Corner radius | `corner` value `30`; used as a 30 px fallback in design context |

The event-row context specifies horizontal overflow. No alternate viewport
frames or responsive breakpoints were found.

## 6. Effects and other visual tokens

- `corner` is the only non-color variable returned.
- No shadow/effect styles or border tokens were returned.
- Black (`#000000`) and white (`#FFFFFF`) appear as literal colors in the
  design context, not as returned variables.
- The design context references 20 PNGs and 5 SVGs for hero illustrations,
  portraits, content and event artwork, panel shapes, and footer social icons.
- Figma MCP asset URLs are temporary and must not be used as permanent
  runtime asset paths.

## 7. Component inventory and variants

The `Components` page contains actual component symbols and component sets.
The listed property and variant metadata was read from resolved component-set
nodes using the read-only Figma plugin API.

| Component set | Property | Variant options | Variant component names / node IDs |
|---|---|---|---|
| `Button` (`59:555`) | `Property 1`, type `VARIANT`, default `Default` | `Default`, `Variant2` | `Property 1=Default` (`59:554`); `Property 1=Variant2` (`59:567`) |
| `Button_2` (`59:789`) | `Property 1`, type `VARIANT`, default `Default` | `Default`, `Variant2` | `Property 1=Default` (`59:790`); `Property 1=Variant2` (`59:799`) |
| `Button_menu` (`59:2075`) | `Property 1`, type `VARIANT`, default `Default` | `Default`, `Variant2` | `Property 1=Default` (`59:2039`); `Property 1=Variant2` (`59:2076`) |
| `Main_Content` (`59:1810`) | `Property 1`, type `VARIANT`, default `Default` | `Default`, `Variant2`, `Variant3` | `Property 1=Default` (`59:1808`); `Property 1=Variant2` (`59:1811`); `Property 1=Variant3` (`59:1875`) |
| `Logo_big` (`123:1062`) | `Property 1`, type `VARIANT`, default `Default` | `Default`, `Variant2` | `Property 1=Default` (`123:1050`); `Property 1=Variant2` (`123:1063`) |
| `Logo_small` (`123:1070`) | `Property 1`, type `VARIANT`, default `Default` | `Default`, `Variant2` | `Property 1=Default` (`123:1023`); `Property 1=Variant2` (`134:1086`) |
| `Footer_subsection` (`134:1214`) | `Property 1`, type `VARIANT`, default `Default` | `Default`, `Variant2` | `Property 1=Default` (`134:1113`); `Property 1=Variant2` (`134:1215`) |

Standalone components found:

| Component | Node | Dimensions / notes |
|---|---|---|
| `Team member` | `52:34` | 243 × 317 px |
| `Footer` | `52:320` | 1324 × 185 px |
| `Footer_section` | `59:702` | 133 × 121.8567 px |
| `Social_media` | `59:762` | 113 × 30 px |
| `Header` | `59:2353` | 1327 × 60 px |
| `Content_item` | `59:965` | 266 × 438 px |
| `Event` | `59:835` | 915 × 403 px |

The Components page also contains `Content_section` instances and repeated
`Content_item` instances. Metadata exposes structural relationships such as
an event card containing a `Button_2` instance and main-content variants
composed of content sections/cards. No other properties were exposed for
the standalone components.

Variant properties use the generic name `Property 1`; options are exactly
`Default`, `Variant2`, and, where applicable, `Variant3`. Their visual or
behavioral meanings have not been inferred.

## 8. Naming conventions and taxonomy

- Color variables use family/scale names such as `Purple/purple_500` and
  `Green/green_600`, with mixed capitalization.
- The swatch-page layers use generic names such as `Rectangle 1`–`Rectangle 6`;
  shade names are not encoded in those node names.
- Component sets use the generic property name `Property 1`.
- The available evidence supports color-family grouping and component
  variants, but does not establish a complete primitive, semantic, or
  component-token taxonomy.
- No alias map was returned.

## 9. Gaps, inconsistencies, and recommendations

**Verified findings:**

- The color-scale page contains four families with ten solid swatches each.
- The current purple variable is `Purple/purple_500`.
- Component-set names, variant property values, and variant options were
  retrievable from the Components page.
- Searches did not find matching named text, color, or effect styles.
- Variable collections, modes, and aliases were not exposed.
- The design provides no responsive breakpoints or alternate viewport frames.

**Suggestions, not verified design requirements:**

- Document what the generic `Property 1` variants visually represent.
- Confirm whether literal black/white and repeated dimensions should become
  variables.
- Preserve exact existing names; do not infer shade-token names for the
  generic swatch layers.

## 10. Implementation recommendations for HTML and CSS

- Use semantic HTML landmarks and accessible controls.
- Use the verified color values in CSS custom properties while keeping their
  original Figma names traceable; do not invent additional Figma token names.
- Treat the fixed desktop dimensions as a visual reference, and create
  responsive layouts that preserve section order and avoid page-level
  horizontal overflow.
- If horizontal event scrolling is retained, make it intentional and
  accessible with keyboard and touch input.
- Use the component inventory to guide reusable website components, but
  confirm the meaning of variants before assigning behavior.
- Confirm webfont availability/licensing and use local assets rather than
  temporary Figma MCP asset URLs.
