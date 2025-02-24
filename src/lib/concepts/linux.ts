import { QnaTypes } from "./javascript";

export const linuxConcepts: QnaTypes[] = [
  {
    id: "linux-1",
    question: "What is the role of the /proc filesystem in Linux?",
    answer:
      "The /proc filesystem is a virtual directory that gives you a window into the kernel and running processes. It’s not on disk—it’s generated in memory and shows real-time info like CPU stats, memory usage, or process details. The tricky part is its dynamic nature; files like /proc/meminfo change as the system runs, making it a goldmine for troubleshooting.",
    topic: "linux",
    subTopic: "Filesystem",
    code: `
  # Check memory info
  cat /proc/meminfo
  # Outputs: MemTotal, MemFree, etc.
    `,
    quiz: {
      question: "Where does the /proc filesystem exist?",
      options: [
        "On the hard drive",
        "In memory",
        "In the cloud",
        "On a separate partition",
      ],
      answer: "In memory",
    },
  },
  {
    id: "linux-2",
    question: "How does the init system manage Linux boot and services?",
    answer:
      "The init system is the first process that starts when Linux boots, with PID 1, and it manages other processes and services. Traditional init uses scripts in /etc/rcX.d, while modern ones like systemd use units for faster, parallel startup. The challenge is mastering its complexity—systemd’s dependencies can trip you up if misconfigured.",
    topic: "linux",
    subTopic: "System Management",
    code: `
  # Check init system status (systemd)
  systemctl status
  # Lists running services
    `,
    quiz: {
      question: "What’s the PID of the init process?",
      options: ["0", "1", "10", "100"],
      answer: "1",
    },
  },
  {
    id: "linux-3",
    question: "What’s the deal with kernel modules in Linux?",
    answer:
      "Kernel modules are chunks of code you can load into the Linux kernel to add features, like drivers for new hardware, without rebooting. They’re managed with commands like modprobe and lsmod. The catch is dependencies—loading a module might need others, and removing one can break something if you’re not careful.",
    topic: "linux",
    subTopic: "Kernel",
    code: `
  # Load a module
  modprobe usbhid
  # List loaded modules
  lsmod | grep usbhid
    `,
    quiz: {
      question: "What’s the benefit of kernel modules?",
      options: [
        "They speed up boot",
        "They add features without reboot",
        "They replace the kernel",
        "They manage users",
      ],
      answer: "They add features without reboot",
    },
  },
  {
    id: "linux-4",
    question: "How does the chroot command isolate processes?",
    answer:
      "The chroot command changes the root directory for a process, locking it into a smaller filesystem subtree. It’s like a lightweight jail for testing or security, but the trick is escaping—processes can break out if they have root access or misconfigured permissions, so it’s not foolproof isolation.",
    topic: "linux",
    subTopic: "Security",
    code: `
  # Run a shell in a chroot
  chroot /mnt/test /bin/bash
  # New root is /mnt/test
    `,
    quiz: {
      question: "What does chroot change for a process?",
      options: [
        "Its memory limit",
        "Its root directory",
        "Its user ID",
        "Its network access",
      ],
      answer: "Its root directory",
    },
  },
  {
    id: "linux-5",
    question: "What’s the purpose of the /dev directory in Linux?",
    answer:
      "The /dev directory holds special files representing devices, like /dev/sda for a disk or /dev/null for a data sink. These aren’t regular files—they’re interfaces to hardware or kernel features. The challenge is understanding their types, like block versus character devices, and how they tie into drivers.",
    topic: "linux",
    subTopic: "Filesystem",
    code: `
  # List device files
  ls -l /dev
  # Example: /dev/null discards data
  echo "test" > /dev/null
    `,
    quiz: {
      question: "What does /dev/null do?",
      options: [
        "Stores logs",
        "Discards data",
        "Mounts drives",
        "Runs scripts",
      ],
      answer: "Discards data",
    },
  },
  {
    id: "linux-6",
    question: "How does the iptables tool manage firewall rules?",
    answer:
      "The iptables tool sets up rules to filter or route network traffic, like blocking ports or forwarding packets. It works with tables (filter, nat) and chains (INPUT, OUTPUT). The tricky part is order—rules are checked top-down, so a broad deny can override a specific allow if misplaced.",
    topic: "linux",
    subTopic: "Networking",
    code: `
  # Block incoming port 22
  iptables -A INPUT -p tcp --dport 22 -j DROP
  # List rules
  iptables -L
    `,
    quiz: {
      question: "What does iptables -A INPUT do?",
      options: [
        "Adds a rule to outgoing traffic",
        "Adds a rule to incoming traffic",
        "Deletes a rule",
        "Flushes the table",
      ],
      answer: "Adds a rule to incoming traffic",
    },
  },
  {
    id: "linux-7",
    question: "What’s the trick to managing processes with the kill command?",
    answer:
      "The kill command sends signals to processes, like SIGTERM to stop or SIGKILL to force quit, using their PID. The challenge is picking the right signal—SIGTERM asks nicely, but SIGKILL can leave resources hanging if the process doesn’t clean up, so you need to know what’s running.",
    topic: "linux",
    subTopic: "Process Management",
    code: `
  # Find a process
  ps aux | grep firefox
  # Terminate it
  kill -15 1234  # PID 1234
    `,
    quiz: {
      question: "What does SIGKILL do?",
      options: [
        "Asks a process to stop",
        "Forces a process to stop",
        "Pauses a process",
        "Restarts a process",
      ],
      answer: "Forces a process to stop",
    },
  },
  {
    id: "linux-8",
    question: "How does the strace command debug running programs?",
    answer:
      "The strace command traces system calls a program makes, like file reads or network requests, showing what it’s doing under the hood. It’s great for finding why something crashes, but the catch is the flood of output—you need to filter it to spot the real issue.",
    topic: "linux",
    subTopic: "Troubleshooting",
    code: `
  # Trace a command
  strace -o trace.log ls
  # Outputs system calls to file
    `,
    quiz: {
      question: "What does strace track?",
      options: ["CPU usage", "System calls", "Memory leaks", "Network speed"],
      answer: "System calls",
    },
  },
  {
    id: "linux-9",
    question: "What’s the deal with symbolic links versus hard links?",
    answer:
      "Symbolic links point to a file’s path and can cross filesystems, while hard links point to the file’s data and must stay on the same filesystem. Symlinks break if the target moves, but hard links don’t. The trick is managing them—hard links share inodes, so changes sync, which can surprise you.",
    topic: "linux",
    subTopic: "Filesystem",
    code: `
  # Create a symlink
  ln -s file.txt link.txt
  # Create a hard link
  ln file.txt hardlink.txt
    `,
    quiz: {
      question: "What happens if a symlink’s target is deleted?",
      options: [
        "It updates",
        "It breaks",
        "It copies the data",
        "It stays valid",
      ],
      answer: "It breaks",
    },
  },
  {
    id: "linux-10",
    question: "How does the cron daemon schedule tasks in Linux?",
    answer:
      "The cron daemon runs scheduled tasks, like backups or updates, based on crontab files. Each line has a time pattern and command. The challenge is syntax—five fields for minute, hour, day, month, and weekday can trip you up, and logs are your only clue if it fails.",
    topic: "linux",
    subTopic: "Automation",
    code: `
  # Edit crontab
  crontab -e
  # Run script every day at 2 AM
  0 2 * * * /backup.sh
    `,
    quiz: {
      question: "What does * * * * * mean in cron?",
      options: ["Every minute", "Every hour", "Once a day", "Never"],
      answer: "Every minute",
    },
  },
  {
    id: "linux-11",
    question: "What’s the purpose of the /etc/passwd and /etc/shadow files?",
    answer:
      "The /etc/passwd file lists user info like username and home directory, while /etc/shadow stores encrypted passwords separately for security. Passwd is world-readable, but shadow is locked down. The catch is syncing them—changes to one need the other updated, or logins break.",
    topic: "linux",
    subTopic: "Security",
    code: `
  # View user info
  cat /etc/passwd
  # Check shadow (needs root)
  sudo cat /etc/shadow
    `,
    quiz: {
      question: "Where are passwords stored in Linux?",
      options: ["/etc/passwd", "/etc/shadow", "/home", "/proc"],
      answer: "/etc/shadow",
    },
  },
  {
    id: "linux-12",
    question: "How does the mount command manage filesystems?",
    answer:
      "The mount command attaches filesystems—like USB drives or partitions—to a directory, making them accessible. It uses /etc/fstab for defaults. The tricky part is options—read-only versus read-write or filesystem type mismatches can fail silently if not set right.",
    topic: "linux",
    subTopic: "Filesystem",
    code: `
  # Mount a drive
  mount /dev/sdb1 /mnt
  # Check mounted filesystems
  df -h
    `,
    quiz: {
      question: "What does mount do?",
      options: [
        "Deletes files",
        "Attaches filesystems",
        "Formats drives",
        "Lists users",
      ],
      answer: "Attaches filesystems",
    },
  },
  {
    id: "linux-13",
    question: "What’s the trick to using pipes and redirection in Linux?",
    answer:
      "Pipes send one command’s output to another, like ls | grep, while redirection sends it to files with > or <. The challenge is chaining them right—order matters, and redirecting errors (2>) versus output (1>) can confuse if you mix them up.",
    topic: "linux",
    subTopic: "Shell",
    code: `
  # Pipe and redirect
  ls -l | grep txt > files.txt
  # Errors to a file
  cat missing 2> errors.log
    `,
    quiz: {
      question: "What does | do in Linux?",
      options: [
        "Redirects to a file",
        "Pipes output to another command",
        "Deletes data",
        "Runs in background",
      ],
      answer: "Pipes output to another command",
    },
  },
  {
    id: "linux-14",
    question: "How does the sudo command enforce privileged access?",
    answer:
      "The sudo command lets users run commands as root or another user, based on rules in /etc/sudoers. It’s a gatekeeper for security, but the catch is misconfiguring it—giving too much power can let anyone escalate privileges unintentionally.",
    topic: "linux",
    subTopic: "Security",
    code: `
  # Run as root
  sudo whoami
  # Edit sudoers (carefully!)
  sudo visudo
    `,
    quiz: {
      question: "What file controls sudo permissions?",
      options: ["/etc/passwd", "/etc/sudoers", "/etc/shadow", "/proc/sudo"],
      answer: "/etc/sudoers",
    },
  },
  {
    id: "linux-15",
    question: "What’s the role of the dmesg command in troubleshooting?",
    answer:
      "The dmesg command shows kernel messages, like hardware errors or driver logs, from the ring buffer. It’s a first stop for diagnosing boot issues or device failures. The trick is timing—the buffer overwrites old messages, so you need to catch them fast.",
    topic: "linux",
    subTopic: "Troubleshooting",
    code: `
  # View kernel logs
  dmesg | grep usb
  # Filter for USB-related messages
    `,
    quiz: {
      question: "What does dmesg display?",
      options: [
        "User commands",
        "Kernel messages",
        "Network stats",
        "File changes",
      ],
      answer: "Kernel messages",
    },
  },
  {
    id: "linux-16",
    question: "How does the awk command process text in Linux?",
    answer:
      "The awk command parses and manipulates text, like pulling columns from files or doing calculations. It uses patterns and actions in a script-like way. The challenge is its syntax— mastering {print $2} versus complex conditionals takes practice.",
    topic: "linux",
    subTopic: "Shell",
    code: `
  # Extract second column
  cat file.txt | awk '{print $2}'
  # Sum numbers in a column
  awk '{sum += $1} END {print sum}' numbers.txt
    `,
    quiz: {
      question: "What does awk '{print $1}' do?",
      options: [
        "Prints the first line",
        "Prints the first column",
        "Sums the first column",
        "Deletes the first field",
      ],
      answer: "Prints the first column",
    },
  },
  {
    id: "linux-17",
    question: "What’s the deal with cgroups in Linux?",
    answer:
      "Cgroups, or control groups, limit and monitor resources like CPU or memory for groups of processes. They’re key for containers like Docker, but tricky to set up—misjudging limits can starve critical tasks or let others hog resources.",
    topic: "linux",
    subTopic: "System Management",
    code: `
  # Check cgroups
  cat /proc/cgroups
  # Limit CPU (requires setup)
  cgcreate -g cpu:/mygroup
  cgset -r cpu.shares=512 mygroup
    `,
    quiz: {
      question: "What do cgroups control?",
      options: [
        "User permissions",
        "Process resources",
        "Network traffic",
        "File sizes",
      ],
      answer: "Process resources",
    },
  },
  {
    id: "linux-18",
    question: "How does the netstat command analyze network activity?",
    answer:
      "The netstat command shows network connections, ports, and routing info, helping you spot open services or odd traffic. It’s being replaced by ss, but still useful. The catch is interpreting it—knowing TCP states like LISTEN versus ESTABLISHED is key.",
    topic: "linux",
    subTopic: "Networking",
    code: `
  # List listening ports
  netstat -tuln
  # Show all connections
  netstat -taup
    `,
    quiz: {
      question: "What does netstat -tuln show?",
      options: [
        "All connections",
        "Listening ports",
        "Routing tables",
        "CPU usage",
      ],
      answer: "Listening ports",
    },
  },
  {
    id: "linux-19",
    question: "What’s the challenge of managing swap space in Linux?",
    answer:
      "Swap space is disk space used as virtual memory when RAM runs out. You create it with mkswap and swapon, but the challenge is sizing—too little slows the system, too much wastes disk, and performance drops since disk is slower than RAM.",
    topic: "linux",
    subTopic: "System Management",
    code: `
  # Create swap file
  dd if=/dev/zero of=/swapfile bs=1M count=1024
  mkswap /swapfile
  swapon /swapfile
  # Check swap
  swapon --show
    `,
    quiz: {
      question: "What’s swap space used for?",
      options: [
        "Permanent storage",
        "Virtual memory",
        "Network buffering",
        "User data",
      ],
      answer: "Virtual memory",
    },
  },
  {
    id: "linux-20",
    question: "How does the sed command edit text streams?",
    answer:
      "The sed command edits text streams line-by-line, like replacing words or deleting lines, without changing the original file unless you redirect. It’s powerful for automation, but tricky—regex patterns can mismatch, and in-place edits (-i) need backups to avoid data loss.",
    topic: "linux",
    subTopic: "Shell",
    code: `
  # Replace 'foo' with 'bar'
  sed 's/foo/bar/g' file.txt
  # Delete lines with 'error'
  sed '/error/d' log.txt > newlog.txt
    `,
    quiz: {
      question: "What does sed 's/a/b/g' do?",
      options: [
        "Deletes lines",
        "Replaces a with b globally",
        "Adds b after a",
        "Prints lines with a",
      ],
      answer: "Replaces a with b globally",
    },
  },
];
