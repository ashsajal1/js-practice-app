import { QuizQuestionType } from "./types";

export const dotnetQuizQuestions: QuizQuestionType[] = [
    {
      id: "dotnet-1",
      question: "What will be the output of the following C# code snippet?",
      code: `using System;
  
  class Program
  {
      static void Main(string[] args)
      {
          int x = 5;
          int y = 10;
          int z = x + y;
          Console.WriteLine($"The sum of {x} and {y} is {z}");
      }
  }`,
      options: ["The sum of 5 and 10 is 15", "The sum of x and y is z", "15", "Compilation Error"],
      answer: "The sum of 5 and 10 is 15",
      hint: "Consider how string interpolation works in C#.",
      type: "practical",
      topic: "Dotnet",
      lang: "C#",
      explanation: "String interpolation allows variables to be directly embedded within a string. Therefore, the output will be 'The sum of 5 and 10 is 15'.",
      complexity: "hard"
    },
    {
      id: "dotnet-2",
      question: "What is the purpose of the async and await keywords in C#?",
      options: ["To create multi-threaded applications", "To handle asynchronous operations without blocking the main thread", "To define extension methods", "To implement interface inheritance"],
      answer: "To handle asynchronous operations without blocking the main thread",
      hint: "Think about how async/await works in asynchronous programming.",
      type: "theoretical",
      topic: "Dotnet",
      lang: "C#",
      explanation: "The async and await keywords in C# are used to simplify asynchronous programming by allowing methods to execute asynchronously without blocking the calling thread. They enable developers to write code that looks synchronous but behaves asynchronously.",
      complexity: "hard"
    },
    {
      id: "dotnet-3",
      question: "What is the purpose of the Entity Framework Core in .NET applications?",
      options: ["To provide a lightweight web server", "To enable cross-platform development", "To facilitate object-relational mapping (ORM)", "To automate software testing"],
      answer: "To facilitate object-relational mapping (ORM)",
      hint: "Consider the role of Entity Framework Core in database interactions.",
      type: "theoretical",
      topic: "Dotnet",
      lang: "C#",
      explanation: "Entity Framework Core is an ORM framework that simplifies database interactions by allowing developers to work with database entities as .NET objects. It abstracts away the complexity of database management and provides a higher-level API for database operations.",
      complexity: "hard"
    },
    {
      id: "dotnet-4",
      question: "Explain the difference between value types and reference types in C#.",
      answer: "In C#, value types hold their data directly, whereas reference types hold a reference to their data. Value types are stored on the stack, while reference types are stored on the heap. When a value type is assigned to another variable, a copy of the data is created, whereas with reference types, both variables reference the same data.",
      hint: "Consider how variables are stored in memory.",
      type: "theoretical",
      topic: "Dotnet",
      lang: "C#",
      explanation: "Understanding the distinction between value types and reference types is crucial in C# memory management. Value types include primitive types like int, float, and struct, while reference types include classes, interfaces, arrays, and delegates.",
      complexity: "hard"
    },
    {
      id: "dotnet-5",
      question: "What will be the output of the following code and why?",
      code: `class Base
  {
      public virtual void Print()
      {
          Console.WriteLine("Base class");
      }
  }
  
  class Derived : Base
  {
      public override void Print()
      {
          Console.WriteLine("Derived class");
      }
  }
  
  class Program
  {
      static void Main(string[] args)
      {
          Base obj = new Derived();
          obj.Print();
      }
  }`,
      options: ["Base class", "Derived class", "Compilation Error", "Runtime Error"],
      answer: "Derived class",
      hint: "Consider how method overriding works in inheritance.",
      type: "practical",
      topic: "Dotnet",
      lang: "C#",
      explanation: "Even though the object is of type Base, the method call is resolved at runtime based on the actual type of the object, which is Derived. Therefore, the output will be 'Derived class'.",
      complexity: "hard"
    }
  ];
  