export interface QuizQuestionType {
  id: number | string;
  question: string;
  code?: string;
  options?: string[];
  answer: string;
  hint?: string;
  type?: "practical" | "theoretical";
  topic: string;
  subTopic?: string;
  lang: string;
  explanation?: string;
  complexity?: "easy" | "normal" | "hard";
}

export const golangConcurrencyQuestions: QuizQuestionType[] = [
  {
    id: "concurrency-1-golang",
    question: "What is concurrency in Go?",
    answer:
      "Concurrency in Go allows multiple tasks to make progress simultaneously, even if they are not running at the exact same time.",
    type: "theoretical",
    topic: "Concurrency",
    lang: "golang",
    complexity: "easy",
    explanation:
      "Concurrency is about managing multiple tasks that can be in progress at the same time.  Go's concurrency features allow you to write programs that can handle many tasks efficiently, even on a single-core processor.",
    options: [
      "Concurrency in Go allows multiple tasks to run at the exact same time on different processors.",
      "Concurrency in Go allows multiple tasks to run at the exact same time on the same processor.",
      "Concurrency in Go allows multiple tasks to make progress simultaneously, even if they are not running at the exact same time.",
      "Concurrency in Go is a way to make programs run faster by using multiple threads.",
    ],
  },
  {
    id: "concurrency-2-golang",
    question: "What is the main mechanism for achieving concurrency in Go?",
    answer: "Goroutines",
    type: "theoretical",
    topic: "Concurrency",
    lang: "golang",
    complexity: "easy",
    explanation:
      "Goroutines are lightweight, concurrent execution units managed by the Go runtime. They are incredibly efficient and allow you to create thousands of concurrent tasks without significant overhead.",
    options: ["Threads", "Processes", "Goroutines", "Asynchronous functions"],
  },
  {
    id: "concurrency-3-golang",
    question: "How do you create a goroutine in Go?",
    answer: "Using the `go` keyword before a function call.",
    type: "practical",
    topic: "Concurrency",
    lang: "golang",
    complexity: "easy",
    code: `func myFunction() {
        // Function code
      }
      
      go myFunction() // Creates a goroutine that runs myFunction concurrently.`,
    explanation:
      "The `go` keyword tells the Go runtime to start a new goroutine that will execute the function you specify. This allows the function to run concurrently with other code in your program.",
    options: [
      "Using the `concurrent` keyword before a function call.",
      "Using the `thread` keyword before a function call.",
      "Using the `go` keyword before a function call.",
      "Using the `async` keyword before a function call.",
    ],
  },
  {
    id: "concurrency-4-golang",
    question: "What is a channel in Go?",
    answer:
      "Channels are typed communication conduits that allow goroutines to safely exchange data.",
    type: "theoretical",
    topic: "Concurrency",
    lang: "golang",
    complexity: "normal",
    explanation:
      "Channels provide a mechanism for goroutines to communicate and synchronize with each other. They ensure data is passed between goroutines in a safe and predictable manner.",
    options: [
      "Channels are a way to store data in a shared memory location.",
      "Channels are a way to pass data between goroutines.",
      "Channels are a way to synchronize the execution of goroutines.",
      "Channels are a way to communicate between goroutines and the operating system.",
    ],
  },
  {
    id: "concurrency-5-golang",
    question: "How do you create a channel in Go?",
    answer: "Using the `make` function with the desired type.",
    type: "practical",
    topic: "Concurrency",
    lang: "golang",
    complexity: "normal",
    code: `// Create a channel to send and receive integers
        ch := make(chan int)
      
        // Create a channel to send and receive strings
        strCh := make(chan string)`,
    explanation:
      "The `make` function is used to create channels of specific types. For example, `make(chan int)` creates a channel for sending and receiving integers.",
    options: [
      "Using the `new` function with the desired type.",
      "Using the `channel` keyword with the desired type.",
      "Using the `make` function with the desired type.",
      "Using the `createChannel` function with the desired type.",
    ],
  },
  {
    id: "concurrency-6-golang",
    question: "What is the purpose of the `sync.Mutex` type in Go?",
    answer:
      "To protect shared resources from race conditions by allowing only one goroutine to access the resource at a time.",
    type: "theoretical",
    topic: "Concurrency",
    lang: "golang",
    complexity: "hard",
    explanation:
      "Mutexes (mutual exclusion) are used to prevent race conditions when multiple goroutines try to access and modify shared data simultaneously.  A mutex ensures that only one goroutine can hold the lock at a time, preventing data corruption.",
    options: [
      "To synchronize the execution of goroutines.",
      "To protect shared resources from race conditions by allowing only one goroutine to access the resource at a time.",
      "To create a channel that can only be accessed by one goroutine at a time.",
      "To create a goroutine that can only be accessed by one thread at a time.",
    ],
  },
  {
    id: "concurrency-7-golang",
    question:
      "What is the difference between `sync.WaitGroup` and `sync.Mutex`?",
    answer:
      "WaitGroup is used to wait for a group of goroutines to finish, while Mutex is used to protect shared resources from simultaneous access by multiple goroutines.",
    type: "theoretical",
    topic: "Concurrency",
    lang: "golang",
    complexity: "hard",
    explanation:
      "WaitGroup allows you to coordinate the execution of multiple goroutines. It ensures that the main program waits until all goroutines in the group have finished their tasks. Mutex is for protecting shared data, while WaitGroup is for coordinating the completion of goroutines.",
    options: [
      "WaitGroup is used to protect shared resources from race conditions, while Mutex is used to wait for a group of goroutines to finish.",
      "WaitGroup is used to create a goroutine that can only be accessed by one thread at a time, while Mutex is used to create a channel that can only be accessed by one goroutine at a time.",
      "WaitGroup is used to wait for a group of goroutines to finish, while Mutex is used to protect shared resources from simultaneous access by multiple goroutines.",
      "WaitGroup is used to create a channel that can only be accessed by one goroutine at a time, while Mutex is used to create a goroutine that can only be accessed by one thread at a time.",
    ],
  },
  {
    id: "concurrency-8-golang",
    question: "How do you send data over a channel in Go?",
    answer: "Using the `<-` operator.",
    type: "practical",
    topic: "Concurrency",
    lang: "golang",
    complexity: "normal",
    code: `ch <- 10 // Sends the value 10 to the channel ch
      value := <- ch // Receives a value from the channel ch and assigns it to the variable value`,
    explanation:
      "The `<-` operator is used for both sending and receiving data on a channel.  `ch <- value` sends the `value` to the channel `ch`, and `value := <- ch` receives a value from the channel `ch` and stores it in the variable `value`.",
    options: [
      "Using the `send` function.",
      "Using the `receive` function.",
      "Using the `<-` operator.",
      "Using the `>>` operator.",
    ],
  },
  {
    id: "concurrency-9-golang",
    question:
      "What is the purpose of the `select` statement in Go concurrency?",
    answer: "To handle communication on multiple channels concurrently.",
    type: "theoretical",
    topic: "Concurrency",
    lang: "golang",
    complexity: "hard",
    explanation:
      "The `select` statement allows you to wait for data to become available on multiple channels. It chooses one of the channels that is ready to communicate and executes the corresponding case. This is useful for handling communication from multiple sources in a concurrent manner.",
    options: [
      "To create a goroutine that can only be accessed by one thread at a time.",
      "To create a channel that can only be accessed by one goroutine at a time.",
      "To handle communication on multiple channels concurrently.",
      "To synchronize the execution of goroutines.",
    ],
  },
  {
    id: "concurrency-10-golang",
    question: "How do you create a buffered channel in Go?",
    answer: "By specifying the buffer size when using the `make` function.",
    type: "practical",
    topic: "Concurrency",
    lang: "golang",
    complexity: "normal",
    code: `bufferedCh := make(chan int, 3) // Creates a buffered channel with a capacity of 3`,
    explanation:
      "A buffered channel can store a limited number of values before blocking. The buffer size is specified as the second argument to the `make` function. For example, `make(chan int, 3)` creates a buffered channel that can hold up to 3 integer values.",
    options: [
      "By using the `buffered` keyword when creating the channel.",
      "By using the `buffer` function with the desired size.",
      "By specifying the buffer size when using the `make` function.",
      "By using the `channel` keyword with the `buffered` option.",
    ],
  },
  {
    id: "concurrency-11-golang",
    question:
      "What is the difference between a buffered and unbuffered channel?",
    answer:
      "An unbuffered channel requires a sender and receiver to be ready at the same time, while a buffered channel allows the sender to send data even if no receiver is immediately available.",
    type: "theoretical",
    topic: "Concurrency",
    lang: "golang",
    complexity: "normal",
    explanation:
      "Unbuffered channels provide a direct communication link between goroutines. If a sender attempts to send data to an unbuffered channel and no receiver is ready, the sender will block until a receiver is available. Buffered channels allow a sender to send data even if no receiver is immediately available, as long as the buffer is not full. The data is stored in the buffer until a receiver is ready to retrieve it.",
    options: [
      "A buffered channel can store data even if no receiver is available, while an unbuffered channel requires a sender and receiver to be ready at the same time.",
      "A buffered channel is faster than an unbuffered channel.",
      "An unbuffered channel is faster than a buffered channel.",
      "There is no difference between a buffered and unbuffered channel.",
    ],
  },
  {
    id: "concurrency-12-golang",
    question: "What is a race condition in Go concurrency?",
    answer:
      "A race condition occurs when multiple goroutines access and modify shared data simultaneously, leading to unpredictable and potentially incorrect results.",
    type: "theoretical",
    topic: "Concurrency",
    lang: "golang",
    complexity: "normal",
    hint: "Think about what happens when multiple goroutines try to update a shared variable at the same time.",
    explanation:
      "Race conditions arise when the order of operations in concurrent goroutines is not deterministic. If multiple goroutines try to modify the same data without proper synchronization, the final result can be unexpected and inconsistent. This can lead to bugs that are difficult to track down.",
    options: [
      "A race condition occurs when multiple goroutines try to access the same resource at the same time.",
      "A race condition occurs when multiple goroutines try to access and modify shared data simultaneously, leading to unpredictable and potentially incorrect results.",
      "A race condition occurs when a goroutine tries to access a resource that is already being accessed by another goroutine.",
      "A race condition occurs when a goroutine tries to access a resource that is not available.",
    ],
  },
  {
    id: "concurrency-13-golang",
    question: "How can you prevent race conditions in Go?",
    answer:
      "By using synchronization mechanisms like mutexes (`sync.Mutex`) or channels.",
    type: "theoretical",
    topic: "Concurrency",
    lang: "golang",
    complexity: "hard",
    hint: "Think about how to control access to shared data so that only one goroutine can modify it at a time.",
    explanation:
      "Synchronization mechanisms like mutexes and channels help ensure that access to shared data is controlled, preventing race conditions. Mutexes allow only one goroutine to access a resource at a time, while channels provide a safe and controlled way for goroutines to communicate and exchange data.",
    options: [
      "By using the `sync` package.",
      "By using the `channel` package.",
      "By using synchronization mechanisms like mutexes (`sync.Mutex`) or channels.",
      "By using the `atomic` package.",
    ],
  },
  {
    id: "concurrency-14-golang",
    question: "What is the purpose of the `sync.WaitGroup` type in Go?",
    answer:
      "To wait for a group of goroutines to finish before continuing execution.",
    type: "theoretical",
    topic: "Concurrency",
    lang: "golang",
    complexity: "hard",
    explanation:
      "WaitGroup allows you to coordinate the execution of multiple goroutines. It ensures that the main program waits until all goroutines in the group have finished their tasks.",
    options: [
      "To protect shared resources from race conditions.",
      "To create a channel that can only be accessed by one goroutine at a time.",
      "To wait for a group of goroutines to finish before continuing execution.",
      "To create a goroutine that can only be accessed by one thread at a time.",
    ],
  },
];
