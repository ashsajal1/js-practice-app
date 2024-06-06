export const tailwindcssQuizzes = [
  {
    id: "tailwind-1",
    question: "How do you apply a box shadow to a button only when it is both hovered and focused using Tailwind CSS?",
    options: [
      "Use `hover:focus:shadow-lg`",
      "Use `focus:hover:shadow-lg`",
      "Use `hover:focus-within:shadow-lg`",
      "Use `focus-within:hover:shadow-lg`"
    ],
    answer: "Use `focus:hover:shadow-lg`",
    type: "practical",
    topic: "tailwindcss",
    subTopic: "Combined States",
    lang: "en",
    explanation: "Using `focus:hover:shadow-lg` applies the box shadow only when the button is both hovered and focused.",
    complexity: "hard"
  },
  {
    id: "tailwind-2",
    question: "Explain how you can use the `group` class to change the background color of sibling elements when one sibling is hovered in Tailwind CSS.",
    options: [
      "Use `group-hover` on the sibling element",
      "Use `group-hover` on the hovered element",
      "Use `group-hover` on the parent element with `group` class",
      "Use `group-hover` on both the parent and sibling elements"
    ],
    answer: "Use `group-hover` on the parent element with `group` class",
    type: "theoretical",
    topic: "tailwindcss",
    subTopic: "Group Hover State",
    lang: "en",
    explanation: "To change the background color of sibling elements, the parent element needs the `group` class, and the sibling elements need the `group-hover` class for the desired state.",
    complexity: "hard"
  },
  {
    id: "tailwind-3",
    question: "How can you change the opacity of a text element when it is in a disabled state using Tailwind CSS?",
    options: [
      "Use `opacity-50` on the element",
      "Use `disabled:opacity-50` on the element",
      "Use `hover:opacity-50` on the element",
      "Use `focus:opacity-50` on the element"
    ],
    answer: "Use `disabled:opacity-50` on the element",
    type: "practical",
    topic: "tailwindcss",
    subTopic: "Disabled State",
    lang: "en",
    explanation: "Using the `disabled:opacity-50` class changes the opacity to 50% when the element is disabled.",
    complexity: "hard"
  },
  {
    id: "tailwind-4",
    question: "How do you apply a border and change text color only when an input field is both active and focus-within using Tailwind CSS?",
    options: [
      "Use `active:focus:border-green-500 focus:text-green-700`",
      "Use `focus-within:active:border-green-500 focus-within:active:text-green-700`",
      "Use `hover:focus:border-green-500 hover:focus:text-green-700`",
      "Use `focus:active:border-green-500 focus:active:text-green-700`"
    ],
    answer: "Use `focus-within:active:border-green-500 focus-within:active:text-green-700`",
    type: "practical",
    topic: "tailwindcss",
    subTopic: "Combined States",
    lang: "en",
    explanation: "Using `focus-within:active:border-green-500` and `focus-within:active:text-green-700` applies the styles only when the input field is both active and has focus within.",
    complexity: "hard"
  },
  {
    id: "tailwind-5",
    question: "What is the correct way to style a button that shows a different style when hovered over a focused button using Tailwind CSS?",
    options: [
      "Use `hover:focus:class-name`",
      "Use `focus:hover:class-name`",
      "Use `focus:class-name` then `hover:class-name`",
      "Use `hover:focus:class-name` on the button"
    ],
    answer: "Use `focus:hover:class-name` on the button",
    type: "theoretical",
    topic: "tailwindcss",
    subTopic: "Combined States",
    lang: "en",
    explanation: "Using `focus:hover:class-name` ensures the style is applied when the button is both focused and hovered.",
    complexity: "hard"
  },
  {
    id: "tailwind-6",
    question: "How can you use Tailwind CSS to create a card component that changes the border color and shadow when any of its children are focused?",
    options: [
      "Use `focus:border-blue-500 focus:shadow-lg` on the card",
      "Use `focus-within:border-blue-500 focus-within:shadow-lg` on the card",
      "Use `focus:hover:border-blue-500 focus:hover:shadow-lg` on the card",
      "Use `hover:border-blue-500 hover:shadow-lg` on the card"
    ],
    answer: "Use `focus-within:border-blue-500 focus-within:shadow-lg` on the card",
    type: "practical",
    topic: "tailwindcss",
    subTopic: "Focus Within State",
    lang: "en",
    explanation: "Using `focus-within:border-blue-500` and `focus-within:shadow-lg` on the parent div ensures these styles are applied when any child element is focused.",
    complexity: "hard"
  },
  {
    id: "tailwind-7",
    question: "Explain how to create a navigation bar where the link changes color when hovered and the parent div changes background when focused using Tailwind CSS.",
    options: [
      "Apply `hover:text-color` on links and `focus:bg-color` on the div",
      "Apply `hover:text-color` on links and `focus:bg-color` on links",
      "Apply `hover:text-color` on links and `group-focus:bg-color` on the div",
      "Apply `hover:text-color` on links and `group-hover:bg-color` on the div"
    ],
    answer: "Apply `hover:text-color` on links and `focus:bg-color` on the div",
    type: "theoretical",
    topic: "tailwindcss",
    subTopic: "Combined States",
    lang: "en",
    explanation: "Applying `hover:text-color` to links and `focus:bg-color` to the parent div achieves the desired behavior.",
    complexity: "hard"
  },
  {
    id: "tailwind-8",
    question: "How can you use Tailwind CSS to ensure an element is visually hidden but still accessible to screen readers?",
    options: [
      "Use `hidden` class",
      "Use `invisible` class",
      "Use `sr-only` class",
      "Use `opacity-0` class"
    ],
    answer: "Use `sr-only` class",
    type: "practical",
    topic: "tailwindcss",
    subTopic: "Accessibility",
    lang: "en",
    explanation: "Using the `sr-only` class in Tailwind CSS ensures that the content is visually hidden but accessible to screen readers.",
    complexity: "hard"
  },
  {
    id: "tailwind-9",
    question: "How do you apply styles to an element based on whether a parent or ancestor element has a specific state in Tailwind CSS?",
    options: [
      "Use `group` class on the ancestor and state modifiers on the child",
      "Directly apply state modifiers to the child element",
      "Use `state` class on the ancestor and `group-state` on the child",
      "None of the above"
    ],
    answer: "Use `group` class on the ancestor and state modifiers on the child",
    type: "theoretical",
    topic: "tailwindcss",
    subTopic: "Group State",
    lang: "en",
    explanation: "Applying the `group` class to the ancestor and using state modifiers like `group-hover` on the child element allows styling based on the state of the ancestor.",
    complexity: "hard"
  },
  {
  id: "tailwind-10",
  question: "Create a Tailwind CSS button that has different styles for normal, hover, focus, active, and disabled states, ensuring accessibility.",
  options: [
    "<button class=\"bg-blue-500 text-white hover:bg-blue-700 focus:bg-blue-300 active:bg-blue-900 disabled:opacity-50 disabled:cursor-not-allowed\">Click me</button>",
    "<button class=\"bg-blue-500 text-white hover:bg-blue-700 focus:bg-blue-300 active:bg-blue-900 disabled:opacity-50\">Click me</button>",
    "<button class=\"bg-blue-500 text-white hover:bg-blue-700 focus:bg-blue-300 active:bg-blue-900\">Click me</button>",
    "<button class=\"bg-blue-500 text-white hover:bg-blue-700 focus:bg-blue-300\">Click me</button>"
  ],
  answer: "<button class=\"bg-blue-500 text-white hover:bg-blue-700 focus:bg-blue-300 active:bg-blue-900 disabled:opacity-50 disabled:cursor-not-allowed\">Click me</button>",
  type: "practical",
  topic: "tailwindcss",
  subTopic: "Multiple States",
  lang: "en",
  explanation: "This button utilizes Tailwind CSS classes to define different styles for various states: normal, hover, focus, active, and disabled. The `bg-blue-500` and `text-white` classes define the default styles. The `hover:bg-blue-700`, `focus:bg-blue-300`, and `active:bg-blue-900` classes specify the styles for hover, focus, and active states, respectively. The `disabled:opacity-50` and `disabled:cursor-not-allowed` classes ensure that the button appears visually disabled and non-interactive when it is disabled.",
  complexity: "hard"
}
] 