export type QnaTypes = {
  id: number;
  question: string;
  answer: string;
  topic: string;
  quiz?: QuizProps | null;
  code?: string | null;
};

export interface QuizProps {
  question: string;
  options: string[];
  answer: string;
}

export const qna: QnaTypes[] = [
  {
    id: 1,
    question: "What is promise in Javascript?",
    answer:
      "A promise in JavaScript represents the eventual completion or failure of an asynchronous operation, encapsulating its result.",
    topic: "javascript",
    quiz: {
      question: "What is a promise in JavaScript?",
      options: [
        "A. A guarantee that a function will always return a value",
        "B. A representation of an asynchronous operation's eventual completion or failure",
        "C. A way to prevent errors in JavaScript code",
        "D. A method for creating loops in JavaScript",
      ],
      answer:
        "B. A representation of an asynchronous operation's eventual completion or failure",
    },
    code: `// Example function that returns a promise
    function fetchData() {
      // Creating a new promise
      return new Promise((resolve, reject) => {
        // Simulating an asynchronous operation (e.g., fetching data from an API)
        setTimeout(() => {
          const data = { message: "Data fetched successfully" };
          // Resolving the promise with the fetched data
          resolve(data);
        }, 2000); // Simulating a delay of 2 seconds
      });
    }
    
    // Using the fetchData function
    fetchData()
      .then((result) => {
        // Promise resolved successfully
        console.log("Success:", result);
      })
      .catch((error) => {
        // Promise rejected with an error
        console.error("Error:", error);
      });
    `,
  },
  {
    id: 2,
    question: "What is closure in JavaScript?",
    answer:
      "A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).",
    topic: "javascript",
  },
  {
    id: 3,
    question: "What is hoisting in JavaScript?",
    answer:
      "Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase.",
    topic: "javascript",
  },
  {
    id: 4,
    question: "What are arrow functions in JavaScript?",
    answer:
      "Arrow functions are a concise way to write functions in JavaScript, introduced in ECMAScript 6 (ES6).",
    topic: "javascript",
  },
  {
    id: 5,
    question: "What is event delegation in JavaScript?",
    answer:
      "Event delegation is a technique in JavaScript where a single event listener is attached to a parent element to manage events on its child elements.",
    topic: "javascript",
  },
  {
    id: 6,
    question: "What is the use of the 'use strict' directive in JavaScript?",
    answer:
      "The 'use strict' directive is used to enable strict mode in JavaScript, which catches common coding errors and prevents certain actions.",
    topic: "javascript",
  },
  {
    id: 7,
    question: "What is a callback function in JavaScript?",
    answer:
      "A callback function is a function passed as an argument to another function to be executed later, usually after an asynchronous operation completes.",
    topic: "javascript",
  },
  {
    id: 8,
    question:
      "What is the difference between '==' and '===' operators in JavaScript?",
    answer:
      "'==' compares the values of two variables, whereas '===' compares both values and types.",
    topic: "javascript",
  },
  {
    id: 9,
    question: "What are higher-order functions in JavaScript?",
    answer:
      "Higher-order functions are functions that take other functions as arguments or return them.",
    topic: "javascript",
  },
  {
    id: 10,
    question: "What is the Event Loop in JavaScript?",
    answer:
      "The Event Loop is a mechanism in JavaScript that handles asynchronous operations by putting them in the event queue and executing them in the order they were placed, after the synchronous code execution is done.",
    topic: "javascript",
  },
  {
    id: 11,
    question:
      "What is the difference between 'let', 'const', and 'var' in JavaScript?",
    answer:
      "'let' and 'const' are block-scoped, while 'var' is function-scoped. 'const' is used for variables that should not be re-assigned, while 'let' allows re-assignment.",
    topic: "javascript",
  },
  {
    id: 12,
    question: "What are template literals in JavaScript?",
    answer:
      "Template literals are string literals allowing embedded expressions. They are enclosed by the backtick (`) character instead of double or single quotes.",
    topic: "javascript",
  },
  {
    id: 13,
    question: "What is object destructuring in JavaScript?",
    answer:
      "Object destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.",
    topic: "javascript",
  },
  {
    id: 14,
    question: "What is the purpose of the 'this' keyword in JavaScript?",
    answer:
      "The 'this' keyword refers to the object it belongs to. It has different values depending on where it is used.",
    topic: "javascript",
  },
  {
    id: 15,
    question: "What are ES6 modules in JavaScript?",
    answer:
      "ES6 modules are a way to organize and structure JavaScript code. They allow you to export and import functions, objects, or primitives from one module to another.",
    topic: "javascript",
  },
  {
    id: 16,
    question:
      "What is the difference between 'null' and 'undefined' in JavaScript?",
    answer:
      "'null' is an explicit absence of any value, while 'undefined' means that a variable has been declared but has not yet been assigned a value.",
    topic: "javascript",
  },
  {
    id: 17,
    question: "What is the 'prototype' property in JavaScript?",
    answer:
      "The 'prototype' property allows you to add new properties and methods to existing object constructors.",
    topic: "javascript",
  },
  {
    id: 18,
    question: "What is event bubbling and event capturing in JavaScript?",
    answer:
      "Event bubbling is the propagation of an event from the target element up to its parent elements. Event capturing is the opposite, where the event is captured from the topmost parent down to the target element.",
    topic: "javascript",
  },
  {
    id: 19,
    question: "What are rest parameters in JavaScript?",
    answer:
      "Rest parameters allow functions to accept an indefinite number of arguments as an array.",
    topic: "javascript",
  },
  {
    id: 20,
    question:
      "What is the difference between 'for...in' and 'for...of' loops in JavaScript?",
    answer:
      "'for...in' loops over the enumerable properties of an object, while 'for...of' loops over the values of an iterable object like arrays, strings, or NodeLists.",
    topic: "javascript",
  },
  // Add more entries as needed...
];
