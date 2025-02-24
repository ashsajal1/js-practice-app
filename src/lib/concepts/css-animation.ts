import { QnaTypes } from "./javascript";

export const cssAnimationConcepts: QnaTypes[] = [
  {
    id: "css-anim-1",
    question:
      "What is the animation-fill-mode property and how does it affect keyframes?",
    answer:
      "The animation-fill-mode property controls what styles apply to an element before and after its animation runs. It has values like none, forwards, backwards, and both. Forwards keeps the final keyframe’s styles after the animation ends, backwards applies the first keyframe’s styles before it starts, and both does both. This is tricky when combined with delays or reverse playback, as it can override initial styles unexpectedly.",
    topic: "css",
    subTopic: "Animations",
    code: `
  .box {
    width: 100px;
    height: 100px;
    background: #3498db;
    animation: slide 2s ease 1s;
    animation-fill-mode: forwards;
  }
  @keyframes slide {
    from { transform: translateX(0); }
    to { transform: translateX(200px); }
  }
  /* HTML: <div class="box"></div> */
  /* Box stays at 200px after animation */
    `,
    quiz: {
      question: "What does animation-fill-mode: backwards do?",
      options: [
        "Keeps the last frame’s styles",
        "Applies the first frame’s styles before starting",
        "Resets the element after animation",
        "Delays the animation",
      ],
      answer: "Applies the first frame’s styles before starting",
    },
  },
  {
    id: "css-anim-2",
    question: "How does animation-direction: alternate-reverse work?",
    answer:
      "The animation-direction property sets the playback direction, and alternate-reverse is a complex combo. It starts the animation in reverse (last keyframe to first), then alternates back to forward on the next cycle, repeating this pattern. This can confuse timing calculations, especially with odd iteration counts, as the element’s final state depends on where it stops.",
    topic: "css",
    subTopic: "Animations",
    code: `
  .ball {
    width: 50px;
    height: 50px;
    background: #e74c3c;
    animation: bounce 1s ease 3 alternate-reverse;
  }
  @keyframes bounce {
    0% { transform: translateY(0); }
    100% { transform: translateY(100px); }
  }
  /* HTML: <div class="ball"></div> */
  /* Plays reverse, forward, reverse over 3 cycles */
    `,
    quiz: {
      question:
        "What’s the first direction of animation-direction: alternate-reverse?",
      options: ["Forward", "Reverse", "Random", "Paused"],
      answer: "Reverse",
    },
  },
  {
    id: "css-anim-3",
    question: "What happens when you stack multiple animations on one element?",
    answer:
      "You can apply multiple animations to an element by listing them in the animation shorthand, separated by commas. Each animation runs independently with its own timing, keyframes, and properties. The tricky part is managing conflicts—later animations override earlier ones for the same property, and timing mismatches can create jittery or unexpected motion.",
    topic: "css",
    subTopic: "Animations",
    code: `
  .spinner {
    width: 100px;
    height: 100px;
    background: #2ecc71;
    animation: spin 2s linear infinite, grow 1s ease-in-out infinite;
  }
  @keyframes spin {
    100% { transform: rotate(360deg); }
  }
  @keyframes grow {
    50% { transform: scale(1.5); }
  }
  /* HTML: <div class="spinner"></div> */
  /* Spins while growing and shrinking */
    `,
    quiz: {
      question: "What happens if two animations affect the same property?",
      options: [
        "They merge",
        "The later one overrides",
        "They cancel each other",
        "The first one wins",
      ],
      answer: "The later one overrides",
    },
  },
  {
    id: "css-anim-4",
    question: "How does animation-play-state control dynamic pausing?",
    answer:
      "The animation-play-state property toggles an animation between running and paused states. It’s useful for interactive effects, like pausing on hover or via JavaScript. The catch is that it preserves the animation’s current position when paused, resuming from there, which can lead to desync if multiple elements rely on synchronized timing.",
    topic: "css",
    subTopic: "Animations",
    code: `
  .mover {
    width: 100px;
    height: 100px;
    background: #f1c40f;
    animation: move 3s linear infinite;
  }
  .mover:hover {
    animation-play-state: paused;
  }
  @keyframes move {
    100% { transform: translateX(200px); }
  }
  /* HTML: <div class="mover"></div> */
  /* Pauses on hover, resumes on release */
    `,
    quiz: {
      question: "What happens to an animation’s position when paused?",
      options: [
        "It resets",
        "It stays where it stopped",
        "It jumps to the end",
        "It reverses",
      ],
      answer: "It stays where it stopped",
    },
  },
  {
    id: "css-anim-5",
    question: "What’s the deal with animating the transform-origin property?",
    answer:
      "The transform-origin property sets the pivot point for transforms like rotate or scale. Animating it shifts the origin during the animation, creating complex motion paths—like orbiting or wobbling—without changing the transform itself. It’s tricky because it only works with transform-based animations, and browsers may interpolate it unevenly if not paired with smooth timing.",
    topic: "css",
    subTopic: "Animations",
    code: `
  .orbit {
    width: 50px;
    height: 50px;
    background: #9b59b6;
    animation: orbit 2s ease infinite;
  }
  @keyframes orbit {
    0% { transform: rotate(0deg); transform-origin: 100% 100%; }
    100% { transform: rotate(360deg); transform-origin: 0% 0%; }
  }
  /* HTML: <div class="orbit"></div> */
  /* Rotates with shifting pivot */
    `,
    quiz: {
      question: "What does animating transform-origin affect?",
      options: [
        "The element’s position",
        "The pivot point of transforms",
        "The animation speed",
        "The background color",
      ],
      answer: "The pivot point of transforms",
    },
  },
  {
    id: "css-anim-6",
    question: "How can you animate pseudo-elements with keyframes?",
    answer:
      "Pseudo-elements like ::before and ::after can be animated by targeting them with keyframes, adding dynamic effects like growing shadows or moving overlays. The challenge is ensuring they’re styled with content and display properties first, and animations must be applied directly to the pseudo-selector, not inherited, which can complicate specificity.",
    topic: "css",
    subTopic: "Animations",
    code: `
  .box::before {
    content: '';
    position: absolute;
    width: 100px;
    height: 100px;
    background: rgba(52, 152, 219, 0.5);
    animation: pulse 1.5s ease infinite;
  }
  @keyframes pulse {
    50% { transform: scale(1.2); opacity: 0.8; }
    100% { transform: scale(1); opacity: 0.5; }
  }
  /* HTML: <div class="box" style="position: relative;"></div> */
  /* Pseudo-element pulses outward */
    `,
    quiz: {
      question: "What must a pseudo-element have to be animatable?",
      options: [
        "A z-index",
        "A content property",
        "A parent animation",
        "A fixed position",
      ],
      answer: "A content property",
    },
  },
  {
    id: "css-anim-7",
    question: "What’s the trick to animating gradients smoothly?",
    answer:
      "Animating gradients is tricky because CSS can’t transition background-image directly. Instead, you animate properties like background-position or use layered gradients with opacity or size changes. This creates a faux transition effect, but alignment and timing must be precise to avoid choppy visuals, especially with radial gradients.",
    topic: "css",
    subTopic: "Animations",
    code: `
  .gradient {
    width: 200px;
    height: 200px;
    background: linear-gradient(45deg, #e74c3c, #3498db);
    animation: shift 2s ease infinite;
  }
  @keyframes shift {
    100% { background-position: 100% 0; }
  }
  /* HTML: <div class="gradient"></div> */
  /* Shifts gradient position */
    `,
    quiz: {
      question: "Why can’t gradients transition directly?",
      options: [
        "They’re not numeric",
        "They’re background-image",
        "They lack keyframes",
        "They’re too complex",
      ],
      answer: "They’re background-image",
    },
  },
  {
    id: "css-anim-8",
    question:
      "How does animation-timing-function: steps() create choppy motion?",
    answer:
      "The animation-timing-function: steps(n) divides an animation into n equal jumps instead of smooth interpolation, creating a frame-by-frame effect like a sprite animation. The tricky part is calculating steps to match keyframes or sprite sheets, and the end value behaves differently with options like jump-start or jump-end.",
    topic: "css",
    subTopic: "Animations",
    code: `
  .ticker {
    width: 50px;
    height: 50px;
    background: #f1c40f;
    animation: tick 2s steps(4) infinite;
  }
  @keyframes tick {
    100% { transform: translateX(200px); }
  }
  /* HTML: <div class="ticker"></div> */
  /* Moves in 4 distinct jumps */
    `,
    quiz: {
      question: "What does steps(5) do to an animation?",
      options: [
        "Smooths it",
        "Divides it into 5 jumps",
        "Speeds it up",
        "Reverses it",
      ],
      answer: "Divides it into 5 jumps",
    },
  },
  {
    id: "css-anim-9",
    question: "What’s the catch with animating height from 0 to auto?",
    answer:
      "Animating height from 0 to auto doesn’t work because auto isn’t a numeric value CSS can interpolate. Instead, use max-height with a large value or transform: scaleY for smooth growth. The catch is overflow or performance—max-height can clip content if too small, and transforms may distort child elements.",
    topic: "css",
    subTopic: "Animations",
    code: `
  .dropdown {
    max-height: 0;
    overflow: hidden;
    background: #2ecc71;
    animation: expand 0.5s ease forwards;
  }
  @keyframes expand {
    to { max-height: 200px; }
  }
  /* HTML: <div class="dropdown">Content</div> */
  /* Expands to max-height */
    `,
    quiz: {
      question: "Why can’t height: auto be animated?",
      options: [
        "It’s too fast",
        "It’s not numeric",
        "It’s blocked by overflow",
        "It’s a keyword",
      ],
      answer: "It’s not numeric",
    },
  },
  {
    id: "css-anim-10",
    question: "How does will-change optimize animation performance?",
    answer:
      "The will-change property tells the browser to prepare for changes to specific properties, like transform or opacity, often used in animations. It triggers hardware acceleration or layer creation, smoothing performance. The trick is overuse—applying it too broadly wastes memory, and it must be added before the animation starts to be effective.",
    topic: "css",
    subTopic: "Animations",
    code: `
  .smooth {
    width: 100px;
    height: 100px;
    background: #3498db;
    will-change: transform;
    animation: slide 1s ease infinite;
  }
  @keyframes slide {
    100% { transform: translateX(150px); }
  }
  /* HTML: <div class="smooth"></div> */
  /* Optimized for smooth sliding */
    `,
    quiz: {
      question: "When should will-change be applied?",
      options: [
        "After the animation",
        "Before the animation",
        "During keyframes",
        "On hover",
      ],
      answer: "Before the animation",
    },
  },
  {
    id: "css-anim-11",
    question: "What’s the role of animation-delay with negative values?",
    answer:
      "The animation-delay property sets when an animation starts, and negative values make it begin partway through its cycle immediately. For example, -1s on a 3s animation starts it one second in. This is tricky with iteration counts—negative delays can skip cycles or misalign multi-animation setups.",
    topic: "css",
    subTopic: "Animations",
    code: `
  .late {
    width: 100px;
    height: 100px;
    background: #e74c3c;
    animation: fade 2s ease infinite;
    animation-delay: -0.5s;
  }
  @keyframes fade {
    50% { opacity: 0.3; }
  }
  /* HTML: <div class="late"></div> */
  /* Starts 0.5s into the fade */
    `,
    quiz: {
      question: "What does a negative animation-delay do?",
      options: [
        "Pauses the animation",
        "Starts it earlier",
        "Skips part of the cycle",
        "Reverses it",
      ],
      answer: "Skips part of the cycle",
    },
  },
  {
    id: "css-anim-12",
    question: "How can you chain animations sequentially on one element?",
    answer:
      "Chaining animations on one element requires splitting them into separate keyframes and using animation-delay to stagger their starts. The catch is timing—delays must match durations precisely, and iteration or fill modes can overlap or leave gaps if miscalculated.",
    topic: "css",
    subTopic: "Animations",
    code: `
  .sequence {
    width: 100px;
    height: 100px;
    background: #9b59b6;
    animation: step1 1s ease, step2 1s ease 1s;
    animation-fill-mode: forwards;
  }
  @keyframes step1 {
    100% { transform: translateX(100px); }
  }
  @keyframes step2 {
    100% { transform: translateX(100px) translateY(100px); }
  }
  /* HTML: <div class="sequence"></div> */
  /* Moves right, then down */
    `,
    quiz: {
      question: "What’s key to chaining animations?",
      options: [
        "Overlapping keyframes",
        "Matching delays to durations",
        "Using reverse",
        "Infinite loops",
      ],
      answer: "Matching delays to durations",
    },
  },
  {
    id: "css-anim-13",
    question: "What’s tricky about animating filter effects like blur?",
    answer:
      "Animating filter properties like blur or brightness adjusts visual effects over time, but not all filter functions interpolate smoothly—blur works well, but hue-rotate can jump. The trick is performance—filters are GPU-intensive, and stacking multiple filters can lag, especially on low-end devices.",
    topic: "css",
    subTopic: "Animations",
    code: `
  .glow {
    width: 100px;
    height: 100px;
    background: #f1c40f;
    animation: blur 2s ease infinite;
  }
  @keyframes blur {
    50% { filter: blur(5px); }
  }
  /* HTML: <div class="glow"></div> */
  /* Blurs in and out */
    `,
    quiz: {
      question: "What’s a challenge with animating filters?",
      options: [
        "They can’t animate",
        "Performance impact",
        "They only work on images",
        "They need delays",
      ],
      answer: "Performance impact",
    },
  },
  {
    id: "css-anim-14",
    question: "How does cubic-bezier create custom easing curves?",
    answer:
      "The cubic-bezier function defines a custom timing curve for animations using four control points (x1, y1, x2, y2). It lets you create bounces, overshoots, or slow-ins by tweaking values beyond 0-1 ranges. The trick is precision—small changes drastically alter motion, and invalid curves break the animation.",
    topic: "css",
    subTopic: "Animations",
    code: `
  .bounce {
    width: 50px;
    height: 50px;
    background: #2ecc71;
    animation: drop 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
  }
  @keyframes drop {
    100% { transform: translateY(100px); }
  }
  /* HTML: <div class="bounce"></div> */
  /* Bounces with overshoot */
    `,
    quiz: {
      question: "What can cubic-bezier values exceed?",
      options: [
        "0-1 range",
        "Positive numbers",
        "Negative numbers",
        "Integer limits",
      ],
      answer: "0-1 range",
    },
  },
  {
    id: "css-anim-15",
    question: "What’s the deal with animating clip-path shapes?",
    answer:
      "Animating clip-path changes an element’s visible shape over time, like morphing a square to a star. Only numeric values (e.g., percentages in polygon()) interpolate smoothly—keyword shapes like circle() don’t transition. The catch is browser support and complexity—mismatched point counts in polygons fail silently.",
    topic: "css",
    subTopic: "Animations",
    code: `
  .shape {
    width: 100px;
    height: 100px;
    background: #e74c3c;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    animation: morph 2s ease infinite;
  }
  @keyframes morph {
    50% { clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%); }
  }
  /* HTML: <div class="shape"></div> */
  /* Morphs to diamond and back */
    `,
    quiz: {
      question: "What limits clip-path animation?",
      options: [
        "Only colors animate",
        "Numeric values must match",
        "It’s always smooth",
        "Points must differ",
      ],
      answer: "Numeric values must match",
    },
  },
  {
    id: "css-anim-16",
    question: "How can you sync animations across multiple elements?",
    answer:
      "Syncing animations across elements requires matching animation durations, delays, and timing functions. The tricky part is inheritance—child elements don’t inherit animations, so each needs its own declaration. Delays or play-states can desync if not carefully aligned, especially with dynamic triggers.",
    topic: "css",
    subTopic: "Animations",
    code: `
  .group div {
    width: 50px;
    height: 50px;
    background: #3498db;
    animation: fade 1s ease infinite;
  }
  .group div:nth-child(2) {
    animation-delay: 0.2s;
  }
  @keyframes fade {
    50% { opacity: 0.5; }
  }
  /* HTML: <div class="group"><div></div><div></div></div> */
  /* Fades with slight stagger */
    `,
    quiz: {
      question: "What breaks animation sync?",
      options: [
        "Different keyframes",
        "Mismatched timing",
        "Same delays",
        "Infinite loops",
      ],
      answer: "Mismatched timing",
    },
  },
  {
    id: "css-anim-17",
    question: "What’s tricky about animating SVG paths?",
    answer:
      "Animating SVG paths involves keyframes targeting the d attribute via CSS, but browsers only animate it with SMIL or JavaScript in most cases. CSS can animate stroke properties like stroke-dasharray or stroke-dashoffset for dash effects. The catch is precision—dash values must align with path lengths for smooth motion.",
    topic: "css",
    subTopic: "Animations",
    code: `
  .path {
    stroke: #f1c40f;
    stroke-width: 4;
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
    animation: draw 2s ease forwards;
  }
  @keyframes draw {
    to { stroke-dashoffset: 0; }
  }
  /* HTML: <svg><path class="path" d="M10 10 L90 90" /></svg> */
  /* Draws line from start to end */
    `,
    quiz: {
      question: "What’s commonly animated in SVG with CSS?",
      options: [
        "Fill color",
        "Stroke-dashoffset",
        "Path d attribute",
        "Viewbox",
      ],
      answer: "Stroke-dashoffset",
    },
  },
  {
    id: "css-anim-18",
    question: "How does animation-iteration-count: infinite with delays work?",
    answer:
      "Setting animation-iteration-count to infinite loops the animation forever, but adding a delay complicates things. The delay applies only to the first cycle—subsequent loops start immediately after the previous one ends. A negative delay skips into the first cycle, looping from there, which can confuse timing expectations.",
    topic: "css",
    subTopic: "Animations",
    code: `
  .pulse {
    width: 100px;
    height: 100px;
    background: #2ecc71;
    animation: pulse 1s ease 0.5s infinite;
  }
  @keyframes pulse {
    50% { transform: scale(1.2); }
  }
  /* HTML: <div class="pulse"></div> */
  /* First pulse delayed, then loops without delay */
    `,
    quiz: {
      question: "When does delay apply in an infinite animation?",
      options: ["Every cycle", "Only the first cycle", "Never", "On hover"],
      answer: "Only the first cycle",
    },
  },
  {
    id: "css-anim-19",
    question: "What’s the challenge of animating z-index for layering?",
    answer:
      "Animating z-index changes an element’s stacking order, but it’s an integer property, so transitions snap between values instead of interpolating smoothly. This makes it tricky for fluid depth effects—pairing it with opacity or transform can fake smoother layering, but stacking context rules still apply.",
    topic: "css",
    subTopic: "Animations",
    code: `
  .layer {
    position: absolute;
    width: 100px;
    height: 100px;
    background: #e74c3c;
    animation: stack 2s ease infinite;
  }
  @keyframes stack {
    50% { z-index: 10; opacity: 0.8; }
  }
  /* HTML: <div class="layer"></div><div style="position: absolute; background: #3498db;"></div> */
  /* Snaps to top, fades slightly */
    `,
    quiz: {
      question: "Why doesn’t z-index animate smoothly?",
      options: [
        "It’s not a transform",
        "It’s an integer",
        "It’s blocked by opacity",
        "It’s too fast",
      ],
      answer: "It’s an integer",
    },
  },
  {
    id: "css-anim-20",
    question: "How can you animate scroll-behavior with keyframes?",
    answer:
      "The scroll-behavior property smooths scrolling, but it’s not animatable with keyframes directly. Instead, you animate scroll-related properties like transform or top to mimic scrolling, using keyframes for custom motion. The trick is syncing with real scroll events or overflow, which often requires JavaScript for precision.",
    topic: "css",
    subTopic: "Animations",
    code: `
  .scroller {
    height: 100px;
    overflow: hidden;
    position: relative;
  }
  .content {
    position: absolute;
    animation: scroll 3s ease infinite;
  }
  @keyframes scroll {
    100% { top: -100px; }
  }
  /* HTML: <div class="scroller"><div class="content">Text<br>More</div></div> */
  /* Simulates smooth scrolling */
    `,
    quiz: {
      question: "What’s a workaround for animating scroll?",
      options: [
        "Use scroll-behavior",
        "Animate transform or top",
        "Set overflow to scroll",
        "Increase duration",
      ],
      answer: "Animate transform or top",
    },
  },
];
