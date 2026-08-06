export interface TimelineItem {
  title: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  achievements: string[];
}

/** Resume: https://drive.google.com/file/d/1tUw7KHTfCbDFxpSd1Bqe4dlrPLaTryBC/view */
export const resumeUrl =
  "https://drive.google.com/file/d/1tUw7KHTfCbDFxpSd1Bqe4dlrPLaTryBC/view?usp=sharing";

export const resumeDownloadUrl =
  "https://drive.google.com/uc?export=download&id=1tUw7KHTfCbDFxpSd1Bqe4dlrPLaTryBC";

export const timelineItems: TimelineItem[] = [
  {
    title: "IoT Engineer Intern",
    company: "ElevanceSkills",
    period: "Mar 2026 – Present",
    location: "Bengaluru, India",
    description:
      "Architecting dual-dashboard MQTT telemetry on ESP32 with FreeRTOS for medical and facility management teams.",
    achievements: [
      "Reduced patient risk response time by ~40% via segregated vitals and environmental data pipelines on Adafruit IO",
      "Implemented offline detection with OLED + buzzer fallback for Wi-Fi or MQTT broker failure",
      "Engineered bidirectional MQTT controls for servo bed elevation, remote dosage tuning, and dynamic sampling rates",
    ],
  },
  {
    title: "Embedded Systems Intern",
    company: "Emertxe Information Technologies",
    period: "Jun 2026 – Jul 2026",
    location: "Bengaluru, Karnataka, India · Remote",
    description:
      "Completed a 4-week intensive internship in Embedded Systems covering microcontroller programming, embedded C, and hardware interfacing. Designed and developed a Real-Time Electric Vehicle Dashboard & ADAS Warning System.",
    achievements: [
      "Implemented real-time sensor interfacing and warning mechanisms for driver assistance applications",
      "Strengthened practical knowledge of embedded programming, debugging, and system integration through hands-on project development",
      "Successfully completed the internship demonstrating practical implementation skills in embedded system design",
    ],
  },
  {
    title: "Embedded Systems Engineer Intern",
    company: "MEGAMINDS IT SERVICES",
    period: "Jun 2025 – Jan 2026",
    location: "Remote",
    description:
      "Embedded Systems Development Intern working on embedded systems, IoT, AI-driven edge applications and wireless communication simulations. Contributed to the design, simulation, and implementation of real-time embedded and intelligent systems including IoT resource allocation frameworks, AI-based fault detection, smart energy monitoring, and secure IoT communication architectures.",
    achievements: [
      "Worked with ESP32, FreeRTOS, Python, MATLAB/Simulink, 5G technologies, and embedded C/C++ across IoT and edge AI projects",
      "Assisted in system modeling, simulation analysis, documentation, and research-oriented technical implementations",
      "Collaborated remotely within project deadlines on embedded and intelligent systems deliverables",
    ],
  },
  {
    title: "B.Tech in Electronics & Communication Engineering",
    company: "Amrita Vishwa Vidyapeetham, Bengaluru",
    period: "Jul 2022 – May 2027",
    location: "Bengaluru, India",
    description:
      "CGPA 8.43 / 10.0 — focus on embedded systems, analog/digital design, IoT pipelines, and ADAS perception. Active in technical fests, robotics, and project expos.",
    achievements: [
      "Hands-on bench debugging with oscilloscope and logic analyser across ARM7, ESP32, and Raspberry Pi platforms",
    ],
  },
];
