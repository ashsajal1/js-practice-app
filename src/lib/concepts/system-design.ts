import { QnaTypes } from "./javascript";

export const systemDesignConcepts: QnaTypes[] = [
  {
    id: "sd-1",
    question: "What is scalability and why is it the heart of system design?",
    answer:
      "Scalability is a system’s ability to handle more load—like users or data—without breaking. It’s key because growth is inevitable, but the trick is cost—scaling up or out can get pricey if not planned smart.",
    topic: "system-design",
    subTopic: "Fundamentals",
    code: `
  # Nginx load balancer (conceptual scale-out)
  upstream backend {
    server backend1:8080;
    server backend2:8080;
  }
    `,
    quiz: {
      question: "What does scalability handle?",
      options: ["Data loss", "Load growth", "User logins", "Network speed"],
      answer: "Load growth",
    },
  },
  {
    id: "sd-2",
    question: "How does horizontal scaling boost system capacity?",
    answer:
      "Horizontal scaling adds more servers to share the load, unlike vertical scaling’s bigger machines. It’s flexible for scale, but syncing data or state across nodes gets messy fast.",
    topic: "system-design",
    subTopic: "Scalability",
    code: `
  # Docker scale-out
  docker service create --replicas 3 myapp
  # Check
  docker service ls
    `,
    quiz: {
      question: "What’s a horizontal scaling challenge?",
      options: ["Bigger CPUs", "Data sync", "Less storage", "More RAM"],
      answer: "Data sync",
    },
  },
  {
    id: "sd-3",
    question: "What’s the deal with vertical scaling?",
    answer:
      "Vertical scaling beefs up a single server with more CPU, RAM, or disk. It’s simple to start, but hits limits—hardware caps out, and downtime for upgrades stinks.",
    topic: "system-design",
    subTopic: "Scalability",
    code: `
  # AWS: Upgrade instance (conceptual)
  aws ec2 modify-instance-attribute --instance-id i-123 --instance-type t3.large
    `,
    quiz: {
      question: "What limits vertical scaling?",
      options: ["Network", "Hardware", "Software", "Users"],
      answer: "Hardware",
    },
  },
  {
    id: "sd-4",
    question: "How does load balancing improve scalability?",
    answer:
      "Load balancing spreads traffic across servers, keeping no single one swamped. It’s a scale must, but picking the right algorithm—like least-connections—matters or you bottleneck anyway.",
    topic: "system-design",
    subTopic: "Scalability",
    code: `
  # Nginx load balancing
  upstream app {
    least_conn;
    server app1;
    server app2;
  }
    `,
    quiz: {
      question: "What does load balancing prevent?",
      options: ["Data loss", "Overload", "Slow queries", "User errors"],
      answer: "Overload",
    },
  },
  {
    id: "sd-5",
    question: "What’s the purpose of a cache in system design?",
    answer:
      "A cache stores hot data—like query results—in fast memory to cut database hits. It scales reads, but stale data or cache misses trip up consistency if not tuned.",
    topic: "system-design",
    subTopic: "Performance",
    code: `
  # Redis cache
  redis-cli SET user:1 "Alice"
  redis-cli GET user:1
    `,
    quiz: {
      question: "What does a cache speed up?",
      options: ["Writes", "Reads", "Backups", "Networking"],
      answer: "Reads",
    },
  },
  {
    id: "sd-6",
    question: "How does a content delivery network scale globally?",
    answer:
      "A CDN puts data on edge servers near users, cutting latency and offloading the main server. It scales worldwide, but syncing fresh content across nodes lags if not fast.",
    topic: "system-design",
    subTopic: "Scalability",
    code: `
  # Cloudflare purge (conceptual)
  curl -X POST "https://api.cloudflare.com/purge" -d '{"files":["url"]}'
    `,
    quiz: {
      question: "What’s a CDN challenge?",
      options: ["More storage", "Content sync", "Faster writes", "Less RAM"],
      answer: "Content sync",
    },
  },
  {
    id: "sd-7",
    question: "What’s the trick to designing a distributed system?",
    answer:
      "Distributed systems split work across nodes for scale, but network failures or data splits make consistency a nightmare—CAP theorem says you pick two of three.",
    topic: "system-design",
    subTopic: "Distributed Systems",
    code: `
  # Cassandra distributed query
  SELECT * FROM users WHERE region = 'US';
    `,
    quiz: {
      question: "What limits distributed systems?",
      options: ["CPU speed", "Network issues", "More RAM", "Less storage"],
      answer: "Network issues",
    },
  },
  {
    id: "sd-8",
    question: "How does sharding scale a database?",
    answer:
      "Sharding splits a database into chunks—like by user ID—across servers. It scales writes and reads, but cross-shard queries or rebalancing hurt if not planned.",
    topic: "system-design",
    subTopic: "Database",
    code: `
  # MySQL shard setup (conceptual)
  CREATE TABLE users_1 AS SELECT * FROM users WHERE id % 2 = 0;
    `,
    quiz: {
      question: "What’s a sharding downside?",
      options: [
        "Faster joins",
        "Cross-shard queries",
        "More RAM",
        "Less storage",
      ],
      answer: "Cross-shard queries",
    },
  },
  {
    id: "sd-9",
    question: "What’s the role of a message queue in scaling?",
    answer:
      "A message queue—like RabbitMQ—decouples tasks, letting slow jobs run async while the system scales. It smooths load, but queue jams or lost messages need handling.",
    topic: "system-design",
    subTopic: "Scalability",
    code: `
  # RabbitMQ publish
  rabbitmqctl publish myqueue "Task 1"
  # Consume
  rabbitmqctl consume myqueue
    `,
    quiz: {
      question: "What does a message queue enable?",
      options: ["Sync tasks", "Async tasks", "More storage", "Faster writes"],
      answer: "Async tasks",
    },
  },
  {
    id: "sd-10",
    question: "How does replication help with scalability?",
    answer:
      "Replication copies data to multiple servers for read scale or failover. It boosts capacity, but write sync—especially in sync setups—slows things down.",
    topic: "system-design",
    subTopic: "Database",
    code: `
  # MySQL replication
  CHANGE MASTER TO MASTER_HOST='192.168.1.100';
  START SLAVE;
    `,
    quiz: {
      question: "What’s a replication trade-off?",
      options: ["Faster writes", "Write sync lag", "More RAM", "Less storage"],
      answer: "Write sync lag",
    },
  },
  {
    id: "sd-11",
    question: "What’s the deal with microservices for scalability?",
    answer:
      "Microservices break an app into small, independent services, scaling each part separately. It’s great for growth, but network calls and data splits complicate it.",
    topic: "system-design",
    subTopic: "Architecture",
    code: `
  # Docker microservice
  docker run -d --name user-service user:1.0
  docker run -d --name order-service order:1.0
    `,
    quiz: {
      question: "What’s a microservices challenge?",
      options: ["Less code", "Network calls", "More RAM", "Faster builds"],
      answer: "Network calls",
    },
  },
  {
    id: "sd-12",
    question: "How does a stateless design scale better?",
    answer:
      "A stateless design keeps no session data on servers, letting any node handle requests. It scales easy—add servers—but state in databases or caches needs fast access.",
    topic: "system-design",
    subTopic: "Architecture",
    code: `
  # Stateless API (conceptual)
  GET /user/1 HTTP/1.1
  # Response uses DB, not server state
    `,
    quiz: {
      question: "What’s a stateless benefit?",
      options: ["More storage", "Easy scaling", "Faster writes", "Less RAM"],
      answer: "Easy scaling",
    },
  },
  {
    id: "sd-13",
    question: "What’s the trick to designing for high availability?",
    answer:
      "High availability keeps systems up with redundancy—like multi-region servers. It scales uptime, but failover lags or split data risk downtime if not tight.",
    topic: "system-design",
    subTopic: "Reliability",
    code: `
  # AWS multi-region (conceptual)
  aws ec2 run-instances --region us-east-1
  aws ec2 run-instances --region us-west-2
    `,
    quiz: {
      question: "What’s a high availability risk?",
      options: ["Faster queries", "Failover lag", "More storage", "Less RAM"],
      answer: "Failover lag",
    },
  },
  {
    id: "sd-14",
    question: "How does partitioning scale data storage?",
    answer:
      "Partitioning splits data—like by time—across nodes for scale. It handles big datasets, but uneven partitions or hot spots clog some nodes.",
    topic: "system-design",
    subTopic: "Database",
    code: `
  # SQL partition
  CREATE TABLE logs (
    id INT,
    log_date DATE
  ) PARTITION BY RANGE (YEAR(log_date));
    `,
    quiz: {
      question: "What’s a partitioning issue?",
      options: ["Faster joins", "Hot spots", "More RAM", "Less storage"],
      answer: "Hot spots",
    },
  },
  {
    id: "sd-15",
    question: "What’s the role of a proxy in scaling?",
    answer:
      "A proxy—like a reverse proxy—routes traffic, caches, or balances load for scale. It offloads servers, but a bad proxy becomes a choke point if not beefy.",
    topic: "system-design",
    subTopic: "Networking",
    code: `
  # Nginx proxy
  server {
    location / {
      proxy_pass http://backend;
    }
  }
    `,
    quiz: {
      question: "What can a proxy become?",
      options: ["Faster server", "Choke point", "More storage", "Less RAM"],
      answer: "Choke point",
    },
  },
  {
    id: "sd-16",
    question: "How does rate limiting scale user access?",
    answer:
      "Rate limiting caps requests per user or IP, protecting servers from overload. It scales by shedding load, but tight limits block legit users if off.",
    topic: "system-design",
    subTopic: "Scalability",
    code: `
  # Nginx rate limit
  limit_req_zone $binary_remote_addr zone=mylimit:10m rate=10r/s;
  limit_req zone=mylimit;
    `,
    quiz: {
      question: "What does rate limiting protect?",
      options: ["Data", "Servers", "Network", "Users"],
      answer: "Servers",
    },
  },
  {
    id: "sd-17",
    question: "What’s the deal with database denormalization?",
    answer:
      "Denormalization adds redundancy—like duplicate data—to cut joins and scale reads. It’s fast, but writes slow and consistency risks grow.",
    topic: "system-design",
    subTopic: "Database",
    code: `
  # Denormalized table
  CREATE TABLE orders (
    order_id INT,
    user_name VARCHAR  # Duped from users
  );
    `,
    quiz: {
      question: "What’s a denormalization trade-off?",
      options: [
        "Faster writes",
        "Consistency risk",
        "More RAM",
        "Less storage",
      ],
      answer: "Consistency risk",
    },
  },
  {
    id: "sd-18",
    question: "How does a distributed cache scale reads?",
    answer:
      "A distributed cache—like Redis Cluster—spreads data across nodes for fast reads at scale. It cuts DB load, but network hops or misses slow it if not tight.",
    topic: "system-design",
    subTopic: "Performance",
    code: `
  # Redis cluster
  redis-cli -c -h node1 SET key1 "value"
  redis-cli -c -h node1 GET key1
    `,
    quiz: {
      question: "What’s a distributed cache risk?",
      options: ["Faster writes", "Network hops", "More storage", "Less RAM"],
      answer: "Network hops",
    },
  },
  {
    id: "sd-19",
    question: "What’s the trick to designing a fault-tolerant system?",
    answer:
      "Fault tolerance keeps systems alive with backups or retries despite failures. It scales reliability, but over-redundancy costs cash and complicates sync.",
    topic: "system-design",
    subTopic: "Reliability",
    code: `
  # Retry logic (conceptual)
  curl --retry 3 http://api.example.com
    `,
    quiz: {
      question: "What’s a fault tolerance cost?",
      options: [
        "Faster queries",
        "Redundancy cost",
        "More storage",
        "Less RAM",
      ],
      answer: "Redundancy cost",
    },
  },
  {
    id: "sd-20",
    question: "How does a service discovery system scale?",
    answer:
      "Service discovery—like Consul—tracks live services for dynamic scaling. It finds nodes fast, but a slow registry or stale data breaks routing.",
    topic: "system-design",
    subTopic: "Scalability",
    code: `
  # Consul register (conceptual)
  consul kv put service/app host:port
  # Query
  consul kv get service/app
    `,
    quiz: {
      question: "What’s a service discovery risk?",
      options: ["Faster writes", "Stale data", "More RAM", "Less storage"],
      answer: "Stale data",
    },
  },
  {
    id: "sd-21",
    question: "What’s the role of a circuit breaker in scaling?",
    answer:
      "A circuit breaker stops calls to failing services, letting the system scale by shedding load. It saves crashes, but bad thresholds trip too soon or late.",
    topic: "system-design",
    subTopic: "Reliability",
    code: `
  # Hystrix breaker (conceptual)
  hystrix.command.default.circuitBreaker.requestVolumeThreshold=10
    `,
    quiz: {
      question: "What does a circuit breaker prevent?",
      options: [
        "Fast queries",
        "Cascading failures",
        "More storage",
        "Less RAM",
      ],
      answer: "Cascading failures",
    },
  },
  {
    id: "sd-22",
    question: "How does eventual consistency scale distributed systems?",
    answer:
      "Eventual consistency lets nodes update slowly, scaling writes by skipping instant sync. It’s fast, but apps must handle stale reads or conflicts.",
    topic: "system-design",
    subTopic: "Distributed Systems",
    code: `
  # DynamoDB write
  aws dynamodb put-item --table-name users --item '{"id": {"S": "1"}}'
    `,
    quiz: {
      question: "What’s an eventual consistency trade-off?",
      options: ["Faster writes", "Stale reads", "More RAM", "Less storage"],
      answer: "Stale reads",
    },
  },
  {
    id: "sd-23",
    question: "What’s the trick to designing a scalable API?",
    answer:
      "A scalable API uses caching, rate limits, and stateless calls to handle load. It grows easy, but versioning or throttling missteps break clients.",
    topic: "system-design",
    subTopic: "API",
    code: `
  # Flask API (conceptual)
  @app.route('/users/<id>')
  def get_user(id):
    return redis.get(id) or db.fetch(id)
    `,
    quiz: {
      question: "What’s an API scaling tool?",
      options: ["More storage", "Caching", "Faster writes", "Less RAM"],
      answer: "Caching",
    },
  },
  {
    id: "sd-24",
    question: "How does a write-ahead log scale database reliability?",
    answer:
      "A write-ahead log records changes before applying them, scaling crash recovery. It keeps data safe, but heavy writes bloat logs and slow sync.",
    topic: "system-design",
    subTopic: "Database",
    code: `
  # PostgreSQL WAL
  SELECT * FROM pg_stat_wal_receiver;
    `,
    quiz: {
      question: "What’s a write-ahead log downside?",
      options: ["Faster queries", "Log bloat", "More storage", "Less RAM"],
      answer: "Log bloat",
    },
  },
  {
    id: "sd-25",
    question: "What’s the role of a load balancer health check?",
    answer:
      "A health check pings servers to route traffic only to live ones, scaling reliability. It cuts failures, but slow checks or bad thresholds drop good nodes.",
    topic: "system-design",
    subTopic: "Scalability",
    code: `
  # AWS ALB health check (conceptual)
  aws elbv2 create-target-group --health-check-path /health
    `,
    quiz: {
      question: "What does a health check ensure?",
      options: ["Fast queries", "Live servers", "More storage", "Less RAM"],
      answer: "Live servers",
    },
  },
  {
    id: "sd-26",
    question: "How does a distributed lock scale coordination?",
    answer:
      "A distributed lock—like in ZooKeeper—syncs actions across nodes for scale. It keeps order, but lock contention or network lag slow it down.",
    topic: "system-design",
    subTopic: "Distributed Systems",
    code: `
  # ZooKeeper lock (conceptual)
  zkCli.sh create /lock "locked"
  zkCli.sh delete /lock
    `,
    quiz: {
      question: "What’s a distributed lock risk?",
      options: ["Faster writes", "Contention", "More RAM", "Less storage"],
      answer: "Contention",
    },
  },
  {
    id: "sd-27",
    question: "What’s the deal with auto-scaling in system design?",
    answer:
      "Auto-scaling adds or cuts servers based on load—like CPU use—scaling dynamically. It saves cash, but slow triggers or flapping waste effort.",
    topic: "system-design",
    subTopic: "Scalability",
    code: `
  # AWS auto-scale
  aws autoscaling create-auto-scaling-group --min-size 2 --max-size 10
    `,
    quiz: {
      question: "What’s an auto-scaling challenge?",
      options: ["Faster queries", "Slow triggers", "More storage", "Less RAM"],
      answer: "Slow triggers",
    },
  },
  {
    id: "sd-28",
    question: "How does a consistent hash scale load distribution?",
    answer:
      "Consistent hashing maps data to nodes with minimal reshuffling as nodes change, scaling load. It’s smooth, but hot keys still clump if data skews.",
    topic: "system-design",
    subTopic: "Distributed Systems",
    code: `
  # Conceptual hash ring
  hash(key) % num_nodes  # Maps key to node
    `,
    quiz: {
      question: "What’s a consistent hash issue?",
      options: ["Faster writes", "Hot keys", "More RAM", "Less storage"],
      answer: "Hot keys",
    },
  },
  {
    id: "sd-29",
    question: "What’s the trick to designing a scalable file system?",
    answer:
      "A scalable file system—like S3—spreads files across nodes with metadata for access. It grows big, but latency or metadata bloat slow it if not tight.",
    topic: "system-design",
    subTopic: "Storage",
    code: `
  # AWS S3 upload
  aws s3 cp file.txt s3://mybucket/
    `,
    quiz: {
      question: "What’s a file system scaling risk?",
      options: ["Faster queries", "Metadata bloat", "More RAM", "Less storage"],
      answer: "Metadata bloat",
    },
  },
  {
    id: "sd-30",
    question: "How does a CDN cache scale content delivery?",
    answer:
      "A CDN cache stores static content—like images—near users, scaling delivery. It cuts load, but cache misses or purges lag if not fast.",
    topic: "system-design",
    subTopic: "Performance",
    code: `
  # Purge CDN cache (conceptual)
  curl -X PURGE http://cdn.example.com/image.jpg
    `,
    quiz: {
      question: "What’s a CDN cache risk?",
      options: ["Faster writes", "Cache misses", "More RAM", "Less storage"],
      answer: "Cache misses",
    },
  },
  {
    id: "sd-31",
    question: "What’s the role of a database read replica?",
    answer:
      "A read replica copies data for read-only queries, scaling read load. It helps, but lag or stale data hit if writes outpace sync.",
    topic: "system-design",
    subTopic: "Database",
    code: `
  # MySQL read replica
  SHOW SLAVE STATUS;  # Check lag
    `,
    quiz: {
      question: "What’s a read replica challenge?",
      options: ["Faster writes", "Stale data", "More RAM", "Less storage"],
      answer: "Stale data",
    },
  },
  {
    id: "sd-32",
    question: "How does a system handle backpressure for scalability?",
    answer:
      "Backpressure slows producers—like API calls—when consumers lag, scaling load. It prevents crashes, but slow responses annoy users if not tuned.",
    topic: "system-design",
    subTopic: "Scalability",
    code: `
  # Kafka backpressure (conceptual)
  kafka-consumer-groups --group mygroup --describe
    `,
    quiz: {
      question: "What does backpressure prevent?",
      options: ["Fast queries", "Overload", "More storage", "Less RAM"],
      answer: "Overload",
    },
  },
  {
    id: "sd-33",
    question: "What’s the trick to designing a scalable notification system?",
    answer:
      "A scalable notification system uses queues or pub/sub—like SNS—to push alerts fast. It grows with users, but fanout or slow subscribers lag it.",
    topic: "system-design",
    subTopic: "Messaging",
    code: `
  # AWS SNS publish
  aws sns publish --topic-arn arn:aws:sns:us-east-1:123:topic --message "Alert"
    `,
    quiz: {
      question: "What’s a notification scaling issue?",
      options: ["Faster writes", "Fanout lag", "More RAM", "Less storage"],
      answer: "Fanout lag",
    },
  },
  {
    id: "sd-34",
    question: "How does a system scale with idempotency?",
    answer:
      "Idempotency ensures repeated calls—like retries—don’t duplicate effects, scaling reliability. It’s safe, but tracking IDs or states adds overhead.",
    topic: "system-design",
    subTopic: "Reliability",
    code: `
  # Idempotent API (conceptual)
  POST /order { "id": "123", "item": "book" }
  # Check if 123 exists before insert
    `,
    quiz: {
      question: "What does idempotency prevent?",
      options: ["Fast queries", "Duplicates", "More storage", "Less RAM"],
      answer: "Duplicates",
    },
  },
  {
    id: "sd-35",
    question: "What’s the role of a scalable logging system?",
    answer:
      "A scalable logging system—like ELK—collects and searches logs across nodes. It scales debugging, but log volume or slow indexing clog it if not sized right.",
    topic: "system-design",
    subTopic: "Monitoring",
    code: `
  # Elasticsearch log push (conceptual)
  curl -X POST "localhost:9200/logs/_doc" -d '{"msg": "Error"}'
    `,
    quiz: {
      question: "What’s a logging scaling risk?",
      options: ["Faster queries", "Log volume", "More RAM", "Less storage"],
      answer: "Log volume",
    },
  },
  {
    id: "sd-36",
    question: "How does a system scale with a write-back cache?",
    answer:
      "A write-back cache saves writes to memory then syncs later, scaling write speed. It’s fast, but crashes lose unsynced data if not careful.",
    topic: "system-design",
    subTopic: "Performance",
    code: `
  # Redis write-back (conceptual)
  redis-cli SET key "value" EX 60  # Sync after 60s
    `,
    quiz: {
      question: "What’s a write-back cache risk?",
      options: ["Faster writes", "Data loss", "More RAM", "Less storage"],
      answer: "Data loss",
    },
  },
  {
    id: "sd-37",
    question: "What’s the deal with a scalable search system?",
    answer:
      "A scalable search system—like Elasticsearch—indexes data across nodes for fast lookups. It grows with data, but shard balance or slow indexing lag it.",
    topic: "system-design",
    subTopic: "Search",
    code: `
  # Elasticsearch search
  curl -X GET "localhost:9200/users/_search?q=Alice"
    `,
    quiz: {
      question: "What’s a search scaling issue?",
      options: [
        "Faster queries",
        "Shard imbalance",
        "More RAM",
        "Less storage",
      ],
      answer: "Shard imbalance",
    },
  },
  {
    id: "sd-38",
    question: "How does a system scale with failover?",
    answer:
      "Failover switches to backups—like replicas—when nodes die, scaling uptime. It’s reliable, but slow switches or unsynced data drop service.",
    topic: "system-design",
    subTopic: "Reliability",
    code: `
  # MySQL failover (conceptual)
  mysqlfailover --master=root@host1 --discover-slaves
    `,
    quiz: {
      question: "What’s a failover risk?",
      options: ["Faster writes", "Slow switches", "More RAM", "Less storage"],
      answer: "Slow switches",
    },
  },
  {
    id: "sd-39",
    question: "What’s the trick to designing a scalable payment system?",
    answer:
      "A scalable payment system uses queues and idempotency to handle transactions at scale. It grows with load, but retries or fraud checks slow it if not tight.",
    topic: "system-design",
    subTopic: "Applications",
    code: `
  # Kafka payment queue (conceptual)
  kafka-console-producer --topic payments --message '{"id": "123"}'
    `,
    quiz: {
      question: "What’s a payment scaling challenge?",
      options: ["Faster queries", "Retries", "More RAM", "Less storage"],
      answer: "Retries",
    },
  },
  {
    id: "sd-40",
    question: "How does a system scale with a distributed transaction?",
    answer:
      "Distributed transactions—like 2PC—sync changes across nodes for scale and consistency. They’re safe, but network fails or slow commits kill speed.",
    topic: "system-design",
    subTopic: "Distributed Systems",
    code: `
  # Conceptual 2PC
  BEGIN DISTRIBUTED TRANSACTION;
  UPDATE db1.accounts SET balance = balance - 100;
  UPDATE db2.accounts SET balance = balance + 100;
  COMMIT;
    `,
    quiz: {
      question: "What’s a distributed transaction risk?",
      options: ["Faster writes", "Network fails", "More RAM", "Less storage"],
      answer: "Network fails",
    },
  },
];
