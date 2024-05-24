import { QuizQuestionType } from "./types";

export const golangQuizQuestions: QuizQuestionType[] = [
  {
    id: 1,
    question: "What does the following Go code snippet do?",
    code: "package main\n\nfunc main() {\n  println(foo())\n}\n\nfunc foo() int {\n  return bar()\n}\n\nfunc bar() int {\n  return 42\n}",
    options: [
      "Prints 42",
      "Throws a compilation error",
      "Prints 0",
      "Infinite loop",
    ],
    answer: "Prints 42",
    hint: "Function calls are straightforward in Go.",
    type: "practical",
    topic: "Function Calls",
    lang: "Go",
  },
  {
    id: 2,
    question: "What will be the output of the following Go code snippet?",
    code: "package main\n\nfunc main() {\n  var x int\n  if x == nil {\n    println(\"x is nil\")\n  } else {\n    println(\"x is not nil\")\n  }\n}",
    options: ["x is nil", "x is not nil", "Throws a compilation error", "undefined behavior"],
    answer: "Throws a compilation error",
    hint: "Nil is only used with pointers, interfaces, maps, slices, channels, and function types.",
    type: "practical",
    topic: "Nil and Zero Values",
    lang: "Go",
  },
  {
    id: 3,
    question: "Which of the following is not a valid way to declare a variable in Go?",
    options: ["var x int", "x := 10", "x = 10", "var x = 10"],
    answer: "x = 10",
    hint: "Variable declaration requires the use of var or := for initialization.",
    type: "theoretical",
    topic: "Variable Declaration",
    lang: "Go",
  },
  {
    id: 4,
    question: "What will the following Go code log to the console?",
    code: "package main\n\nfunc main() {\n  x := 10\n  if x > 5 {\n    x := 5\n    println(x)\n  }\n  println(x)\n}",
    options: ["10, 5", "5, 10", "10, 10", "5, 5"],
    answer: "5, 10",
    hint: "Consider the scope of variables in Go.",
    type: "practical",
    topic: "Variable Scope",
    lang: "Go",
  },
  {
    id: 5,
    question: "What does the 'defer' keyword do in Go?",
    options: [
      "Defers the execution of a function until the surrounding function returns",
      "Pauses the execution of a function",
      "Skips the execution of a function",
      "Executes a function immediately",
    ],
    answer: "Defers the execution of a function until the surrounding function returns",
    hint: "Defer is commonly used for cleanup actions.",
    type: "theoretical",
    topic: "Defer Statement",
    lang: "Go",
  },
  {
    id: 6,
    question: "What will be the output of the following Go code snippet?",
    code: "package main\n\nfunc main() {\n  arr := []int{1, 2, 3}\n  arr = nil\n  println(len(arr))\n}",
    options: ["0", "3", "nil", "Throws a runtime error"],
    answer: "0",
    hint: "Setting a slice to nil resets its length to zero.",
    type: "practical",
    topic: "Slices",
    lang: "Go",
  },
  {
    id: 7,
    question: "Which of the following is not a valid method to concatenate strings in Go?",
    options: ["Using + operator", "Using fmt.Sprintf", "Using strings.Join", "Using append()"],
    answer: "Using append()",
    hint: "Check the documentation for string manipulation methods.",
    type: "theoretical",
    topic: "String Concatenation",
    lang: "Go",
  },
  {
    id: 8,
    question: "What will be the result of the following Go code?",
    code: "package main\n\nimport \"fmt\"\n\nfunc main() {\n  fmt.Println(0.1 + 0.2 == 0.3)\n}",
    options: ["true", "false", "undefined", "Throws a runtime error"],
    answer: "false",
    hint: "Floating-point arithmetic can be imprecise.",
    type: "practical",
    topic: "Floating Point Precision",
    lang: "Go",
  },
  {
    id: 9,
    question: "How can you create a goroutine in Go?",
    options: [
      "go func()",
      "goroutine func()",
      "goRoutine func()",
      "start func()",
    ],
    answer: "go func()",
    hint: "Goroutines are lightweight threads managed by the Go runtime.",
    type: "theoretical",
    topic: "Goroutines",
    lang: "Go",
  },
  {
    id: 10,
    question: "What will the following Go code output?",
    code: "package main\n\nimport \"fmt\"\n\nfunc main() {\n  a, b := 1, 2\n  a, b = b, a\n  fmt.Println(a, b)\n}",
    options: ["1, 2", "2, 1", "undefined, undefined", "Throws a compilation error"],
    answer: "2, 1",
    hint: "This is an example of tuple assignment.",
    type: "practical",
    topic: "Tuple Assignment",
    lang: "Go",
  },
];