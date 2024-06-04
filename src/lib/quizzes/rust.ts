import { QuizQuestionType } from "./types";

export const rustQuizQuestions: QuizQuestionType[] = [
  {
    id: "rust-1",
    question: "What will be the output of the following Rust code snippet?",
    code: `fn main() {
      let mut vec = vec![1, 2, 3, 4, 5];
      for i in 0..vec.len() {
          vec[i] += 1;
      }
      println!("{:?}", vec);
  }`,
    options: [
      "[2, 3, 4, 5, 6]",
      "[1, 2, 3, 4, 5]",
      "[0, 1, 2, 3, 4]",
      "Compilation Error",
    ],
    answer: "[2, 3, 4, 5, 6]",
    hint: "Consider what the for loop is doing to each element of the vector.",
    type: "practical",
    topic: "Rust",
    lang: "Rust",
    explanation:
      "The for loop iterates over the indices of the vector, incrementing each element by 1. Therefore, the output will be [2, 3, 4, 5, 6].",
    complexity: "hard",
  },
  {
    id: "rust-2",
    question:
      "Which of the following traits must be implemented for a type to be used as a key in a HashMap?",
    options: ["Eq, Hash", "Clone", "PartialEq", "Copy"],
    answer: "Eq, Hash",
    hint: "A key must be comparable and hashable.",
    type: "theoretical",
    topic: "Rust",
    lang: "Rust",
    explanation:
      "For a type to be used as a key in a HashMap, it must implement the Eq and Hash traits. Eq is required for equality comparisons, and Hash is required for computing the hash value.",
    complexity: "hard",
  },
  {
    id: "rust-3",
    question: "What is the output of the following code and why?",
    code: `fn main() {
      let x = Some(5);
      if let Some(y) = x {
          println!("{}", y);
      }
      println!("{:?}", x);
  }`,
    options: ["5, None", "5, Some(5)", "None, None", "None, Some(5)"],
    answer: "5, Some(5)",
    hint: "Consider the ownership and pattern matching rules.",
    type: "practical",
    topic: "Rust",
    lang: "Rust",
    explanation:
      "The if let construct matches Some(5) and binds 5 to y, but x is still Some(5) since the value inside the Option is not moved, just borrowed temporarily.",
    complexity: "hard",
  },
  {
    id: "rust-4",
    question:
      "Explain the concept of lifetimes in Rust and how they prevent dangling references.",
    answer:
      "Lifetimes in Rust determine the duration for which a reference is valid.",
    hint: "Think about how Rust's borrow checker works.",
    type: "theoretical",
    topic: "Rust",
    lang: "Rust",
    explanation:
      "Lifetimes are a core concept in Rust that helps ensure memory safety by preventing dangling references. The borrow checker uses lifetimes to track the scope of references and ensure they do not outlive their referents.",
    complexity: "hard",
    options: [
      "Lifetimes in Rust are used to allocate memory for variables.",
      "Lifetimes in Rust determine the duration for which a reference is valid.",
      "Lifetimes in Rust are only applicable to mutable references.",
      "Lifetimes in Rust are automatically managed by the garbage collector.",
    ],
  },
  {
    id: "rust-5",
    question: "What will the following code print and why?",
    code: `fn main() {
      let a = String::from("Hello");
      let b = a;
      println!("{}, world!", a);
  }`,
    options: [
      "Hello, world!",
      "world!",
      "Compilation Error",
      "Panic at runtime",
    ],
    answer: "Compilation Error",
    hint: "Consider ownership and move semantics.",
    type: "practical",
    topic: "Rust",
    lang: "Rust",
    explanation:
      "In Rust, when `a` is assigned to `b`, the ownership of the String is moved to `b`. Therefore, `a` is no longer valid, and attempting to use `a` after the move results in a compilation error.",
    complexity: "hard",
  },
];
