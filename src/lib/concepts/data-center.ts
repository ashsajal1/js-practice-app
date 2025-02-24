import { QnaTypes } from "./javascript";

export const dataCenterConcepts: QnaTypes[] = [
  {
    id: "dc-1",
    question: "What is the role of power redundancy in a data center?",
    answer:
      "Power redundancy ensures a data center keeps running if one power source fails, using setups like dual feeds or backup generators. It’s critical for uptime, but the challenge is switching—seamless failover needs precise timing, or equipment drops during the gap.",
    topic: "data-center",
    subTopic: "Power Management",
    code: `
  # Check UPS status (example with apcaccess)
  apcaccess status
  # Outputs: battery charge, load, runtime
    `,
    quiz: {
      question: "What does power redundancy prevent?",
      options: ["Data loss", "Power outages", "Network lag", "Cooling failure"],
      answer: "Power outages",
    },
  },
  {
    id: "dc-2",
    question: "How does cooling efficiency impact data center operations?",
    answer:
      "Cooling efficiency keeps servers from overheating by optimizing airflow or using liquid systems. It cuts energy costs and protects hardware, but the trick is balance—overcooling wastes power, while undercooling risks shutdowns.",
    topic: "data-center",
    subTopic: "Cooling",
    code: `
  # Monitor temperature (example with lm-sensors)
  sensors
  # Outputs: CPU and ambient temps
    `,
    quiz: {
      question: "What’s a risk of poor cooling?",
      options: [
        "Slower networks",
        "Hardware failure",
        "Power spikes",
        "Data corruption",
      ],
      answer: "Hardware failure",
    },
  },
  {
    id: "dc-3",
    question: "What’s the deal with Tier classifications for data centers?",
    answer:
      "Tier classifications, from I to IV, rate data centers on uptime and redundancy. Tier I is basic, while Tier IV has multiple, independent power and cooling systems. The catch is cost—higher tiers mean more infrastructure, but not every app needs that level.",
    topic: "data-center",
    subTopic: "Design",
    code: `
  # No direct command, but monitoring uptime simulates Tier check
  uptime
  # Outputs: system runtime, load average
    `,
    quiz: {
      question: "What does Tier IV offer over Tier I?",
      options: [
        "More storage",
        "Higher redundancy",
        "Faster servers",
        "Cheaper power",
      ],
      answer: "Higher redundancy",
    },
  },
  {
    id: "dc-4",
    question: "How does a data center use rack density to optimize space?",
    answer:
      "Rack density measures how much gear—like servers or storage—fits in a rack. Higher density saves space but cranks up power and cooling needs. The challenge is limits—too dense, and airflow chokes, frying equipment.",
    topic: "data-center",
    subTopic: "Infrastructure",
    code: `
  # Check power usage per rack (conceptual PDU command)
  pductl status rack1
  # Outputs: watts consumed
    `,
    quiz: {
      question: "What’s a downside of high rack density?",
      options: [
        "Less storage",
        "Higher cooling demand",
        "Slower networks",
        "Fewer servers",
      ],
      answer: "Higher cooling demand",
    },
  },
  {
    id: "dc-5",
    question: "What’s the purpose of a hot aisle/cold aisle layout?",
    answer:
      "Hot aisle/cold aisle layout separates cool air intake from hot exhaust in data center rows, boosting cooling efficiency. Cold air hits server fronts, hot air exits the back. The trick is containment—leaks between aisles waste energy and overheat gear.",
    topic: "data-center",
    subTopic: "Cooling",
    code: `
  # Monitor rack temp (simulated)
  ipmitool sdr type Temperature
  # Outputs: sensor readings
    `,
    quiz: {
      question: "What does hot aisle/cold aisle improve?",
      options: [
        "Power usage",
        "Cooling efficiency",
        "Network speed",
        "Storage capacity",
      ],
      answer: "Cooling efficiency",
    },
  },
  {
    id: "dc-6",
    question: "How does fiber optic cabling enhance data center networking?",
    answer:
      "Fiber optic cabling carries data as light, offering high bandwidth and long distances over copper. It’s key for fast server links, but the catch is fragility—bends or dirt on connectors kill signals, so it needs careful handling.",
    topic: "data-center",
    subTopic: "Networking",
    code: `
  # Check fiber link status (example)
  ethtool eth0
  # Outputs: speed, link status
    `,
    quiz: {
      question: "What’s a benefit of fiber optics?",
      options: [
        "Cheaper cost",
        "High bandwidth",
        "Easier repair",
        "Shorter range",
      ],
      answer: "High bandwidth",
    },
  },
  {
    id: "dc-7",
    question: "What’s the trick to managing power usage effectiveness (PUE)?",
    answer:
      "Power usage effectiveness measures how much power goes to IT gear versus total data center use—ideal is close to 1.0. It tracks efficiency, but the challenge is overhead—cooling and lighting skew it, so you need smart design to lower it.",
    topic: "data-center",
    subTopic: "Power Management",
    code: `
  # Conceptual PUE calc (scripted)
  total_power=10000  # watts
  it_power=8000     # watts
  echo "PUE: $(echo "$total_power / $it_power" | bc -l)"
  # Outputs: 1.25
    `,
    quiz: {
      question: "What does a lower PUE indicate?",
      options: [
        "More waste",
        "Higher efficiency",
        "Less uptime",
        "Slower servers",
      ],
      answer: "Higher efficiency",
    },
  },
  {
    id: "dc-8",
    question: "How does a data center handle disaster recovery?",
    answer:
      "Disaster recovery plans keep data centers running after failures—like floods or outages—using backups and off-site replication. It’s about uptime, but the trick is speed—restoring terabytes or failover takes time, and every second costs.",
    topic: "data-center",
    subTopic: "Resilience",
    code: `
  # Rsync for off-site backup
  rsync -av /data backup@remote:/backup
  # Test restore (conceptual)
  rsync -av backup@remote:/backup /restore
    `,
    quiz: {
      question: "What’s a key goal of disaster recovery?",
      options: [
        "Faster networks",
        "Quick restoration",
        "More storage",
        "Lower costs",
      ],
      answer: "Quick restoration",
    },
  },
  {
    id: "dc-9",
    question: "What’s the role of a top-of-rack switch in a data center?",
    answer:
      "A top-of-rack switch connects servers in a rack to the network, cutting cable clutter and latency. It’s efficient, but the catch is bandwidth—overloaded switches bottleneck traffic if too many servers hit them hard.",
    topic: "data-center",
    subTopic: "Networking",
    code: `
  # Check switch ports (example)
  ip link show
  # Configure VLAN (simplified)
  ip link add link eth0 name eth0.10 type vlan id 10
    `,
    quiz: {
      question: "What does a top-of-rack switch reduce?",
      options: ["Power use", "Cable length", "Cooling needs", "Server count"],
      answer: "Cable length",
    },
  },
  {
    id: "dc-10",
    question: "How does virtualization density affect data center capacity?",
    answer:
      "Virtualization density packs more VMs onto physical servers, maxing out compute power. It boosts capacity, but the challenge is overload—too many VMs strain CPU, memory, or I/O, crashing performance if not planned right.",
    topic: "data-center",
    subTopic: "Virtualization",
    code: `
  # Check VM count (example with virsh)
  virsh list --all
  # Start a VM
  virsh start my-vm
    `,
    quiz: {
      question: "What limits virtualization density?",
      options: [
        "Network speed",
        "Resource strain",
        "Disk size",
        "Power supply",
      ],
      answer: "Resource strain",
    },
  },
  {
    id: "dc-11",
    question: "What’s the deal with data center colocation?",
    answer:
      "Colocation rents space in a data center for your servers, sharing power, cooling, and networking. It cuts build costs, but the trick is control—you rely on their uptime and security, so SLAs matter big time.",
    topic: "data-center",
    subTopic: "Design",
    code: `
  # Monitor colocation uptime (conceptual)
  ping -c 100 dc-provider.com
  # Outputs: packet loss, latency
    `,
    quiz: {
      question: "What does colocation share?",
      options: ["Servers", "Infrastructure", "Software", "Data"],
      answer: "Infrastructure",
    },
  },
  {
    id: "dc-12",
    question: "How does a data center manage physical security?",
    answer:
      "Physical security locks down a data center with biometrics, cameras, and guards to stop unauthorized access. It protects hardware and data, but the challenge is gaps—weak doors or insider threats can bypass even the best tech.",
    topic: "data-center",
    subTopic: "Security",
    code: `
  # Check security logs (simplified)
  cat /var/log/auth.log | grep "access"
  # Outputs: login attempts
    `,
    quiz: {
      question: "What’s a physical security tool?",
      options: ["Firewalls", "Biometrics", "Encryption", "Backups"],
      answer: "Biometrics",
    },
  },
  {
    id: "dc-13",
    question: "What’s the trick to handling data center cabling?",
    answer:
      "Data center cabling organizes power and network lines—like structured cabling or fiber trays—to keep connections clean and reliable. The challenge is scale—hundreds of cables tangle fast, and one wrong pull kills a rack.",
    topic: "data-center",
    subTopic: "Infrastructure",
    code: `
  # Trace network cable (example)
  traceroute 192.168.1.1
  # Outputs: network path
    `,
    quiz: {
      question: "What’s a risk of bad cabling?",
      options: [
        "Slower cooling",
        "Connection loss",
        "More power",
        "Less storage",
      ],
      answer: "Connection loss",
    },
  },
  {
    id: "dc-14",
    question: "How does a data center use a BMS for control?",
    answer:
      "A Building Management System (BMS) monitors and controls data center systems—like power, cooling, or alarms—from one dashboard. It catches issues fast, but the trick is integration—disparate hardware needs to talk, or you miss critical alerts.",
    topic: "data-center",
    subTopic: "Automation",
    code: `
  # Check BMS status (conceptual SNMP)
  snmpget -v2c -c public bms-device 1.3.6.1.4.1.12345.1.1
  # Outputs: temp, power stats
    `,
    quiz: {
      question: "What does a BMS monitor?",
      options: [
        "Server apps",
        "Building systems",
        "Network traffic",
        "User access",
      ],
      answer: "Building systems",
    },
  },
  {
    id: "dc-15",
    question: "What’s the role of a spine-leaf architecture in data centers?",
    answer:
      "Spine-leaf architecture connects every leaf switch (racks) to every spine switch (core) in a flat, fast network. It cuts latency and scales easy, but the catch is cost—more switches and cables pile up quick.",
    topic: "data-center",
    subTopic: "Networking",
    code: `
  # Check switch links (example)
  lldpctl
  # Outputs: neighbor switch info
    `,
    quiz: {
      question: "What does spine-leaf reduce?",
      options: ["Power use", "Latency", "Cooling needs", "Rack space"],
      answer: "Latency",
    },
  },
  {
    id: "dc-16",
    question: "How does a data center handle capacity planning?",
    answer:
      "Capacity planning predicts power, space, and compute needs to avoid running out during growth. It uses trends and forecasts, but the trick is accuracy—underplan and you crash, overplan and you waste cash.",
    topic: "data-center",
    subTopic: "Management",
    code: `
  # Check current usage (example)
  df -h
  vmstat 1 10
  # Outputs: disk, CPU stats
    `,
    quiz: {
      question: "What’s a risk of poor capacity planning?",
      options: [
        "Resource shortages",
        "Faster networks",
        "More uptime",
        "Lower costs",
      ],
      answer: "Resource shortages",
    },
  },
  {
    id: "dc-17",
    question: "What’s the deal with green data centers?",
    answer:
      "Green data centers cut energy use with efficient cooling, renewable power, or low-power hardware. They save money and the planet, but the challenge is upfront cost—solar panels or liquid cooling setups aren’t cheap to install.",
    topic: "data-center",
    subTopic: "Power Management",
    code: `
  # Monitor power draw (conceptual)
  ipmitool sensor list | grep Power
  # Outputs: watts used
    `,
    quiz: {
      question: "What’s a focus of green data centers?",
      options: [
        "More servers",
        "Energy efficiency",
        "Faster networks",
        "Bigger racks",
      ],
      answer: "Energy efficiency",
    },
  },
  {
    id: "dc-18",
    question: "How does a data center manage fire suppression?",
    answer:
      "Fire suppression uses gas—like FM-200—or sprinklers to douse flames without wrecking gear. It protects lives and data, but the trick is false alarms—gas discharge can halt operations, and water ruins electronics if triggered wrong.",
    topic: "data-center",
    subTopic: "Safety",
    code: `
  # Check fire system status (conceptual)
  systemctl status fire-suppression
  # Outputs: system readiness
    `,
    quiz: {
      question: "What’s a fire suppression challenge?",
      options: [
        "Slow response",
        "Gear damage",
        "High power use",
        "Network delay",
      ],
      answer: "Gear damage",
    },
  },
  {
    id: "dc-19",
    question: "What’s the role of a DCIM tool in data center management?",
    answer:
      "Data Center Infrastructure Management (DCIM) tools track assets, power, and cooling in real time, like a digital map. They spot inefficiencies, but the catch is setup—integrating sensors and software takes effort, and bad data skews results.",
    topic: "data-center",
    subTopic: "Management",
    code: `
  # DCIM API check (conceptual curl)
  curl -X GET http://dcim.local/api/assets
  # Outputs: JSON of racks, servers
    `,
    quiz: {
      question: "What does DCIM monitor?",
      options: [
        "App performance",
        "Infrastructure",
        "User logins",
        "Network speed",
      ],
      answer: "Infrastructure",
    },
  },
  {
    id: "dc-20",
    question: "How does a data center handle high-density computing?",
    answer:
      "High-density computing crams powerful servers—like GPU clusters—into tight spaces for big tasks. It boosts performance, but the trick is heat—tons of watts per rack need advanced cooling, or you cook the hardware.",
    topic: "data-center",
    subTopic: "Infrastructure",
    code: `
  # Check GPU load (example)
  nvidia-smi
  # Outputs: GPU usage, temp
    `,
    quiz: {
      question: "What’s a challenge of high-density computing?",
      options: [
        "More space",
        "Heat management",
        "Slower servers",
        "Less power",
      ],
      answer: "Heat management",
    },
  },
];
