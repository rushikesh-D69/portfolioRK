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
    title: "Embedded Systems Engineer Intern",
    company: "MegaMind IT Services",
    period: "Jun 2025 – Jan 2026",
    location: "Remote",
    description:
      "Bare-metal firmware development across ESP32 and ARM7 LPC2148 with interrupt-driven GPIO, PWM, and multi-protocol peripheral integration.",
    achievements: [
      "Delivered 4+ sensor–actuator integration pipelines in C/C++, versioned via Git across prototype iterations",
      "Cut hardware debug cycles by ~30% validating UART, SPI, and I2C timing with oscilloscope and logic analyser",
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
