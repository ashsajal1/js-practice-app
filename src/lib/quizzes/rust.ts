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
  {
    id: "rust-6",
    question: "Explain the difference between `&` and `&mut` in Rust.",
    options: [
      "Both are immutable references.",
      "Both are mutable references.",
      "`&` is an immutable reference, and `&mut` is a mutable reference.",
      "`&mut` is an immutable reference, and `&` is a mutable reference.",
    ],
    answer: "`&` is an immutable reference, and `&mut` is a mutable reference.",
    hint: "Consider how Rust manages mutability.",
    type: "theoretical",
    topic: "Rust",
    lang: "Rust",
    explanation:
      "`&` creates an immutable reference, which means you cannot modify the data it points to. `&mut` creates a mutable reference, allowing you to modify the data it points to.",
    complexity: "hard",
  },
  {
    id: "rust-7",
    question: "What is the purpose of the `Box` type in Rust?",
    options: [
      "To create references to heap-allocated data.",
      "To create immutable references to stack-allocated data.",
      "To create mutable references to stack-allocated data.",
      "To create a new scope for variables.",
    ],
    answer: "To create references to heap-allocated data.",
    hint: "Think about memory management in Rust.",
    type: "theoretical",
    topic: "Rust",
    lang: "Rust",
    explanation:
      "The `Box` type in Rust allows you to store data on the heap. It's used to create references to heap-allocated data, enabling you to manage memory efficiently.",
    complexity: "hard",
  },
  {
    id: "rust-8",
    question: "What is the difference between `Option<T>` and `Result<T, E>`?",
    options: [
      "Both represent the possibility of a value being present.",
      "Both represent the possibility of an error occurring.",
      "`Option<T>` represents the possibility of a value being present, and `Result<T, E>` represents the possibility of an error occurring.",
      "`Result<T, E>` represents the possibility of a value being present, and `Option<T>` represents the possibility of an error occurring.",
    ],
    answer:
      "`Option<T>` represents the possibility of a value being present, and `Result<T, E>` represents the possibility of an error occurring.",
    hint: "Consider how Rust handles potential errors and missing values.",
    type: "theoretical",
    topic: "Rust",
    lang: "Rust",
    explanation:
      "`Option<T>` is used to represent a value that may or may not be present. `Result<T, E>` is used to represent a computation that may succeed with a value of type `T` or fail with an error of type `E`.",
    complexity: "hard",
  },
  {
    id: "rust-9",
    question:
      "Explain the concept of closures in Rust and how they differ from functions.",
    options: [
      "Closures are functions that can capture variables from their surrounding scope.",
      "Closures are functions that cannot capture variables from their surrounding scope.",
      "Closures are functions that are always mutable.",
      "Closures are functions that are always immutable.",
    ],
    answer:
      "Closures are functions that can capture variables from their surrounding scope.",
    hint: "Think about how closures can access data from their enclosing environment.",
    type: "theoretical",
    topic: "Rust",
    lang: "Rust",
    explanation:
      "Closures in Rust are similar to functions but can capture variables from their surrounding scope. This allows them to access and use data from the environment in which they are defined.",
    complexity: "hard",
  },
  {
    id: "rust-10",
    question: "What is the purpose of the `match` statement in Rust?",
    options: [
      "To create new variables.",
      "To perform pattern matching and execute code based on the matched pattern.",
      "To define functions.",
      "To create loops.",
    ],
    answer:
      "To perform pattern matching and execute code based on the matched pattern.",
    hint: "Think about how Rust handles conditional logic with pattern matching.",
    type: "theoretical",
    topic: "Rust",
    lang: "Rust",
    explanation:
      "The `match` statement in Rust is used for pattern matching. It allows you to compare a value against multiple patterns and execute different code blocks based on the matching pattern.",
    complexity: "hard",
  },
  {
    id: "rust-11",
    question:
      "Explain the concept of traits and how they enable polymorphism in Rust.",
    options: [
      "Traits are functions that can be called on any type.",
      "Traits are data structures that can hold different types.",
      "Traits are interfaces that define a set of methods that types can implement.",
      "Traits are used to create generic functions.",
    ],
    answer:
      "Traits are interfaces that define a set of methods that types can implement.",
    hint: "Think about how traits allow you to write code that works with different types.",
    type: "theoretical",
    topic: "Rust",
    lang: "Rust",
    explanation:
      "Traits in Rust are similar to interfaces in other languages. They define a set of methods that types can implement. This allows you to write code that works with different types as long as they implement the same trait.",
    complexity: "hard",
  },
  {
    id: "rust-12",
    question:
      "What is the difference between `impl Trait` and `dyn Trait` in Rust?",
    options: [
      "Both are used to create trait objects.",
      "`impl Trait` is used to create trait objects, and `dyn Trait` is used to create concrete types.",
      "`dyn Trait` is used to create trait objects, and `impl Trait` is used to create concrete types.",
      "Both are used to create concrete types.",
    ],
    answer:
      "`dyn Trait` is used to create trait objects, and `impl Trait` is used to create concrete types.",
    hint: "Consider how Rust handles dynamic dispatch and concrete types.",
    type: "theoretical",
    topic: "Rust",
    lang: "Rust",
    explanation:
      "`dyn Trait` is used to create trait objects, which allow for dynamic dispatch. `impl Trait` is used to create concrete types, where the specific type implementing the trait is known at compile time.",
    complexity: "hard",
  },
  {
    id: "rust-13",
    question: "What is the purpose of the `const` keyword in Rust?",
    options: [
      "To declare variables that can be modified at runtime.",
      "To declare variables that can be modified at compile time.",
      "To declare variables that are immutable and known at compile time.",
      "To declare variables that are mutable and known at compile time.",
    ],
    answer:
      "To declare variables that are immutable and known at compile time.",
    hint: "Think about how Rust handles constant values and their usage.",
    type: "theoretical",
    topic: "Rust",
    lang: "Rust",
    explanation:
      "The `const` keyword in Rust is used to declare variables that are immutable and known at compile time. These constants can be used in places where a value needs to be known before the program runs.",
    complexity: "hard",
  },
  {
    id: "rust-14",
    question:
      "Explain the concept of generics in Rust and how they promote code reusability.",
    options: [
      "Generics allow you to write functions and data structures that can work with any type.",
      "Generics allow you to create new types.",
      "Generics allow you to create new functions.",
      "Generics allow you to create new modules.",
    ],
    answer:
      "Generics allow you to write functions and data structures that can work with any type.",
    hint: "Think about how generics enable you to write code that is flexible and adaptable.",
    type: "theoretical",
    topic: "Rust",
    lang: "Rust",
    explanation:
      "Generics in Rust allow you to write functions and data structures that can work with any type. This promotes code reusability by enabling you to write code once and use it with different types.",
    complexity: "hard",
  },
  {
    id: "rust-15",
    question:
      "What is the difference between `panic!()` and `unwrap()` in Rust?",
    options: [
      "Both are used to handle errors.",
      "`panic!()` is used to handle errors, and `unwrap()` is used to unwrap a value.",
      "`unwrap()` is used to handle errors, and `panic!()` is used to unwrap a value.",
      "Both are used to unwrap a value.",
    ],
    answer:
      "`panic!()` is used to handle errors, and `unwrap()` is used to unwrap a value.",
    hint: "Consider how Rust handles errors and how `unwrap()` can cause panics.",
    type: "theoretical",
    topic: "Rust",
    lang: "Rust",
    explanation:
      "`panic!()` is used to signal an unrecoverable error. `unwrap()` is used to unwrap a value from an `Option` or `Result`. If the value is not present, `unwrap()` will cause a panic.",
    complexity: "hard",
  },
  {
    id: "rust-16",
    question: "Explain the concept of 'ownership' in Rust.",
    options: [
      "Ownership is a way to track the lifetime of variables.",
      "Ownership is a way to manage memory allocation.",
      "Ownership is a way to ensure that data is not accessed after it has been freed.",
      "Ownership is a way to prevent multiple references to the same data from being modified simultaneously.",
    ],
    answer:
      "Ownership is a way to ensure that data is not accessed after it has been freed.",
    hint: "Think about how Rust prevents dangling pointers and memory leaks.",
    type: "theoretical",
    topic: "Rust",
    lang: "Rust",
    explanation:
      "Ownership in Rust is a core concept that ensures memory safety. It dictates that each piece of data in Rust has a single owner. When the owner goes out of scope, the data is automatically freed. This prevents dangling pointers and memory leaks.",
    complexity: "hard",
  },
  {
    id: "rust-17",
    question: "What is the purpose of the `drop` trait in Rust?",
    options: [
      "To define how a type should be copied.",
      "To define how a type should be moved.",
      "To define how a type should be compared for equality.",
      "To define how a type should be cleaned up when it goes out of scope.",
    ],
    answer:
      "To define how a type should be cleaned up when it goes out of scope.",
    hint: "Think about how Rust handles resource cleanup and memory management.",
    type: "theoretical",
    topic: "Rust",
    lang: "Rust",
    explanation:
      "The `drop` trait in Rust allows you to define custom cleanup logic for a type. When an instance of a type goes out of scope, the `drop` method is automatically called, giving you a chance to release resources or perform other cleanup operations.",
    complexity: "hard",
  },
  {
    id: "rust-18",
    question: "Explain the difference between `static` and `const` in Rust.",
    options: [
      "Both are used to declare immutable variables.",
      "`static` is used to declare variables that are immutable and known at compile time, and `const` is used to declare variables that are mutable and known at compile time.",
      "`const` is used to declare variables that are immutable and known at compile time, and `static` is used to declare variables that are mutable and known at compile time.",
      "`static` is used to declare variables that are immutable and known at runtime, and `const` is used to declare variables that are immutable and known at compile time.",
    ],
    answer:
      "`const` is used to declare variables that are immutable and known at compile time, and `static` is used to declare variables that are immutable and known at runtime.",
    hint: "Think about how Rust handles constant values and their initialization.",
    type: "theoretical",
    topic: "Rust",
    lang: "Rust",
    explanation:
      "`const` variables are evaluated at compile time and must be known before the program runs. `static` variables are initialized at runtime and can be used to store data that needs to be accessible throughout the program's lifetime. Both are immutable.",
    complexity: "hard",
  },
  {
    id: "rust-19",
    question: "What is the purpose of the `unsafe` keyword in Rust?",
    options: [
      "To allow access to memory that is not managed by the Rust compiler.",
      "To allow the use of mutable references to immutable data.",
      "To allow the use of functions that may cause undefined behavior.",
      "To allow the use of functions that may cause memory leaks.",
    ],
    answer:
      "To allow access to memory that is not managed by the Rust compiler.",
    hint: "Think about how Rust's safety guarantees can be bypassed in certain situations.",
    type: "theoretical",
    topic: "Rust",
    lang: "Rust",
    explanation:
      "The `unsafe` keyword in Rust allows you to bypass Rust's safety guarantees. This is necessary for low-level operations, such as interacting with external libraries or directly manipulating memory. However, using `unsafe` code requires careful consideration and understanding of the potential risks.",
    complexity: "hard",
  },
  {
    id: "rust-20",
    question: "What is the purpose of the `#[derive]` attribute in Rust?",
    options: [
      "To define custom data structures.",
      "To generate implementations for traits automatically.",
      "To create new functions.",
      "To create new modules.",
    ],
    answer: "To generate implementations for traits automatically.",
    hint: "Think about how Rust can simplify the process of implementing common traits.",
    type: "theoretical",
    topic: "Rust",
    lang: "Rust",
    explanation:
      "The `#[derive]` attribute in Rust allows you to automatically generate implementations for certain traits, such as `Debug`, `Copy`, `Clone`, `PartialEq`, and `Eq`. This saves you from writing boilerplate code and makes your code more concise.",
    complexity: "hard",
  },
  {
    id: "rust-21",
    question: "Explain the concept of 'lifetimes' in Rust.",
    options: [
      "Lifetimes are used to track the lifetime of variables.",
      "Lifetimes are used to manage memory allocation.",
      "Lifetimes are used to ensure that references do not outlive the data they point to.",
      "Lifetimes are used to prevent multiple references to the same data from being modified simultaneously.",
    ],
    answer:
      "Lifetimes are used to ensure that references do not outlive the data they point to.",
    hint: "Think about how Rust prevents dangling pointers and ensures memory safety.",
    type: "theoretical",
    topic: "Rust",
    lang: "Rust",
    explanation:
      "Lifetimes in Rust are a compile-time mechanism that helps ensure memory safety by preventing dangling pointers. They track the validity of references and ensure that a reference does not outlive the data it points to. The borrow checker uses lifetimes to enforce these rules.",
    complexity: "hard",
  },
  {
    id: "rust-22",
    question: "What is the difference between `Vec` and `String` in Rust?",
    options: [
      "Both are used to store strings.",
      "Both are used to store collections of data.",
      "`Vec` is used to store strings, and `String` is used to store collections of data.",
      "`String` is used to store strings, and `Vec` is used to store collections of data.",
    ],
    answer:
      "`String` is used to store strings, and `Vec` is used to store collections of data.",
    hint: "Think about how Rust handles strings and collections differently.",
    type: "theoretical",
    topic: "Rust",
    lang: "Rust",
    explanation:
      "`String` is Rust's primary type for storing strings, which are sequences of characters. `Vec` is a generic type that can store collections of any type, including strings. `Vec` is often used to store collections of data that are not necessarily strings.",
    complexity: "hard",
  },
  {
    id: "rust-23",
    question: "Explain the purpose of the `Rc` type in Rust.",
    options: [
      "To create references to heap-allocated data that can be shared between multiple owners.",
      "To create references to heap-allocated data that can only be owned by a single owner.",
      "To create immutable references to stack-allocated data.",
      "To create mutable references to stack-allocated data.",
    ],
    answer:
      "To create references to heap-allocated data that can be shared between multiple owners.",
    hint: "Think about how Rust handles reference counting and shared ownership.",
    type: "theoretical",
    topic: "Rust",
    lang: "Rust",
    explanation:
      "The `Rc` type in Rust is used to create references to heap-allocated data that can be shared between multiple owners. It implements reference counting, ensuring that the data is freed only when all references to it are gone.",
    complexity: "hard",
  },
  {
    id: "rust-24",
    question: "What is the purpose of the `Mutex` type in Rust?",
    options: [
      "To prevent data races in multithreaded programs.",
      "To ensure that data is not accessed after it has been freed.",
      "To create immutable references to data.",
      "To create mutable references to data.",
    ],
    answer: "To prevent data races in multithreaded programs.",
    hint: "Think about how Rust handles concurrency and thread safety.",
    type: "theoretical",
    topic: "Rust",
    lang: "Rust",
    explanation:
      "The `Mutex` type in Rust is used to protect shared data from data races in multithreaded programs. It provides a mechanism for exclusive access to the data, ensuring that only one thread can modify the data at a time.",
    complexity: "hard",
  },
  {
    id: "rust-25",
    question: "Explain the concept of 'move semantics' in Rust.",
    options: [
      "Move semantics is a way to track the lifetime of variables.",
      "Move semantics is a way to manage memory allocation.",
      "Move semantics is a way to ensure that data is not accessed after it has been freed.",
      "Move semantics is a way to transfer ownership of data from one variable to another.",
    ],
    answer:
      "Move semantics is a way to transfer ownership of data from one variable to another.",
    hint: "Think about how Rust handles data ownership and how it differs from traditional copying.",
    type: "theoretical",
    topic: "Rust",
    lang: "Rust",
    explanation:
      "Move semantics in Rust is a mechanism for transferring ownership of data from one variable to another. When a variable is moved, its ownership is transferred to the new variable, and the original variable becomes invalid. This prevents multiple variables from owning the same data and ensures that data is not accessed after it has been freed.",
    complexity: "hard",
  },
  {
    id: "rust-26",
    question: "What is the purpose of the `Arc` type in Rust?",
    options: [
      "To create references to heap-allocated data that can be shared between multiple owners.",
      "To create references to heap-allocated data that can only be owned by a single owner.",
      "To create immutable references to stack-allocated data.",
      "To create mutable references to stack-allocated data.",
    ],
    answer:
      "To create references to heap-allocated data that can be shared between multiple owners.",
    hint: "Think about how Rust handles reference counting and shared ownership in a multithreaded environment.",
    type: "theoretical",
    topic: "Rust",
    lang: "Rust",
    explanation:
      "The `Arc` type in Rust is similar to `Rc`, but it is designed for use in multithreaded environments. It implements atomic reference counting, ensuring that the data is freed only when all references to it are gone, even across threads.",
    complexity: "hard",
  },
  {
    id: "rust-27",
    question: "Explain the concept of 'interior mutability' in Rust.",
    options: [
      "Interior mutability allows you to modify data that is normally immutable.",
      "Interior mutability allows you to create mutable references to immutable data.",
      "Interior mutability allows you to create multiple mutable references to the same data.",
      "Interior mutability allows you to access data that is not owned by the current scope.",
    ],
    answer:
      "Interior mutability allows you to modify data that is normally immutable.",
    hint: "Think about how Rust's strict rules about mutability can be bypassed in certain situations.",
    type: "theoretical",
    topic: "Rust",
    lang: "Rust",
    explanation:
      "Interior mutability in Rust allows you to modify data that is normally immutable. This is achieved by wrapping the data in a type that provides a mutable interface, even though the underlying data itself is immutable. This is useful for scenarios where you need to modify data without violating Rust's borrowing rules.",
    complexity: "hard",
  },
  {
    id: "rust-28",
    question: "What is the purpose of the `PhantomData` type in Rust?",
    options: [
      "To create references to data that does not exist.",
      "To create data structures that can hold different types.",
      "To create data structures that can be used with different lifetimes.",
      "To create data structures that can be used with different memory layouts.",
    ],
    answer:
      "To create data structures that can be used with different memory layouts.",
    hint: "Think about how Rust handles data layout and how `PhantomData` can influence it.",
    type: "theoretical",
    topic: "Rust",
    lang: "Rust",
    explanation:
      "The `PhantomData` type in Rust is used to create data structures that can be used with different memory layouts. It allows you to specify the layout of a data structure without actually storing any data. This is useful for scenarios where you need to create data structures that have different memory layouts depending on the types they are used with.",
    complexity: "hard",
  },
  {
    id: "rust-29",
    question: "Explain the concept of 'type erasure' in Rust.",
    options: [
      "Type erasure is a way to remove type information from a value at compile time.",
      "Type erasure is a way to remove type information from a value at runtime.",
      "Type erasure is a way to create new types.",
      "Type erasure is a way to create new functions.",
    ],
    answer:
      "Type erasure is a way to remove type information from a value at runtime.",
    hint: "Think about how Rust handles dynamic dispatch and how type information can be hidden.",
    type: "theoretical",
    topic: "Rust",
    lang: "Rust",
    explanation:
      "Type erasure in Rust is a technique used to remove type information from a value at runtime. This is often done when creating trait objects, where the specific type implementing the trait is not known until runtime. Type erasure allows you to work with different types through a common interface, even though the actual types are hidden.",
    complexity: "hard",
  },
  {
    id: "rust-30",
    question: "What is the purpose of the `Send` and `Sync` traits in Rust?",
    options: [
      "To ensure that data is not accessed after it has been freed.",
      "To ensure that data can be safely shared between threads.",
      "To ensure that data can be safely copied between threads.",
      "To ensure that data can be safely moved between threads.",
    ],
    answer: "To ensure that data can be safely shared between threads.",
    hint: "Think about how Rust handles concurrency and thread safety and how these traits play a role.",
    type: "theoretical",
    topic: "Rust",
    lang: "Rust",
    explanation:
      "The `Send` and `Sync` traits in Rust are used to ensure that data can be safely shared between threads. The `Send` trait indicates that a type can be safely sent to another thread. The `Sync` trait indicates that a type can be safely accessed by multiple threads concurrently.",
    complexity: "hard",
  },
  {
    id: "rust-31",
    question: "Explain the concept of 'zero-cost abstractions' in Rust.",
    options: [
      "Zero-cost abstractions means that Rust's abstractions do not come with any runtime overhead.",
      "Zero-cost abstractions means that Rust's abstractions are always optimized for performance.",
      "Zero-cost abstractions means that Rust's abstractions are always easy to use.",
      "Zero-cost abstractions means that Rust's abstractions are always safe to use.",
    ],
    answer:
      "Zero-cost abstractions means that Rust's abstractions do not come with any runtime overhead.",
    hint: "Think about how Rust's design philosophy emphasizes performance and how it achieves this with its abstractions.",
    type: "theoretical",
    topic: "Rust",
    lang: "Rust",
    explanation:
      "Zero-cost abstractions in Rust mean that the abstractions provided by the language do not come with any runtime overhead. This means that using abstractions like generics, traits, and closures does not add any performance penalty compared to writing equivalent code directly. This is achieved through Rust's compile-time optimization capabilities.",
    complexity: "hard",
  },
  {
    id: "rust-32",
    question: "What is the purpose of the `Pin` type in Rust?",
    options: [
      "To prevent data from being moved to a different location in memory.",
      "To ensure that data is not accessed after it has been freed.",
      "To create immutable references to data.",
      "To create mutable references to data.",
    ],
    answer:
      "To prevent data from being moved to a different location in memory.",
    hint: "Think about how Rust handles data movement and how `Pin` can restrict it.",
    type: "theoretical",
    topic: "Rust",
    lang: "Rust",
    explanation:
      "The `Pin` type in Rust is used to prevent data from being moved to a different location in memory. This is useful for scenarios where data needs to be accessed through a reference, and the reference must remain valid even if the data is moved. `Pin` is often used in conjunction with other types, such as `Box` and `Rc`, to ensure that data is not moved unexpectedly.",
    complexity: "hard",
  },
  {
    id: "rust-33",
    question: "Explain the concept of 'unwinding' in Rust.",
    options: [
      "Unwinding is the process of cleaning up resources when a function returns.",
      "Unwinding is the process of cleaning up resources when a function panics.",
      "Unwinding is the process of creating new threads.",
      "Unwinding is the process of destroying threads.",
    ],
    answer:
      "Unwinding is the process of cleaning up resources when a function panics.",
    hint: "Think about how Rust handles errors and how it ensures that resources are released properly.",
    type: "theoretical",
    topic: "Rust",
    lang: "Rust",
    explanation:
      "Unwinding in Rust is the process of cleaning up resources when a function panics. When a panic occurs, the Rust runtime unwinds the stack, calling the `drop` method for each variable that goes out of scope. This ensures that resources are released properly, even in the event of an error.",
    complexity: "hard",
  },
  {
    id: "rust-34",
    question: "What will be the output of the following Rust code?",
    code: `
    fn main() {
        let mut x = 5;
        let y = &mut x;
        *y = 10;
        println!("{}", x);
    }
    `,
    options: [
      "5",
      "10",
      "Error: cannot borrow `x` as mutable because it is already borrowed as mutable",
      "Error: cannot assign to `*y` because it is a reference to an immutable value",
    ],
    answer: "10",
    hint: "Consider how Rust handles mutable references and how they can be used to modify the original value.",
    type: "practical",
    topic: "Rust",
    lang: "Rust",
    explanation:
      "The code will output `10`. This is because `y` is a mutable reference to `x`. When we assign `10` to `*y`, we are actually modifying the value of `x` through the reference.",
    complexity: "hard",
  },
  {
    id: "rust-35",
    question: "What will be the output of the following Rust code?",
    code: `
    fn main() {
        let x = vec![1, 2, 3];
        let y = &x;
        println!("{:?}", y);
    }
    `,
    options: [
      "[1, 2, 3]",
      "&[1, 2, 3]",
      "Error: cannot borrow `x` as immutable because it is already borrowed as mutable",
      "Error: cannot borrow `x` as mutable because it is already borrowed as immutable",
    ],
    answer: "&[1, 2, 3]",
    hint: "Think about how Rust handles references and how they relate to the original value.",
    type: "practical",
    topic: "Rust",
    lang: "Rust",
    explanation:
      "The code will output `&[1, 2, 3]`. This is because `y` is an immutable reference to `x`. It does not own the data, but rather points to the original vector.",
    complexity: "hard",
  },
  {
    id: "rust-36",
    question: "What will be the output of the following Rust code?",
    code: `
    fn main() {
        let x = String::from("hello");
        let y = x;
        println!("{}", x);
    }
    `,
    options: [
      "hello",
      "Error: use of moved value: `x`",
      "Error: cannot borrow `x` as immutable because it is already borrowed as mutable",
      "Error: cannot borrow `x` as mutable because it is already borrowed as immutable",
    ],
    answer: "Error: use of moved value: `x`",
    hint: "Consider how Rust handles ownership and how it affects the ability to use a variable after it has been moved.",
    type: "practical",
    topic: "Rust",
    lang: "Rust",
    explanation:
      "The code will result in an error: `Error: use of moved value: `x`. This is because `String` implements move semantics. When `y` is assigned `x`, ownership of the string data is transferred to `y`. The original `x` is no longer valid and cannot be used.",
    complexity: "hard",
  },
  {
    id: "rust-37",
    question: "What will be the output of the following Rust code?",
    code: `
    fn main() {
        let x = 5;
        let y = &x;
        println!("{}", y);
    }
    `,
    options: [
      "5",
      "&5",
      "Error: cannot borrow `x` as immutable because it is already borrowed as mutable",
      "Error: cannot borrow `x` as mutable because it is already borrowed as immutable",
    ],
    answer: "5",
    hint: "Think about how Rust handles references and how they relate to the original value.",
    type: "practical",
    topic: "Rust",
    lang: "Rust",
    explanation:
      "The code will output `5`. This is because `y` is an immutable reference to `x`. It does not own the data, but rather points to the original value.",
    complexity: "hard",
  },
  {
    id: "rust-38",
    question: "What will be the output of the following Rust code?",
    code: `
    fn main() {
        let x = 5;
        let y = &mut x;
        *y = 10;
        println!("{}", y);
    }
    `,
    options: [
      "5",
      "10",
      "Error: cannot borrow `x` as mutable because it is already borrowed as mutable",
      "Error: cannot assign to `*y` because it is a reference to an immutable value",
    ],
    answer:
      "Error: cannot borrow `x` as mutable because it is already borrowed as mutable",
    hint: "Consider how Rust handles mutable references and how they can be used to modify the original value.",
    type: "practical",
    topic: "Rust",
    lang: "Rust",
    explanation:
      "The code will result in an error: `Error: cannot borrow `x` as mutable because it is already borrowed as mutable`. This is because `x` is already borrowed as mutable by `y`. Rust prevents multiple mutable borrows of the same data to avoid data races.",
    complexity: "hard",
  },
  {
    id: "rust-39",
    question: "What will be the output of the following Rust code?",
    code: `
    fn main() {
        let x = vec![1, 2, 3];
        let y = &mut x;
        y.push(4);
        println!("{:?}", x);
    }
    `,
    options: [
      "[1, 2, 3]",
      "[1, 2, 3, 4]",
      "Error: cannot borrow `x` as mutable because it is already borrowed as immutable",
      "Error: cannot borrow `x` as immutable because it is already borrowed as mutable",
    ],
    answer: "[1, 2, 3, 4]",
    hint: "Think about how Rust handles mutable references and how they can be used to modify the original value.",
    type: "practical",
    topic: "Rust",
    lang: "Rust",
    explanation:
      "The code will output `[1, 2, 3, 4]`. This is because `y` is a mutable reference to `x`. When we call `push(4)` on `y`, we are actually modifying the vector `x` through the reference.",
    complexity: "hard",
  },
  {
    id: "rust-40",
    question: "What will be the output of the following Rust code?",
    code: `
    fn main() {
        let x = String::from("hello");
        let y = &x;
        println!("{}", y);
    }
    `,
    options: [
      "hello",
      "&hello",
      "Error: cannot borrow `x` as immutable because it is already borrowed as mutable",
      "Error: cannot borrow `x` as mutable because it is already borrowed as immutable",
    ],
    answer: "hello",
    hint: "Think about how Rust handles references and how they relate to the original value.",
    type: "practical",
    topic: "Rust",
    lang: "Rust",
    explanation:
      "The code will output `hello`. This is because `y` is an immutable reference to `x`. It does not own the data, but rather points to the original string.",
    complexity: "hard",
  },
];
