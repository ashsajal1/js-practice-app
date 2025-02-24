import { QnaTypes } from "./javascript";

export const operatingSystemConcepts: QnaTypes[] = [
  {
    id: "os-1",
    question:
      "What is process scheduling and why is it a big deal for resource management?",
    answer:
      "Process scheduling decides which process runs on the CPU and when, balancing fairness and efficiency. It’s critical because CPU is a limited resource—bad scheduling starves apps or wastes cycles, tanking performance.",
    topic: "operating-system",
    subTopic: "Process Management",
    code: `
  # Linux: Check scheduling policy
  chrt -r -p 1234  # PID 1234
  # Outputs: real-time or other policy
    `,
    quiz: {
      question: "What does process scheduling manage?",
      options: ["Memory", "CPU time", "Disk space", "Network"],
      answer: "CPU time",
    },
  },
  {
    id: "os-2",
    question: "How does virtual memory solve resource limits?",
    answer:
      "Virtual memory tricks programs into thinking they have more RAM by using disk as a backup. It’s key for running big apps, but the catch is thrashing—too much swapping slows everything to a crawl.",
    topic: "operating-system",
    subTopic: "Memory Management",
    code: `
  # Linux: Check virtual memory stats
  vmstat -s
  # Outputs: swap used, free RAM
    `,
    quiz: {
      question: "What’s a virtual memory risk?",
      options: ["Faster apps", "Thrashing", "More CPU", "Less disk"],
      answer: "Thrashing",
    },
  },
  {
    id: "os-3",
    question: "What’s the deal with kernel mode versus user mode?",
    answer:
      "Kernel mode has full hardware access for OS tasks, while user mode limits apps to protect resources. It’s vital for stability—user apps crashing shouldn’t take down the system, but mode switches eat CPU time.",
    topic: "operating-system",
    subTopic: "Architecture",
    code: `
  # Linux: Check system calls (kernel mode)
  strace ls
  # Outputs: calls like open(), read()
    `,
    quiz: {
      question: "What mode has unrestricted access?",
      options: ["User", "Kernel", "Guest", "Idle"],
      answer: "Kernel",
    },
  },
  {
    id: "os-4",
    question: "How does memory paging optimize resource use?",
    answer:
      "Memory paging splits RAM into fixed-size pages, letting the OS juggle them between apps and disk. It maxes out memory, but the trick is page faults—too many mean slow disk hits instead of fast RAM.",
    topic: "operating-system",
    subTopic: "Memory Management",
    code: `
  # Linux: Check page faults
  ps -o min_flt,maj_flt 1234  # PID 1234
  # Outputs: minor/major faults
    `,
    quiz: {
      question: "What’s a paging downside?",
      options: ["More RAM", "Page faults", "Faster CPU", "Less disk"],
      answer: "Page faults",
    },
  },
  {
    id: "os-5",
    question: "What’s the purpose of the process control block?",
    answer:
      "The process control block stores a process’s details—like ID, state, and registers—so the OS can manage CPU sharing. It’s the heart of scheduling, but bloated PCBs waste memory if there’s tons of processes.",
    topic: "operating-system",
    subTopic: "Process Management",
    code: `
  # Linux: View process info
  cat /proc/1234/stat  # PID 1234
  # Outputs: state, memory, etc.
    `,
    quiz: {
      question: "What does the PCB track?",
      options: ["Disk space", "Process state", "Network speed", "User logins"],
      answer: "Process state",
    },
  },
  {
    id: "os-6",
    question: "How does a thread differ from a process for resource use?",
    answer:
      "Threads share a process’s memory and resources, while processes get their own. Threads are lighter on RAM, but the catch is sync—shared data can clash if threads aren’t locked right.",
    topic: "operating-system",
    subTopic: "Process Management",
    code: `
  # Linux: List threads
  ps -L -p 1234  # PID 1234
  # Outputs: thread IDs
    `,
    quiz: {
      question: "What do threads share?",
      options: ["CPU", "Memory", "Disk", "Network"],
      answer: "Memory",
    },
  },
  {
    id: "os-7",
    question: "What’s the trick to managing CPU scheduling algorithms?",
    answer:
      "CPU scheduling algorithms—like round-robin or priority—decide process order. They balance speed and fairness, but the trick is context switching—too many swaps waste CPU on overhead.",
    topic: "operating-system",
    subTopic: "Process Management",
    code: `
  # Linux: Set priority
  nice -n 10 myapp
  # Check priority
  top  # Shows PR/NI columns
    `,
    quiz: {
      question: "What slows scheduling?",
      options: ["More RAM", "Context switching", "Less disk", "Faster CPU"],
      answer: "Context switching",
    },
  },
  {
    id: "os-8",
    question: "How does the OS handle memory allocation?",
    answer:
      "Memory allocation gives programs space in RAM, using chunks like heaps or stacks. It’s key for app runs, but the challenge is fragmentation—gaps between chunks waste space over time.",
    topic: "operating-system",
    subTopic: "Memory Management",
    code: `
  # Linux: Check memory usage
  free -h
  # Outputs: used, free, buffers
    `,
    quiz: {
      question: "What’s a memory allocation issue?",
      options: ["Faster apps", "Fragmentation", "More CPU", "Less disk"],
      answer: "Fragmentation",
    },
  },
  {
    id: "os-9",
    question: "What’s the role of interrupts in resource management?",
    answer:
      "Interrupts let hardware—like keyboards or disks—grab the CPU’s attention for urgent tasks. They keep I/O smooth, but too many interrupts hog CPU, slowing other work.",
    topic: "operating-system",
    subTopic: "I/O Management",
    code: `
  # Linux: Check interrupts
  cat /proc/interrupts
  # Outputs: IRQ counts
    `,
    quiz: {
      question: "What triggers interrupts?",
      options: ["Apps", "Hardware", "Users", "Memory"],
      answer: "Hardware",
    },
  },
  {
    id: "os-10",
    question: "How does a file system manage disk resources?",
    answer:
      "A file system organizes disk space into files and directories, tracking where data lives. It’s crucial for storage, but the trick is overhead—metadata or fragmentation can slow access if not optimized.",
    topic: "operating-system",
    subTopic: "Storage Management",
    code: `
  # Linux: Check filesystem
  df -T
  # Outputs: type, used, free
    `,
    quiz: {
      question: "What’s a file system challenge?",
      options: ["More CPU", "Fragmentation", "Faster disk", "Less RAM"],
      answer: "Fragmentation",
    },
  },
  {
    id: "os-11",
    question: "What’s the deal with deadlock in resource sharing?",
    answer:
      "Deadlock happens when processes hold resources and wait for others, locking everything up. It’s a killer for CPU and memory use, and avoiding it needs tricks like timeouts or resource ordering.",
    topic: "operating-system",
    subTopic: "Process Management",
    code: `
  # Linux: Simulate deadlock (conceptual)
  # Process 1: lock A, wait B
  # Process 2: lock B, wait A
  ps aux | grep stuck
    `,
    quiz: {
      question: "What causes deadlock?",
      options: ["Fast CPU", "Resource waits", "More RAM", "Less disk"],
      answer: "Resource waits",
    },
  },
  {
    id: "os-12",
    question: "How does the OS protect memory resources?",
    answer:
      "The OS protects memory with segmentation or paging, isolating process spaces. It stops crashes from spilling over, but the trick is overhead—protection eats CPU and slows switches.",
    topic: "operating-system",
    subTopic: "Memory Management",
    code: `
  # Linux: Check memory protection
  cat /proc/1234/maps  # PID 1234
  # Outputs: memory regions
    `,
    quiz: {
      question: "What does memory protection prevent?",
      options: ["Fast apps", "Process overlap", "More CPU", "Less disk"],
      answer: "Process overlap",
    },
  },
  {
    id: "os-13",
    question: "What’s the purpose of a system call?",
    answer:
      "A system call lets apps ask the OS for resources—like files or memory—safely via the kernel. It’s how apps use hardware, but too many calls bog down the CPU with mode switches.",
    topic: "operating-system",
    subTopic: "Architecture",
    code: `
  # Linux: Trace system calls
  strace -c ls
  # Outputs: call counts
    `,
    quiz: {
      question: "What requests a system call?",
      options: ["Hardware", "Apps", "Users", "Disk"],
      answer: "Apps",
    },
  },
  {
    id: "os-14",
    question: "How does I/O buffering improve resource efficiency?",
    answer:
      "I/O buffering stores data in memory before sending it to slow devices like disks. It cuts CPU wait time, but the challenge is size—too big wastes RAM, too small slows I/O.",
    topic: "operating-system",
    subTopic: "I/O Management",
    code: `
  # Linux: Check buffer cache
  free -h
  # Outputs: buff/cache column
    `,
    quiz: {
      question: "What does I/O buffering reduce?",
      options: ["CPU wait", "More RAM", "Disk space", "Network lag"],
      answer: "CPU wait",
    },
  },
  {
    id: "os-15",
    question: "What’s the trick to managing CPU priority?",
    answer:
      "CPU priority gives important processes more time, like real-time tasks over background jobs. It’s key for responsiveness, but starve low-priority stuff too long, and they stall out.",
    topic: "operating-system",
    subTopic: "Process Management",
    code: `
  # Linux: Boost priority
  renice -10 -p 1234  # PID 1234
  # Check
  top
    `,
    quiz: {
      question: "What’s a priority risk?",
      options: ["Faster apps", "Starvation", "More RAM", "Less disk"],
      answer: "Starvation",
    },
  },
  {
    id: "os-16",
    question: "How does swap space handle memory shortages?",
    answer:
      "Swap space uses disk as extra memory when RAM fills up, keeping apps alive. It’s a lifeline, but the catch is speed—disk is way slower, so heavy swapping kills performance.",
    topic: "operating-system",
    subTopic: "Memory Management",
    code: `
  # Linux: Check swap
  swapon --show
  # Outputs: size, used
    `,
    quiz: {
      question: "What’s a swap space downside?",
      options: ["More RAM", "Slower speed", "Fast apps", "Less CPU"],
      answer: "Slower speed",
    },
  },
  {
    id: "os-17",
    question: "What’s the role of the scheduler in resource allocation?",
    answer:
      "The scheduler picks which process gets CPU next, using rules like shortest-job-first. It’s the core of resource fairness, but bad picks—like favoring long jobs—lag the system.",
    topic: "operating-system",
    subTopic: "Process Management",
    code: `
  # Linux: Check scheduler
  cat /sys/block/sda/queue/scheduler
  # Outputs: current algorithm
    `,
    quiz: {
      question: "What does the scheduler allocate?",
      options: ["Disk", "CPU", "Network", "Memory"],
      answer: "CPU",
    },
  },
  {
    id: "os-18",
    question: "How does the OS handle disk scheduling?",
    answer:
      "Disk scheduling orders I/O requests—like SCAN or C-LOOK—to cut seek time on spinning disks. It speeds up access, but SSDs muddle it—random access changes the game.",
    topic: "operating-system",
    subTopic: "Storage Management",
    code: `
  # Linux: Set scheduler
  echo "deadline" > /sys/block/sda/queue/scheduler
  # Check
  cat /sys/block/sda/queue/scheduler
    `,
    quiz: {
      question: "What does disk scheduling reduce?",
      options: ["Seek time", "More RAM", "CPU use", "Network lag"],
      answer: "Seek time",
    },
  },
  {
    id: "os-19",
    question: "What’s the deal with resource contention?",
    answer:
      "Resource contention happens when processes fight for CPU, memory, or I/O, slowing everything. It’s a bottleneck king—locking or queues help, but overuse jams the system.",
    topic: "operating-system",
    subTopic: "Resource Management",
    code: `
  # Linux: Check contention (conceptual)
  top  # Look at %CPU, %MEM
  # Lock example: flock
  flock /file sleep 10
    `,
    quiz: {
      question: "What causes resource contention?",
      options: ["More disk", "Process fights", "Fast CPU", "Less RAM"],
      answer: "Process fights",
    },
  },
  {
    id: "os-20",
    question: "How does the OS manage multitasking?",
    answer:
      "Multitasking runs multiple processes by switching CPU time fast, making it feel simultaneous. It maxes CPU use, but too many tasks overload it—switches eat time.",
    topic: "operating-system",
    subTopic: "Process Management",
    code: `
  # Linux: Run multiple tasks
  sleep 10 & sleep 20 &
  # Check running
  jobs
    `,
    quiz: {
      question: "What’s a multitasking cost?",
      options: ["More RAM", "Switch overhead", "Fast apps", "Less disk"],
      answer: "Switch overhead",
    },
  },
  {
    id: "os-21",
    question: "What’s the purpose of memory caching?",
    answer:
      "Memory caching stores frequent data in RAM for quick access, cutting disk hits. It’s a speed booster, but stale caches waste space or serve old data if not cleared.",
    topic: "operating-system",
    subTopic: "Memory Management",
    code: `
  # Linux: Check cache
  free -h
  # Outputs: buff/cache
    `,
    quiz: {
      question: "What does caching speed up?",
      options: ["Disk access", "More CPU", "Network", "User logins"],
      answer: "Disk access",
    },
  },
  {
    id: "os-22",
    question: "How does the OS handle process synchronization?",
    answer:
      "Process synchronization uses locks or semaphores to keep shared resources safe, like files. It prevents data mess, but deadlocks or slow locks can freeze everything.",
    topic: "operating-system",
    subTopic: "Process Management",
    code: `
  # Linux: Use a lock (conceptual)
  flock -x /file echo "Safe write"
  # Check locks
  lslocks
    `,
    quiz: {
      question: "What does synchronization prevent?",
      options: ["Fast apps", "Data conflicts", "More RAM", "Less CPU"],
      answer: "Data conflicts",
    },
  },
  {
    id: "os-23",
    question: "What’s the trick to managing I/O devices?",
    answer:
      "The OS manages I/O with drivers and queues, balancing device access. It’s key for smooth hardware use, but bottlenecks—like slow disks—drag if queues pile up.",
    topic: "operating-system",
    subTopic: "I/O Management",
    code: `
  # Linux: Check I/O stats
  iostat -x 1
  # Outputs: device usage
    `,
    quiz: {
      question: "What slows I/O management?",
      options: ["More RAM", "Bottlenecks", "Fast CPU", "Less disk"],
      answer: "Bottlenecks",
    },
  },
  {
    id: "os-24",
    question: "How does the OS allocate disk space?",
    answer:
      "The OS allocates disk space with blocks or extents, tracking free areas. It keeps files tidy, but fragmentation scatters data, slowing reads over time.",
    topic: "operating-system",
    subTopic: "Storage Management",
    code: `
  # Linux: Check disk usage
  du -h /path
  # Outputs: space used
    `,
    quiz: {
      question: "What’s a disk allocation issue?",
      options: ["More CPU", "Fragmentation", "Fast apps", "Less RAM"],
      answer: "Fragmentation",
    },
  },
  {
    id: "os-25",
    question: "What’s the role of the boot loader in resource setup?",
    answer:
      "The boot loader starts the OS, loading it into memory and setting initial CPU and RAM use. It’s step one for resources, but a bad loader config hangs the system cold.",
    topic: "operating-system",
    subTopic: "Architecture",
    code: `
  # Linux: Check GRUB config
  cat /boot/grub/grub.cfg
  # Outputs: kernel load params
    `,
    quiz: {
      question: "What does the boot loader load?",
      options: ["Apps", "OS", "Disk", "Network"],
      answer: "OS",
    },
  },
  {
    id: "os-26",
    question: "How does the OS handle resource starvation?",
    answer:
      "Resource starvation happens when a process never gets CPU or memory due to others hogging it. The OS uses aging or priority boosts, but tuning it wrong leaves some tasks stuck.",
    topic: "operating-system",
    subTopic: "Resource Management",
    code: `
  # Linux: Boost nice value over time
  renice +5 -p 1234  # PID 1234
  # Check
  top
    `,
    quiz: {
      question: "What fixes starvation?",
      options: ["More disk", "Priority boosts", "Fast CPU", "Less RAM"],
      answer: "Priority boosts",
    },
  },
  {
    id: "os-27",
    question: "What’s the deal with memory segmentation?",
    answer:
      "Memory segmentation splits RAM into chunks for code, data, or stack, protecting resources. It’s flexible, but fragments and overhead slow it versus paging.",
    topic: "operating-system",
    subTopic: "Memory Management",
    code: `
  # Linux: Check segments (conceptual)
  cat /proc/1234/maps  # PID 1234
  # Outputs: memory layout
    `,
    quiz: {
      question: "What does segmentation split?",
      options: ["CPU", "Memory", "Disk", "Network"],
      answer: "Memory",
    },
  },
  {
    id: "os-28",
    question: "How does the OS manage network resources?",
    answer:
      "The OS manages network resources with stacks—like TCP/IP—handling packets and ports. It keeps data flowing, but congestion or bad queues drop packets fast.",
    topic: "operating-system",
    subTopic: "Networking",
    code: `
  # Linux: Check network stats
  netstat -s
  # Outputs: packet counts
    `,
    quiz: {
      question: "What’s a network resource issue?",
      options: ["More RAM", "Packet drops", "Fast CPU", "Less disk"],
      answer: "Packet drops",
    },
  },
  {
    id: "os-29",
    question: "What’s the trick to handling page replacement?",
    answer:
      "Page replacement picks which RAM pages to swap out when memory’s full, using rules like LRU. It keeps apps running, but bad picks thrash the system with disk I/O.",
    topic: "operating-system",
    subTopic: "Memory Management",
    code: `
  # Linux: Check swap activity
  vmstat 1
  # Outputs: si/so (swap in/out)
    `,
    quiz: {
      question: "What’s a page replacement risk?",
      options: ["More RAM", "Thrashing", "Fast apps", "Less CPU"],
      answer: "Thrashing",
    },
  },
  {
    id: "os-30",
    question: "How does the OS handle process states?",
    answer:
      "Process states—like running, waiting, or ready—track what a process needs, like CPU or I/O. It’s how resources get assigned, but too many waiting tasks clog queues.",
    topic: "operating-system",
    subTopic: "Process Management",
    code: `
  # Linux: Check state
  cat /proc/1234/stat  # PID 1234
  # Outputs: R, S, D, etc.
    `,
    quiz: {
      question: "What’s a process state?",
      options: ["Disk use", "Resource need", "Network speed", "User login"],
      answer: "Resource need",
    },
  },
  {
    id: "os-31",
    question: "What’s the role of the memory management unit?",
    answer:
      "The MMU maps virtual to physical memory, enforcing access rules. It’s key for isolation, but misconfigs—like bad mappings—crash apps or leak data.",
    topic: "operating-system",
    subTopic: "Memory Management",
    code: `
  # Linux: Check MMU mappings (conceptual)
  cat /proc/1234/pagemap  # PID 1234
  # Outputs: physical addresses
    `,
    quiz: {
      question: "What does the MMU map?",
      options: [
        "Disk to CPU",
        "Virtual to physical",
        "Network to RAM",
        "User to app",
      ],
      answer: "Virtual to physical",
    },
  },
  {
    id: "os-32",
    question: "How does the OS handle resource quotas?",
    answer:
      "Resource quotas cap CPU, memory, or disk per user or process, keeping one from hogging all. It’s fair, but setting them too low chokes legit tasks.",
    topic: "operating-system",
    subTopic: "Resource Management",
    code: `
  # Linux: Set CPU quota with cgroups
  cgcreate -g cpu:/mygroup
  cgset -r cpu.shares=512 mygroup
    `,
    quiz: {
      question: "What do quotas prevent?",
      options: ["Fast apps", "Resource hogs", "More disk", "Less CPU"],
      answer: "Resource hogs",
    },
  },
  {
    id: "os-33",
    question: "What’s the deal with preemptive multitasking?",
    answer:
      "Preemptive multitasking forces processes off the CPU to share time, unlike cooperative where they choose. It’s smoother, but frequent preemptions add switch costs.",
    topic: "operating-system",
    subTopic: "Process Management",
    code: `
  # Linux: Check preempt status
  cat /proc/sys/kernel/sched_min_granularity_ns
  # Outputs: time slice
    `,
    quiz: {
      question: "What’s preemptive multitasking?",
      options: ["App choice", "Forced sharing", "More RAM", "Less disk"],
      answer: "Forced sharing",
    },
  },
  {
    id: "os-34",
    question: "How does the OS manage file locking?",
    answer:
      "File locking stops multiple processes from messing up shared files, using exclusive or shared modes. It’s key for data safety, but deadlocks stall if locks clash.",
    topic: "operating-system",
    subTopic: "Storage Management",
    code: `
  # Linux: Lock a file
  flock -x /file echo "Locked"
  # Check locks
  lslocks
    `,
    quiz: {
      question: "What’s a file locking risk?",
      options: ["More RAM", "Deadlocks", "Fast apps", "Less CPU"],
      answer: "Deadlocks",
    },
  },
  {
    id: "os-35",
    question: "What’s the trick to managing kernel buffers?",
    answer:
      "Kernel buffers hold I/O data in RAM to smooth device access, like disk writes. They cut waits, but too big eats memory—balance is everything.",
    topic: "operating-system",
    subTopic: "I/O Management",
    code: `
  # Linux: Check buffer stats
  cat /proc/meminfo | grep Buffers
  # Outputs: buffer size
    `,
    quiz: {
      question: "What do kernel buffers reduce?",
      options: ["CPU use", "I/O waits", "More disk", "Network lag"],
      answer: "I/O waits",
    },
  },
  {
    id: "os-36",
    question: "How does the OS handle resource accounting?",
    answer:
      "Resource accounting tracks CPU, memory, and I/O use per process, billing or limiting them. It’s fair, but tracking every byte slows the system if overdone.",
    topic: "operating-system",
    subTopic: "Resource Management",
    code: `
  # Linux: Check usage
  top -p 1234  # PID 1234
  # Outputs: CPU%, MEM%
    `,
    quiz: {
      question: "What does resource accounting track?",
      options: ["User logins", "Process use", "Disk speed", "Network size"],
      answer: "Process use",
    },
  },
  {
    id: "os-37",
    question: "What’s the role of the OS in memory compaction?",
    answer:
      "Memory compaction moves used RAM chunks together, freeing big blocks. It fights fragmentation, but it’s slow—shuffling live data eats CPU and risks crashes.",
    topic: "operating-system",
    subTopic: "Memory Management",
    code: `
  # Linux: Trigger compaction (root)
  echo 1 > /proc/sys/vm/compact_memory
  # Check free
  free -h
    `,
    quiz: {
      question: "What does compaction fix?",
      options: ["More CPU", "Fragmentation", "Fast apps", "Less disk"],
      answer: "Fragmentation",
    },
  },
  {
    id: "os-38",
    question: "How does the OS manage network sockets?",
    answer:
      "Network sockets connect apps to the network, using ports and buffers. They’re key for data flow, but too many open sockets exhaust resources or clog the stack.",
    topic: "operating-system",
    subTopic: "Networking",
    code: `
  # Linux: Check sockets
  ss -tuln
  # Outputs: listening ports
    `,
    quiz: {
      question: "What’s a socket limit?",
      options: ["More RAM", "Port exhaustion", "Fast CPU", "Less disk"],
      answer: "Port exhaustion",
    },
  },
  {
    id: "os-39",
    question: "What’s the trick to handling resource overcommit?",
    answer:
      "Resource overcommit promises more memory or CPU than exists, betting not all apps use it at once. It maxes hardware, but overdoing it crashes when demand spikes.",
    topic: "operating-system",
    subTopic: "Resource Management",
    code: `
  # Linux: Check overcommit
  cat /proc/sys/vm/overcommit_memory
  # Outputs: 0, 1, 2 (policy)
    `,
    quiz: {
      question: "What’s an overcommit risk?",
      options: ["More RAM", "Crashes", "Fast apps", "Less CPU"],
      answer: "Crashes",
    },
  },
  {
    id: "os-40",
    question: "How does the OS handle resource reclamation?",
    answer:
      "Resource reclamation frees up RAM or CPU when processes die or sleep, like killing swapped pages. It keeps resources flowing, but aggressive reclaim can zap running apps.",
    topic: "operating-system",
    subTopic: "Resource Management",
    code: `
  # Linux: Drop caches (root)
  echo 3 > /proc/sys/vm/drop_caches
  # Check free
  free -h
    `,
    quiz: {
      question: "What does reclamation free?",
      options: ["Disk", "Resources", "Network", "Users"],
      answer: "Resources",
    },
  },
];
