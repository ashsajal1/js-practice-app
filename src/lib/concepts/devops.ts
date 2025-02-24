import { QnaTypes } from "./javascript";

export const devopsConcepts: QnaTypes[] = [
  {
    id: "devops-1",
    question:
      "What is continuous integration and why does it matter in DevOps?",
    answer:
      "Continuous integration means developers merge code changes into a shared repository often, with automated builds and tests running each time. It catches bugs early and speeds up delivery, but the challenge is keeping tests fast and reliable—slow or flaky ones clog the pipeline.",
    topic: "devops",
    subTopic: "CI/CD",
    code: `
  # Jenkins pipeline example
  pipeline {
    agent any
    stages {
      stage('Build') {
        steps {
          sh 'make build'
        }
      }
      stage('Test') {
        steps {
          sh 'make test'
        }
      }
    }
  }
    `,
    quiz: {
      question: "What’s a key benefit of continuous integration?",
      options: [
        "Fewer commits",
        "Early bug detection",
        "Slower releases",
        "More manual testing",
      ],
      answer: "Early bug detection",
    },
  },
  {
    id: "devops-2",
    question: "How does continuous deployment differ from continuous delivery?",
    answer:
      "Continuous deployment pushes every passing code change to production automatically, while continuous delivery stops at staging, leaving the final push manual. Deployment is faster but riskier—rollback plans are a must if something breaks live.",
    topic: "devops",
    subTopic: "CI/CD",
    code: `
  # GitLab CI/CD snippet
  deploy_production:
    stage: deploy
    script:
      - deploy.sh
    environment: production
    only:
      - main
    `,
    quiz: {
      question: "What’s unique to continuous deployment?",
      options: [
        "Manual approval",
        "Auto production push",
        "Staging only",
        "No testing",
      ],
      answer: "Auto production push",
    },
  },
  {
    id: "devops-3",
    question: "What’s the deal with infrastructure as code in DevOps?",
    answer:
      "Infrastructure as code manages servers and networks with scripts or configs, like Terraform files, instead of manual tweaks. It makes setups repeatable and scalable, but the trick is drift—live systems can stray from code if not synced right.",
    topic: "devops",
    subTopic: "Automation",
    code: `
  # Terraform example
  resource "aws_instance" "app" {
    ami           = "ami-12345678"
    instance_type = "t2.micro"
  }
  # Apply config
  terraform apply
    `,
    quiz: {
      question: "What does infrastructure as code improve?",
      options: ["Manual setup", "Repeatability", "Code speed", "User access"],
      answer: "Repeatability",
    },
  },
  {
    id: "devops-4",
    question: "How does container orchestration fit into DevOps?",
    answer:
      "Container orchestration, like with Kubernetes, automates deploying, scaling, and managing containers across servers. It keeps apps running smoothly, but the challenge is complexity—networking and storage configs can trip you up if not tuned.",
    topic: "devops",
    subTopic: "Containerization",
    code: `
  # Kubernetes deployment
  apiVersion: apps/v1
  kind: Deployment
  metadata:
    name: app
  spec:
    replicas: 3
    template:
      spec:
        containers:
        - name: app
          image: myapp:1.0
  # Apply
  kubectl apply -f deploy.yaml
    `,
    quiz: {
      question: "What does container orchestration manage?",
      options: [
        "Physical servers",
        "Containers",
        "Network cables",
        "User logins",
      ],
      answer: "Containers",
    },
  },
  {
    id: "devops-5",
    question: "What’s the purpose of a pipeline in DevOps?",
    answer:
      "A pipeline automates the steps from code commit to production—like build, test, deploy. It speeds up releases and cuts errors, but the trick is stages—parallel steps save time, but dependencies can break if ordered wrong.",
    topic: "devops",
    subTopic: "CI/CD",
    code: `
  # CircleCI pipeline
  jobs:
    build:
      steps:
        - run: npm install
        - run: npm test
  workflows:
    build_and_test:
      jobs:
        - build
    `,
    quiz: {
      question: "What’s a key pipeline benefit?",
      options: ["More bugs", "Faster releases", "Less code", "Manual steps"],
      answer: "Faster releases",
    },
  },
  {
    id: "devops-6",
    question: "How does monitoring tie into DevOps practices?",
    answer:
      "Monitoring tracks app and server health—like latency or errors—with tools like Prometheus. It spots issues fast for quick fixes, but the challenge is noise—too many alerts drown out real problems if thresholds aren’t sharp.",
    topic: "devops",
    subTopic: "Monitoring",
    code: `
  # Prometheus config snippet
  scrape_configs:
    - job_name: 'app'
      static_configs:
        - targets: ['localhost:9090']
  # Query metric
  promtool query "up"
    `,
    quiz: {
      question: "What does monitoring help detect?",
      options: [
        "Code quality",
        "System issues",
        "User logins",
        "Network speed",
      ],
      answer: "System issues",
    },
  },
  {
    id: "devops-7",
    question: "What’s the trick to managing configuration drift?",
    answer:
      "Configuration drift happens when live systems differ from their defined state, like in Ansible playbooks. It breaks consistency, so DevOps uses tools to reapply configs. The catch is timing—frequent checks catch drift but can overload servers.",
    topic: "devops",
    subTopic: "Automation",
    code: `
  # Ansible playbook
  - hosts: webservers
    tasks:
      - name: Ensure Nginx installed
        apt:
          name: nginx
          state: present
  # Run playbook
  ansible-playbook site.yml
    `,
    quiz: {
      question: "What causes configuration drift?",
      options: ["Manual changes", "Faster code", "More tests", "Auto updates"],
      answer: "Manual changes",
    },
  },
  {
    id: "devops-8",
    question: "How does blue-green deployment reduce downtime?",
    answer:
      "Blue-green deployment runs two identical environments—blue live, green staging—then swaps them for a release. It cuts downtime to seconds, but the trick is sync—databases or sessions must match, or users see glitches.",
    topic: "devops",
    subTopic: "Deployment",
    code: `
  # Swap environments (conceptual script)
  # Blue live: nginx -s reload -c blue.conf
  # Green ready, swap:
  ln -sf green.conf nginx.conf
  nginx -s reload
    `,
    quiz: {
      question: "What’s a blue-green deployment goal?",
      options: [
        "More servers",
        "Less downtime",
        "Faster builds",
        "Better tests",
      ],
      answer: "Less downtime",
    },
  },
  {
    id: "devops-9",
    question: "What’s the role of version control in DevOps?",
    answer:
      "Version control, like Git, tracks code changes so teams collaborate and roll back if needed. It’s the backbone of CI/CD, but the challenge is branching—messy merges or stale branches slow everything down.",
    topic: "devops",
    subTopic: "Collaboration",
    code: `
  # Git workflow
  git checkout -b feature
  git add .
  git commit -m "Add feature"
  git push origin feature
    `,
    quiz: {
      question: "What does version control enable?",
      options: [
        "Server monitoring",
        "Code tracking",
        "Load balancing",
        "User management",
      ],
      answer: "Code tracking",
    },
  },
  {
    id: "devops-10",
    question: "How does a service mesh improve microservices in DevOps?",
    answer:
      "A service mesh, like Istio, manages communication between microservices—handling retries, timeouts, or encryption. It simplifies ops, but the catch is overhead—extra proxies can slow traffic if not tuned right.",
    topic: "devops",
    subTopic: "Microservices",
    code: `
  # Istio injection (simplified)
  kubectl label namespace default istio-injection=enabled
  # Deploy service
  kubectl apply -f service.yaml
    `,
    quiz: {
      question: "What does a service mesh manage?",
      options: [
        "Database queries",
        "Service communication",
        "Server hardware",
        "Code commits",
      ],
      answer: "Service communication",
    },
  },
  {
    id: "devops-11",
    question: "What’s the trick to handling secrets in DevOps?",
    answer:
      "Secrets—like API keys or passwords—need secure storage, not hardcoding. Tools like Vault encrypt and rotate them, but the challenge is access—too loose risks leaks, too tight blocks pipelines.",
    topic: "devops",
    subTopic: "Security",
    code: `
  # Vault secret store
  vault kv put secret/myapp db-pass=xyz123
  # Fetch in app (conceptual)
  vault kv get secret/myapp
    `,
    quiz: {
      question: "Why avoid hardcoding secrets?",
      options: [
        "Slows code",
        "Risks exposure",
        "Breaks tests",
        "Uses more RAM",
      ],
      answer: "Risks exposure",
    },
  },
  {
    id: "devops-12",
    question: "How does chaos engineering test DevOps resilience?",
    answer:
      "Chaos engineering injects failures—like killing servers—to see if systems recover. It builds toughness, but the trick is control—unplanned chaos can tank production if not scoped tight.",
    topic: "devops",
    subTopic: "Resilience",
    code: `
  # Chaos Monkey example (conceptual)
  chaosmonkey terminate --group app-servers
  # Monitor recovery
  kubectl get pods
    `,
    quiz: {
      question: "What does chaos engineering simulate?",
      options: [
        "Code bugs",
        "System failures",
        "User logins",
        "Network boosts",
      ],
      answer: "System failures",
    },
  },
  {
    id: "devops-13",
    question: "What’s the deal with GitOps in DevOps?",
    answer:
      "GitOps uses Git as the single truth for infrastructure and app deployments, syncing live systems to repo configs. It’s clean and auditable, but the challenge is latency—slow syncs or merge conflicts can lag updates.",
    topic: "devops",
    subTopic: "Automation",
    code: `
  # ArgoCD GitOps (simplified)
  argocd app create myapp --repo https://git.example.com/repo.git
  # Sync app
  argocd app sync myapp
    `,
    quiz: {
      question: "What’s the source of truth in GitOps?",
      options: ["Server logs", "Git repo", "CI pipeline", "Monitoring tool"],
      answer: "Git repo",
    },
  },
  {
    id: "devops-14",
    question: "How does observability differ from monitoring in DevOps?",
    answer:
      "Observability digs into why systems fail using logs, metrics, and traces, while monitoring just flags what’s wrong. It’s deeper but trickier—collecting all that data needs storage and smart queries to avoid overload.",
    topic: "devops",
    subTopic: "Monitoring",
    code: `
  # Jaeger tracing (conceptual)
  jaeger-query --service myapp
  # Log example
  tail -f /var/log/app.log | grep "error"
    `,
    quiz: {
      question: "What does observability explain?",
      options: [
        "When issues happen",
        "Why issues happen",
        "Who caused issues",
        "Where code runs",
      ],
      answer: "Why issues happen",
    },
  },
  {
    id: "devops-15",
    question: "What’s the role of feature flags in DevOps?",
    answer:
      "Feature flags toggle code features on or off without redeploying, great for testing or phased rollouts. They speed up releases, but the catch is cleanup—unused flags pile up and confuse code if not removed.",
    topic: "devops",
    subTopic: "Deployment",
    code: `
  # Feature flag in code (conceptual)
  if (config.featureFlag("newUI")) {
    renderNewUI();
  } else {
    renderOldUI();
  }
    `,
    quiz: {
      question: "What do feature flags enable?",
      options: [
        "Faster builds",
        "Toggle features",
        "More tests",
        "Server scaling",
      ],
      answer: "Toggle features",
    },
  },
  {
    id: "devops-16",
    question: "How does immutable infrastructure work in DevOps?",
    answer:
      "Immutable infrastructure replaces servers instead of updating them, like swapping a fresh VM for a patched one. It cuts drift, but the trick is speed—building and swapping images fast needs slick automation.",
    topic: "devops",
    subTopic: "Automation",
    code: `
  # Packer build (immutable image)
  packer build -var "ami=ami-123" template.json
  # Deploy new AMI
  aws ec2 run-instances --image-id ami-new
    `,
    quiz: {
      question: "What’s a benefit of immutable infrastructure?",
      options: ["More updates", "Less drift", "Faster code", "More servers"],
      answer: "Less drift",
    },
  },
  {
    id: "devops-17",
    question: "What’s the trick to managing rollback in DevOps?",
    answer:
      "Rollback reverts a bad release to a stable state, like switching to an old container tag. It saves outages, but the challenge is data—databases or user sessions might not roll back clean, so you need plans.",
    topic: "devops",
    subTopic: "Deployment",
    code: `
  # Docker rollback
  docker tag myapp:1.0 myapp:latest
  docker run -d myapp:1.0
  # Rollback to 0.9
  docker run -d myapp:0.9
    `,
    quiz: {
      question: "What’s a rollback risk?",
      options: ["More bugs", "Data mismatch", "Faster deploys", "Less testing"],
      answer: "Data mismatch",
    },
  },
  {
    id: "devops-18",
    question: "How does a DevOps culture improve team collaboration?",
    answer:
      "DevOps culture breaks silos between dev and ops, pushing shared goals like fast, safe releases. It speeds up work, but the trick is buy-in—resistance from old habits or blame games can stall it.",
    topic: "devops",
    subTopic: "Collaboration",
    code: `
  # No direct code, but tools aid culture
  # Slack alert (conceptual)
  curl -X POST -d '{"text":"Build passed"}' https://slack.com/api/chat.postMessage
    `,
    quiz: {
      question: "What does DevOps culture reduce?",
      options: ["Code commits", "Team silos", "Server count", "Test cases"],
      answer: "Team silos",
    },
  },
  {
    id: "devops-19",
    question: "What’s the role of auto-scaling in DevOps?",
    answer:
      "Auto-scaling adds or removes servers based on demand—like traffic spikes—keeping apps responsive. It’s efficient, but the catch is cost—over-scaling burns money, and laggy triggers drop users.",
    topic: "devops",
    subTopic: "Automation",
    code: `
  # AWS auto-scaling
  aws autoscaling create-auto-scaling-group \
    --auto-scaling-group-name app-group \
    --min-size 1 --max-size 10
    `,
    quiz: {
      question: "What triggers auto-scaling?",
      options: ["Code changes", "Demand shifts", "User logins", "Backup runs"],
      answer: "Demand shifts",
    },
  },
  {
    id: "devops-20",
    question: "How does canary deployment test releases in DevOps?",
    answer:
      "Canary deployment rolls out a release to a small user group first, checking for issues before going wide. It cuts risk, but the trick is metrics—without good monitoring, you miss problems until they hit more users.",
    topic: "devops",
    subTopic: "Deployment",
    code: `
  # Kubernetes canary (simplified)
  apiVersion: v1
  kind: Service
  metadata:
    name: app
  spec:
    selector:
      version: v1.1
    # Route 10% traffic
    trafficPolicy: weighted
    `,
    quiz: {
      question: "What’s the goal of canary deployment?",
      options: [
        "Faster builds",
        "Risk reduction",
        "More servers",
        "Less testing",
      ],
      answer: "Risk reduction",
    },
  },
];
