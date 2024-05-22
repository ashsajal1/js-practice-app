export const rustConcepts = [
    {
      id: 21,
      question: "What is Ownership in Rust?",
      answer:
        "Ownership is a set of rules that governs how a Rust program manages memory. Every value in Rust has a variable that’s called its owner, and there can only be one owner at a time. When the owner goes out of scope, the value will be dropped.",
      topic: "Rust",
      code: `
  fn main() {
      let s1 = String::from("hello");
      let s2 = s1; // s1 is moved to s2
      // println!("{}", s1); // This would cause a compile error because s1 is no longer valid
      println!("{}", s2);
  }
  `,
      quiz: {
        question: "Which of the following is true about Ownership in Rust?",
        options: [
          "A value can have multiple owners at the same time.",
          "A value can only have one owner at a time.",
          "Ownership is not related to memory management.",
          "Rust does not have an ownership concept.",
        ],
        answer: "A value can only have one owner at a time.",
      },
    },
    {
      id: 22,
      question: "How does Borrowing work in Rust?",
      answer:
        "Borrowing allows you to create references to a value without taking ownership of it. References can be either mutable or immutable, but you cannot have mutable references while immutable ones exist. This ensures safety and prevents data races.",
      topic: "Rust",
      code: `
  fn main() {
      let s1 = String::from("hello");
      let len = calculate_length(&s1); // Borrowing s1
      println!("The length of '{}' is {}.", s1, len);
  }
  
  fn calculate_length(s: &String) -> usize {
      s.len()
  }
  `,
      quiz: {
        question: "Can you have multiple mutable references to a value in Rust?",
        options: [
          "Yes, you can have multiple mutable references to a value at the same time.",
          "No, you cannot have multiple mutable references to a value at the same time.",
          "You can have one mutable and multiple immutable references at the same time.",
          "References are not used in Rust.",
        ],
        answer:
          "No, you cannot have multiple mutable references to a value at the same time.",
      },
    },
    {
      id: 23,
      question: "What are Lifetimes in Rust?",
      answer:
        "Lifetimes are a way of expressing the scope for which a reference is valid. They are used to prevent dangling references and ensure that references are always valid. Rust uses lifetime annotations to help the compiler understand how long references should be valid.",
      topic: "Rust",
      code: `
  fn main() {
      let r;
      {
          let x = 5;
          r = &x; // Error: \`x\` does not live long enough
      }
      println!("r: {}", r);
  }
  
  // Correct usage with lifetimes
  fn main() {
      let x = 5;
      let r = &x; // \`r\` is valid because \`x\` lives long enough
      println!("r: {}", r);
  }
  `,
      quiz: {
        question: "What do lifetimes in Rust help prevent?",
        options: [
          "Memory leaks",
          "Dangling references",
          "Immutable borrowing",
          "Data races",
        ],
        answer: "Dangling references",
      },
    },
    {
      id: 24,
      question: "What are Traits in Rust?",
      answer:
        "Traits are a way to define shared behavior in Rust. They are similar to interfaces in other languages. A trait defines methods that can be implemented by types, and a type can implement multiple traits. Traits enable polymorphism in Rust.",
      topic: "Rust",
      code: `
  trait Summary {
      fn summarize(&self) -> String;
  }
  
  struct Article {
      title: String,
      author: String,
      content: String,
  }
  
  impl Summary for Article {
      fn summarize(&self) -> String {
          format!("{} by {}", self.title, self.author)
      }
  }
  
  fn main() {
      let article = Article {
          title: String::from("Rust Programming"),
          author: String::from("John Doe"),
          content: String::from("Rust is a systems programming language..."),
      };
      println!("New article: {}", article.summarize());
  }
  `,
      quiz: {
        question: "What is the main purpose of Traits in Rust?",
        options: [
          "To manage memory",
          "To define shared behavior",
          "To enforce ownership rules",
          "To handle borrowing",
        ],
        answer: "To define shared behavior",
      },
    },
    {
      id: 25,
      question: "What is a Closure in Rust?",
      answer:
        "Closures are anonymous functions that can capture the environment in which they are defined. They are used for functional programming in Rust, allowing functions to be treated as first-class citizens. Closures can capture variables from their enclosing scope, making them powerful and flexible.",
      topic: "Rust",
      code: `
  fn main() {
      let x = 4;
      let add_x = |y| y + x; // Closure capturing x
      let result = add_x(6);
      println!("Result: {}", result);
  }
  `,
      quiz: {
        question: "Which of the following is true about Closures in Rust?",
        options: [
          "Closures cannot capture variables from their enclosing scope.",
          "Closures are named functions.",
          "Closures can capture variables from their enclosing scope.",
          "Closures are not used in Rust.",
        ],
        answer: "Closures can capture variables from their enclosing scope.",
      },
    },
  ];
  