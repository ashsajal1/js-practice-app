import { QuizQuestionType } from "../types";
// I/O and Files:

// File Handling: Reading, writing, and manipulating files
// Networking: Sockets, HTTP clients and servers, TCP/UDP
// Standard Input/Output: os.Stdin, os.Stdout, os.Stderr

export const golangIOQuestions: QuizQuestionType[] = [
  {
    id: "io-1-golang",
    question:
      "Explain the difference between `os.Open()` and `os.Create()` when working with files in Go. Provide an example scenario where you would use each function.",
    answer:
      "`os.Open()` opens an existing file for reading or writing, while `os.Create()` creates a new file for writing. If the file already exists, `os.Create()` will truncate it.",
    type: "theoretical",
    topic: "I/O and Files",
    subTopic: "File Handling",
    lang: "golang",
    complexity: "hard",
    options: [
      "Both functions are identical in functionality.",
      "`os.Open()` opens an existing file for reading or writing, while `os.Create()` creates a new file for writing. If the file already exists, `os.Create()` will truncate it.",
      "`os.Open()` creates a new file for writing, while `os.Create()` opens an existing file for reading or writing.",
      "Both functions are used for reading data from a file.",
    ],
    explanation:
      "Understanding the subtle differences between `os.Open()` and `os.Create()` is crucial for file handling in Go. `os.Open()` is for opening existing files, while `os.Create()` is for creating new files or overwriting existing ones.",
  },
  {
    id: "io-2-golang",
    question:
      "Describe a scenario where using `os.ReadDir()` would be more efficient than using `os.Read()` in Go. Explain the advantages of using `os.ReadDir()` in this scenario.",
    answer:
      "When reading directory entries, `os.ReadDir()` is more efficient than `os.Read()`. It allows you to read multiple directory entries in a single operation, reducing the number of system calls and improving performance.",
    type: "theoretical",
    topic: "I/O and Files",
    subTopic: "File Handling",
    lang: "golang",
    complexity: "hard",
    options: [
      "`os.ReadDir()` is always more efficient than `os.Read()`.",
      "Both functions are equally efficient for reading directory entries.",
      "Using `os.Read()` is more efficient for reading large files.",
      "When reading directory entries, `os.ReadDir()` is more efficient than `os.Read()`. It allows you to read multiple directory entries in a single operation, reducing the number of system calls and improving performance.",
    ],
    explanation:
      "Understanding the efficiency differences between `os.ReadDir()` and `os.Read()` is crucial for optimizing file system interactions in Go. `os.ReadDir()` is designed for reading directory entries efficiently.",
  },
  {
    id: "io-3-golang",
    question:
      "Explain how you would handle potential errors during file I/O operations in Go. Provide an example of error handling using `os.ReadFile()`.",
    answer:
      "Error handling in Go is done using the `error` interface. You can check for errors after each I/O operation and handle them accordingly.",
    type: "theoretical",
    topic: "I/O and Files",
    subTopic: "File Handling",
    lang: "golang",
    complexity: "hard",
    options: [
      "Errors are automatically handled by the Go runtime.",
      "You can use `try...catch` blocks to handle errors.",
      "Error handling is not necessary in Go.",
      "Error handling in Go is done using the `error` interface. You can check for errors after each I/O operation and handle them accordingly.",
    ],
    explanation:
      "Robust error handling is essential for reliable file I/O in Go. Understanding the `error` interface and its usage is crucial for handling potential issues during file operations.",
  },
  {
    id: "io-4-golang",
    question:
      "Describe the concept of a socket in networking. Explain how sockets are used in Go to establish communication between clients and servers.",
    answer:
      "Sockets are an endpoint for communication between two programs. In Go, sockets are used to establish connections between clients and servers.",
    type: "theoretical",
    topic: "I/O and Files",
    subTopic: "Networking",
    lang: "golang",
    complexity: "hard",
    options: [
      "Sockets are used for storing data in a network.",
      "Sockets are used for routing network traffic.",
      "Sockets are used for managing network connections.",
      "Sockets are an endpoint for communication between two programs. In Go, sockets are used to establish connections between clients and servers.",
    ],
    explanation:
      "Sockets are the fundamental building blocks for network communication in Go. Understanding their role in establishing and managing connections is crucial for building network applications. A client program creates a socket and connects to a server socket. The server program listens for incoming connections on its socket. Once a connection is established, data can be exchanged between the client and server through the sockets.",
  },
  {
    id: "io-5-golang",
    question:
      "Explain the difference between TCP and UDP protocols. Provide an example of a scenario where you would use each protocol in a Go application.",
    answer:
      "TCP is a connection-oriented protocol that provides reliable, ordered delivery of data. UDP is a connectionless protocol that offers faster but less reliable data delivery.",
    type: "theoretical",
    topic: "I/O and Files",
    subTopic: "Networking",
    lang: "golang",
    complexity: "hard",
    options: [
      "TCP and UDP are identical protocols.",
      "TCP is a connectionless protocol, while UDP is a connection-oriented protocol.",
      "TCP is a faster protocol than UDP.",
      "TCP is a connection-oriented protocol that provides reliable, ordered delivery of data. UDP is a connectionless protocol that offers faster but less reliable data delivery.",
    ],
    explanation:
      "Understanding the differences between TCP and UDP is essential for choosing the appropriate protocol for your network application in Go. TCP is reliable but slower, while UDP is faster but less reliable. You would use TCP for applications like file transfer, where data integrity is crucial. You would use UDP for applications like streaming video, where real-time delivery is more important than guaranteed delivery.",
  },
  {
    id: "io-6-golang",
    question:
      "What is the output of the following Go code snippet, and explain why?",
    code: `
package main

import (
  "fmt"
  "io/ioutil"
  "os"
)

func main() {
  err := ioutil.WriteFile("test.txt", []byte("Hello, world!"), 0644)
  if err != nil {
    fmt.Println("Error writing file:", err)
  }
  data, err := ioutil.ReadFile("test.txt")
  if err != nil {
    fmt.Println("Error reading file:", err)
  }
  fmt.Println(string(data))
}
    `,
    answer: "Hello, world!",
    type: "practical",
    topic: "I/O and Files",
    subTopic: "File Handling",
    lang: "golang",
    complexity: "hard",
    options: [
      "Hello, world!",
      "Error writing file: ...",
      "Error reading file: ...",
      "Empty string",
    ],
    explanation:
      "The code snippet writes 'Hello, world!' to a file named 'test.txt' and then reads the contents of that file. The output will be 'Hello, world!' because the file is successfully created and read.",
  },
  {
    id: "io-7-golang",
    question:
      "What is the purpose of the `os.Stdin` and `os.Stdout` variables in Go, and how can you use them to interact with the user?",
    code: `
package main

import (
  "bufio"
  "fmt"
  "os"
)

func main() {
  reader := bufio.NewReader(os.Stdin)
  fmt.Print("Enter your name: ")
  name, _ := reader.ReadString('\n')
  fmt.Println("Hello,", name)
}
    `,
    answer:
      "`os.Stdin` represents standard input, typically the keyboard, and `os.Stdout` represents standard output, typically the console. You can use them to read user input and write output to the console.",
    type: "practical",
    topic: "I/O and Files",
    subTopic: "Standard Input/Output",
    lang: "golang",
    complexity: "hard",
    options: [
      "They are used for network communication.",
      "They are used for file handling.",
      "They are used for error handling.",
      "`os.Stdin` represents standard input, typically the keyboard, and `os.Stdout` represents standard output, typically the console. You can use them to read user input and write output to the console.",
    ],
    explanation:
      "The code snippet demonstrates reading user input from `os.Stdin` and writing output to `os.Stdout`. This is a fundamental way to interact with users in Go console applications.",
  },
  {
    id: "io-8-golang",
    question:
      "What is the output of the following Go code snippet, and explain the role of the `bufio.Scanner` in this code?",
    code: `
package main

import (
  "bufio"
  "fmt"
  "os"
)

func main() {
  file, err := os.Open("data.txt")
  if err != nil {
    fmt.Println("Error opening file:", err)
    return
  }
  defer file.Close()
  scanner := bufio.NewScanner(file)
  for scanner.Scan() {
    fmt.Println(scanner.Text())
  }
  if err := scanner.Err(); err != nil {
    fmt.Println("Error reading file:", err)
  }
}
    `,
    answer: "The contents of the 'data.txt' file, line by line.",
    type: "practical",
    topic: "I/O and Files",
    subTopic: "File Handling",
    lang: "golang",
    complexity: "hard",
    options: [
      "The contents of the 'data.txt' file, line by line.",
      "The entire contents of the 'data.txt' file as a single string.",
      "An error message if the file cannot be opened.",
      "The file size of 'data.txt'.",
    ],
    explanation:
      "The code snippet uses `bufio.Scanner` to read the contents of 'data.txt' line by line. The `scanner.Scan()` method reads the next line, and `scanner.Text()` returns the scanned line as a string.",
  },
  {
    id: "io-9-golang",
    question:
      "Explain the purpose of the `net.Dial()` function in Go networking. Provide an example of how you would use it to connect to a web server.",
    code: `
package main

import (
  "fmt"
  "net"
)

func main() {
  conn, err := net.Dial("tcp", "google.com:80")
  if err != nil {
    fmt.Println("Error connecting:", err)
    return
  }
  defer conn.Close()
  fmt.Println("Connected to:", conn.RemoteAddr())
}
    `,
    answer:
      "The `net.Dial()` function is used to establish a connection to a network address.",
    type: "practical",
    topic: "I/O and Files",
    subTopic: "Networking",
    lang: "golang",
    complexity: "hard",
    options: [
      "The `net.Dial()` function is used for sending data over a network.",
      "The `net.Dial()` function is used for receiving data over a network.",
      "The `net.Dial()` function is used for managing network connections.",
      "The `net.Dial()` function is used to establish a connection to a network address.",
    ],
    explanation:
      "The code snippet demonstrates how to use `net.Dial()` to connect to a web server. This is a fundamental step in building network applications in Go.",
  },
  {
    id: "io-10-golang",
    question:
      "What is the output of the following Go code snippet, and explain the role of the `net.Listen()` function in this code?",
    code: `
package main

import (
  "fmt"
  "net"
)

func main() {
  listener, err := net.Listen("tcp", ":8080")
  if err != nil {
    fmt.Println("Error listening:", err)
    return
  }
  defer listener.Close()
  fmt.Println("Listening on:", listener.Addr())
  conn, err := listener.Accept()
  if err != nil {
    fmt.Println("Error accepting connection:", err)
    return
  }
  defer conn.Close()
  fmt.Println("Connection accepted from:", conn.RemoteAddr())
}
    `,
    answer:
      "The code will print 'Listening on: [::]:8080' and then wait for an incoming connection. Once a connection is established, it will print 'Connection accepted from: [client address]'.",
    type: "practical",
    topic: "I/O and Files",
    subTopic: "Networking",
    lang: "golang",
    complexity: "hard",
    options: [
      "The code will print 'Listening on: [::]:8080' and then wait for an incoming connection. Once a connection is established, it will print 'Connection accepted from: [client address]'.",
      "The code will print 'Error listening: ...'",
      "The code will print 'Error accepting connection: ...'",
      "The code will print 'Connection accepted from: [client address]' immediately.",
    ],
    explanation:
      "The code snippet demonstrates how to use `net.Listen()` to create a server that listens for incoming connections on port 8080. The `listener.Accept()` method waits for a client connection and returns a new connection object.",
  },
];
