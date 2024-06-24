import { QuizQuestionType } from "../types";
// Advanced Topics:

// Generics: (Introduced in Go 1.18)
// Go Modules: Package management and dependency resolution
// Web Development: Frameworks (e.g., Gin, Echo), REST APIs
// Database Interaction: SQL databases, NoSQL databases
// Concurrency Patterns: Worker pools, fan-in/fan-out, pipelines

export const golangAdvancedQuestions: QuizQuestionType[] = [
  {
    id: "advanced-1-golang",
    question: "What is the primary purpose of Go Modules?",
    answer: "To manage dependencies and versioning of Go packages.",
    type: "theoretical",
    topic: "Advanced",
    subTopic: "Go Modules",
    lang: "golang",
    complexity: "normal",
    options: [
      "To create reusable code components.",
      "To manage dependencies and versioning of Go packages.",
      "To improve the performance of Go programs.",
      "To simplify the process of writing Go code.",
    ],
    explanation:
      "Go Modules provide a standardized way to manage dependencies in Go projects. They help resolve version conflicts, track dependencies, and ensure consistent builds across different environments.",
  },
  {
    id: "advanced-2-golang",
    question: "What is a generic function in Go?",
    answer:
      "A function that can operate on different data types without needing to be rewritten for each type.",
    type: "theoretical",
    topic: "Advanced",
    subTopic: "Generics",
    lang: "golang",
    complexity: "normal",
    options: [
      "A function that can only be used with specific data types.",
      "A function that can operate on different data types without needing to be rewritten for each type.",
      "A function that can be called from multiple goroutines simultaneously.",
      "A function that can be used to create new data types.",
    ],
    explanation:
      "Generics in Go allow you to write functions and data structures that work with various types. This eliminates the need to write separate versions of the same code for different data types, promoting code reuse and flexibility.",
  },
  {
    id: "advanced-3-golang",
    question:
      "What is the primary difference between a SQL database and a NoSQL database?",
    answer:
      "SQL databases use structured data with predefined schemas, while NoSQL databases are more flexible and can handle unstructured data.",
    type: "theoretical",
    topic: "Advanced",
    subTopic: "Database Interaction",
    lang: "golang",
    complexity: "normal",
    options: [
      "SQL databases are faster than NoSQL databases.",
      "NoSQL databases are faster than SQL databases.",
      "SQL databases use structured data with predefined schemas, while NoSQL databases are more flexible and can handle unstructured data.",
      "SQL databases are more expensive than NoSQL databases.",
    ],
    explanation:
      "SQL databases are relational databases that enforce strict schemas, making them suitable for structured data and transactional operations. NoSQL databases offer more flexibility, allowing for unstructured data, scalability, and different data models (e.g., document, key-value).",
  },
  {
    id: "advanced-4-golang",
    question:
      "What is a worker pool in Go concurrency, and what is its purpose?",
    answer:
      "A worker pool is a collection of goroutines that process tasks concurrently, improving efficiency and resource utilization.",
    type: "theoretical",
    topic: "Advanced",
    subTopic: "Concurrency Patterns",
    lang: "golang",
    complexity: "hard",
    options: [
      "A worker pool is a mechanism for synchronizing access to shared resources.",
      "A worker pool is a collection of goroutines that process tasks concurrently, improving efficiency and resource utilization.",
      "A worker pool is a way to create new goroutines dynamically.",
      "A worker pool is a type of channel that can hold multiple values.",
    ],
    explanation:
      "Worker pools are a common concurrency pattern in Go. They create a pool of goroutines that can be reused to process tasks. This helps avoid the overhead of creating new goroutines for each task, leading to better performance and resource management.",
  },
  {
    id: "advanced-5-golang",
    question:
      "Describe the fan-in/fan-out pattern in Go concurrency, and provide an example of its use.",
    answer:
      "Fan-in/fan-out involves multiple goroutines producing data (fan-out) and a single goroutine consuming data from multiple sources (fan-in), allowing for parallel processing and efficient data aggregation.",
    type: "theoretical",
    topic: "Advanced",
    subTopic: "Concurrency Patterns",
    lang: "golang",
    complexity: "hard",
    options: [
      "Fan-in/fan-out is a way to create a pipeline of goroutines that process data sequentially.",
      "Fan-in/fan-out is a mechanism for synchronizing access to shared resources.",
      "Fan-in/fan-out involves multiple goroutines producing data (fan-out) and a single goroutine consuming data from multiple sources (fan-in), allowing for parallel processing and efficient data aggregation.",
      "Fan-in/fan-out is a way to create new goroutines dynamically.",
    ],
    explanation:
      "The fan-in/fan-out pattern is a powerful technique for parallel processing. Multiple goroutines can produce data (fan-out), and a single goroutine can efficiently consume data from these sources (fan-in). This pattern is often used in scenarios like data aggregation, parallel computation, and distributed systems.",
  },
  {
    id: "advanced-6-golang",
    question: "What is the output of the following Go code snippet?",
    code: `
package main

import "fmt"

func main() {
  type MyInt int
  var x MyInt = 10
  fmt.Println(x)
}
    `,
    answer: "10",
    type: "practical",
    topic: "Advanced",
    subTopic: "Custom Types",
    lang: "golang",
    complexity: "easy",
    options: ["10", "MyInt", "error", "nil"],
    explanation:
      "The code defines a custom type `MyInt` as an alias for the built-in `int` type. The variable `x` is declared as `MyInt` and assigned the value 10. The output will be the value of `x`, which is 10.",
  },
  {
    id: "advanced-7-golang",
    question: "What is the purpose of the 'defer' keyword in Go?",
    code: `
package main

import "fmt"

func main() {
  defer fmt.Println("This will be printed last")
  fmt.Println("This will be printed first")
}
    `,
    answer:
      "To execute a function call after the surrounding function returns.",
    type: "practical",
    topic: "Advanced",
    subTopic: "Defer",
    lang: "golang",
    complexity: "normal",
    options: [
      "To execute a function call before the surrounding function returns.",
      "To execute a function call concurrently with the surrounding function.",
      "To execute a function call only if an error occurs.",
      "To execute a function call after the surrounding function returns.",
    ],
    explanation:
      "The `defer` keyword schedules a function call to be executed right before the function containing it returns. This is useful for tasks like closing files, releasing resources, or logging.",
  },
  {
    id: "advanced-8-golang",
    question: "What is the output of the following Go code snippet?",
    code: `
package main

import "fmt"

func main() {
  var x interface{} = 10
  switch v := x.(type) {
  case int:
    fmt.Println("x is an int:", v)
  case string:
    fmt.Println("x is a string:", v)
  default:
    fmt.Println("x is of unknown type")
  }
}
    `,
    answer: "x is an int: 10",
    type: "practical",
    topic: "Advanced",
    subTopic: "Type Assertions",
    lang: "golang",
    complexity: "normal",
    options: [
      "x is an int: 10",
      "x is a string: 10",
      "x is of unknown type",
      "error",
    ],
    explanation:
      "The code uses type assertions to determine the type of the variable `x`. Since `x` is assigned an `int` value, the `case int` block will be executed, printing 'x is an int: 10'.",
  },
  {
    id: "advanced-9-golang",
    question: "What is the purpose of the 'sync.Mutex' type in Go concurrency?",
    code: `
package main

import (
  "fmt"
  "sync"
)

var counter int
var mutex sync.Mutex

func increment() {
  mutex.Lock()
  defer mutex.Unlock()
  counter++
}

func main() {
  var wg sync.WaitGroup
  wg.Add(2)
  go func() {
    defer wg.Done()
    for i := 0; i < 1000; i++ {
      increment()
    }
  }()
  go func() {
    defer wg.Done()
    for i := 0; i < 1000; i++ {
      increment()
    }
  }()
  wg.Wait()
  fmt.Println("Final counter:", counter)
}
    `,
    answer: "To protect shared resources from concurrent access.",
    type: "practical",
    topic: "Advanced",
    subTopic: "Synchronization",
    lang: "golang",
    complexity: "hard",
    options: [
      "To create new goroutines dynamically.",
      "To manage the execution order of goroutines.",
      "To protect shared resources from concurrent access.",
      "To communicate between goroutines.",
    ],
    explanation:
      "The `sync.Mutex` type provides a mechanism for mutual exclusion, ensuring that only one goroutine can access a shared resource at a time. This prevents race conditions and data corruption in concurrent programs.",
  },
  {
    id: "advanced-10-golang",
    question: "What is the output of the following Go code snippet?",
    code: `
package main

import (
  "fmt"
  "time"
)

func main() {
  ch := make(chan int, 2)
  go func() {
    for i := 0; i < 3; i++ {
      ch <- i
    }
    close(ch)
  }()
  for i := 0; i < 3; i++ {
    select {
    case v := <-ch:
      fmt.Println("Received:", v)
    case <-time.After(1 * time.Second):
      fmt.Println("Timeout")
    }
  }
}
    `,
    answer: "Received: 0\nReceived: 1\nReceived: 2",
    type: "practical",
    topic: "Advanced",
    subTopic: "Channels and Select",
    lang: "golang",
    complexity: "hard",
    options: [
      "Received: 0\nReceived: 1\nReceived: 2",
      "Received: 0\nTimeout\nTimeout",
      "Timeout\nTimeout\nTimeout",
      "error",
    ],
    explanation:
      "The code uses a buffered channel and a `select` statement to handle data reception. The `select` statement will choose the first case that is ready. Since the channel has data available, the `case v := <-ch` will be executed, printing the received values. The timeout case will not be triggered.",
  },
];
