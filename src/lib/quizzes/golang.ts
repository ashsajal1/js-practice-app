import { QuizQuestionType } from "./types";

export const golangQuizQuestions: QuizQuestionType[] = [
  {
    id: "golang-1",
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
    lang: "golang",
    explanation:
      "This code defines three functions: `main()`, `foo()`, and `bar()`. The `main()` function calls `foo()`, which in turn calls `bar()`. The `bar()` function returns the integer value `42`, which is then returned by `foo()` and printed by the `main()` function.",
  },
  {
    id: "golang-2",
    question: "What will be the output of the following Go code snippet?",
    code: 'package main\n\nfunc main() {\n  var x int\n  if x == nil {\n    println("x is nil")\n  } else {\n    println("x is not nil")\n  }\n}',
    options: [
      "x is nil",
      "x is not nil",
      "Throws a compilation error",
      "undefined behavior",
    ],
    answer: "Throws a compilation error",
    hint: "Nil is only used with pointers, interfaces, maps, slices, channels, and function types.",
    type: "practical",
    topic: "Nil and Zero Values",
    lang: "golang",
    explanation:
      "In Go, the `nil` value is only used with pointers, interfaces, maps, slices, channels, and function types. Comparing an integer variable `x` to `nil` will result in a compilation error, as the `==` operator cannot be used to compare an integer to `nil`.",
  },
  {
    id: "golang-3",
    question:
      "Which of the following is not a valid way to declare a variable in Go?",
    options: ["var x int", "x := 10", "x = 10", "var x = 10"],
    answer: "x = 10",
    hint: "Variable declaration requires the use of var or := for initialization.",
    type: "theoretical",
    topic: "Variable Declaration",
    lang: "golang",
    explanation:
      "In Go, variables can be declared in three ways: 1) `var x int` to declare a variable with a default value, 2) `x := 10` to declare and initialize a variable using the short variable declaration syntax, and 3) `var x = 10` to declare and initialize a variable. The `x = 10` syntax is not a valid way to declare a variable in Go, as it requires the variable to be already declared before it can be assigned a value.",
  },
  {
    id: "golang-4",
    question: "What will the following Go code log to the console?",
    code: "package main\n\nfunc main() {\n  x := 10\n  if x > 5 {\n    x := 5\n    println(x)\n  }\n  println(x)\n}",
    options: ["10, 5", "5, 10", "10, 10", "5, 5"],
    answer: "5, 10",
    hint: "Consider the scope of variables in Go.",
    type: "practical",
    topic: "Variable Scope",
    lang: "golang",
    explanation:
      "In this code, the outer `x` variable is declared and initialized to `10`. Inside the `if` block, a new `x` variable is declared with a value of `5`. When `println(x)` is called inside the `if` block, it will print the inner `x` value of `5`. After the `if` block, the outer `x` value of `10` is printed.",
  },
  {
    id: "golang-5",
    question: "What does the 'defer' keyword do in Go?",
    options: [
      "Defers the execution of a function until the surrounding function returns",
      "Pauses the execution of a function",
      "Skips the execution of a function",
      "Executes a function immediately",
    ],
    answer:
      "Defers the execution of a function until the surrounding function returns",
    hint: "Defer is commonly used for cleanup actions.",
    type: "theoretical",
    topic: "Defer Statement",
    lang: "golang",
    explanation:
      "The `defer` keyword in Go is used to delay the execution of a function until the surrounding function returns. This is often used for cleanup actions, such as closing a file or database connection, even if an error occurs in the middle of the function.",
  },
  {
    id: "golang-6",
    question: "What will be the output of the following Go code snippet?",
    code: "package main\n\nfunc main() {\n  arr := []int{1, 2, 3}\n  arr = nil\n  println(len(arr))\n}",
    options: ["0", "3", "nil", "Throws a runtime error"],
    answer: "0",
    hint: "Setting a slice to nil resets its length to zero.",
    type: "practical",
    topic: "Slices",
    lang: "golang",
    explanation:
      "In this code, the slice `arr` is first initialized with the values `1`, `2`, and `3`. Then, the slice is set to `nil`, which resets its length to `0`. Therefore, the output of `println(len(arr))` will be `0`.",
  },
  {
    id: "golang-7",
    question:
      "Which of the following is not a valid method to concatenate strings in Go?",
    options: [
      "Using + operator",
      "Using fmt.Sprintf",
      "Using strings.Join",
      "Using append()",
    ],
    answer: "Using append()",
    hint: "Check the documentation for string manipulation methods.",
    type: "theoretical",
    topic: "String Concatenation",
    lang: "golang",
    explanation:
      "Go provides several ways to concatenate strings, including the `+` operator, `fmt.Sprintf()`, and `strings.Join()`. However, using the `append()` function is not a valid way to concatenate strings in Go, as `append()` is used to add elements to a slice, not to concatenate strings.",
  },
  {
    id: "golang-8",
    question: "What will be the result of the following Go code?",
    code: 'package main\n\nimport "fmt"\n\nfunc main() {\n  fmt.Println(0.1 + 0.2 == 0.3)\n}',
    options: ["true", "false", "undefined", "Throws a runtime error"],
    answer: "false",
    hint: "Floating-point arithmetic can be imprecise.",
    type: "practical",
    topic: "Floating Point Precision",
    lang: "golang",
    explanation:
      "Due to the way floating-point numbers are represented in computers, the result of `0.1 + 0.2` may not be exactly equal to `0.3`. This is a known issue with floating-point arithmetic, and the output of the given code will be `false`.",
  },
  {
    id: "golang-9",
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
    lang: "golang",
    explanation:
      "In Go, you can create a new goroutine (a lightweight thread of execution) by using the `go` keyword followed by a function call. This starts a new goroutine that runs concurrently with the main program.",
  },
  {
    id: "golang-10",
    question: "What will the following Go code output?",
    code: 'package main\n\nimport "fmt"\n\nfunc main() {\n  a, b := 1, 2\n  a, b = b, a\n  fmt.Println(a, b)\n}',
    options: [
      "1, 2",
      "2, 1",
      "undefined, undefined",
      "Throws a compilation error",
    ],
    answer: "2, 1",
    hint: "This is an example of tuple assignment.",
    type: "practical",
    topic: "Tuple Assignment",
    lang: "golang",
    explanation:
      "The code demonstrates the use of tuple assignment in Go to swap the values of two variables. Tuple assignment allows you to assign multiple values to multiple variables in a single statement. In this case, a, b = b, a swaps the values of a and b, so a ends up with the value 2 and b ends up with the value 1.",
  },
];
