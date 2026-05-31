export interface SkillCategory {
  icon: string;
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    icon: "fas fa-tools",
    title: "Core Technical Skills",
    skills: [
      "Embedded Systems (ARM7, LPC2138)",
      "Analog & Digital Circuit Design",
      "Machine Learning (Python ML stack)",
      "Internet of Things (IoT)",
      "Control Systems & Signal Processing",
    ],
  },
  {
    icon: "fas fa-code",
    title: "Programming & Scripting",
    skills: ["Python", "C / C++", "Java", "Arduino", "MATLAB"],
  },
  {
    icon: "fas fa-mobile-alt",
    title: "Development Tools & Frameworks",
    skills: [
      "Flutter (Dart)",
      "Streamlit",
      "React",
      "Node.js",
      "Proteus Design Suite",
      "NI Multisim",
      "LTSpice",
    ],
  },
  {
    icon: "fas fa-microchip",
    title: "Platforms & Hardware",
    skills: [
      "Raspberry Pi",
      "ARM Microcontrollers",
      "Linux / Bash",
      "Git & GitHub",
      "VS Code",
    ],
  },
];
