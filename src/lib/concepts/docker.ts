import { QnaTypes } from "./javascript";

export const dockerConcepts: QnaTypes[] = [
  {
    id: "docker-1",
    question: "What is a Docker image and how does it differ from a container?",
    answer:
      "A Docker image is a read-only template with app code, libraries, and OS bits, while a container is a running instance of that image. Images are static, containers are live. The trick is layering—images stack changes, but containers can mess up if you tweak them too much.",
    topic: "docker",
    subTopic: "Basics",
    code: `
  # Build an image
  docker build -t myapp:1.0 .
  # Run a container
  docker run -d myapp:1.0
    `,
    quiz: {
      question: "What’s read-only in Docker?",
      options: ["Container", "Image", "Volume", "Network"],
      answer: "Image",
    },
  },
  {
    id: "docker-2",
    question: "How does a Dockerfile define a container’s setup?",
    answer:
      "A Dockerfile is a script with steps—like FROM, RUN, COPY—to build an image. It sets up everything the app needs, but the challenge is order—layers cache, so slow commands up top mean longer rebuilds.",
    topic: "docker",
    subTopic: "Image Creation",
    code: `
  # Simple Dockerfile
  FROM ubuntu:20.04
  RUN apt-get update && apt-get install -y python3
  COPY app.py /app/
  CMD ["python3", "/app/app.py"]
    `,
    quiz: {
      question: "What does FROM do in a Dockerfile?",
      options: [
        "Runs a command",
        "Sets the base image",
        "Copies files",
        "Starts the app",
      ],
      answer: "Sets the base image",
    },
  },
  {
    id: "docker-3",
    question: "What’s the deal with Docker volumes for storage?",
    answer:
      "Docker volumes store data outside a container’s filesystem, keeping it safe when the container dies. They’re better than bind mounts for portability, but the trick is management—unnamed volumes pile up and clog disk if not cleaned.",
    topic: "docker",
    subTopic: "Storage",
    code: `
  # Create and use a volume
  docker volume create mydata
  docker run -v mydata:/data myapp
  # List volumes
  docker volume ls
    `,
    quiz: {
      question: "What persists data beyond a container’s life?",
      options: ["Image", "Volume", "Network", "Bind mount"],
      answer: "Volume",
    },
  },
  {
    id: "docker-4",
    question: "How does Docker networking connect containers?",
    answer:
      "Docker networking links containers with modes like bridge, host, or overlay. Bridge is default for single-host isolation, overlay spans multiple hosts. The catch is ports—exposing them wrong or clashing IPs can block communication.",
    topic: "docker",
    subTopic: "Networking",
    code: `
  # Create a network
  docker network create mynet
  # Run containers on it
  docker run -d --network mynet --name app1 myapp
  docker run -d --network mynet --name app2 myapp
    `,
    quiz: {
      question: "What’s the default Docker network type?",
      options: ["Host", "Bridge", "Overlay", "None"],
      answer: "Bridge",
    },
  },
  {
    id: "docker-5",
    question: "What’s the purpose of Docker Compose?",
    answer:
      "Docker Compose runs multi-container apps with a single YAML file defining services, networks, and volumes. It simplifies dev setups, but the trick is scaling—it’s not built for production swarms, so you need orchestration later.",
    topic: "docker",
    subTopic: "Orchestration",
    code: `
  # docker-compose.yml
  version: '3'
  services:
    app:
      image: myapp:1.0
      ports:
        - "8080:80"
    db:
      image: mysql:5.7
      volumes:
        - dbdata:/var/lib/mysql
  volumes:
    dbdata:
  # Start
  docker-compose up
    `,
    quiz: {
      question: "What does Docker Compose manage?",
      options: [
        "Single containers",
        "Multi-container apps",
        "Server hardware",
        "Image builds",
      ],
      answer: "Multi-container apps",
    },
  },
  {
    id: "docker-6",
    question: "How does Docker handle resource limits?",
    answer:
      "Docker limits CPU, memory, and I/O for containers with flags like --cpus or --memory. It keeps one container from hogging the host, but the challenge is tuning—too tight starves the app, too loose wastes resources.",
    topic: "docker",
    subTopic: "Resource Management",
    code: `
  # Run with limits
  docker run -d --cpus="1.5" --memory="512m" myapp
  # Check usage
  docker stats
    `,
    quiz: {
      question: "What does --memory limit?",
      options: ["Disk space", "RAM usage", "Network bandwidth", "CPU time"],
      answer: "RAM usage",
    },
  },
  {
    id: "docker-7",
    question: "What’s the trick to managing Docker image layers?",
    answer:
      "Docker image layers stack commands from a Dockerfile, caching each step for speed. Smaller layers mean faster builds, but the catch is bloat—big RUN steps or unused files balloon images if not optimized.",
    topic: "docker",
    subTopic: "Image Creation",
    code: `
  # Optimized Dockerfile
  FROM alpine:3.14
  RUN apk add --no-cache python3 && rm -rf /var/cache/apk/*
  COPY app.py .
  CMD ["python3", "app.py"]
    `,
    quiz: {
      question: "What slows Docker builds?",
      options: ["Small layers", "Big layers", "Cached layers", "Few commands"],
      answer: "Big layers",
    },
  },
  {
    id: "docker-8",
    question: "How does Docker Swarm orchestrate containers?",
    answer:
      "Docker Swarm turns multiple Docker hosts into a cluster, managing services across nodes with simple commands. It’s lighter than Kubernetes, but the trick is failover—node crashes need fast rebalancing, or apps drop.",
    topic: "docker",
    subTopic: "Orchestration",
    code: `
  # Start Swarm
  docker swarm init
  # Deploy service
  docker service create --replicas 3 --name app myapp:1.0
  # Check nodes
  docker node ls
    `,
    quiz: {
      question: "What does Docker Swarm manage?",
      options: [
        "Single containers",
        "Cluster services",
        "Image builds",
        "Host OS",
      ],
      answer: "Cluster services",
    },
  },
  {
    id: "docker-9",
    question: "What’s the role of the Docker daemon?",
    answer:
      "The Docker daemon runs on the host, managing images, containers, and networks via the Docker API. It’s the engine behind commands, but the catch is security—root access means a breach can own the system.",
    topic: "docker",
    subTopic: "Architecture",
    code: `
  # Check daemon status
  systemctl status docker
  # Restart daemon
  systemctl restart docker
    `,
    quiz: {
      question: "What does the Docker daemon control?",
      options: [
        "Code builds",
        "Container runtime",
        "User logins",
        "Network cables",
      ],
      answer: "Container runtime",
    },
  },
  {
    id: "docker-10",
    question: "How does Docker handle logging?",
    answer:
      "Docker captures container logs—like stdout/stderr—and stores them in drivers like json-file or syslog. It’s great for debugging, but the trick is size—logs grow fast, and you need rotation or external tools to keep disk free.",
    topic: "docker",
    subTopic: "Monitoring",
    code: `
  # View logs
  docker logs mycontainer
  # Run with log driver
  docker run -d --log-driver=syslog myapp
    `,
    quiz: {
      question: "What’s a Docker logging challenge?",
      options: ["Slow logs", "Disk growth", "No logs", "Network lag"],
      answer: "Disk growth",
    },
  },
  {
    id: "docker-11",
    question: "What’s the trick to securing Docker containers?",
    answer:
      "Securing Docker means locking down images, dropping privileges, and isolating networks. It cuts risks, but the challenge is trade-offs—too strict breaks apps, too loose leaves holes like root exploits.",
    topic: "docker",
    subTopic: "Security",
    code: `
  # Run without root
  docker run -d --user 1000:1000 myapp
  # Scan image
  docker scan myapp:1.0
    `,
    quiz: {
      question: "What’s a Docker security risk?",
      options: ["Root access", "Fast builds", "Small images", "More ports"],
      answer: "Root access",
    },
  },
  {
    id: "docker-12",
    question: "How does Docker handle multi-stage builds?",
    answer:
      "Multi-stage builds use multiple FROMs in a Dockerfile to slim down final images, like compiling in one stage and copying only the app to another. It cuts bloat, but the trick is naming—stages need clear aliases to grab files right.",
    topic: "docker",
    subTopic: "Image Creation",
    code: `
  # Multi-stage Dockerfile
  FROM golang:1.17 AS builder
  WORKDIR /app
  COPY . .
  RUN go build -o myapp
  FROM alpine:3.14
  COPY --from=builder /app/myapp .
  CMD ["./myapp"]
    `,
    quiz: {
      question: "What does multi-stage build reduce?",
      options: ["Build time", "Image size", "Run speed", "Network use"],
      answer: "Image size",
    },
  },
  {
    id: "docker-13",
    question: "What’s the deal with Docker registries?",
    answer:
      "Docker registries—like Docker Hub—store and share images, letting you push or pull them across systems. They streamline deployment, but the catch is trust—public images might hide malware, so private registries add control.",
    topic: "docker",
    subTopic: "Distribution",
    code: `
  # Push to registry
  docker tag myapp:1.0 myrepo/myapp:1.0
  docker push myrepo/myapp:1.0
  # Pull from registry
  docker pull myrepo/myapp:1.0
    `,
    quiz: {
      question: "What’s a registry risk?",
      options: ["Slow pulls", "Untrusted images", "Small sizes", "No tags"],
      answer: "Untrusted images",
    },
  },
  {
    id: "docker-14",
    question: "How does Docker handle health checks?",
    answer:
      "Docker health checks run commands inside containers to flag if they’re working—like pinging a port. They help orchestration restart bad ones, but the trick is timing—too frequent checks waste CPU, too rare miss failures.",
    topic: "docker",
    subTopic: "Monitoring",
    code: `
  # Dockerfile with health check
  FROM nginx
  HEALTHCHECK --interval=30s --timeout=3s CMD curl -f http://localhost || exit 1
  # Run and check
  docker ps -a
    `,
    quiz: {
      question: "What does a health check verify?",
      options: [
        "Image size",
        "Container health",
        "Network speed",
        "Disk space",
      ],
      answer: "Container health",
    },
  },
  {
    id: "docker-15",
    question: "What’s the role of the ENTRYPOINT in Docker?",
    answer:
      "ENTRYPOINT sets the default command a container runs, like a script or app, and stays fixed unless overridden. It’s great for consistency, but the catch is flexibility—mixing it with CMD can confuse args if not planned.",
    topic: "docker",
    subTopic: "Image Creation",
    code: `
  # Dockerfile with ENTRYPOINT
  FROM ubuntu
  ENTRYPOINT ["echo", "Hello"]
  CMD ["World"]
  # Runs: Hello World
  docker run myimage
    `,
    quiz: {
      question: "What does ENTRYPOINT define?",
      options: [
        "Default args",
        "Default command",
        "Build steps",
        "Network ports",
      ],
      answer: "Default command",
    },
  },
  {
    id: "docker-16",
    question: "How does Docker handle container isolation?",
    answer:
      "Docker isolates containers with namespaces and cgroups, splitting processes, networks, and resources. It’s lighter than VMs, but the trick is leaks—shared kernels mean root breakouts can hit the host if not locked down.",
    topic: "docker",
    subTopic: "Architecture",
    code: `
  # Check namespaces (host)
  lsns
  # Run isolated
  docker run -d --pid=container:app1 app2
    `,
    quiz: {
      question: "What isolates Docker containers?",
      options: ["VMs", "Namespaces", "Images", "Ports"],
      answer: "Namespaces",
    },
  },
  {
    id: "docker-17",
    question: "What’s the trick to debugging a Docker container?",
    answer:
      "Debugging a container means checking logs, exec-ing in, or inspecting configs. It finds crashes or bugs, but the challenge is ephemerality—containers vanish with data unless you save state or logs first.",
    topic: "docker",
    subTopic: "Monitoring",
    code: `
  # Check logs
  docker logs mycontainer
  # Enter running container
  docker exec -it mycontainer bash
    `,
    quiz: {
      question: "What’s a debugging risk in Docker?",
      options: ["Lost data", "Slow builds", "More RAM", "No logs"],
      answer: "Lost data",
    },
  },
  {
    id: "docker-18",
    question: "How does Docker handle image tagging?",
    answer:
      "Image tagging names versions—like myapp:1.0—for easy tracking and rollout. It’s simple, but the trick is consistency—untagged or duplicate tags confuse pulls and deploys if not managed.",
    topic: "docker",
    subTopic: "Distribution",
    code: `
  # Tag an image
  docker tag myapp:latest myapp:1.0
  # Push tagged image
  docker push myapp:1.0
    `,
    quiz: {
      question: "What do tags track in Docker?",
      options: [
        "Container IDs",
        "Image versions",
        "Network names",
        "Volume sizes",
      ],
      answer: "Image versions",
    },
  },
  {
    id: "docker-19",
    question: "What’s the role of Docker Hub in workflows?",
    answer:
      "Docker Hub is a public registry for storing and sharing images, like nginx or custom apps. It speeds up workflows, but the catch is security—public images need vetting, and rate limits push private repos.",
    topic: "docker",
    subTopic: "Distribution",
    code: `
  # Pull from Docker Hub
  docker pull nginx:latest
  # Login to push
  docker login
  docker push myrepo/myapp
    `,
    quiz: {
      question: "What’s a Docker Hub limit?",
      options: ["Image size", "Pull rates", "Build time", "CPU use"],
      answer: "Pull rates",
    },
  },
  {
    id: "docker-20",
    question: "How does Docker handle rollback with images?",
    answer:
      "Docker rolls back by running an older image tag if a new one fails, like myapp:1.0 instead of 1.1. It’s fast, but the trick is state—data or configs might not match the old image, so volumes need planning.",
    topic: "docker",
    subTopic: "Deployment",
    code: `
  # Run current version
  docker run -d myapp:1.1
  # Rollback to 1.0
  docker stop $(docker ps -q)
  docker run -d myapp:1.0
    `,
    quiz: {
      question: "What’s a rollback challenge in Docker?",
      options: ["Slow builds", "State mismatch", "No tags", "More ports"],
      answer: "State mismatch",
    },
  },
];
