import { QnaTypes } from "./javascript";

export const serverConcepts: QnaTypes[] = [
  {
    id: "server-1",
    question: "What is load balancing and why is it critical for servers?",
    answer:
      "Load balancing spreads incoming traffic across multiple servers to avoid overloading any one machine. It keeps apps fast and reliable, especially under heavy use. The challenge is picking the right method—round-robin is simple, but least-connections adapts better—and handling failover if a server crashes.",
    topic: "server",
    subTopic: "Performance",
    code: `
  # Nginx load balancing example
  upstream backend {
    server 192.168.1.10;
    server 192.168.1.11;
  }
  server {
    listen 80;
    location / {
      proxy_pass http://backend;
    }
  }
    `,
    quiz: {
      question: "What’s the main goal of load balancing?",
      options: [
        "Encrypt traffic",
        "Distribute traffic",
        "Monitor logs",
        "Back up data",
      ],
      answer: "Distribute traffic",
    },
  },
  {
    id: "server-2",
    question: "How does a reverse proxy differ from a forward proxy?",
    answer:
      "A reverse proxy sits in front of servers, handling client requests and routing them, while a forward proxy sits in front of clients, masking their requests to the internet. Reverse proxies boost security and performance—like caching or SSL termination—but the trick is configuring them without adding latency.",
    topic: "server",
    subTopic: "Networking",
    code: `
  # Nginx reverse proxy example
  server {
    listen 80;
    server_name example.com;
    location / {
      proxy_pass http://192.168.1.100:8080;
    }
  }
    `,
    quiz: {
      question: "What does a reverse proxy protect?",
      options: ["Clients", "Servers", "Networks", "Databases"],
      answer: "Servers",
    },
  },
  {
    id: "server-3",
    question: "What’s the deal with server virtualization?",
    answer:
      "Server virtualization splits one physical server into multiple virtual machines, each running its own OS and apps. It saves hardware costs and boosts flexibility, but the catch is resource contention—CPU or memory oversubscription can slow everything down if not tuned right.",
    topic: "server",
    subTopic: "Virtualization",
    code: `
  # Start a VM with KVM/QEMU (simplified)
  qemu-system-x86_64 -m 1024 -hda vm.img -cdrom os.iso
  # Creates a VM with 1GB RAM
    `,
    quiz: {
      question: "What does virtualization create?",
      options: [
        "Physical servers",
        "Virtual machines",
        "Network routes",
        "Storage pools",
      ],
      answer: "Virtual machines",
    },
  },
  {
    id: "server-4",
    question: "How does RAID improve server storage reliability?",
    answer:
      "RAID combines multiple disks for redundancy or speed, like RAID 1 mirroring data or RAID 5 striping with parity. It keeps servers running if a disk fails, but the trick is rebuild time—replacing a failed drive can stress the array and risk more failures.",
    topic: "server",
    subTopic: "Storage",
    code: `
  # Check RAID status (mdadm example)
  mdadm --detail /dev/md0
  # Shows array health and rebuild progress
    `,
    quiz: {
      question: "What’s a key benefit of RAID?",
      options: [
        "Faster networking",
        "Data redundancy",
        "More RAM",
        "Better security",
      ],
      answer: "Data redundancy",
    },
  },
  {
    id: "server-5",
    question: "What’s the purpose of a server certificate in SSL/TLS?",
    answer:
      "A server certificate proves a server’s identity and encrypts traffic with SSL/TLS, keeping data safe from eavesdropping. It’s issued by a trusted authority, but the challenge is keeping it current—expired certs break trust and disrupt connections.",
    topic: "server",
    subTopic: "Security",
    code: `
  # Generate a self-signed cert (OpenSSL)
  openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365
  # Config in Nginx
  ssl_certificate /path/to/cert.pem;
  ssl_certificate_key /path/to/key.pem;
    `,
    quiz: {
      question: "What does a server certificate enable?",
      options: [
        "Load balancing",
        "Encrypted traffic",
        "User logins",
        "File backups",
      ],
      answer: "Encrypted traffic",
    },
  },
  {
    id: "server-6",
    question: "How does a web server like Apache handle concurrent requests?",
    answer:
      "Apache uses models like prefork or worker to manage concurrent requests. Prefork spawns processes, while worker uses threads—both handle multiple users at once. The catch is tuning—too many processes eat RAM, too few slow down under load.",
    topic: "server",
    subTopic: "Web Hosting",
    code: `
  # Apache config snippet
  <IfModule mpm_prefork_module>
    StartServers       5
    MaxClients        150
  </IfModule>
  # Restart Apache
  systemctl restart apache2
    `,
    quiz: {
      question: "What limits Apache concurrency?",
      options: [
        "CPU speed",
        "Process/thread limits",
        "Disk space",
        "Network ports",
      ],
      answer: "Process/thread limits",
    },
  },
  {
    id: "server-7",
    question: "What’s the trick to managing server logs effectively?",
    answer:
      "Server logs track activity—like errors or access—and help diagnose issues. Tools like logrotate keep them from filling disks by rotating and compressing old logs. The challenge is filtering noise—huge logs hide critical errors if you don’t grep or analyze them right.",
    topic: "server",
    subTopic: "Monitoring",
    code: `
  # Rotate logs with logrotate
  /var/log/app.log {
    daily
    rotate 7
    compress
  }
  # Check errors
  cat /var/log/syslog | grep "error"
    `,
    quiz: {
      question: "What does logrotate prevent?",
      options: [
        "Server crashes",
        "Disk space issues",
        "Network delays",
        "User errors",
      ],
      answer: "Disk space issues",
    },
  },
  {
    id: "server-8",
    question: "How does DNS configuration impact server accessibility?",
    answer:
      "DNS maps domain names to server IPs, so clients can find your server. A misconfigured record—like a wrong A record—makes it unreachable. The trick is propagation—changes take time to spread, and caching can delay fixes.",
    topic: "server",
    subTopic: "Networking",
    code: `
  # Example DNS zone file
  $TTL 3600
  example.com. IN A 192.168.1.100
  www          IN CNAME example.com.
  # Reload DNS server (e.g., BIND)
  rndc reload
    `,
    quiz: {
      question: "What does an A record map?",
      options: [
        "Domain to IP",
        "IP to domain",
        "Email to server",
        "Port to service",
      ],
      answer: "Domain to IP",
    },
  },
  {
    id: "server-9",
    question: "What’s the role of a server cluster in high availability?",
    answer:
      "A server cluster groups machines to work as one, ensuring uptime if one fails. It uses heartbeat signals to detect crashes and failover to backups. The catch is syncing—data must stay consistent across nodes, or clients see glitches.",
    topic: "server",
    subTopic: "High Availability",
    code: `
  # Pacemaker cluster status (simplified)
  pcs status
  # Configure resource
  pcs resource create WebServer nginx
    `,
    quiz: {
      question: "What does a cluster ensure?",
      options: [
        "Faster backups",
        "High uptime",
        "More storage",
        "Better security",
      ],
      answer: "High uptime",
    },
  },
  {
    id: "server-10",
    question: "How does SSH secure server access?",
    answer:
      "SSH encrypts remote server access, using key pairs or passwords for authentication. Public keys go on the server, private keys stay with you. The trick is hardening—disabling root login or weak ciphers stops brute-force attacks.",
    topic: "server",
    subTopic: "Security",
    code: `
  # Generate SSH key
  ssh-keygen -t rsa -b 4096
  # Copy to server
  ssh-copy-id user@192.168.1.100
  # Disable root login
  echo "PermitRootLogin no" >> /etc/ssh/sshd_config
    `,
    quiz: {
      question: "What does SSH encrypt?",
      options: [
        "File transfers",
        "Remote access",
        "DNS queries",
        "Web traffic",
      ],
      answer: "Remote access",
    },
  },
  {
    id: "server-11",
    question: "What’s the challenge of server resource monitoring?",
    answer:
      "Resource monitoring tracks CPU, memory, and disk to catch bottlenecks or failures. Tools like top or Prometheus give real-time data, but the challenge is alerts—setting thresholds too low floods you with noise, too high misses problems.",
    topic: "server",
    subTopic: "Monitoring",
    code: `
  # Check CPU/memory with top
  top
  # Install Prometheus (example)
  systemctl start prometheus
  # Alert rule snippet
  alert: HighCPU
    expr: cpu_usage > 80
    `,
    quiz: {
      question: "What’s a risk of poor monitoring thresholds?",
      options: [
        "Missed issues",
        "Faster servers",
        "More storage",
        "Better security",
      ],
      answer: "Missed issues",
    },
  },
  {
    id: "server-12",
    question:
      "How does a content delivery network speed up server performance?",
    answer:
      "A CDN caches server content—like images or pages—on edge nodes closer to users, cutting latency. It offloads traffic from the main server, but the trick is cache consistency—stale content can confuse users if not refreshed right.",
    topic: "server",
    subTopic: "Performance",
    code: `
  # Nginx caching config
  proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=my_cache:10m;
  server {
    location / {
      proxy_cache my_cache;
      proxy_pass http://backend;
    }
  }
    `,
    quiz: {
      question: "What does a CDN reduce?",
      options: ["Server cost", "Latency", "Storage use", "Security risks"],
      answer: "Latency",
    },
  },
  {
    id: "server-13",
    question: "What’s the deal with containerization on servers?",
    answer:
      "Containerization packs apps and dependencies into isolated units, like Docker containers, running on a shared OS. It’s lighter than VMs but tricky—networking and storage need careful setup, and a bad image can expose vulnerabilities.",
    topic: "server",
    subTopic: "Virtualization",
    code: `
  # Run a container
  docker run -d -p 80:80 nginx
  # List running containers
  docker ps
    `,
    quiz: {
      question: "What does containerization share?",
      options: ["Hardware", "OS kernel", "Network", "Storage"],
      answer: "OS kernel",
    },
  },
  {
    id: "server-14",
    question: "How does a server handle database replication?",
    answer:
      "Database replication copies data across servers for redundancy or load sharing, like MySQL’s master-slave setup. It boosts reliability, but the catch is latency—async replication can lag, and conflicts arise if writes hit both nodes.",
    topic: "server",
    subTopic: "Storage",
    code: `
  # MySQL replication (master config)
  [mysqld]
  server-id=1
  log_bin=mysql-bin
  # Slave config
  CHANGE MASTER TO MASTER_HOST='192.168.1.100';
  START SLAVE;
    `,
    quiz: {
      question: "What’s a challenge of database replication?",
      options: [
        "Faster queries",
        "Data latency",
        "More RAM",
        "Simplified backups",
      ],
      answer: "Data latency",
    },
  },
  {
    id: "server-15",
    question: "What’s the role of a server orchestration tool like Kubernetes?",
    answer:
      "Kubernetes orchestrates containers across servers, automating deployment, scaling, and failover. It uses pods and nodes, but the trick is complexity—yaml configs and networking (like CNI) need precision, or apps won’t run right.",
    topic: "server",
    subTopic: "Automation",
    code: `
  # Deploy an app in Kubernetes
  kubectl apply -f pod.yaml
  # pod.yaml example
  apiVersion: v1
  kind: Pod
  metadata:
    name: nginx-pod
  spec:
    containers:
    - name: nginx
      image: nginx
    `,
    quiz: {
      question: "What does Kubernetes manage?",
      options: [
        "Physical servers",
        "Containers",
        "DNS records",
        "User accounts",
      ],
      answer: "Containers",
    },
  },
  {
    id: "server-16",
    question: "How does server hardening reduce vulnerabilities?",
    answer:
      "Server hardening tightens security by disabling unused services, setting strong permissions, and patching software. It cuts attack surfaces, but the challenge is balance—over-hardening can break apps, and missing a step leaves gaps.",
    topic: "server",
    subTopic: "Security",
    code: `
  # Disable unused service
  systemctl disable bluetooth
  # Restrict file permissions
  chmod 600 /etc/secret.conf
    `,
    quiz: {
      question: "What does server hardening aim to reduce?",
      options: ["Latency", "Vulnerabilities", "Storage use", "CPU load"],
      answer: "Vulnerabilities",
    },
  },
  {
    id: "server-17",
    question: "What’s the trick to managing server backups?",
    answer:
      "Server backups save critical data—like configs or databases—to recover from failures. Tools like rsync or tar work, but the trick is testing—unverified backups can fail when needed, and off-site storage adds complexity.",
    topic: "server",
    subTopic: "Storage",
    code: `
  # Backup directory with rsync
  rsync -av /var/www /backup/www
  # Create tar archive
  tar -czf backup.tar.gz /var/www
    `,
    quiz: {
      question: "Why test server backups?",
      options: [
        "To speed them up",
        "To ensure recovery",
        "To save space",
        "To encrypt them",
      ],
      answer: "To ensure recovery",
    },
  },
  {
    id: "server-18",
    question: "How does a server handle rate limiting?",
    answer:
      "Rate limiting caps requests to a server, like API calls, to prevent abuse or overload. Nginx or iptables can enforce it, but the catch is tuning—too strict blocks legit users, too loose lets attacks through.",
    topic: "server",
    subTopic: "Performance",
    code: `
  # Nginx rate limiting
  limit_req_zone $binary_remote_addr zone=mylimit:10m rate=10r/s;
  server {
    location /api {
      limit_req zone=mylimit burst=20;
    }
  }
    `,
    quiz: {
      question: "What does rate limiting protect against?",
      options: ["Data loss", "Overload", "Slow networks", "User errors"],
      answer: "Overload",
    },
  },
  {
    id: "server-19",
    question: "What’s the role of a server health check?",
    answer:
      "A server health check pings endpoints or metrics—like CPU or uptime—to spot issues before they crash services. Load balancers use it to route traffic away from sick nodes. The trick is frequency—too often wastes resources, too rare misses problems.",
    topic: "server",
    subTopic: "Monitoring",
    code: `
  # Nginx health check example
  server {
    location /health {
      return 200 "OK";
    }
  }
  # Script to check uptime
  uptime
    `,
    quiz: {
      question: "What uses health checks to reroute traffic?",
      options: ["Firewalls", "Load balancers", "DNS servers", "Backups"],
      answer: "Load balancers",
    },
  },
  {
    id: "server-20",
    question: "How does a server manage auto-scaling?",
    answer:
      "Auto-scaling adjusts server count based on load—like adding VMs when traffic spikes—using tools like AWS Auto Scaling. It keeps performance steady, but the challenge is prediction—laggy scaling or flapping (rapid on-off) wastes money or drops requests.",
    topic: "server",
    subTopic: "Automation",
    code: `
  # AWS CLI auto-scaling example
  aws autoscaling create-auto-scaling-group \
    --auto-scaling-group-name my-group \
    --min-size 2 --max-size 5 --desired-capacity 3
    `,
    quiz: {
      question: "What triggers auto-scaling?",
      options: ["User logins", "Load changes", "Disk space", "Time of day"],
      answer: "Load changes",
    },
  },
];
