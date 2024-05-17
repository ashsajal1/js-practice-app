export interface QuizQuestionType {
  id: number;
  question: string;
  code?: string;
  options?: string[];
  answer: string;
  hint?: string;
  type?: "practical" | "theoretical" | null;
  topic: string;
  lang: string;
}

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
  // Add more questions here
];
