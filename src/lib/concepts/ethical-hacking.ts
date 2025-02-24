import { QnaTypes } from "./javascript";

export const ethicalHackingConcepts: QnaTypes[] = [
  {
    id: "eh-1",
    question:
      "What is privilege escalation and why is it a key ethical hacking technique?",
    answer:
      "Privilege escalation is when an ethical hacker gains higher-level access than originally granted, like moving from a basic user to an admin. It’s key because it mimics how real attackers exploit systems to access sensitive data or controls. The challenge is finding misconfigurations or vulnerabilities—like weak permissions or unpatched software—that let this happen, then reporting how to fix them.",
    topic: "ethical-hacking",
    subTopic: "Exploitation",
    code: `
  # Example: Using a local exploit in Linux (simulated)
  whoami  # Outputs: user
  sudo -l  # Lists sudo privileges
  # Exploit misconfigured sudo to run as root
  sudo /bin/bash  # Escalates to root if allowed
  whoami  # Outputs: root
    `,
    quiz: {
      question: "What’s the goal of privilege escalation?",
      options: [
        "To crash the system",
        "To gain higher access levels",
        "To scan for open ports",
        "To install software",
      ],
      answer: "To gain higher access levels",
    },
  },
  {
    id: "eh-2",
    question: "How does social engineering fit into ethical hacking?",
    answer:
      "Social engineering tricks people into revealing sensitive info or granting access, like phishing emails or fake calls pretending to be IT support. In ethical hacking, it tests human weaknesses rather than just tech flaws. The tricky part is staying legal and ethical—always getting permission and avoiding real harm while showing how easy it is to bypass security through trust.",
    topic: "ethical-hacking",
    subTopic: "Human Factors",
    code: `
  # Simulated phishing email (example, not real execution)
  Subject: Urgent: Reset Your Password
  Body: Click here to reset: http://fake-login.com
  # Ethical hacker crafts this, sends to test user awareness
    `,
    quiz: {
      question: "What does social engineering target?",
      options: [
        "Software bugs",
        "Network ports",
        "Human behavior",
        "Hardware flaws",
      ],
      answer: "Human behavior",
    },
  },
  {
    id: "eh-3",
    question:
      "What’s the deal with SQL injection and how do ethical hackers exploit it?",
    answer:
      "SQL injection happens when an attacker slips malicious SQL code into a web app’s input field, like a login form, to manipulate the database. Ethical hackers use it to test if they can extract data, bypass logins, or even delete records. The catch is crafting payloads that work without breaking the app, then suggesting fixes like parameterized queries.",
    topic: "ethical-hacking",
    subTopic: "Web Security",
    code: `
  # Example SQL injection payload
  Input: ' OR '1'='1
  Query executed: SELECT * FROM users WHERE username='' OR '1'='1' AND password=''
  # Bypasses login by making condition always true
    `,
    quiz: {
      question: "What does SQL injection target?",
      options: [
        "Network traffic",
        "Database queries",
        "File systems",
        "Browser cookies",
      ],
      answer: "Database queries",
    },
  },
  {
    id: "eh-4",
    question: "How does a buffer overflow attack work in ethical hacking?",
    answer:
      "A buffer overflow attack floods a program’s memory buffer with more data than it can handle, overwriting nearby memory to run malicious code. Ethical hackers use this to test software security, aiming to gain control or crash it. It’s tricky because you need precise control over the payload and memory layout, plus it’s risky if not contained properly.",
    topic: "ethical-hacking",
    subTopic: "Exploitation",
    code: `
  # Simplified buffer overflow example in C
  void vuln() {
    char buffer[10];
    gets(buffer);  // No bounds checking
  }
  # Attacker sends: AAAAAAAA... (long string with shellcode)
    `,
    quiz: {
      question: "What’s the main risk of a buffer overflow?",
      options: [
        "Data loss",
        "Code execution",
        "Network slowdown",
        "Password theft",
      ],
      answer: "Code execution",
    },
  },
  {
    id: "eh-5",
    question:
      "What’s the purpose of a man-in-the-middle attack in ethical hacking?",
    answer:
      "A man-in-the-middle attack intercepts communication between two parties, like a user and a server, to eavesdrop or alter data. Ethical hackers use it to test network security, checking if encryption or authentication can be bypassed. The challenge is setting it up legally—like with a fake Wi-Fi hotspot—and proving the flaw without stealing real data.",
    topic: "ethical-hacking",
    subTopic: "Network Security",
    code: `
  # Using ARP spoofing (simulated with tools like arpspoof)
  arpspoof -i eth0 -t 192.168.1.10 192.168.1.1
  # Redirects traffic through attacker’s machine
    `,
    quiz: {
      question: "What does a man-in-the-middle attack intercept?",
      options: [
        "File uploads",
        "Communication",
        "User passwords",
        "System logs",
      ],
      answer: "Communication",
    },
  },
  {
    id: "eh-6",
    question: "How do ethical hackers use password cracking to test security?",
    answer:
      "Password cracking tries to guess or recover passwords using techniques like brute force, dictionary attacks, or rainbow tables. Ethical hackers do this to check if weak passwords or poor hashing leave systems vulnerable. The tricky part is balancing speed with ethics—cracking must stay within scope and not disrupt services.",
    topic: "ethical-hacking",
    subTopic: "Authentication",
    code: `
  # Example with hashcat (brute force)
  hashcat -m 0 -a 3 hash.txt ?u?l?d
  # Tries combinations for MD5 hash
    `,
    quiz: {
      question: "What’s a common password cracking method?",
      options: ["SQL injection", "Brute force", "Port scanning", "Phishing"],
      answer: "Brute force",
    },
  },
  {
    id: "eh-7",
    question: "What’s the role of reconnaissance in ethical hacking?",
    answer:
      "Reconnaissance is the prep phase where ethical hackers gather info about a target—like IP addresses, domains, or employee names—before attacking. It’s crucial for planning effective tests but tricky because passive methods (like public data) must avoid detection, while active ones (like scanning) risk tipping off the target.",
    topic: "ethical-hacking",
    subTopic: "Methodology",
    code: `
  # Passive recon with whois
  whois example.com
  # Outputs domain owner, registrar, etc.
    `,
    quiz: {
      question: "What’s the goal of reconnaissance?",
      options: [
        "To exploit vulnerabilities",
        "To gather target info",
        "To install malware",
        "To fix systems",
      ],
      answer: "To gather target info",
    },
  },
  {
    id: "eh-8",
    question: "How does a phishing simulation test an organization’s security?",
    answer:
      "A phishing simulation sends fake but realistic emails to employees to see if they click links or share credentials. Ethical hackers use this to test awareness and training effectiveness. The challenge is crafting believable bait without causing panic or real damage, then reporting results to improve defenses.",
    topic: "ethical-hacking",
    subTopic: "Human Factors",
    code: `
  # Simulated phishing email (conceptual)
  Subject: Verify Your Account Now
  Body: Click http://test-phish.com to avoid suspension
  # Tracks clicks without harm
    `,
    quiz: {
      question: "What does phishing simulation test?",
      options: [
        "Network speed",
        "Employee awareness",
        "Server uptime",
        "Code quality",
      ],
      answer: "Employee awareness",
    },
  },
  {
    id: "eh-9",
    question:
      "What’s the trick to exploiting cross-site scripting vulnerabilities?",
    answer:
      "Cross-site scripting, or XSS, injects malicious scripts into web pages viewed by others, like through comment fields. Ethical hackers exploit it to test if a site runs untrusted code, potentially stealing cookies or redirecting users. The trick is finding input points that aren’t sanitized and proving harm without executing real attacks.",
    topic: "ethical-hacking",
    subTopic: "Web Security",
    code: `
  # XSS payload example
  <script>alert('XSS Test')</script>
  # Injected into a form field to test response
    `,
    quiz: {
      question: "What does XSS exploit?",
      options: [
        "Database errors",
        "User scripts",
        "Network latency",
        "File permissions",
      ],
      answer: "User scripts",
    },
  },
  {
    id: "eh-10",
    question:
      "How does a denial-of-service attack simulation work in ethical hacking?",
    answer:
      "A denial-of-service attack floods a system with traffic to overwhelm it, testing its resilience. Ethical hackers simulate this with controlled tools to see if servers crash or slow down, but the catch is keeping it safe—limiting scope and avoiding real downtime while still showing weak spots.",
    topic: "ethical-hacking",
    subTopic: "Network Security",
    code: `
  # Simulated DoS with hping3
  hping3 -S -p 80 --flood 192.168.1.10
  # Sends SYN packets to test server load
    `,
    quiz: {
      question: "What’s the aim of a DoS simulation?",
      options: [
        "Steal data",
        "Test system resilience",
        "Bypass logins",
        "Scan ports",
      ],
      answer: "Test system resilience",
    },
  },
  {
    id: "eh-11",
    question: "What’s the challenge of using Metasploit in ethical hacking?",
    answer:
      "Metasploit is a tool that runs pre-built exploits against systems to test vulnerabilities. Ethical hackers use it to simulate attacks, like remote code execution. The challenge is configuring it legally—staying in scope, avoiding damage, and interpreting results accurately to suggest fixes.",
    topic: "ethical-hacking",
    subTopic: "Tools",
    code: `
  # Metasploit example (simplified)
  use exploit/windows/smb/ms17_010_eternalblue
  set RHOST 192.168.1.10
  run
  # Tests for EternalBlue vulnerability
    `,
    quiz: {
      question: "What does Metasploit help test?",
      options: [
        "Network speed",
        "Vulnerabilities",
        "User passwords",
        "File integrity",
      ],
      answer: "Vulnerabilities",
    },
  },
  {
    id: "eh-12",
    question: "How does ethical hacking handle session hijacking?",
    answer:
      "Session hijacking steals active user sessions, often by grabbing cookies or tokens. Ethical hackers test this to see if weak session management—like unencrypted traffic—lets attackers impersonate users. The tricky part is proving the flaw without misusing real sessions or data.",
    topic: "ethical-hacking",
    subTopic: "Web Security",
    code: `
  # Simulated cookie theft (conceptual)
  Cookie: session_id=abc123
  # Attacker uses this in a request to hijack session
    `,
    quiz: {
      question: "What does session hijacking target?",
      options: [
        "User sessions",
        "Database records",
        "Network ports",
        "File uploads",
      ],
      answer: "User sessions",
    },
  },
  {
    id: "eh-13",
    question: "What’s the deal with fuzzing in ethical hacking?",
    answer:
      "Fuzzing throws random or malformed data at a program to find crashes or bugs, like buffer overflows. Ethical hackers use it to test software robustness, but it’s tricky—too much noise can miss real issues, and you need to analyze crashes to pinpoint exploitable flaws.",
    topic: "ethical-hacking",
    subTopic: "Exploitation",
    code: `
  # Simple fuzzing with Python (conceptual)
  import socket
  s = socket.socket()
  s.connect(('192.168.1.10', 80))
  s.send(b'A' * 1000)  # Sends junk data
    `,
    quiz: {
      question: "What does fuzzing aim to find?",
      options: [
        "Open ports",
        "Software bugs",
        "User credentials",
        "Network routes",
      ],
      answer: "Software bugs",
    },
  },
  {
    id: "eh-14",
    question: "How does ethical hacking test for DNS spoofing vulnerabilities?",
    answer:
      "DNS spoofing tricks systems into visiting fake sites by poisoning DNS responses. Ethical hackers simulate this to check if networks or devices trust bad DNS data, often using tools to redirect traffic. The challenge is doing it safely without disrupting real services or users.",
    topic: "ethical-hacking",
    subTopic: "Network Security",
    code: `
  # Simulated DNS spoofing with dnsspoof
  dnsspoof -i eth0 -f hosts.txt
  # Redirects example.com to attacker IP
    `,
    quiz: {
      question: "What does DNS spoofing manipulate?",
      options: [
        "IP addresses",
        "DNS responses",
        "User inputs",
        "File permissions",
      ],
      answer: "DNS responses",
    },
  },
  {
    id: "eh-15",
    question: "What’s the trick to using Nmap for ethical network scanning?",
    answer:
      "Nmap scans networks to find open ports, services, and vulnerabilities. Ethical hackers use it to map attack surfaces, but the trick is staying stealthy—avoiding detection by firewalls or IDS—and keeping scans legal by sticking to authorized targets and scopes.",
    topic: "ethical-hacking",
    subTopic: "Tools",
    code: `
  # Nmap stealth scan
  nmap -sS -T4 192.168.1.0/24
  # Scans subnet for open ports quietly
    `,
    quiz: {
      question: "What does Nmap primarily identify?",
      options: ["Passwords", "Open ports", "File changes", "User activity"],
      answer: "Open ports",
    },
  },
  {
    id: "eh-16",
    question: "How does ethical hacking handle reverse engineering?",
    answer:
      "Reverse engineering breaks down software or malware to understand how it works, often to find exploits or backdoors. Ethical hackers use it to test proprietary systems or analyze threats, but it’s tricky—legal boundaries are strict, and disassembling code takes serious skill.",
    topic: "ethical-hacking",
    subTopic: "Exploitation",
    code: `
  # Using objdump (simplified)
  objdump -d binary.exe
  # Shows assembly code to analyze
    `,
    quiz: {
      question: "What’s the goal of reverse engineering?",
      options: [
        "To rewrite code",
        "To understand software",
        "To scan networks",
        "To crack passwords",
      ],
      answer: "To understand software",
    },
  },
  {
    id: "eh-17",
    question: "What’s the challenge of testing for zero-day vulnerabilities?",
    answer:
      "Zero-day vulnerabilities are unknown flaws with no patch yet. Ethical hackers hunt them by analyzing code or behavior for oddities, like memory leaks. The challenge is proving they’re real without a fix available, and reporting them responsibly to avoid black-hat exploitation.",
    topic: "ethical-hacking",
    subTopic: "Vulnerability Assessment",
    code: `
  # Conceptual zero-day test
  Input: <img src="x" onerror="alert('Zero-day')">
  # Tests for unpatched XSS in a browser
    `,
    quiz: {
      question: "What makes zero-days hard to test?",
      options: [
        "They’re patched",
        "They’re unknown",
        "They’re network-based",
        "They’re simple",
      ],
      answer: "They’re unknown",
    },
  },
  {
    id: "eh-18",
    question:
      "How does ethical hacking use packet sniffing to find weaknesses?",
    answer:
      "Packet sniffing captures network traffic to analyze data, like unencrypted passwords or protocols. Ethical hackers use it to test if sensitive info leaks over the wire, but the catch is legality—sniffing must be authorized, and handling captured data requires strict confidentiality.",
    topic: "ethical-hacking",
    subTopic: "Network Security",
    code: `
  # Using tcpdump (simplified)
  tcpdump -i eth0 -w capture.pcap
  # Captures packets for analysis
    `,
    quiz: {
      question: "What does packet sniffing capture?",
      options: [
        "System logs",
        "Network traffic",
        "User inputs",
        "File changes",
      ],
      answer: "Network traffic",
    },
  },
  {
    id: "eh-19",
    question:
      "What’s the role of penetration testing phases in ethical hacking?",
    answer:
      "Penetration testing follows phases like planning, recon, scanning, exploitation, and reporting. Ethical hackers use this structure to systematically find and fix flaws. The tricky part is staying thorough—missing a phase can leave vulnerabilities hidden or fixes unclear.",
    topic: "ethical-hacking",
    subTopic: "Methodology",
    code: `
  # Example: Scanning phase with nmap
  nmap -A 192.168.1.10
  # Gathers detailed target info
    `,
    quiz: {
      question: "What’s a key phase in penetration testing?",
      options: ["Exploitation", "Coding", "Debugging", "Installing"],
      answer: "Exploitation",
    },
  },
  {
    id: "eh-20",
    question: "How does ethical hacking test for remote code execution?",
    answer:
      "Remote code execution lets attackers run code on a target system, often through input flaws. Ethical hackers test this by sending payloads to see if they execute, like via a vulnerable API. The challenge is proving it safely—running harmless code and ensuring no real harm while showing the risk.",
    topic: "ethical-hacking",
    subTopic: "Exploitation",
    code: `
  # Conceptual RCE payload
  POST /api/run HTTP/1.1
  Body: {"cmd": "whoami"}
  # Tests if server executes command
    `,
    quiz: {
      question: "What does remote code execution allow?",
      options: [
        "Data theft",
        "Code running on a target",
        "Network scanning",
        "Password reset",
      ],
      answer: "Code running on a target",
    },
  },
];
