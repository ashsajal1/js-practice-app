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
      "`os.Open()` opens an existing file for reading or writing, while `os.Create()` creates a new file for writing. If the file already exists, `os.Create()` will truncate it. You would use `os.Open()` for reading an existing log file and `os.Create()` for writing data to a new configuration file.",
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
      "When reading directory entries, `os.ReadDir()` is more efficient than `os.Read()`. It allows you to read multiple directory entries in a single operation, reducing the number of system calls and improving performance. For example, when listing files in a directory, `os.ReadDir()` would be more efficient than reading the directory contents byte by byte using `os.Read()`.",
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
      "Error handling in Go is done using the `error` interface. You can check for errors after each I/O operation and handle them accordingly. For example, when using `os.ReadFile()`, you can check if the returned error is nil. If not, you can log the error, retry the operation, or take other appropriate actions.",
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
      "A socket is an endpoint for communication between two programs. In Go, sockets are used to establish connections between clients and servers. A client program creates a socket and connects to a server socket. The server program listens for incoming connections on its socket. Once a connection is established, data can be exchanged between the client and server through the sockets.",
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
      "Sockets are the fundamental building blocks for network communication in Go. Understanding their role in establishing and managing connections is crucial for building network applications.",
  },
  {
    id: "io-5-golang",
    question:
      "Explain the difference between TCP and UDP protocols. Provide an example of a scenario where you would use each protocol in a Go application.",
    answer:
      "TCP is a connection-oriented protocol that provides reliable, ordered delivery of data. UDP is a connectionless protocol that offers faster but less reliable data delivery. You would use TCP for applications like file transfer, where data integrity is crucial. You would use UDP for applications like streaming video, where real-time delivery is more important than guaranteed delivery.",
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
      "Understanding the differences between TCP and UDP is essential for choosing the appropriate protocol for your network application in Go. TCP is reliable but slower, while UDP is faster but less reliable.",
  },
];
