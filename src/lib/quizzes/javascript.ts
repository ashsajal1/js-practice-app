import { QuizQuestionType } from "./types";

export const quizQuestions: QuizQuestionType[] = [
  {
    id: 1,
    question: "What does the following code snippet do?",
    code: "function foo() {\n  return bar();\n  function bar() {\n    return 'Hello, World!';\n  }\n}",
    options: [
      "Returns 'Hello, World!'",
      "Throws an error",
      "Returns undefined",
      "Infinite loop",
    ],
    answer: "Returns 'Hello, World!'",
    hint: "This is an example of function hoisting.",
    type: "practical",
    topic: "Function Hoisting",
    lang: "JavaScript",
  },
  {
    id: 2,
    question: "What will be the output of the following code snippet?",
    code: "console.log(typeof undefined === typeof NULL);",
    options: ["true", "false", "undefined", "null"],
    answer: "true",
    hint: "JavaScript is case-sensitive.",
    type: "practical",
    topic: "JavaScript Datatypes",
    lang: "JavaScript",
  },
  {
    id: 3,
    question:
      "Which of the following is not a valid way to create an object in JavaScript?",
    options: ["Object.create(null)", "new Object()", "{}", "Object.make()"],
    answer: "Object.make()",
    hint: "Check the documentation for the correct ways to create objects in JavaScript.",
    type: "theoretical",
    topic: "Objects in JavaScript",
    lang: "JavaScript",
  },
  {
    id: 4,
    question: "What will the following code log to the console?",
    code: "let x = 10;\nif (x > 5) {\n  let x = 5;\n  console.log(x);\n}\nconsole.log(x);",
    options: ["10, 5", "5, 10", "10, 10", "5, 5"],
    answer: "5, 10",
    hint: "Consider the scope of the variable declared with 'let'.",
    type: "practical",
    topic: "Variable Scope",
    lang: "JavaScript",
  },
  {
    id: 5,
    question: "What does the 'this' keyword refer to in JavaScript?",
    options: [
      "The current object",
      "The global object",
      "The function itself",
      "Depends on the context",
    ],
    answer: "Depends on the context",
    hint: "The value of 'this' varies depending on where it is used.",
    type: "theoretical",
    topic: "'this' keyword",
    lang: "JavaScript",
  },
  {
    id: 6,
    question: "What will be the output of the following code snippet?",
    code: "let arr = [1, 2, 3];\narr.length = 0;\nconsole.log(arr);",
    options: ["[]", "[1, 2, 3]", "undefined", "Throws an error"],
    answer: "[]",
    hint: "Setting the length property of an array changes its size.",
    type: "practical",
    topic: "Array Manipulation",
    lang: "JavaScript",
  },
  {
    id: 7,
    question:
      "Which of the following methods is used to join two or more arrays?",
    options: ["concat()", "push()", "pop()", "shift()"],
    answer: "concat()",
    hint: "This method does not modify the original arrays, but returns a new array.",
    type: "theoretical",
    topic: "Array Methods",
    lang: "JavaScript",
  },
  {
    id: 8,
    question: "What will be the result of the following code?",
    code: "console.log(0.1 + 0.2 === 0.3);",
    options: ["true", "false", "undefined", "Throws an error"],
    answer: "false",
    hint: "Floating-point arithmetic can be imprecise.",
    type: "practical",
    topic: "Floating Point Precision",
    lang: "JavaScript",
  },
  {
    id: 9,
    question: "How can you create a promise in JavaScript?",
    options: [
      "new Promise()",
      "Promise.create()",
      "promise()",
      "new promise()",
    ],
    answer: "new Promise()",
    hint: "Promises are objects representing the eventual completion or failure of an asynchronous operation.",
    type: "theoretical",
    topic: "Promises",
    lang: "JavaScript",
  },
  {
    id: 10,
    question: "What will the following code output?",
    code: "let a = 1;\nlet b = 2;\n[a, b] = [b, a];\nconsole.log(a, b);",
    options: ["1, 2", "2, 1", "undefined, undefined", "Throws an error"],
    answer: "2, 1",
    hint: "This is an example of array destructuring.",
    type: "practical",
    topic: "Array Destructuring",
    lang: "JavaScript",
  },
  {
    id: 11,
    question: "What will be the output of the following code snippet?",
    code: `async function fetchData() {\n  return "data";\n}\n\nasync function getData() {\n  const data = await fetchData();\n  console.log(data);\n}\ngetData();`,
    options: [
      "undefined",
      "Promise {<resolved>: 'data'}",
      "'data'",
      "Throws an error",
    ],
    answer: "'data'",
    hint: "Consider the behavior of 'await' in asynchronous functions.",
    type: "practical",
    topic: "Async/Await",
    lang: "JavaScript",
  },
  {
    id: 12,
    question: "What will be the output of the following code snippet?",
    code: `let obj = { a: 1, b: 2 };\nlet clone = { ...obj, c: 3 };\nconsole.log(clone);`,
    options: [
      "{ a: 1, b: 2 }",
      "{ a: 1, b: 2, c: 3 }",
      "{ a: 1, b: 2, c: undefined }",
      "{ a: 1, b: 2, c: null }",
    ],
    answer: "{ a: 1, b: 2, c: 3 }",
    hint: "Spread syntax can be used to shallow copy objects.",
    type: "practical",
    topic: "Object Spread Syntax",
    lang: "JavaScript",
  },
  {
    id: 13,
    question: "What will be logged to the console?",
    code: `function createIncrement() {\n  let count = 0;\n  function increment() {\n    count++;\n  }\n  let message = \`Count is \${count}\`;\n  function log() {\n    console.log(message);\n  }\n  return [increment, log];\n}\n\nconst [increment, log] = createIncrement();\nincrement();\nlog();`,
    options: [
      "'Count is 0'",
      "'Count is 1'",
      "'undefined'",
      "'Throws an error'",
    ],
    answer: "'Count is 0'",
    hint: "Closures capture the variable's environment, not its value at the time of the closure creation.",
    type: "practical",
    topic: "Closures",
    lang: "JavaScript",
  },
  {
    id: 14,
    question: "What will the following code log to the console?",
    code: `let x = 10;\nconst y = x++;\nconsole.log(x, y);`,
    options: ["10, 10", "11, 10", "10, 11", "11, 11"],
    answer: "11, 10",
    hint: "Understand the difference between postfix and prefix increment operators.",
    type: "practical",
    topic: "Increment Operators",
    lang: "JavaScript",
  },
  {
    id: 15,
    question: "What will be the output of the following code?",
    code: `let arr = [1, 2, 3];\narr.forEach(function(item, index) {\n  arr[index] = item * 2;\n});\nconsole.log(arr);`,
    options: ["[1, 2, 3]", "[2, 4, 6]", "undefined", "Throws an error"],
    answer: "[2, 4, 6]",
    hint: "The forEach method executes a provided function once for each array element.",
    type: "practical",
    topic: "Array Methods",
    lang: "JavaScript",
  },
  {
    id: 16,
    question: "What will the following code log to the console?",
    code: `let a = 5;\nlet b = 10;\n[a, b] = [b, a];\nconsole.log(a, b);`,
    options: ["5, 10", "10, 5", "undefined, undefined", "Throws an error"],
    answer: "10, 5",
    hint: "This is an example of array destructuring.",
    type: "practical",
    topic: "Array Destructuring",
    lang: "JavaScript",
  },
  {
    id: 17,
    question: "What will be the output of the following code snippet?",
    code: `let mySet = new Set([1, 2, 3, 4]);\nmySet.add(5);\nmySet.add(2);\nconsole.log(mySet);`,
    options: [
      "Set { 1, 2, 3, 4, 5 }",
      "Set { 1, 2, 3, 4 }",
      "Set { 1, 2, 2, 3, 4, 5 }",
      "Set { 5, 1, 2, 3, 4 }",
    ],
    answer: "Set { 1, 2, 3, 4, 5 }",
    hint: "Sets in JavaScript are collections of unique values.",
    type: "practical",
    topic: "Sets",
    lang: "JavaScript",
  },
  {
    id: 18,
    question: "What will the following code output?",
    code: `const person = {\n  name: "Alice",\n  age: 25,\n};\n\nconst { name, age } = person;\nconsole.log(name, age);`,
    options: [
      "Alice 25",
      "undefined undefined",
      "Alice undefined",
      "Throws an error",
    ],
    answer: "Alice 25",
    hint: "This is an example of object destructuring.",
    type: "practical",
    topic: "Object Destructuring",
    lang: "JavaScript",
  },
  {
    id: 19,
    question: "What does the following code snippet do?",
    code: `const add = (x) => (y) => x + y;\nconst add5 = add(5);\nconsole.log(add5(10));`,
    options: ["5", "10", "15", "Throws an error"],
    answer: "15",
    hint: "This is an example of a higher-order function.",
    type: "practical",
    topic: "Higher-Order Functions",
    lang: "JavaScript",
  },
  {
    id: 20,
    question: "What will be the output of the following code?",
    code: `let promise = new Promise((resolve, reject) => {\n  setTimeout(() => resolve("done!"), 1000);\n});\npromise.then(result => console.log(result));\nconsole.log("Hello");`,
    options: [
      "Hello\ndone!",
      "done!\nHello",
      "undefined\nHello",
      "Throws an error",
    ],
    answer: "Hello\ndone!",
    hint: "Promises are asynchronous.",
    type: "practical",
    topic: "Promises",
    lang: "JavaScript",
  },
];