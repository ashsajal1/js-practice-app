import { QnaTypes } from "../qna";

export const golangConcepts: QnaTypes[] = [
  {
    id: "golang-1",
    question: "What is the purpose of the `defer` keyword in Golang?",
    answer:
      "The `defer` keyword in Golang is used to schedule a function call to be executed after the surrounding function returns. This is useful for releasing resources, such as closing files or database connections, in a consistent and reliable way, even in the presence of errors or early returns from the function.",
    topic: "golang",
    subTopic: "Golang Fundamentals",
    code: `
  func readFile(filename string) error {
      file, err := os.Open(filename)
      if err != nil {
          return err
      }
      defer file.Close()
      // read and process the file
      return nil
  }
  `,
  },
  {
    id: "golang-2",
    question:
      "Explain the concept of goroutines and how they differ from threads in traditional programming languages.",
    answer:
      "Goroutines in Golang are lightweight threads of execution that are managed by the Golang runtime. They are much more efficient than traditional OS threads, as they have a smaller memory footprint and can be created and destroyed quickly. Goroutines are designed to work with Golang's concurrency primitives, such as channels and the `select` statement, to enable efficient concurrent and parallel programming. Unlike threads in traditional languages, goroutines are scheduled by the Golang runtime, which can dynamically adjust the number of OS threads used to execute goroutines, providing better performance and scalability.",
    topic: "golang",
    subTopic: "Golang Concurrency",
    code: `
  func main() {
      wg := sync.WaitGroup{}
      wg.Add(2)
      
      go func() {
          defer wg.Done()
          // do some work
      }()
      
      go func() {
          defer wg.Done()
          // do some other work
      }()
      
      wg.Wait()
  }
  `,
  },
  {
    id: "golang-3",
    question:
      "Explain the purpose and usage of the `select` statement in Golang, and how it can be used to coordinate communication between goroutines.",
    answer:
      "The `select` statement in Golang is used to wait for multiple communication operations to complete and choose the first one that is ready. This is particularly useful in concurrent programming when you have multiple goroutines communicating through channels. The `select` statement allows you to wait for input on multiple channels, and when data is available on one of the channels, the corresponding case block is executed. This enables you to write efficient and responsive concurrent code that can handle multiple inputs and outputs simultaneously.",
    topic: "golang",
    subTopic: "Golang Concurrency",
    code: `
  func main() {
      ch1 := make(chan int)
      ch2 := make(chan int)
      
      go func() {
          ch1 <- 42
      }()
      
      go func() {
          ch2 <- 24
      }()
      
      select {
      case x := <-ch1:
          fmt.Println("Received", x, "from ch1")
      case y := <-ch2:
          fmt.Println("Received", y, "from ch2")
      }
  }
  `,
  },
  {
    id: "golang-4",
    question:
      "Explain the purpose and usage of interfaces in Golang, and how they differ from interfaces in object-oriented programming languages.",
    answer:
      "Interfaces in Golang serve a different purpose than interfaces in object-oriented programming languages. In Golang, interfaces define a set of method signatures, and any type that implements those methods is considered to implement the interface, without the need for explicit declaration. This allows for a more flexible and dynamic approach to polymorphism, as types can implement multiple interfaces and can be passed around as interface values. Interfaces in Golang are also used to provide a way to write generic, reusable code that can work with any type that implements the required methods, rather than being tied to a specific type hierarchy.",
    topic: "golang",
    subTopic: "Golang Fundamentals",
    code: `
  type Shape interface {
      Area() float64
      Perimeter() float64
  }
  
  type Rectangle struct {
      Width, Height float64
  }
  
  func (r Rectangle) Area() float64 {
      return r.Width * r.Height
  }
  
  func (r Rectangle) Perimeter() float64 {
      return 2 * (r.Width + r.Height)
  }
  
  func main() {
      var s Shape = Rectangle{Width: 5, Height: 4}
      fmt.Println("Area:", s.Area())
      fmt.Println("Perimeter:", s.Perimeter())
  }
  `,
  },
  {
    id: "golang-5",
    question:
      "Explain the purpose and usage of the `context` package in Golang, and how it can be used to handle cancellation and timeouts in concurrent applications.",
    answer:
      "The `context` package in Golang provides a way to manage the lifecycle and cancelation of goroutines. It allows you to pass a `context` object to functions and methods, which can be used to signal when a particular operation should be canceled or when a deadline has been reached. This is particularly useful in concurrent applications, where you may have multiple goroutines performing different tasks that need to be coordinated and terminated gracefully. The `context` package provides a standard way to propagate cancellation signals and deadlines through your application, making it easier to write robust and responsive concurrent code.",
    topic: "golang",
    subTopic: "Golang Concurrency",
    code: `
  func processData(ctx context.Context, data []byte) error {
      // use the context to check for cancellation or timeouts
      select {
      case <-ctx.Done():
          return ctx.Err()
      default:
          // process the data
          // ...
      }
      return nil
  }
  
  func main() {
      ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
      defer cancel()
      
      data := []byte{1, 2, 3, 4, 5}
      err := processData(ctx, data)
      if err != nil {
          fmt.Println("Error:", err)
      }
  }
  `,
  },
];
