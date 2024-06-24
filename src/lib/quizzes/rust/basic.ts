import { QuizQuestionType } from "../types";

export const rustBasicQuizQuestions: QuizQuestionType[] = [
  {
    id: "basic-1-rust",
    question: "What is the primary purpose of the `main` function in Rust?",
    options: [
      "To define the entry point of a Rust program.",
      "To handle user input.",
      "To manage memory allocation.",
      "To perform error handling.",
    ],
    answer: "To define the entry point of a Rust program.",
    hint: "Think about where the execution of a Rust program begins.",
    type: "theoretical",
    topic: "Rust",
    lang: "Rust",
    explanation:
      "The `main` function in Rust serves as the entry point for the program. When a Rust program is executed, the `main` function is the first function that is called.",
    complexity: "easy",
  },
  {
    id: "basic-2-rust",
    question: "What is the difference between `let` and `mut` in Rust?",
    options: [
      "`let` declares a variable, while `mut` makes it mutable.",
      "`let` declares a constant, while `mut` declares a variable.",
      "`let` declares a function, while `mut` declares a variable.",
      "`let` declares a variable, while `mut` makes it immutable.",
    ],
    answer: "`let` declares a variable, while `mut` makes it mutable.",
    hint: "Think about how Rust handles variable mutability.",
    type: "theoretical",
    topic: "Rust",
    lang: "Rust",
    explanation:
      "In Rust, `let` is used to declare a variable. By default, variables declared with `let` are immutable. However, you can use the `mut` keyword to make a variable mutable, allowing you to change its value after it has been declared.",
    complexity: "easy",
  },
  {
    id: "basic-3-rust",
    question: "What is the purpose of the `println!` macro in Rust?",
    options: [
      "To read input from the user.",
      "To print output to the console.",
      "To define a new function.",
      "To create a new variable.",
    ],
    answer: "To print output to the console.",
    hint: "Think about how you would display information to the user in a Rust program.",
    type: "theoretical",
    topic: "Rust",
    lang: "Rust",
    explanation:
      "The `println!` macro in Rust is used to print output to the console. It allows you to display text, variables, and other data to the user.",
    complexity: "easy",
  },
  {
    id: "basic-4-rust",
    question: "What data type is used to represent whole numbers in Rust?",
    options: ["String", "i32", "f64", "bool"],
    answer: "i32",
    hint: "Think about the common data type for integers in programming languages.",
    type: "theoretical",
    topic: "Rust",
    lang: "Rust",
    explanation:
      "In Rust, `i32` is the most commonly used data type for representing whole numbers (integers). It stands for a 32-bit signed integer.",
    complexity: "easy",
  },
  {
    id: "basic-5-rust",
    question: "What is the purpose of the `if` statement in Rust?",
    options: [
      "To define a new function.",
      "To create a new variable.",
      "To execute a block of code conditionally.",
      "To handle errors.",
    ],
    answer: "To execute a block of code conditionally.",
    hint: "Think about how you would control the flow of execution in a Rust program based on conditions.",
    type: "theoretical",
    topic: "Rust",
    lang: "Rust",
    explanation:
      "The `if` statement in Rust is used to execute a block of code conditionally. It allows you to check a condition and only execute the code within the `if` block if the condition is true.",
    complexity: "easy",
  },
];
