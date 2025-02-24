import { QnaTypes } from "./javascript";

export const databaseConcepts: QnaTypes[] = [
  {
    id: "db-1",
    question: "What is ACID and why is it key for data consistency?",
    answer:
      "ACID stands for Atomicity, Consistency, Isolation, and Durability—it’s a set of rules ensuring transactions fully complete or fail without messing up the database. It keeps data reliable, but the catch is performance—strict ACID slows things under heavy load.",
    topic: "database",
    subTopic: "Transactions",
    code: `
  # SQL: Start a transaction
  BEGIN TRANSACTION;
  UPDATE accounts SET balance = balance - 100 WHERE id = 1;
  UPDATE accounts SET balance = balance + 100 WHERE id = 2;
  COMMIT;
    `,
    quiz: {
      question: "What does ACID ensure?",
      options: [
        "Fast queries",
        "Transaction reliability",
        "More storage",
        "Network speed",
      ],
      answer: "Transaction reliability",
    },
  },
  {
    id: "db-2",
    question: "How does normalization maintain data integrity?",
    answer:
      "Normalization splits data into tables to cut redundancy and avoid insert, update, or delete errors. It keeps data clean, but overdoing it adds joins—too many slow queries down.",
    topic: "database",
    subTopic: "Design",
    code: `
  # Before: Unnormalized
  CREATE TABLE orders (order_id INT, customer_name VARCHAR, items VARCHAR);
  # After: Normalized
  CREATE TABLE customers (customer_id INT, name VARCHAR);
  CREATE TABLE orders (order_id INT, customer_id INT, items VARCHAR);
    `,
    quiz: {
      question: "What does normalization reduce?",
      options: ["Query speed", "Redundancy", "Table count", "Data size"],
      answer: "Redundancy",
    },
  },
  {
    id: "db-3",
    question: "What’s the deal with database indexes?",
    answer:
      "Indexes speed up searches by creating a lookup for columns, like a book’s index. They ensure fast, consistent reads, but the trick is upkeep—every write slows down to update them.",
    topic: "database",
    subTopic: "Performance",
    code: `
  # SQL: Create an index
  CREATE INDEX idx_name ON users(name);
  # Check usage
  EXPLAIN SELECT * FROM users WHERE name = 'Alice';
    `,
    quiz: {
      question: "What’s an index trade-off?",
      options: ["Faster writes", "Slower writes", "More storage", "Less RAM"],
      answer: "Slower writes",
    },
  },
  {
    id: "db-4",
    question: "How does a primary key enforce data integrity?",
    answer:
      "A primary key uniquely identifies each row, stopping duplicates and ensuring consistent references. It’s the backbone of tables, but picking a bad key—like a name—leads to collisions.",
    topic: "database",
    subTopic: "Design",
    code: `
  # SQL: Add primary key
  CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(50)
  );
    `,
    quiz: {
      question: "What does a primary key prevent?",
      options: ["Slow queries", "Duplicates", "Joins", "Nulls"],
      answer: "Duplicates",
    },
  },
  {
    id: "db-5",
    question: "What’s the purpose of a foreign key?",
    answer:
      "A foreign key links tables by referencing a primary key elsewhere, keeping relationships consistent. It stops orphaned data, but enforcing it slows writes if checks fail.",
    topic: "database",
    subTopic: "Design",
    code: `
  # SQL: Foreign key example
  CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
  );
    `,
    quiz: {
      question: "What does a foreign key maintain?",
      options: ["Query speed", "Relationships", "Indexes", "Storage"],
      answer: "Relationships",
    },
  },
  {
    id: "db-6",
    question: "How does locking ensure data consistency?",
    answer:
      "Locking blocks rows or tables during updates so multiple users don’t clash, keeping data safe. It’s crucial for integrity, but too much locking leads to deadlocks or slow apps.",
    topic: "database",
    subTopic: "Concurrency",
    code: `
  # SQL: Lock a table
  LOCK TABLES users WRITE;
  UPDATE users SET age = 30 WHERE id = 1;
  UNLOCK TABLES;
    `,
    quiz: {
      question: "What’s a locking risk?",
      options: ["Faster writes", "Deadlocks", "More storage", "Less RAM"],
      answer: "Deadlocks",
    },
  },
  {
    id: "db-7",
    question: "What’s the trick to managing transactions?",
    answer:
      "Transactions group changes to commit or roll back together, ensuring all-or-nothing consistency. The challenge is isolation—uncommitted changes can leak or lock too long.",
    topic: "database",
    subTopic: "Transactions",
    code: `
  # SQL: Rollback example
  BEGIN;
  INSERT INTO users (id, name) VALUES (1, 'Bob');
  ROLLBACK;
    `,
    quiz: {
      question: "What does a rollback do?",
      options: [
        "Saves changes",
        "Undoes changes",
        "Speeds queries",
        "Locks tables",
      ],
      answer: "Undoes changes",
    },
  },
  {
    id: "db-8",
    question: "How does replication keep data consistent across servers?",
    answer:
      "Replication copies data to multiple servers for redundancy or load sharing, like master-slave setups. It boosts reliability, but lag in async replication risks stale reads.",
    topic: "database",
    subTopic: "Replication",
    code: `
  # MySQL: Start slave
  CHANGE MASTER TO MASTER_HOST='192.168.1.100';
  START SLAVE;
  # Check status
  SHOW SLAVE STATUS;
    `,
    quiz: {
      question: "What’s a replication challenge?",
      options: ["Faster writes", "Stale data", "More indexes", "Less storage"],
      answer: "Stale data",
    },
  },
  {
    id: "db-9",
    question: "What’s the role of a database log?",
    answer:
      "A database log tracks changes—like inserts or updates—for recovery or rollback. It’s the safety net for consistency, but big logs eat disk and slow recovery if not managed.",
    topic: "database",
    subTopic: "Recovery",
    code: `
  # PostgreSQL: Check log
  SELECT * FROM pg_stat_wal_receiver;
  # Outputs: log activity
    `,
    quiz: {
      question: "What does a log help with?",
      options: ["Query speed", "Recovery", "Indexing", "Storage"],
      answer: "Recovery",
    },
  },
  {
    id: "db-10",
    question: "How does sharding split data for consistency?",
    answer:
      "Sharding breaks a database into chunks across servers, like by user ID, to handle scale. It keeps performance up, but cross-shard consistency is tough—joins or updates can miss.",
    topic: "database",
    subTopic: "Scalability",
    code: `
  # Conceptual shard setup
  CREATE TABLE users_1 AS SELECT * FROM users WHERE id % 2 = 0;
  CREATE TABLE users_2 AS SELECT * FROM users WHERE id % 2 = 1;
    `,
    quiz: {
      question: "What’s a sharding downside?",
      options: [
        "Faster joins",
        "Consistency issues",
        "More storage",
        "Less RAM",
      ],
      answer: "Consistency issues",
    },
  },
  {
    id: "db-11",
    question: "What’s the deal with database triggers?",
    answer:
      "Triggers run code—like updates—automatically when data changes, enforcing rules or consistency. They’re handy, but too many triggers slow writes or loop if not careful.",
    topic: "database",
    subTopic: "Automation",
    code: `
  # SQL: Create trigger
  CREATE TRIGGER update_time
  BEFORE UPDATE ON users
  FOR EACH ROW
  SET NEW.updated_at = NOW();
    `,
    quiz: {
      question: "What do triggers enforce?",
      options: ["Query speed", "Consistency", "More indexes", "Less storage"],
      answer: "Consistency",
    },
  },
  {
    id: "db-12",
    question: "How does a view simplify data consistency?",
    answer:
      "A view is a virtual table from a query, hiding complexity and enforcing consistent access. It’s clean, but updates through views can fail if the query’s too tricky.",
    topic: "database",
    subTopic: "Design",
    code: `
  # SQL: Create view
  CREATE VIEW active_users AS
  SELECT id, name FROM users WHERE active = 1;
  # Query view
  SELECT * FROM active_users;
    `,
    quiz: {
      question: "What’s a view limitation?",
      options: ["Faster writes", "Update issues", "More storage", "Less RAM"],
      answer: "Update issues",
    },
  },
  {
    id: "db-13",
    question: "What’s the trick to managing database concurrency?",
    answer:
      "Concurrency lets multiple users work at once, using locks or MVCC to keep data consistent. The challenge is balance—too strict slows users, too loose risks conflicts.",
    topic: "database",
    subTopic: "Concurrency",
    code: `
  # SQL: Lock row
  SELECT * FROM users WHERE id = 1 FOR UPDATE;
  # Update safely
  UPDATE users SET age = 31 WHERE id = 1;
    `,
    quiz: {
      question: "What’s a concurrency risk?",
      options: ["Faster queries", "Data conflicts", "More storage", "Less RAM"],
      answer: "Data conflicts",
    },
  },
  {
    id: "db-14",
    question: "How does a clustered index affect data consistency?",
    answer:
      "A clustered index sorts and stores table data by a key, speeding lookups and keeping order. It’s fast, but writes slow down—every insert reshuffles the table.",
    topic: "database",
    subTopic: "Performance",
    code: `
  # SQL: Create clustered index
  CREATE TABLE users (
    id INT PRIMARY KEY CLUSTERED,
    name VARCHAR(50)
  );
    `,
    quiz: {
      question: "What slows with a clustered index?",
      options: ["Reads", "Writes", "Joins", "Backups"],
      answer: "Writes",
    },
  },
  {
    id: "db-15",
    question: "What’s the role of a transaction log in crash recovery?",
    answer:
      "A transaction log records every change, letting the database redo or undo after a crash to stay consistent. It’s a lifesaver, but big logs clog disk and slow startups.",
    topic: "database",
    subTopic: "Recovery",
    code: `
  # MySQL: Check log
  SHOW BINARY LOGS;
  # Outputs: log files
    `,
    quiz: {
      question: "What does a transaction log recover?",
      options: ["Indexes", "Consistency", "Query speed", "Storage"],
      answer: "Consistency",
    },
  },
  {
    id: "db-16",
    question: "How does partitioning help with data consistency?",
    answer:
      "Partitioning splits tables into pieces—like by date—making big datasets manageable. It keeps queries fast, but cross-partition writes risk inconsistency if not synced.",
    topic: "database",
    subTopic: "Scalability",
    code: `
  # SQL: Partition by range
  CREATE TABLE sales (
    id INT,
    sale_date DATE
  ) PARTITION BY RANGE (YEAR(sale_date)) (
    PARTITION p0 VALUES LESS THAN (2020),
    PARTITION p1 VALUES LESS THAN (2021)
  );
    `,
    quiz: {
      question: "What’s a partitioning challenge?",
      options: [
        "Faster writes",
        "Cross-partition sync",
        "More storage",
        "Less RAM",
      ],
      answer: "Cross-partition sync",
    },
  },
  {
    id: "db-17",
    question: "What’s the deal with MVCC for consistency?",
    answer:
      "Multiversion concurrency control keeps old data versions so readers don’t block writers, ensuring consistency. It’s smooth, but old versions pile up—cleaning them slows things.",
    topic: "database",
    subTopic: "Concurrency",
    code: `
  # PostgreSQL: Check MVCC
  SELECT * FROM pg_stat_activity WHERE state = 'idle in transaction';
  # Outputs: open transactions
    `,
    quiz: {
      question: "What does MVCC avoid?",
      options: [
        "Faster writes",
        "Read-write blocks",
        "More storage",
        "Less RAM",
      ],
      answer: "Read-write blocks",
    },
  },
  {
    id: "db-18",
    question: "How does a stored procedure ensure data integrity?",
    answer:
      "A stored procedure bundles logic—like updates or checks—in the database, enforcing consistent rules. It cuts errors, but complex ones slow execution if not tight.",
    topic: "database",
    subTopic: "Automation",
    code: `
  # SQL: Create procedure
  CREATE PROCEDURE add_user(IN p_name VARCHAR)
  BEGIN
    INSERT INTO users (name) VALUES (p_name);
  END;
  CALL add_user('Alice');
    `,
    quiz: {
      question: "What do stored procedures enforce?",
      options: ["Query speed", "Consistency", "More indexes", "Less storage"],
      answer: "Consistency",
    },
  },
  {
    id: "db-19",
    question: "What’s the trick to handling database backups?",
    answer:
      "Backups save a database snapshot for recovery, keeping data safe. The challenge is downtime—live backups risk inconsistency if writes sneak in.",
    topic: "database",
    subTopic: "Recovery",
    code: `
  # MySQL: Backup
  mysqldump -u root -p mydb > backup.sql
  # Restore
  mysql -u root -p mydb < backup.sql
    `,
    quiz: {
      question: "What’s a backup risk?",
      options: ["Faster queries", "Inconsistency", "More storage", "Less RAM"],
      answer: "Inconsistency",
    },
  },
  {
    id: "db-20",
    question: "How does a database handle data types for integrity?",
    answer:
      "Data types—like INT or VARCHAR—force values to fit rules, stopping junk data. They keep tables clean, but picking wrong types—like small INTs—cuts off valid data.",
    topic: "database",
    subTopic: "Design",
    code: `
  # SQL: Define types
  CREATE TABLE users (
    id INT,
    name VARCHAR(50),
    age TINYINT
  );
    `,
    quiz: {
      question: "What do data types prevent?",
      options: ["Slow queries", "Invalid data", "More joins", "Less storage"],
      answer: "Invalid data",
    },
  },
  {
    id: "db-21",
    question: "What’s the role of a checkpoint in consistency?",
    answer:
      "A checkpoint saves a consistent database state to disk, cutting log recovery time after crashes. It’s a safety boost, but frequent ones slow writes.",
    topic: "database",
    subTopic: "Recovery",
    code: `
  # PostgreSQL: Force checkpoint
  CHECKPOINT;
  # Check logs
  tail -f /var/log/postgresql/*.log
    `,
    quiz: {
      question: "What does a checkpoint reduce?",
      options: ["Query speed", "Recovery time", "More storage", "Less RAM"],
      answer: "Recovery time",
    },
  },
  {
    id: "db-22",
    question: "How does a NoSQL database handle consistency?",
    answer:
      "NoSQL databases—like MongoDB—often trade strict consistency for speed, using eventual consistency. It scales well, but apps must handle stale reads or conflicts.",
    topic: "database",
    subTopic: "NoSQL",
    code: `
  # MongoDB: Insert
  db.users.insertOne({ name: "Alice" });
  # Read (may lag)
  db.users.findOne({ name: "Alice" });
    `,
    quiz: {
      question: "What’s a NoSQL consistency trade-off?",
      options: ["Faster writes", "Stale reads", "More storage", "Less RAM"],
      answer: "Stale reads",
    },
  },
  {
    id: "db-23",
    question: "What’s the trick to managing database schemas?",
    answer:
      "Schemas define table structures, keeping data consistent. Changing them live—like adding columns—risks breaking apps or losing data if not planned.",
    topic: "database",
    subTopic: "Design",
    code: `
  # SQL: Alter schema
  ALTER TABLE users ADD COLUMN email VARCHAR(100);
  # Check
  DESCRIBE users;
    `,
    quiz: {
      question: "What’s a schema change risk?",
      options: ["Faster queries", "Data loss", "More storage", "Less RAM"],
      answer: "Data loss",
    },
  },
  {
    id: "db-24",
    question: "How does a database handle query optimization?",
    answer:
      "Query optimization picks the best plan—like index use—to fetch data fast and consistently. It’s smart, but bad stats or stale plans pick slow paths.",
    topic: "database",
    subTopic: "Performance",
    code: `
  # SQL: Analyze query
  EXPLAIN PLAN FOR SELECT * FROM users WHERE age > 30;
  # Outputs: execution plan
    `,
    quiz: {
      question: "What slows query optimization?",
      options: ["Good stats", "Stale stats", "More indexes", "Less RAM"],
      answer: "Stale stats",
    },
  },
  {
    id: "db-25",
    question: "What’s the role of a write-ahead log?",
    answer:
      "A write-ahead log writes changes to disk before applying them, ensuring crash recovery keeps data consistent. It’s a must, but heavy writes bloat it fast.",
    topic: "database",
    subTopic: "Recovery",
    code: `
  # PostgreSQL: Check WAL
  SELECT * FROM pg_stat_wal_receiver;
  # Outputs: WAL activity
    `,
    quiz: {
      question: "What does a write-ahead log ensure?",
      options: ["Faster queries", "Crash recovery", "More storage", "Less RAM"],
      answer: "Crash recovery",
    },
  },
  {
    id: "db-26",
    question: "How does a database handle data replication lag?",
    answer:
      "Replication lag is the delay syncing data to replicas, risking inconsistent reads. It’s tough—async setups trade speed for lag, sync ones slow writes.",
    topic: "database",
    subTopic: "Replication",
    code: `
  # MySQL: Check lag
  SHOW SLAVE STATUS;
  # Outputs: Seconds_Behind_Master
    `,
    quiz: {
      question: "What’s a replication lag issue?",
      options: [
        "Faster writes",
        "Inconsistent reads",
        "More storage",
        "Less RAM",
      ],
      answer: "Inconsistent reads",
    },
  },
  {
    id: "db-27",
    question: "What’s the deal with database constraints?",
    answer:
      "Constraints—like NOT NULL or UNIQUE—force rules on data, keeping it consistent. They stop bad entries, but too many slow inserts or complicate apps.",
    topic: "database",
    subTopic: "Design",
    code: `
  # SQL: Add constraint
  ALTER TABLE users ADD CONSTRAINT unique_name UNIQUE (name);
  # Test
  INSERT INTO users (name) VALUES ('Alice');
    `,
    quiz: {
      question: "What do constraints prevent?",
      options: ["Fast writes", "Bad data", "More joins", "Less storage"],
      answer: "Bad data",
    },
  },
  {
    id: "db-28",
    question: "How does a database handle distributed consistency?",
    answer:
      "Distributed consistency syncs data across nodes, using models like Paxos or eventual consistency. It scales, but network splits or lag break perfect sync.",
    topic: "database",
    subTopic: "Distributed Systems",
    code: `
  # Cassandra: Insert (eventual consistency)
  INSERT INTO users (id, name) VALUES (1, 'Alice');
  # Check sync (conceptual)
  nodetool status
    `,
    quiz: {
      question: "What’s a distributed consistency challenge?",
      options: ["Faster queries", "Network splits", "More storage", "Less RAM"],
      answer: "Network splits",
    },
  },
  {
    id: "db-29",
    question: "What’s the trick to managing database joins?",
    answer:
      "Joins merge tables for queries, keeping related data consistent. Too many or big joins slow things—indexes help, but miss them and it’s a crawl.",
    topic: "database",
    subTopic: "Performance",
    code: `
  # SQL: Join tables
  SELECT u.name, o.order_id
  FROM users u
  JOIN orders o ON u.id = o.user_id;
    `,
    quiz: {
      question: "What slows joins?",
      options: ["Good indexes", "Missing indexes", "More storage", "Less RAM"],
      answer: "Missing indexes",
    },
  },
  {
    id: "db-30",
    question: "How does a database handle data archival?",
    answer:
      "Data archival moves old records to cold storage, keeping the live database consistent and lean. It saves space, but restoring or querying archives lags if not indexed.",
    topic: "database",
    subTopic: "Storage",
    code: `
  # SQL: Archive old data
  INSERT INTO archive_users
  SELECT * FROM users WHERE last_login < '2020-01-01';
  DELETE FROM users WHERE last_login < '2020-01-01';
    `,
    quiz: {
      question: "What’s an archival benefit?",
      options: [
        "Faster queries",
        "Lean database",
        "More joins",
        "Less storage",
      ],
      answer: "Lean database",
    },
  },
  {
    id: "db-31",
    question: "What’s the role of a database cursor?",
    answer:
      "A cursor steps through query results row-by-row, keeping reads consistent. It’s precise, but open cursors tie up resources if not closed fast.",
    topic: "database",
    subTopic: "Query Processing",
    code: `
  # SQL: Use cursor
  DECLARE my_cursor CURSOR FOR SELECT * FROM users;
  OPEN my_cursor;
  FETCH NEXT FROM my_cursor;
    `,
    quiz: {
      question: "What does a cursor process?",
      options: ["Writes", "Rows", "Indexes", "Backups"],
      answer: "Rows",
    },
  },
  {
    id: "db-32",
    question: "How does a database handle materialized views?",
    answer:
      "Materialized views store query results physically, speeding reads and keeping snapshots consistent. They’re fast, but refreshes lag—stale data sneaks in.",
    topic: "database",
    subTopic: "Performance",
    code: `
  # SQL: Create materialized view
  CREATE MATERIALIZED VIEW user_summary AS
  SELECT name, COUNT(*) FROM orders GROUP BY name;
  # Refresh
  REFRESH MATERIALIZED VIEW user_summary;
    `,
    quiz: {
      question: "What’s a materialized view risk?",
      options: ["Faster writes", "Stale data", "More storage", "Less RAM"],
      answer: "Stale data",
    },
  },
  {
    id: "db-33",
    question: "What’s the trick to managing database users?",
    answer:
      "Database users get roles and permissions to access data, ensuring consistent security. Too many or loose roles risk leaks—tight control is key.",
    topic: "database",
    subTopic: "Security",
    code: `
  # SQL: Create user
  CREATE USER 'app_user' IDENTIFIED BY 'pass123';
  GRANT SELECT, INSERT ON mydb.* TO 'app_user';
    `,
    quiz: {
      question: "What do user roles enforce?",
      options: ["Query speed", "Access control", "More joins", "Less storage"],
      answer: "Access control",
    },
  },
  {
    id: "db-34",
    question: "How does a database handle data compression?",
    answer:
      "Data compression shrinks tables or logs, saving space while keeping data intact. It cuts costs, but decompression slows reads if overdone.",
    topic: "database",
    subTopic: "Storage",
    code: `
  # MySQL: Enable compression
  CREATE TABLE users (
    id INT,
    name VARCHAR(50)
  ) ENGINE=InnoDB ROW_FORMAT=COMPRESSED;
    `,
    quiz: {
      question: "What’s a compression trade-off?",
      options: ["Faster reads", "Slower reads", "More joins", "Less storage"],
      answer: "Slower reads",
    },
  },
  {
    id: "db-35",
    question: "What’s the role of a database vacuum?",
    answer:
      "A vacuum cleans up dead rows from updates or deletes, keeping space and consistency tight. It’s a must, but big vacuums lock tables and lag.",
    topic: "database",
    subTopic: "Maintenance",
    code: `
  # PostgreSQL: Run vacuum
  VACUUM FULL users;
  # Check stats
  SELECT * FROM pg_stat_user_tables;
    `,
    quiz: {
      question: "What does a vacuum reclaim?",
      options: ["Query speed", "Dead space", "More indexes", "Less RAM"],
      answer: "Dead space",
    },
  },
  {
    id: "db-36",
    question: "How does a database handle query caching?",
    answer:
      "Query caching stores results for reuse, speeding consistent reads. It’s quick, but stale caches serve old data if not cleared right.",
    topic: "database",
    subTopic: "Performance",
    code: `
  # MySQL: Enable cache
  SET GLOBAL query_cache_size = 1048576;
  # Check cache
  SHOW VARIABLES LIKE 'query_cache%';
    `,
    quiz: {
      question: "What’s a query cache risk?",
      options: ["Faster writes", "Stale data", "More storage", "Less RAM"],
      answer: "Stale data",
    },
  },
  {
    id: "db-37",
    question: "What’s the deal with database clustering?",
    answer:
      "Clustering syncs multiple nodes for failover or load, keeping data consistent. It’s tough—split brains or lag break sync if networks hiccup.",
    topic: "database",
    subTopic: "High Availability",
    code: `
  # PostgreSQL: Setup cluster (conceptual)
  pg_ctl initdb -D /data/cluster
  # Check status
  pg_ctl status
    `,
    quiz: {
      question: "What’s a clustering challenge?",
      options: ["Faster queries", "Split brains", "More storage", "Less RAM"],
      answer: "Split brains",
    },
  },
  {
    id: "db-38",
    question: "How does a database handle data encryption?",
    answer:
      "Data encryption scrambles stored or moving data, keeping it safe and consistent. It’s secure, but slows queries—decrypting on the fly eats CPU.",
    topic: "database",
    subTopic: "Security",
    code: `
  # SQL Server: Encrypt column
  ALTER TABLE users
  ADD encrypted_name VARBINARY(256);
  # Encrypt data
  UPDATE users SET encrypted_name = ENCRYPTBYPASSPHRASE('key', name);
    `,
    quiz: {
      question: "What’s an encryption trade-off?",
      options: ["Faster queries", "Slower queries", "More storage", "Less RAM"],
      answer: "Slower queries",
    },
  },
  {
    id: "db-39",
    question: "What’s the trick to managing database failover?",
    answer:
      "Failover switches to a backup server if the main one dies, keeping data consistent. It’s a lifesaver, but slow swaps or unsynced replicas lose data.",
    topic: "database",
    subTopic: "High Availability",
    code: `
  # MySQL: Promote slave
  STOP SLAVE;
  RESET MASTER;
  # Check
  SHOW MASTER STATUS;
    `,
    quiz: {
      question: "What’s a failover risk?",
      options: ["Faster writes", "Data loss", "More storage", "Less RAM"],
      answer: "Data loss",
    },
  },
  {
    id: "db-40",
    question: "How does a database handle query transactions?",
    answer:
      "Query transactions wrap reads and writes in a unit, ensuring consistent snapshots. They’re safe, but long transactions lock rows and lag others.",
    topic: "database",
    subTopic: "Transactions",
    code: `
  # SQL: Transaction with read
  BEGIN;
  SELECT * FROM users WHERE age > 30;
  COMMIT;
    `,
    quiz: {
      question: "What’s a query transaction risk?",
      options: ["Faster queries", "Locking delays", "More storage", "Less RAM"],
      answer: "Locking delays",
    },
  },
];
