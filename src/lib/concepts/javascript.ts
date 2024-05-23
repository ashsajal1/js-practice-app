export type QnaTypes = {
  id: number | string;
  question: string;
  answer: string;
  topic: string;
  quiz?: QuizProps | null;
  code?: string | null;
  subTopic?: string;
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
    quiz: {
      question: "What is a closure in JavaScript?",
      options: [
        "A. A function that is called immediately after its definition",
        "B. A feature that allows JavaScript code to be executed asynchronously",
        "C. A combination of a function and the lexical environment in which it was declared",
        "D. A built-in JavaScript method for sorting arrays",
      ],
      answer:
        "C. A combination of a function and the lexical environment in which it was declared",
    },
    code: `// Example demonstrating closure in JavaScript
  function outerFunction() {
    // Variable defined in the outer function's scope
    let outerVariable = "I am from the outer function";
  
    // Inner function accessing the outer variable
    function innerFunction() {
      console.log(outerVariable); // Accessing outerVariable from the outer function's scope
    }
  
    // Returning the inner function
    return innerFunction;
  }
  
  // Calling outerFunction to get the inner function
  const innerFunc = outerFunction();
  
  // Executing the inner function
  innerFunc(); // Output: I am from the outer function
  `,
  },
  {
    id: 3,
    question: "What is hoisting in JavaScript?",
    answer:
      "Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase.",
    topic: "javascript",
    quiz: {
      question: "What does hoisting refer to in JavaScript?",
      options: [
        "A. Moving variables and function declarations to the top of their scope",
        "B. Removing unused code during compilation",
        "C. Executing code without waiting for all resources to be loaded",
        "D. Automatically fixing syntax errors in code",
      ],
      answer:
        "A. Moving variables and function declarations to the top of their scope",
    },
    code: `// Example demonstrating hoisting in JavaScript
  console.log(myVar); // Output: undefined
  var myVar = "I am hoisted";
  
  console.log(myFunc()); // Output: "Function is hoisted"
  function myFunc() {
    return "Function is hoisted";
  }
  `,
  },
  {
    id: 4,
    question: "What are arrow functions in JavaScript?",
    answer:
      "Arrow functions are a concise way to write functions in JavaScript, introduced in ECMAScript 6 (ES6).",
    topic: "javascript",
    quiz: {
      question: "What do arrow functions provide in JavaScript?",
      options: [
        "A. A way to declare functions with the 'function' keyword",
        "B. A shorthand syntax for creating functions",
        "C. A method for defining asynchronous functions",
        "D. A feature for generating random numbers",
      ],
      answer: "B. A shorthand syntax for creating functions",
    },
    code: `// Example demonstrating arrow functions in JavaScript
  const add = (a, b) => a + b;
  console.log(add(2, 3)); // Output: 5
  
  const greet = name => "Hello, " + name + "!";
  console.log(greet("Alice")); // Output: Hello, Alice!
  `,
  },
  {
    id: 5,
    question: "What is event delegation in JavaScript?",
    answer:
      "Event delegation is a technique in JavaScript where a single event listener is attached to a parent element to manage events on its child elements.",
    topic: "javascript",
    quiz: {
      question: "What does event delegation involve in JavaScript?",
      options: [
        "A. Manually triggering events on child elements",
        "B. Attaching multiple event listeners to each child element",
        "C. Using a single event listener on a parent element to manage events for its children",
        "D. Preventing all events from propagating to parent elements",
      ],
      answer:
        "C. Using a single event listener on a parent element to manage events for its children",
    },
    code: `// Example demonstrating event delegation in JavaScript
  // Parent element
  const parent = document.getElementById("parent");
  
  // Event listener on parent element
  parent.addEventListener("click", function(event) {
    // Check if the clicked element is a child
    if (event.target.tagName === "LI") {
      console.log("Clicked on:", event.target.textContent);
    }
  });
  `,
  },
  {
    id: 6,
    question: "What is the use of the 'use strict' directive in JavaScript?",
    answer:
      "The 'use strict' directive is used to enable strict mode in JavaScript, which catches common coding errors and prevents certain actions.",
    topic: "javascript",
    quiz: {
      question: "What does the 'use strict' directive enable in JavaScript?",
      options: [
        "A. It enables debugging mode",
        "B. It allows implicit type conversion",
        "C. It catches common coding errors",
        "D. It disables all JavaScript features",
      ],
      answer: "C. It catches common coding errors",
    },
    code: `// Example demonstrating the use of 'use strict'
  "use strict";
  x = 3.14; // This will cause an error because x is not declared
  `,
  },
  {
    id: 7,
    question: "What is a callback function in JavaScript?",
    answer:
      "A callback function is a function passed as an argument to another function to be executed later, usually after an asynchronous operation completes.",
    topic: "javascript",
    quiz: {
      question: "What is the purpose of a callback function in JavaScript?",
      options: [
        "A. To execute code immediately",
        "B. To pass data between functions",
        "C. To delay the execution of code",
        "D. To execute code after an asynchronous operation completes",
      ],
      answer: "D. To execute code after an asynchronous operation completes",
    },
    code: `// Example demonstrating a callback function in JavaScript
  function fetchData(callback) {
    // Simulating an asynchronous operation
    setTimeout(() => {
      const data = { message: "Data fetched successfully" };
      // Calling the callback function with the fetched data
      callback(data);
    }, 2000);
  }
  
  // Callback function
  function processData(data) {
    console.log("Data processed:", data);
  }
  
  // Calling the fetchData function with the processData callback
  fetchData(processData);
  `,
  },
  {
    id: 8,
    question:
      "What is the difference between '==' and '===' operators in JavaScript?",
    answer:
      "'==' compares the values of two variables, whereas '===' compares both values and types.",
    topic: "javascript",
    quiz: {
      question: "How do '==' and '===' operators differ in JavaScript?",
      options: [
        "A. '==' compares both values and types, while '===' only compares values",
        "B. '==' only compares values, while '===' compares both values and types",
        "C. '==' is used for strict comparison, while '===' is used for loose comparison",
        "D. There is no difference between '==' and '===' operators",
      ],
      answer:
        "B. '==' only compares values, while '===' compares both values and types",
    },
    code: `// Example demonstrating the difference between '==' and '===' operators
  console.log(5 == "5"); // Output: true
  console.log(5 === "5"); // Output: false
  `,
  },
  {
    id: 9,
    question: "What are higher-order functions in JavaScript?",
    answer:
      "Higher-order functions are functions that take other functions as arguments or return them.",
    topic: "javascript",
    quiz: {
      question: "What defines a higher-order function in JavaScript?",
      options: [
        "A. Functions that only accept primitive data types as arguments",
        "B. Functions that return a boolean value",
        "C. Functions that take other functions as arguments or return them",
        "D. Functions that have a higher complexity than regular functions",
      ],
      answer:
        "C. Functions that take other functions as arguments or return them",
    },
    code: `// Example of a higher-order function in JavaScript
  function higherOrderFunction(callback) {
    console.log("Executing the higher-order function");
    callback(); // Executing the callback function
  }
  
  // Callback function
  function callbackFunction() {
    console.log("Executing the callback function");
  }
  
  // Calling the higher-order function with the callback function
  higherOrderFunction(callbackFunction);
  `,
  },
  {
    id: 10,
    question: "What is the Event Loop in JavaScript?",
    answer:
      "The Event Loop is a mechanism in JavaScript that handles asynchronous operations by putting them in the event queue and executing them in the order they were placed, after the synchronous code execution is done.",
    topic: "javascript",
    quiz: {
      question: "What role does the Event Loop play in JavaScript?",
      options: [
        "A. It handles synchronous operations",
        "B. It handles asynchronous operations",
        "C. It handles memory management",
        "D. It handles error handling",
      ],
      answer: "B. It handles asynchronous operations",
    },
    code: `// Example demonstrating the Event Loop in JavaScript
  console.log("Start");
  
  setTimeout(() => {
    console.log("Async operation 1");
  }, 2000);
  
  console.log("Middle");
  
  setTimeout(() => {
    console.log("Async operation 2");
  }, 1000);
  
  console.log("End");
  `,
  },
  {
    id: 11,
    question:
      "What is the difference between 'let', 'const', and 'var' in JavaScript?",
    answer:
      "'let' and 'const' are block-scoped, while 'var' is function-scoped. 'const' is used for variables that should not be re-assigned, while 'let' allows re-assignment.",
    topic: "javascript",
    quiz: {
      question: "Which statement about 'let', 'const', and 'var' is true?",
      options: [
        "A. 'let' and 'const' are function-scoped, while 'var' is block-scoped",
        "B. 'const' allows re-assignment of variables, while 'let' does not",
        "C. 'let' and 'const' are block-scoped, while 'var' is function-scoped",
        "D. 'var' is used for variables that should not be re-assigned",
      ],
      answer:
        "C. 'let' and 'const' are block-scoped, while 'var' is function-scoped",
    },
    code: `// Example demonstrating the difference between 'let', 'const', and 'var' in JavaScript
  function exampleFunction() {
    if (true) {
      var varVariable = "Var variable";
      let letVariable = "Let variable";
      const constVariable = "Const variable";
    }
    console.log(varVariable); // Output: Var variable
    console.log(letVariable); // ReferenceError: letVariable is not defined
    console.log(constVariable); // ReferenceError: constVariable is not defined
  }
  
  exampleFunction();
  `,
  },
  {
    id: 12,
    question: "What are template literals in JavaScript?",
    answer:
      "Template literals are string literals allowing embedded expressions. They are enclosed by the backtick (`) character instead of double or single quotes.",
    topic: "javascript",
    quiz: {
      question: "How are template literals different from regular strings?",
      options: [
        "A. Template literals cannot contain variables",
        "B. Template literals are enclosed by double quotes",
        "C. Template literals allow embedded expressions and use backticks",
        "D. Template literals are not supported in JavaScript",
      ],
      answer:
        "C. Template literals allow embedded expressions and use backticks",
    },
    code: `// Example demonstrating template literals in JavaScript
  const name = "Alice";
  const age = 30;
  console.log(\`My name is \${name} and I am \${age} years old.\`); // Output: My name is Alice and I am 30 years old.
  `,
  },
  {
    id: 13,
    question: "What is object destructuring in JavaScript?",
    answer:
      "Object destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.",
    topic: "javascript",
    quiz: {
      question: "What does object destructuring allow in JavaScript?",
      options: [
        "A. Reversing the order of array elements",
        "B. Accessing elements of nested arrays",
        "C. Unpacking values from arrays or properties from objects into distinct variables",
        "D. Assigning multiple variables to the same value",
      ],
      answer:
        "C. Unpacking values from arrays or properties from objects into distinct variables",
    },
    code: `// Example demonstrating object destructuring in JavaScript
  const person = { name: "Alice", age: 30, country: "Wonderland" };
  const { name, age } = person;
  console.log(name); // Output: Alice
  console.log(age); // Output: 30
  `,
  },
  {
    id: 14,
    question: "What is the purpose of the 'this' keyword in JavaScript?",
    answer:
      "The 'this' keyword refers to the object it belongs to. It has different values depending on where it is used.",
    topic: "javascript",
    quiz: {
      question: "What does the 'this' keyword refer to in JavaScript?",
      options: [
        "A. It refers to the current date and time",
        "B. It refers to the object it belongs to",
        "C. It refers to the parent object",
        "D. It refers to the global window object",
      ],
      answer: "B. It refers to the object it belongs to",
    },
    code: `// Example demonstrating the 'this' keyword in JavaScript
  const person = {
    name: "Alice",
    greet: function() {
      console.log("Hello, my name is " + this.name);
    }
  };
  person.greet(); // Output: Hello, my name is Alice
  `,
  },
  {
    id: 15,
    question: "What are ES6 modules in JavaScript?",
    answer:
      "ES6 modules are a way to organize and structure JavaScript code. They allow you to export and import functions, objects, or primitives from one module to another.",
    topic: "javascript",
    quiz: {
      question: "What do ES6 modules allow you to do in JavaScript?",
      options: [
        "A. Create loops",
        "B. Organize and structure code",
        "C. Manipulate the DOM",
        "D. Interact with external APIs",
      ],
      answer: "B. Organize and structure code",
    },
    code: `// Example demonstrating ES6 modules in JavaScript
  // Module: math.js
  export function add(a, b) {
    return a + b;
  }
  
  // Module: main.js
  import { add } from './math.js';
  
  console.log(add(2, 3)); // Output: 5
  `,
  },
  {
    id: 16,
    question:
      "What is the difference between 'null' and 'undefined' in JavaScript?",
    answer:
      "'null' is an explicit absence of any value, while 'undefined' means that a variable has been declared but has not yet been assigned a value.",
    topic: "javascript",
    quiz: {
      question: "How do 'null' and 'undefined' differ in JavaScript?",
      options: [
        "A. 'null' means a variable has not been declared, while 'undefined' means it has been declared",
        "B. 'null' is a primitive value, while 'undefined' is an object",
        "C. 'null' is an explicit absence of any value, while 'undefined' means a variable has not been initialized",
        "D. 'null' and 'undefined' have the same meaning in JavaScript",
      ],
      answer:
        "C. 'null' is an explicit absence of any value, while 'undefined' means a variable has not been initialized",
    },
    code: `// Example demonstrating the difference between 'null' and 'undefined' in JavaScript
  let x;
  console.log(x); // Output: undefined
  
  let y = null;
  console.log(y); // Output: null
  `,
  },
  {
    id: 17,
    question: "What is the 'prototype' property in JavaScript?",
    answer:
      "The 'prototype' property allows you to add new properties and methods to existing object constructors.",
    topic: "javascript",
    quiz: {
      question: "What does the 'prototype' property enable in JavaScript?",
      options: [
        "A. Adding properties and methods to existing object instances",
        "B. Creating new object constructors",
        "C. Defining primitive data types",
        "D. Controlling the execution context of functions",
      ],
      answer: "A. Adding properties and methods to existing object instances",
    },
    code: `// Example demonstrating the 'prototype' property in JavaScript
  // Constructor function
  function Person(name) {
    this.name = name;
  }
  
  // Adding a method to the prototype
  Person.prototype.greet = function() {
    console.log("Hello, my name is " + this.name);
  };
  
  // Creating an instance of the Person object
  const person = new Person("Alice");
  
  // Calling the greet method
  person.greet(); // Output: Hello, my name is Alice
  `,
  },
  {
    id: 18,
    question: "What is event bubbling and event capturing in JavaScript?",
    answer:
      "Event bubbling is the propagation of an event from the target element up to its parent elements. Event capturing is the opposite, where the event is captured from the topmost parent down to the target element.",
    topic: "javascript",
    quiz: {
      question:
        "How does event bubbling differ from event capturing in JavaScript?",
      options: [
        "A. Event bubbling starts from the topmost parent element, while event capturing starts from the target element",
        "B. Event bubbling propagates the event from the target element up to its parent elements, while event capturing does the opposite",
        "C. Event bubbling and event capturing are identical",
        "D. Event bubbling and event capturing are deprecated in modern JavaScript",
      ],
      answer:
        "B. Event bubbling propagates the event from the target element up to its parent elements, while event capturing does the opposite",
    },
    code: `// Example demonstrating event bubbling and event capturing in JavaScript
  // HTML structure
  <!-- HTML structure: <div id="outer"><div id="inner">Click me</div></div> -->
  // JavaScript code
  document.getElementById("outer").addEventListener("click", function() {
    console.log("Outer div clicked");
  }, true); // UseCapture set to true for event capturing
  
  document.getElementById("inner").addEventListener("click", function() {
    console.log("Inner div clicked");
  }, false); // UseCapture set to false for event bubbling
  `,
  },
  {
    id: 19,
    question: "What are rest parameters in JavaScript?",
    answer:
      "Rest parameters allow functions to accept an indefinite number of arguments as an array.",
    topic: "javascript",
    quiz: {
      question: "What do rest parameters enable functions to do in JavaScript?",
      options: [
        "A. Accept only a fixed number of arguments",
        "B. Accept an indefinite number of arguments as separate parameters",
        "C. Accept an indefinite number of arguments as an array",
        "D. Reject all arguments passed to the function",
      ],
      answer: "C. Accept an indefinite number of arguments as an array",
    },
    code: `// Example demonstrating rest parameters in JavaScript
  function sum(...args) {
    return args.reduce((total, num) => total + num, 0);
  }
  
  console.log(sum(1, 2, 3)); // Output: 6
  console.log(sum(1, 2, 3, 4, 5)); // Output: 15
  `,
  },
  {
    id: 20,
    question:
      "What is the difference between 'for...in' and 'for...of' loops in JavaScript?",
    answer:
      "'for...in' loops over the enumerable properties of an object, while 'for...of' loops over the values of an iterable object like arrays, strings, or NodeLists.",
    topic: "javascript",
    quiz: {
      question: "How do 'for...in' and 'for...of' loops differ in JavaScript?",
      options: [
        "A. 'for...in' loops over values, while 'for...of' loops over enumerable properties",
        "B. 'for...in' loops over the keys of an object, while 'for...of' loops over the values of an array",
        "C. 'for...in' loops over enumerable properties, while 'for...of' loops over the keys of an object",
        "D. 'for...in' loops over enumerable properties, while 'for...of' loops over the values of an iterable object",
      ],
      answer:
        "D. 'for...in' loops over enumerable properties, while 'for...of' loops over the values of an iterable object",
    },
    code: `// Example demonstrating the difference between 'for...in' and 'for...of' loops in JavaScript
  const array = ["a", "b", "c"];
  
  // Using 'for...in' loop
  console.log("Using 'for...in' loop:");
  for (let index in array) {
    console.log(index); // Output: 0, 1, 2
  }
  
  // Using 'for...of' loop
  console.log("Using 'for...of' loop:");
  for (let value of array) {
    console.log(value); // Output: 'a', 'b', 'c'
  }
  `,
  },
];
