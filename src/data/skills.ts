export interface SkillCategory {
  icon: string;
  title: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    icon: "fas fa-microchip",
    title: "Embedded Systems",
    description: "Bare-metal firmware, microcontrollers, and real-time hardware–software integration.",
    skills: [
      "Embedded Systems (ARM7, LPC2138)",
      "ARM Microcontrollers",
      "Raspberry Pi",
      "Arduino",
      "Analog & Digital Circuit Design",
      "Internet of Things (IoT)",
      "Control Systems & Signal Processing",
    ],
  },
  {
    icon: "fas fa-brain",
    title: "Machine Learning",
    description: "Intelligent systems that learn from data and deploy into real applications.",
    skills: [
      "Machine Learning (Python ML stack)",
      "Python",
      "Streamlit",
      "MATLAB",
    ],
  },
  {
    icon: "fas fa-satellite",
    title: "Satellite Communications",
    description: "NTN-inspired network thinking — orbital links, ground nodes, and signal topology.",
    skills: [
      "Signal Processing",
      "Control Systems & Signal Processing",
      "Internet of Things (IoT)",
    ],
  },
  {
    icon: "fas fa-flask",
    title: "Simulation & Research",
    description: "Modeling, circuit simulation, and rigorous validation before deployment.",
    skills: [
      "Proteus Design Suite",
      "NI Multisim",
      "LTSpice",
      "MATLAB",
    ],
  },
  {
    icon: "fas fa-code",
    title: "Programming",
    description: "Languages and frameworks for systems, apps, and research tooling.",
    skills: [
      "Python",
      "C / C++",
      "Java",
      "Flutter (Dart)",
      "React",
      "Node.js",
      "Linux / Bash",
      "Git & GitHub",
      "VS Code",
    ],
  },
];
