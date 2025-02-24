import { QnaTypes } from "./javascript";

export const cssConcepts: QnaTypes[] = [
  {
    id: "css-1",
    question:
      "Explain the CSS Grid `fr` unit and its role in responsive layouts.",
    answer:
      "The `fr` unit in CSS Grid represents a fraction of the available space in a grid container after fixed sizes (like `px` or `%`) are accounted for. It dynamically distributes remaining space proportionally among grid tracks, making it ideal for responsive layouts. Unlike percentages, which are relative to the container’s total size, `fr` adapts to leftover space after other constraints, enabling flexible and complex grid designs that adjust seamlessly across viewport sizes.",
    topic: "css",
    subTopic: "Grid Layout",
    code: `
  .container {
    display: grid;
    grid-template-columns: 100px 1fr 2fr;
    grid-gap: 10px;
    height: 100vh;
  }
  .item-a { background: #ff6b6b; }
  .item-b { background: #4ecdc4; }
  .item-c { background: #45b7d1; }
  /* HTML: 
    <div class="container">
      <div class="item-a"></div>
      <div class="item-b"></div>
      <div class="item-c"></div>
    </div>
  */
  /* 100px is fixed, then 1/3 and 2/3 of remaining space go to item-b and item-c */
    `,
    quiz: {
      question: "How does the `fr` unit differ from a percentage in CSS Grid?",
      options: [
        "It’s always fixed",
        "It distributes leftover space after fixed sizes",
        "It’s relative to the viewport",
        "It’s identical to percentages",
      ],
      answer: "It distributes leftover space after fixed sizes",
    },
  },
  {
    id: "css-2",
    question: "What is the `clip-path` property and how can it be animated?",
    answer:
      "The `clip-path` property defines a clipping region that masks an element’s visible area, allowing for complex shapes like polygons, circles, or custom paths. It’s more powerful than `border-radius` for creating non-rectangular visuals. When paired with CSS transitions or animations, `clip-path` can morph shapes dynamically, but only certain values (e.g., `polygon()`) support smooth transitions—numeric values must interpolate correctly, unlike keyword-based shapes like `circle()`.",
    topic: "css",
    subTopic: "Transforms and Effects",
    code: `
  .box {
    width: 200px;
    height: 200px;
    background: #ffcc00;
    clip-path: polygon(0 0, 100% 0, 100% 100%);
    transition: clip-path 0.5s ease;
  }
  .box:hover {
    clip-path: polygon(50% 0, 100% 100%, 0 100%);
  }
  /* HTML: <div class="box"></div> */
  /* Transitions from a rectangle to a triangle */
    `,
    quiz: {
      question: "What limitation affects animating `clip-path`?",
      options: [
        "It can’t be transitioned",
        "Only numeric values interpolate smoothly",
        "It requires JavaScript",
        "It only works with circles",
      ],
      answer: "Only numeric values interpolate smoothly",
    },
  },
  {
    id: "css-3",
    question: "How does the `will-change` property optimize animations?",
    answer:
      "The `will-change` property hints to the browser that an element’s properties (e.g., `transform`, `opacity`) will change soon, allowing it to optimize rendering by preparing hardware acceleration or creating a new layer. It’s useful for complex animations but should be used sparingly—overuse can increase memory consumption. It’s typically applied just before an animation starts (e.g., via JavaScript) and removed afterward to avoid performance overhead.",
    topic: "css",
    subTopic: "Performance",
    code: `
  .animated {
    width: 100px;
    height: 100px;
    background: #ff6b6b;
    will-change: transform;
    transition: transform 0.3s ease;
  }
  .animated:hover {
    transform: translateX(200px);
  }
  /* HTML: <div class="animated"></div> */
  /* Browser optimizes transform animation */
    `,
    quiz: {
      question: "What’s a potential downside of overusing `will-change`?",
      options: [
        "Slower transitions",
        "Increased memory usage",
        "Broken layouts",
        "Reduced browser compatibility",
      ],
      answer: "Increased memory usage",
    },
  },
  {
    id: "css-4",
    question:
      "Explain how CSS custom properties (variables) can be manipulated with JavaScript.",
    answer:
      "CSS custom properties, defined with `--name`, store reusable values (e.g., colors, sizes) and are scoped to their selector. Unlike preprocessors like SASS, they’re live and can be updated dynamically with JavaScript using `setProperty()` on an element’s style object or via `:root` for global scope. Their values cascade and can be accessed with `getComputedStyle()`, enabling real-time theming or responsive adjustments.",
    topic: "css",
    subTopic: "Advanced Styling",
    code: `
  :root {
    --primary-color: #3498db;
  }
  .box {
    width: 100px;
    height: 100px;
    background: var(--primary-color);
    transition: background 0.3s;
  }
  /* JavaScript:
    document.documentElement.style.setProperty('--primary-color', '#e74c3c');
  */
  /* HTML: <div class="box"></div> */
  /* Changes box color to red dynamically */
    `,
    quiz: {
      question: "How do you update a CSS custom property with JavaScript?",
      options: [
        "Using `style.setProperty()`",
        "With `var()`",
        "Through `getComputedStyle()`",
        "By redefining the class",
      ],
      answer: "Using `style.setProperty()`",
    },
  },
  {
    id: "css-5",
    question: "What are subgrid layouts and how do they enhance CSS Grid?",
    answer:
      "Subgrid is an advanced feature of CSS Grid that allows a nested grid to inherit the track sizing (rows or columns) of its parent grid. Defined with `grid-template-columns: subgrid` or `grid-template-rows: subgrid`, it aligns child elements to the parent’s grid lines, solving alignment issues in complex layouts. It’s particularly useful for consistent spacing or when nesting grids within grids, though browser support is still maturing.",
    topic: "css",
    subTopic: "Grid Layout",
    code: `
  .parent {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 10px;
  }
  .child {
    grid-column: 2 / 4;
    display: grid;
    grid-template-columns: subgrid;
  }
  .item { background: #9b59b6; }
  /* HTML:
    <div class="parent">
      <div class="child">
        <div class="item"></div>
        <div class="item"></div>
      </div>
    </div>
  */
  /* Child items align to parent's 2fr and 1fr columns */
    `,
    quiz: {
      question: "What does `subgrid` inherit from its parent?",
      options: [
        "Its gap size",
        "Its track sizing",
        "Its background color",
        "Its display type",
      ],
      answer: "Its track sizing",
    },
  },
  {
    id: "css-6",
    question:
      "How does the `aspect-ratio` property simplify responsive design?",
    answer:
      "The `aspect-ratio` property sets a preferred width-to-height ratio for an element (e.g., `16 / 9`), ensuring it maintains proportions without relying on padding hacks or JavaScript. It’s especially useful for images, videos, or containers in responsive layouts, adapting dynamically to one specified dimension while preserving the ratio. Fallbacks can be added for older browsers using `@supports`.",
    topic: "css",
    subTopic: "Responsive Design",
    code: `
  .video-box {
    width: 100%;
    aspect-ratio: 16 / 9;
    background: #34495e;
  }
  @supports not (aspect-ratio: 16 / 9) {
    .video-box {
      padding-top: 56.25%; /* 9/16 * 100 */
      height: 0;
    }
  }
  /* HTML: <div class="video-box"></div> */
    `,
    quiz: {
      question: "What does `aspect-ratio: 4 / 3` enforce?",
      options: [
        "A fixed height",
        "A 4:3 width-to-height ratio",
        "A 3:4 width-to-height ratio",
        "A percentage-based size",
      ],
      answer: "A 4:3 width-to-height ratio",
    },
  },
  {
    id: "css-7",
    question: "What is the `currentColor` keyword and how is it used?",
    answer:
      "`currentColor` is a dynamic CSS keyword that inherits the value of an element’s `color` property, acting as a variable for that color. It’s useful for coordinating styles (e.g., borders, shadows, SVGs) with text color without explicitly repeating values. It cascades like other properties and adapts to changes in `color`, making it powerful for theming or hover effects.",
    topic: "css",
    subTopic: "Advanced Styling",
    code: `
  .button {
    color: #e67e22;
    border: 2px solid currentColor;
    box-shadow: 0 0 5px currentColor;
    transition: color 0.3s;
  }
  .button:hover {
    color: #d35400;
  }
  /* HTML: <button class="button">Click Me</button> */
  /* Border and shadow match text color and update on hover */
    `,
    quiz: {
      question: "What does `currentColor` reference?",
      options: [
        "The background color",
        "The element’s `color` property",
        "The parent’s color",
        "A random color",
      ],
      answer: "The element’s `color` property",
    },
  },
  {
    id: "css-8",
    question:
      "Explain the `object-fit` and `object-position` properties for images.",
    answer:
      "`object-fit` controls how an image or video fits its container (e.g., `cover`, `contain`, `fill`), while `object-position` specifies its alignment within that container (e.g., `top left`, `50% 50%`). Together, they provide precise control over media sizing and placement, especially in responsive designs where aspect ratios vary. They’re akin to `background-size` and `background-position` but for replaced elements.",
    topic: "css",
    subTopic: "Media",
    code: `
  .image {
    width: 300px;
    height: 200px;
    object-fit: cover;
    object-position: 25% 75%;
  }
  /* HTML: <img class="image" src="example.jpg" alt="Example"> */
  /* Crops image to fit, positioned 25% from left, 75% from top */
    `,
    quiz: {
      question: "What does `object-fit: contain` do?",
      options: [
        "Stretches the image",
        "Crops the image",
        "Scales the image to fit without cropping",
        "Centers the image",
      ],
      answer: "Scales the image to fit without cropping",
    },
  },
  {
    id: "css-9",
    question:
      "How does the `:where()` functional pseudo-class enhance specificity?",
    answer:
      "The `:where()` pseudo-class groups selectors with zero specificity, unlike `:is()`, which inherits the highest specificity of its arguments. It’s used to apply styles conditionally without increasing specificity, making it easier to override later. This is ideal for utility classes or resets where you want flexible, low-priority rules that don’t interfere with more specific styles.",
    topic: "css",
    subTopic: "Selectors",
    code: `
  .card :where(h1, h2, h3) {
    color: #2c3e50;
    font-weight: normal;
  }
  .special h2 {
    color: #e74c3c; /* Overrides :where() easily */
  }
  /* HTML:
    <div class="card">
      <h2>Normal</h2>
    </div>
    <div class="card special">
      <h2>Special</h2>
    </div>
  */
    `,
    quiz: {
      question: "What is the specificity of rules inside `:where()`?",
      options: [
        "Zero",
        "Same as the highest selector",
        "Inherited from the parent",
        "One point",
      ],
      answer: "Zero",
    },
  },
  {
    id: "css-10",
    question:
      "What are CSS container queries and how do they differ from media queries?",
    answer:
      "Container queries (`@container`) allow styling based on the size of a parent container, not the viewport like media queries. Defined with `container-type` (e.g., `size`, `inline-size`) and queried using `@container (condition)`, they enable modular, context-aware components that adapt to their surroundings. This is a game-changer for reusable UI pieces, though support is still emerging.",
    topic: "css",
    subTopic: "Responsive Design",
    code: `
  .wrapper {
    container-type: inline-size;
  }
  .card {
    background: #ecf0f1;
  }
  @container (min-width: 300px) {
    .card {
      background: #3498db;
      color: white;
    }
  }
  /* HTML:
    <div class="wrapper" style="width: 400px;">
      <div class="card">Content</div>
    </div>
  */
  /* Card changes style when wrapper is ≥300px wide */
    `,
    quiz: {
      question: "What do container queries base their conditions on?",
      options: [
        "Viewport size",
        "Parent container size",
        "Element’s own size",
        "Screen resolution",
      ],
      answer: "Parent container size",
    },
  },
  {
    id: "css-11",
    question: "How does the `backdrop-filter` property create visual effects?",
    answer:
      "The `backdrop-filter` property applies graphical effects (e.g., `blur()`, `grayscale()`, `brightness()`) to the area behind an element, creating frosted glass or depth effects. It requires a semi-transparent background (e.g., `rgba()`) to be visible and is hardware-accelerated, but support varies across browsers. It’s ideal for overlays, modals, or UI highlights.",
    topic: "css",
    subTopic: "Transforms and Effects",
    code: `
  .overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
  }
  /* HTML:
    <div style="background: url('image.jpg'); height: 100vh;">
      <div class="overlay">Blurred backdrop</div>
    </div>
  */
    `,
    quiz: {
      question: "What’s required for `backdrop-filter` to be visible?",
      options: [
        "A solid background",
        "A semi-transparent background",
        "A fixed position",
        "A z-index",
      ],
      answer: "A semi-transparent background",
    },
  },
  {
    id: "css-12",
    question:
      "What is the `scroll-snap` module and how does it control scrolling?",
    answer:
      "The CSS scroll-snap module (`scroll-snap-type`, `scroll-snap-align`) creates snap points for smooth, controlled scrolling, like carousels or full-page sections. `scroll-snap-type` defines the axis and strictness (`mandatory` or `proximity`), while `scroll-snap-align` sets where elements snap (e.g., `start`, `center`). It enhances UX by guiding scroll behavior without JavaScript.",
    topic: "css",
    subTopic: "Interactivity",
    code: `
  .container {
    height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
  }
  .section {
    height: 100vh;
    scroll-snap-align: center;
  }
  /* HTML:
    <div class="container">
      <div class="section" style="background: #e74c3c;"></div>
      <div class="section" style="background: #3498db;"></div>
    </div>
  */
  /* Snaps to center of each section */
    `,
    quiz: {
      question: "What does `scroll-snap-type: x proximity` do?",
      options: [
        "Forces snapping on the x-axis",
        "Snaps on the y-axis when near",
        "Snaps on the x-axis when near",
        "Disables snapping",
      ],
      answer: "Snaps on the x-axis when near",
    },
  },
  {
    id: "css-13",
    question: "Explain the `shape-outside` property for text wrapping.",
    answer:
      "`shape-outside` defines a shape (e.g., `circle()`, `polygon()`, or an image’s alpha channel) around which inline content (like text) wraps, enabling magazine-style layouts. It works with floated elements and can use `shape-margin` to adjust spacing. It’s a creative tool for non-rectangular text flow, though it requires careful planning for responsiveness.",
    topic: "css",
    subTopic: "Layout",
    code: `
  .circle {
    float: left;
    width: 200px;
    height: 200px;
    background: #9b59b6;
    border-radius: 50%;
    shape-outside: circle(50%);
    margin-right: 20px;
  }
  /* HTML:
    <div class="circle"></div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
  */
  /* Text wraps around the circular shape */
    `,
    quiz: {
      question: "What does `shape-outside` require to work?",
      options: [
        "A positioned element",
        "A floated element",
        "A grid container",
        "A fixed width",
      ],
      answer: "A floated element",
    },
  },
  {
    id: "css-14",
    question: "How does `@supports` enable feature detection in CSS?",
    answer:
      "The `@supports` rule tests if a browser supports a CSS property or value, applying styles conditionally. It’s like JavaScript feature detection but for CSS, using `property: value` syntax or logical operators (`and`, `or`, `not`). It’s key for progressive enhancement, ensuring fallbacks for unsupported features while leveraging modern CSS where available.",
    topic: "css",
    subTopic: "Compatibility",
    code: `
  .box {
    width: 100px;
    height: 100px;
    background: #ecf0f1;
  }
  @supports (display: grid) {
    .box {
      display: grid;
      place-items: center;
      background: #2ecc71;
    }
  }
  /* HTML: <div class="box">Centered</div> */
  /* Grid applies only if supported */
    `,
    quiz: {
      question: "What does `@supports (not (display: flex))` target?",
      options: [
        "Browsers with flex support",
        "Browsers without flex support",
        "All modern browsers",
        "Only old browsers",
      ],
      answer: "Browsers without flex support",
    },
  },
  {
    id: "css-15",
    question: "What is the `mix-blend-mode` property and its use cases?",
    answer:
      "`mix-blend-mode` defines how an element’s content blends with its backdrop (e.g., `multiply`, `overlay`, `difference`), creating effects like color overlays or image manipulation. It’s hardware-accelerated and works with stacking context, but requires careful layering (e.g., `isolation: isolate`) to control blending scope. It’s popular for creative designs or UI polish.",
    topic: "css",
    subTopic: "Transforms and Effects",
    code: `
  .blend {
    position: absolute;
    width: 200px;
    height: 200px;
    background: #e74c3c;
    mix-blend-mode: multiply;
  }
  /* HTML:
    <div style="background: #3498db; width: 300px; height: 300px;">
      <div class="blend"></div>
    </div>
  */
  /* Red multiplies with blue, creating a darker blend */
    `,
    quiz: {
      question: "What does `mix-blend-mode: screen` typically do?",
      options: [
        "Darkens the backdrop",
        "Lightens the backdrop",
        "Inverts colors",
        "Removes transparency",
      ],
      answer: "Lightens the backdrop",
    },
  },
  {
    id: "css-16",
    question: "How does the `counter()` function manage custom numbering?",
    answer:
      "The `counter()` function, paired with `counter-reset` and `counter-increment`, generates custom numbering or counting in CSS (e.g., for lists, headings). It’s defined on a parent with `counter-reset`, incremented on children with `counter-increment`, and displayed via `content` in pseudo-elements. It’s flexible for hierarchical or styled numbering beyond HTML’s `<ol>`.",
    topic: "css",
    subTopic: "Advanced Styling",
    code: `
  .list {
    counter-reset: section;
  }
  .item::before {
    counter-increment: section;
    content: "Section " counter(section) ": ";
    color: #2980b9;
  }
  /* HTML:
    <div class="list">
      <div class="item">Intro</div>
      <div class="item">Details</div>
    </div>
  */
  /* Outputs: "Section 1: Intro", "Section 2: Details" */
    `,
    quiz: {
      question: "Where is `counter()` typically used?",
      options: ["In `background`", "In `content`", "In `width`", "In `margin`"],
      answer: "In `content`",
    },
  },
  {
    id: "css-17",
    question:
      "What are logical properties and how do they improve internationalization?",
    answer:
      "Logical properties (e.g., `margin-inline-start`, `padding-block-end`) use flow-relative directions (inline/block) instead of physical ones (left/right/top/bottom), adapting to writing modes (e.g., LTR, RTL, vertical). They enhance internationalization by ensuring layouts respect text direction, reducing the need for direction-specific overrides in multilingual sites.",
    topic: "css",
    subTopic: "Accessibility",
    code: `
  .box {
    margin-inline-start: 20px;
    padding-block: 10px;
    background: #f1c40f;
    writing-mode: vertical-rl;
  }
  /* HTML: <div class="box">Vertical Text</div> */
  /* Margins/padding adjust to vertical flow */
    `,
    quiz: {
      question: "What does `inline` refer to in logical properties?",
      options: [
        "Vertical axis",
        "Horizontal axis",
        "Fixed direction",
        "Parent’s orientation",
      ],
      answer: "Horizontal axis",
    },
  },
  {
    id: "css-18",
    question: "How does the `accent-color` property enhance form styling?",
    answer:
      "The `accent-color` property sets the color of UI elements like checkboxes, radio buttons, and range sliders, providing a simple way to theme form controls consistently. It overrides browser defaults with a single declaration, reducing the need for complex pseudo-element hacks. It’s widely supported and respects user preferences (e.g., high-contrast mode).",
    topic: "css",
    subTopic: "Forms",
    code: `
  .form {
    accent-color: #e91e63;
  }
  /* HTML:
    <div class="form">
      <input type="checkbox">
      <input type="radio">
      <input type="range">
    </div>
  */
  /* All controls use pink accent */
    `,
    quiz: {
      question: "What elements does `accent-color` affect?",
      options: [
        "Text inputs",
        "Checkboxes and radio buttons",
        "Buttons",
        "Links",
      ],
      answer: "Checkboxes and radio buttons",
    },
  },
  {
    id: "css-19",
    question:
      "What is the `place-items` shorthand and how does it work in Grid?",
    answer:
      "`place-items` is a Grid shorthand for `align-items` and `justify-items`, aligning grid items along the block and inline axes (e.g., `center stretch`). It simplifies centering or positioning items in both directions with one property. In Flexbox, it’s less common but can still apply if supported, though its primary power shines in Grid’s two-dimensional control.",
    topic: "css",
    subTopic: "Grid Layout",
    code: `
  .grid {
    display: grid;
    height: 100vh;
    place-items: center;
  }
  .item {
    background: #1abc9c;
    padding: 20px;
  }
  /* HTML:
    <div class="grid">
      <div class="item">Centered</div>
    </div>
  */
  /* Item is centered both vertically and horizontally */
    `,
    quiz: {
      question: "What does `place-items: center` do in a grid?",
      options: [
        "Centers items horizontally",
        "Centers items vertically",
        "Centers items in both axes",
        "Stretches items",
      ],
      answer: "Centers items in both axes",
    },
  },
  {
    id: "css-20",
    question: "How does the `mask` property create complex visual masks?",
    answer:
      "The `mask` property applies an image or gradient as a mask to an element, controlling visibility based on alpha or luminance values. It’s more versatile than `clip-path`, supporting layered masks (`mask-image`), positioning (`mask-position`), and sizing (`mask-size`). It’s used for intricate designs, like textured cutouts or fading edges, and pairs with animations for dynamic effects.",
    topic: "css",
    subTopic: "Transforms and Effects",
    code: `
  .masked {
    width: 200px;
    height: 200px;
    background: #8e44ad;
    mask-image: radial-gradient(circle, transparent 30%, black 70%);
    transition: mask-size 0.5s;
  }
  .masked:hover {
    mask-size: 150% 150%;
  }
  /* HTML: <div class="masked"></div> */
  /* Creates a circular fade effect */
    `,
    quiz: {
      question: "What determines visibility in a `mask`?",
      options: ["Color values", "Alpha or luminance", "Position", "Size alone"],
      answer: "Alpha or luminance",
    },
  },
];
