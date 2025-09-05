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

export const nodeConcepts: QnaTypes[] = [
  {
    id: 1,
    question: "What are Worker Threads in Node.js and why are they used?",
    answer:
      "Worker Threads in Node.js are used to run JavaScript code in parallel on separate threads, which is useful for CPU-intensive operations without blocking the main event loop. They communicate with the main thread using message passing.",
    topic: "nodejs",
    quiz: {
      question: "What is the primary use case for Worker Threads in Node.js?",
      options: [
        "Handling I/O operations",
        "Running CPU-intensive tasks",
        "Replacing the event loop",
        "Managing database connections",
      ],
      answer: "Running CPU-intensive tasks",
    },
    code: `// main.js
const { Worker } = require('worker_threads');

const worker = new Worker('./worker.js');

worker.on('message', (msg) => {
  console.log('Message from worker:', msg);
});

worker.postMessage('Hello, worker!');`,
  },
  {
    id: 2,
    question: "Explain streams in Node.js and the concept of backpressure.",
    answer:
      "Streams are objects that let you read data from a source or write data to a destination in a continuous fashion. Backpressure is a mechanism that handles the case where the destination is slower than the source, by pausing the reading stream until the writing stream is ready for more data.",
    topic: "nodejs",
    quiz: {
      question: "What is backpressure in Node.js streams?",
      options: [
        "A way to increase stream speed",
        "A mechanism to handle a slow destination by pausing the source",
        "An error that occurs when a stream is empty",
        "A method to pipe streams together",
      ],
      answer: "A mechanism to handle a slow destination by pausing the source",
    },
    code: `const fs = require('fs');

const readableStream = fs.createReadStream('source.txt');
const writableStream = fs.createWriteStream('destination.txt');

readableStream.pipe(writableStream);

writableStream.on('finish', () => {
  console.log('Finished writing.');
});`,
  },
  {
    id: 3,
    question:
      "What is the difference between `spawn`, `exec`, and `fork` for creating child processes in Node.js?",
    answer:
      "`spawn` launches a command in a new process and streams the I/O, making it suitable for large amounts of data. `exec` buffers the output and is simpler for short commands. `fork` is a special case of `spawn` for creating new Node.js processes, and it allows for communication between the parent and child process.",
    topic: "nodejs",
    quiz: {
      question:
        "Which child process function is best for running a command with a large data output that needs to be streamed?",
      options: ["exec", "fork", "spawn", "execFile"],
      answer: "spawn",
    },
    code: `const { spawn } = require('child_process');

const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(\`stdout: \${data}\`);
});

ls.stderr.on('data', (data) => {
  console.error(\`stderr: \${data}\`);
});`,
  },
  {
    id: 4,
    question: "How does the Node.js Cluster module work and what is its purpose?",
    answer:
      "The Cluster module allows you to create child processes (workers) that share server ports. It enables you to take advantage of multi-core systems by load balancing incoming connections across the worker processes, improving performance and reliability.",
    topic: "nodejs",
    quiz: {
      question: "What is the main benefit of using the Cluster module?",
      options: [
        "To run CPU-intensive tasks in parallel",
        "To simplify file system operations",
        "To take advantage of multi-core systems for network applications",
        "To create C++ addons",
      ],
      answer: "To take advantage of multi-core systems for network applications",
    },
    code: `const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(\`Master \${process.pid} is running\`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(\`worker \${worker.process.pid} died\`);
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world\\n');
  }).listen(8000);

  console.log(\`Worker \${process.pid} started\`);
}`,
  },
  {
    id: 5,
    question: "What is libuv and what is its role in Node.js?",
    answer:
      "Libuv is a multi-platform C library that provides support for asynchronous I/O based on an event loop. It is the core part of Node.js that handles the event loop, worker threads, and all the asynchronous I/O operations (like file system, networking, etc.) on behalf of Node.js.",
    topic: "nodejs",
    quiz: {
      question: "What is the primary responsibility of libuv in the Node.js architecture?",
      options: [
        "Executing JavaScript code",
        "Managing asynchronous I/O and the event loop",
        "Parsing HTTP requests",
        "Compiling C++ addons",
      ],
      answer: "Managing asynchronous I/O and the event loop",
    },
    code: `// Libuv is an underlying C library, so you don't interact with it directly in JS code.
// However, every time you use an async operation like fs.readFile,
// you are using libuv's event loop and thread pool under the hood.

const fs = require('fs');

fs.readFile('/path/to/file', (err, data) => {
  // This callback is executed on the main thread after libuv
  // has finished reading the file in one of its worker threads.
  if (err) throw err;
  console.log(data);
});`,
  },
  {
    id: 6,
    question: "How does Node.js use the V8 JavaScript engine?",
    answer: "Node.js is built on top of the V8 engine, the same engine that powers Google Chrome. V8 compiles JavaScript directly to native machine code before executing it, which is what gives Node.js its speed. Node.js extends V8 with features like file system access, networking, and other OS-level operations.",
    topic: "nodejs",
    quiz: {
      question: "What is the primary role of the V8 engine in Node.js?",
      options: [
        "To manage the event loop",
        "To compile JavaScript to native machine code",
        "To provide APIs for file system access",
        "To handle asynchronous I/O"
      ],
      answer: "To compile JavaScript to native machine code"
    },
    code: `// V8 is the engine running the JS code. There's no specific API to call V8 directly.
// Any JavaScript code you write in Node.js is executed by V8.
const a = 1;
const b = 2;
console.log(a + b); // This is compiled and run by V8.`
  },
  {
    id: 7,
    question: "Explain memory management and garbage collection in Node.js.",
    answer: "Node.js uses V8's garbage collector to manage memory. V8's memory is divided into the Young Generation (for new objects) and the Old Generation (for objects that survive a garbage collection cycle). The garbage collector uses a 'stop-the-world' approach, meaning it pauses program execution to clean up memory.",
    topic: "nodejs",
    quiz: {
      question: "What is the term for the process of reclaiming memory occupied by objects that are no longer in use?",
      options: [
        "Memory allocation",
        "Garbage collection",
        "Memory leak",
        "Stack overflow"
      ],
      answer: "Garbage collection"
    },
    code: `// You can expose the garbage collector to manually trigger it, but it's not recommended.
// node --expose-gc
if (global.gc) {
  global.gc();
}
console.log(process.memoryUsage());`
  },
  {
    id: 8,
    question: "What are Buffers in Node.js and why are they necessary?",
    answer: "Buffers are used to handle binary data. They are a fixed-size chunk of memory allocated outside of the V8 JavaScript engine. Buffers are necessary because JavaScript's strings are not well-suited for handling binary data, such as image files, compressed data, or data from TCP streams.",
    topic: "nodejs",
    quiz: {
      question: "Why are Buffers used in Node.js?",
      options: [
        "To store string data",
        "To handle binary data",
        "To create new V8 instances",
        "To manage the event loop"
      ],
      answer: "To handle binary data"
    },
    code: `const buf = Buffer.from('Hello, world!', 'utf8');

console.log(buf.toString('hex'));
// expected output: 48656c6c6f2c20776f726c6421
console.log(buf.toString('base64'));
// expected output: SGVsbG8sIHdvcmxkIQ==`
  },
  {
    id: 9,
    question: "What are the main error handling patterns in Node.js?",
    answer: "The main error handling patterns are: 1) Callbacks, which use an 'error-first' convention where the first argument is the error object. 2) Promises, which use .catch() blocks to handle errors. 3) Async/Await, which uses try...catch blocks, a more synchronous-looking approach.",
    topic: "nodejs",
    quiz: {
      question: "What is the convention for handling errors in Node.js callbacks?",
      options: [
        "The last argument is the error object.",
        "The first argument is the error object.",
        "Errors are thrown as exceptions.",
        "Errors are returned as the function's return value."
      ],
      answer: "The first argument is the error object."
    },
    code: `// Error-first callback
fs.readFile('file.txt', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});`
  },
  {
    id: 10,
    question: "What is HTTP/2 and how is it used in Node.js?",
    answer: "HTTP/2 is a major revision of the HTTP protocol that offers performance improvements such as multiplexing, server push, and header compression. Node.js provides a built-in `http2` module that allows you to create HTTP/2 servers and clients.",
    topic: "nodejs",
    quiz: {
      question: "Which feature of HTTP/2 allows a server to send multiple responses for a single client request?",
      options: [
        "Server push",
        "Multiplexing",
        "Header compression",
        "Flow control"
      ],
      answer: "Multiplexing"
    },
    code: `const http2 = require('http2');
const server = http2.createServer();

server.on('stream', (stream, headers) => {
  stream.respond({
    'content-type': 'text/html; charset=utf-8',
    ':status': 200
  });
  stream.end('<h1>Hello World</h1>');
});

server.listen(8443);`
  },
  {
    id: 11,
    question: "How do you work with WebSockets in Node.js?",
    answer: "Node.js does not have a built-in WebSocket module. The most popular library for WebSocket support is `ws`. WebSockets provide a way to open a two-way interactive communication session between a user's browser and a server.",
    topic: "nodejs",
    quiz: {
      question: "What is a primary advantage of WebSockets over traditional HTTP?",
      options: [
        "They are more secure.",
        "They allow for two-way communication without opening new connections.",
        "They are faster for single, small requests.",
        "They are supported by all browsers."
      ],
      answer: "They allow for two-way communication without opening new connections."
    },
    code: `const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
  ws.on('message', message => {
    console.log('received: %s', message);
  });

  ws.send('something');
});`
  },
  {
    id: 12,
    question: "What is N-API in Node.js?",
    answer: "N-API is an API for building native addons in C/C++. It is independent from the underlying JavaScript runtime (e.g., V8) and is maintained as part of Node.js itself. It provides a stable ABI (Application Binary Interface) across different Node.js versions.",
    topic: "nodejs",
    quiz: {
      question: "What is the main advantage of using N-API for native addons?",
      options: [
        "It's faster than other methods.",
        "It provides a stable ABI across Node.js versions.",
        "It only works with V8.",
        "It allows you to write addons in JavaScript."
      ],
      answer: "It provides a stable ABI across Node.js versions."
    },
    code: `// N-API is used in C/C++ code, not directly in JS.
// This is a conceptual placeholder.
// addon.c
#include <node_api.h>
// ... N-API code ...`
  },
  {
    id: 13,
    question: "What is the `async_hooks` module used for?",
    answer: "The `async_hooks` module provides an API to track asynchronous resources in Node.js. It can be used for debugging, performance monitoring, and tracing the lifecycle of async operations like file I/O, network requests, and timers.",
    topic: "nodejs",
    quiz: {
      question: "What does the `async_hooks` module allow you to do?",
      options: [
        "Create new asynchronous functions.",
        "Track the lifecycle of asynchronous resources.",
        "Replace the event loop.",
        "Execute code in parallel."
      ],
      answer: "Track the lifecycle of asynchronous resources."
    },
    code: `const async_hooks = require('async_hooks');
const fs = require('fs');

const hook = async_hooks.createHook({
  init(asyncId, type, triggerAsyncId, resource) {
    fs.writeSync(1, \`init: \${type}(\${asyncId})\\n\`);
  }
});

hook.enable();

fs.open('file.txt', 'r', () => {});`
  },
  {
    id: 14,
    question: "What is the purpose of the `perf_hooks` module?",
    answer: "The `perf_hooks` module provides an implementation of the W3C Performance Timeline API in Node.js. It can be used to measure the performance of your code with high-resolution time.",
    topic: "nodejs",
    quiz: {
      question: "What is the main use of the `perf_hooks` module?",
      options: [
        "To track async resources.",
        "To measure code performance.",
        "To create child processes.",
        "To handle binary data."
      ],
      answer: "To measure code performance."
    },
    code: `const { performance, PerformanceObserver } = require('perf_hooks');

const obs = new PerformanceObserver((items) => {
  console.log(items.getEntries()[0].duration);
  performance.clearMarks();
});
obs.observe({ entryTypes: ['measure'] });

performance.mark('A');
// Do some work
performance.mark('B');
performance.measure('A to B', 'A', 'B');`
  },
  {
    id: 15,
    question: "What is the `vm` module in Node.js?",
    answer: "The `vm` module enables compiling and running code within a V8 Virtual Machine context. It allows you to run code in a sandboxed environment, isolated from the main application's scope.",
    topic: "nodejs",
    quiz: {
      question: "What is the primary purpose of the `vm` module?",
      options: [
        "To manage virtual memory.",
        "To run code in a sandboxed environment.",
        "To create virtual machines on the host OS.",
        "To interact with the V8 engine's internals."
      ],
      answer: "To run code in a sandboxed environment."
    },
    code: `const vm = require('vm');

const x = 1;

const context = { x: 2 };
vm.createContext(context); // Contextify the object.

const code = 'x += 40; var y = 17;';
// \`x\` and \`y\` are global variables in the context.
// Initially, x has the value 2 because that is the value of context.x.
vm.runInContext(code, context);

console.log(context.x); // 42
console.log(context.y); // 17`
  },
  {
    id: 16,
    question: "What is the `process` object in Node.js and what are some of its key properties?",
    answer: "The `process` object is a global object that provides information about, and control over, the current Node.js process. Key properties include `process.env` (environment variables), `process.argv` (command-line arguments), and methods like `process.exit()` (to end the process) and `process.nextTick()` (to defer execution of a function).",
    topic: "nodejs",
    quiz: {
      question: "How can you access command-line arguments in a Node.js application?",
      options: [
        "`process.args`",
        "`process.argv`",
        "`process.env`",
        "`process.arguments`"
      ],
      answer: "`process.argv`"
    },
    code: `console.log(\`Process ID: \${process.pid}\`);
console.log(\`Command-line arguments: \${process.argv}\`);

process.nextTick(() => {
  console.log('This will run after the current operation completes.');
});`
  },
  {
    id: 17,
    question: "What is the `EventEmitter` class in Node.js?",
    answer: "The `EventEmitter` is a class that facilitates communication between objects in Node.js. Many of Node.js's built-in modules inherit from `EventEmitter`. It allows you to listen for and emit custom events, enabling a publish/subscribe pattern.",
    topic: "nodejs",
    quiz: {
      question: "Which method is used to listen for an event on an `EventEmitter`?",
      options: [
        "`emit()`",
        "`on()`",
        "`listen()`",
        "`subscribe()`"
      ],
      answer: "`on()`"
    },
    code: `const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');`
  },
  {
    id: 18,
    question: "What is the difference between synchronous and asynchronous methods in the `fs` module?",
    answer: "Asynchronous methods in the `fs` module (e.g., `fs.readFile`) are non-blocking and use a callback function to return the result. Synchronous methods (e.g., `fs.readFileSync`) are blocking, meaning they halt execution until the operation is complete. Asynchronous methods are preferred to avoid blocking the event loop.",
    topic: "nodejs",
    quiz: {
      question: "Which of the following `fs` methods is synchronous and will block the event loop?",
      options: [
        "`fs.readFile`",
        "`fs.writeFile`",
        "`fs.readFileSync`",
        "`fs.open`"
      ],
      answer: "`fs.readFileSync`"
    },
    code: `const fs = require('fs');

// Asynchronous
fs.readFile('/etc/passwd', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Synchronous
try {
  const data = fs.readFileSync('/etc/passwd');
  console.log(data);
} catch (err) {
  console.error(err);
}`
  },
  {
    id: 19,
    question: "What is the purpose of the `path` module in Node.js?",
    answer: "The `path` module provides utilities for working with file and directory paths. It helps in creating cross-platform compatible paths by handling differences in path delimiters between operating systems (e.g., `/` on POSIX systems vs. `\\` on Windows).",
    topic: "nodejs",
    quiz: {
      question: "Which `path` method is used to join all given path segments together?",
      options: [
        "`path.resolve()`",
        "`path.normalize()`",
        "`path.join()`",
        "`path.basename()`"
      ],
      answer: "`path.join()`"
    },
    code: `const path = require('path');

const myPath = path.join(__dirname, 'public', 'index.html');
console.log(myPath);`
  },
  {
    id: 20,
    question: "What kind of information does the `os` module provide?",
    answer: "The `os` module provides operating system-related utility methods and properties. You can get information like the number of CPU cores (`os.cpus()`), the total system memory (`os.totalmem()`), the current user's home directory (`os.homedir()`), and network interfaces (`os.networkInterfaces()`).",
    topic: "nodejs",
    quiz: {
      question: "Which `os` method would you use to find out the number of CPU cores on the machine?",
      options: [
        "`os.arch()`",
        "`os.platform()`",
        "`os.cpus()`",
        "`os.freemem()`"
      ],
      answer: "`os.cpus()`"
    },
    code: `const os = require('os');

console.log('OS Platform:', os.platform());
console.log('CPU Architecture:', os.arch());
console.log('Number of CPUs:', os.cpus().length);`
  },
  {
    id: 21,
    question: "What is the `crypto` module used for in Node.js?",
    answer: "The `crypto` module provides cryptographic functionality that includes a set of wrappers for OpenSSL's hash, HMAC, cipher, decipher, sign, and verify functions. It can be used for tasks like creating hashes, encrypting and decrypting data.",
    topic: "nodejs",
    quiz: {
      question: "Which `crypto` function is commonly used to create a hash of data?",
      options: [
        "`crypto.createCipher()`",
        "`crypto.createHmac()`",
        "`crypto.createHash()`",
        "`crypto.randomBytes()`"
      ],
      answer: "`crypto.createHash()`"
    },
    code: `const crypto = require('crypto');

const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret)
                   .update('I love cupcakes')
                   .digest('hex');
console.log(hash);`
  },
  {
    id: 22,
    question: "What is the purpose of the `zlib` module?",
    answer: "The `zlib` module provides compression functionality implemented using Gzip and Deflate/Inflate. It can be used to compress and decompress data, which is useful for reducing the size of data being sent over a network or stored on disk.",
    topic: "nodejs",
    quiz: {
      question: "Which `zlib` method is used to compress data using gzip?",
      options: [
        "`zlib.deflate()`",
        "`zlib.inflate()`",
        "`zlib.gzip()`",
        "`zlib.unzip()`"
      ],
      answer: "`zlib.gzip()`"
    },
    code: `const zlib = require('zlib');
const fs = require('fs');

const gzip = zlib.createGzip();
const inp = fs.createReadStream('input.txt');
const out = fs.createWriteStream('input.txt.gz');

inp.pipe(gzip).pipe(out);`
  },
  {
    id: 23,
    question: "What can you do with the `dns` module in Node.js?",
    answer: "The `dns` module enables name resolution. For example, you can use it to look up the IP address of a given domain name (`dns.lookup()`) or to perform a reverse lookup to find the domain names associated with an IP address (`dns.reverse()`).",
    topic: "nodejs",
    quiz: {
      question: "Which `dns` method is used to find the IP address for a given hostname?",
      options: [
        "`dns.resolve()`",
        "`dns.lookup()`",
        "`dns.reverse()`",
        "`dns.getServers()`"
      ],
      answer: "`dns.lookup()`"
    },
    code: `const dns = require('dns');

dns.lookup('google.com', (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family);
});`
  },
  {
    id: 24,
    question: "What is the `net` module used for?",
    answer: "The `net` module provides an asynchronous network API for creating TCP servers and clients. It allows you to create stream-based network applications.",
    topic: "nodejs",
    quiz: {
      question: "What kind of servers can you create with the `net` module?",
      options: [
        "HTTP servers",
        "UDP servers",
        "TCP servers",
        "WebSocket servers"
      ],
      answer: "TCP servers"
    },
    code: `const net = require('net');

const server = net.createServer((socket) => {
  socket.end('goodbye\\n');
}).on('error', (err) => {
  // Handle errors here.
  throw err;
});

server.listen(() => {
  console.log('opened server on', server.address());
});`
  },
  {
    id: 25,
    question: "What is the `dgram` module and what protocol does it use?",
    answer: "The `dgram` module provides an implementation of UDP (User Datagram Protocol) datagram sockets. UDP is a connectionless protocol that is useful for applications where speed is more important than reliability, such as video streaming or online gaming.",
    topic: "nodejs",
    quiz: {
      question: "What protocol does the `dgram` module use?",
      options: [
        "TCP",
        "HTTP",
        "UDP",
        "WebSocket"
      ],
      answer: "UDP"
    },
    code: `const dgram = require('dgram');
const server = dgram.createSocket('udp4');

server.on('message', (msg, rinfo) => {
  console.log(\`server got: \${msg} from \${rinfo.address}:\${rinfo.port}\`);
});

server.bind(41234);`
  }
];