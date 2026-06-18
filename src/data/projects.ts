export interface Project {
  title: string;
  description: string;
  image: string;
  date: string;
  category: string[];
  tags: string[];
  github: string | null;
  demo: string | null;
  featured: boolean;
  longDescription?: string[];
  screenshots?: string[];
}

export interface FilterCategory {
  label: string;
  value: string;
}

export const projects: Project[] = [
  {
    title: "TARA – Tracking Adaptive Road Autonomous Car",
    description:
      "Real hardware ADAS prototype on Raspberry Pi 4B + ESP32. Edge perception with TFLite — lane keeping, traffic signs, potholes, ACC, and traffic lights. No cloud, no GPU.",
    image: "/project-images/tara-hardware.png",
    date: "May 2026",
    category: ["embedded", "ml"],
    tags: ["Raspberry Pi", "ESP32", "OpenCV", "TFLite", "ADAS"],
    github: "https://github.com/rushikesh-D69/tara_hardware",
    demo: null,
    featured: true,
    longDescription: [
      "Edge ADAS perception — LDW, LKA, TSR (MobileNetV2 INT8), pothole detection, ACC, and TLR run on Raspberry Pi 4B with sub-20 ms latency per module.",
      "ESP32 motor bridge — WiFi WebSocket streams normalized steer/speed commands to TB6612FNG H-bridge differential drive with MPU-6050 IMU and encoders.",
      "Decision arbitration — Priority-based DecisionManager fuses all modules into a single autonomous command for indoor track navigation.",
      "Sim-to-real workflow — Companion CARLA repo validates the same ADAS stack before deployment on physical hardware.",
    ],
    screenshots: [
      "/project-images/tara-hardware.png",
      "/project-images/tara-architecture.png",
    ],
  },
  {
    title: "H.A.W.K – Through-Wall Life Detection Radar",
    description:
      "FreeRTOS-powered ESP32 system for non-line-of-sight human detection via microwave Doppler radar — extracts breathing and heartbeat through walls with a tactical WebSocket dashboard.",
    image: "/project-images/hawk-setup.png",
    date: "May 2026",
    category: ["embedded"],
    tags: ["ESP32", "FreeRTOS", "FFT", "Microwave Radar", "WebSocket"],
    github:
      "https://github.com/rushikesh-D69/H.A.W.K-HumanActivityDetectionThroughWallsUsingMicrowaveKinetics",
    demo: null,
    featured: true,
    longDescription: [
      "Microwave Doppler front-end — HB100/CDM324 radar with active bandpass filtering and ESP32 12-bit ADC sampling at 250 Hz.",
      "Vital sign extraction — 1024-point FFT with parabolic interpolation detects breathing (0.2–0.6 Hz) and heartbeat (1.0–2.5 Hz) through drywall and rubble.",
      "FreeRTOS multitasking — Four preemptive tasks with deterministic timing for sampling, DSP, classification, and WebSocket telemetry.",
      "Tactical dashboard — Browser-based LAN console with real-time vital sign plots and human-detected alerts over ws://ESP32:81.",
    ],
    screenshots: [
      "/project-images/hawk-setup.png",
      "/project-images/hawk-fft.png",
      "/project-images/hawk-vitals.png",
    ],
  },
  {
    title: "AnniHeal – Wound Infection Risk Monitor",
    description:
      "AI-enabled IoT wearable patch estimating wound infection risk via multi-sensor fusion (temperature, VOC, moisture) and RandomForest regression with a live Flask dashboard.",
    image: "/project-images/anniheal.png",
    date: "Feb 2026",
    category: ["embedded", "ml"],
    tags: ["ESP32", "Flask", "scikit-learn", "IoT", "Healthcare"],
    github: "https://github.com/rushikesh-D69/AnniHeal",
    demo: null,
    featured: true,
    longDescription: [
      "Multi-sensor patch — DS18B20 temperature, MQ-2 VOC proxy, and moisture sensing streamed from ESP32 over serial to a Flask backend.",
      "Probabilistic modeling — RandomForestRegressor outputs continuous infection risk (0–100%) instead of brittle threshold classification.",
      "Real-time dashboard — Live risk stratification (Low / Moderate / High) with under 50 ms inference latency on CPU.",
      "End-to-end pipeline — Complete sensors → ML model → UI prototype with physics-informed dataset methodology.",
    ],
    screenshots: [
      "/project-images/anniheal.png",
      "/project-images/anniheal-circuit.png",
    ],
  },
  {
    title: "JINX – Joint Inverse N-dimensional eXplorer",
    description:
      "Browser-based real-time 3D robotics kinematics simulator — closed-form and DLS inverse kinematics, Jacobian singularity detection, and trajectory planning for RRR, SCARA, and 6-DOF arms.",
    image: "/project-images/jinx.png",
    date: "May 2026",
    category: ["app-dev"],
    tags: ["JavaScript", "Three.js", "Robotics", "Kinematics", "Vite"],
    github: "https://github.com/rushikesh-D69/JINX-Joint_Inverse_N-dimensional_eXplorer",
    demo: "https://chandansaipavanpadala.github.io/JINX-Joint_Inverse_N-dimensional_eXplorer/",
    featured: true,
    longDescription: [
      "N-DOF kinematics engine — Unified forward kinematics, geometric Jacobian, and damped least-squares IK for arbitrary DH-parameter chains.",
      "Three robot workspaces — 3-DOF RRR lamp, 4-DOF SCARA pick-and-place with RoboAnalyzer, and 6-DOF welding cell with waypoint paths.",
      "RoboAnalyzer workbench — DH editor, workspace sampling, joint-space path visualization, and singularity diagnostics.",
      "Browser-native stack — Three.js + Vite with no MATLAB/ROS dependency; math dashboard syncs across tabs via BroadcastChannel.",
    ],
    screenshots: ["/project-images/jinx.png"],
  },
  {
    title: "Tic-Tac-Toe Using LPC2138",
    description:
      "Developed a classic Tic-Tac-Toe game on the LPC2138 microcontroller, utilizing a 7-segment display and button inputs for user interaction.",
    image: "/project-images/tic-tac-toe.jpg",
    date: "Apr 2025",
    category: ["embedded"],
    tags: ["Embedded C", "ARM7", "LPC2138", "7-Segment"],
    github: "https://github.com/rushikesh-D69/Tic-Tac-Toe-Using-LPC2138",
    demo: null,
    featured: true,
    longDescription: [
      "Engineered game logic purely in Embedded C targeting the LPC2138 ARM7 microcontroller, implementing complete state machines for players, AI moves, and win-condition validations.",
      "Interfaced a 7-segment display via GPIO registers to display current scores, game state codes, and active player turns.",
      "Implemented a non-volatile local score tracking system using mock registers to maintain high score tables between rounds.",
      "Designed and simulated the entire hardware schematic on Proteus Design Suite, optimizing debouncing circuits for the tactile input switches."
    ],
    screenshots: [
      "/project-images/tic-tac-toe.jpg"
    ]
  },
  {
    title: "Dino Game Using LPC2138",
    description:
      "Implements a side-scrolling Dino Jump game on the LPC2138 ARM7 microcontroller with a 16×2 LCD, jump controls, scoring, and obstacle collision logic.",
    image: "/project-images/dino-game.png",
    date: "Apr 2025",
    category: ["embedded"],
    tags: ["Embedded C", "ARM7", "LPC2138", "LCD"],
    github: "https://github.com/rushikesh-D69/Dino-Game-Using-LPC2138",
    demo: null,
    featured: true,
    longDescription: [
      "Built a fully real-time side-scrolling runner game under bare-metal ARM7 execution, bypassing operating system overheads to maintain highly responsive 60Hz logic loop refresh rates.",
      "Programmed a custom driver for the HD44780 16x2 Character LCD, using custom-drawn binary matrices to render jumping dino and incoming obstacles in custom font slots.",
      "Engineered clean interrupt-driven user input using hardware timer interrupts and external button pins, ensuring immediate, lag-free jump actions.",
      "Implemented deterministic obstacle generation algorithms with incremental speed curves, maximizing gameplay engagement and scoring difficulty."
    ],
    screenshots: [
      "/project-images/dino-game.png"
    ]
  },
  {
    title: "Music Recommendation System",
    description:
      "Music Recommendation System Based on Acoustic Features using a Convolutional Neural Network for audio feature extraction and similarity matching.",
    image: "/project-images/chords.jpeg",
    date: "Mar 2025 – Apr 2025",
    category: ["ml"],
    tags: ["Python", "CNN", "Music", "ML"],
    github:
      "https://github.com/rushikesh-D69/Music-Recommendation-System-Based-on-Acoustic-Features",
    demo: "https://mrsboafk.streamlit.app/",
    featured: true,
    longDescription: [
      "Developed an acoustic-feature-based engine that processes WAV/MP3 files through librosa to extract key musical coefficients (MFCCs, spectral centroid, chroma features).",
      "Designed and trained a deep Convolutional Neural Network (CNN) to classify audio samples into complex stylistic/genre profiles with high accuracy.",
      "Engineered a real-time recommendation vector-space searching database, matching processed audio tracks with database files using cosine similarity.",
      "Deployed an intuitive and highly visual interactive dashboard using Python and Streamlit, complete with spectrogram visualization and playback controllers."
    ],
    screenshots: [
      "/project-images/chords.jpeg"
    ]
  },
  {
    title: "DRIP – Dynamic Root Locus Integration Platform",
    description:
      "A Streamlit web app that enables users to interactively perform Root Locus analysis of control systems with real-time visualization.",
    image: "/project-images/drip.jpg",
    date: "Apr 2025",
    category: ["app-dev"],
    tags: ["Python", "Streamlit", "Control Systems", "Web App"],
    github: "https://github.com/rushikesh-D69/DRIP-root-locus-app",
    demo: "https://dripsimu.streamlit.app/",
    featured: true,
    longDescription: [
      "Developed a robust control system analysis and visualization tool using Streamlit and Python control libraries.",
      "Features interactive input for open-loop transfer function coefficients (numerator and denominator polynomials).",
      "Performs dynamic, real-time plotting of Root Locus, Bode plots, and step responses, updating immediately as sliders change.",
      "Assists control system students and engineers in analyzing system stability, gain margins, phase margins, and damping factors."
    ],
    screenshots: [
      "/project-images/drip.jpg"
    ]
  },
  {
    title: "Electronic Piano",
    description:
      "Developed an 8-key Electronic Piano using only Analog circuits — no microcontroller. Pure hardware music generation with op-amp oscillators.",
    image: "/project-images/analog-piano.jpg",
    date: "Mar 2025",
    category: ["analog"],
    tags: ["Analog", "Circuit Design", "Music"],
    github: null,
    demo: "https://aseblr-my.sharepoint.com/personal/bl_en_u4ece23205_bl_students_amrita_edu/_layouts/15/stream.aspx?id=%2Fpersonal%2Fbl%5Fen%5Fu4ece23205%5Fbl%5Fstudents%5Famrita%5Fedu%2FDocuments%2FSTudy%2FB%2ETech%2F2nd%20Year%2F4th%20Semester%2FCircuits%20and%20Communication%20Laboratory%2FSystem%20Level%20Design%2FPiano2%2EMOV&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Efae99b31%2D308b%2D42f6%2D8d66%2D3e9f214cc66c&ct=1749475751163&or=OWA%2DNT%2DMail&cid=f1e287c5%2D93e3%2D3fd4%2D4151%2D4718c5e2be5c&ga=1",
    featured: true,
    longDescription: [
      "Engineered an analog electronic instrument utilizing a network of Operational Amplifier (Op-Amp) active oscillators designed to generate clean sinusoidal waveforms.",
      "Calculated exact resistor-capacitor (RC) feedback loops corresponding to standard musical frequencies (C4 through C5 scales) with custom-selected high-precision capacitors.",
      "Designed a custom multi-stage summing amplifier circuit to mix active voice outputs and drive low-impedance external audio speakers without audio clipping.",
      "Constructed a high-fidelity hardware prototype on breadboards, verifying signals with dual-channel analog oscilloscopes to guarantee minimal harmonic distortion."
    ],
    screenshots: [
      "/project-images/analog-piano.jpg"
    ]
  },
  {
    title: "ODE Solver using OP-AMPS",
    description:
      "Designed and simulated an analog circuit to solve second-order ordinary differential equations (ODEs) using operational amplifiers in NI Multisim.",
    image: "/project-images/ODE-solver.jpeg",
    date: "Feb 2025",
    category: ["analog"],
    tags: ["Analog", "Op-Amp", "Simulation"],
    github: null,
    demo: "https://www.multisim.com/content/MZHrGkWgD7FBjiHoUV2unF/ode-solver",
    featured: true,
    longDescription: [
      "Designed a fully analog hardware computer dedicated to solving second-order ordinary differential equations (ODEs) in real time.",
      "Configured multi-stage active analog integrators, summing amplifiers, and inverting amplifiers using premium op-amp architectures.",
      "Modelled mathematical damping, frequency parameters, and initial conditions using precise potentiometer division networks.",
      "Conducted extensive transient analysis simulations in NI Multisim, validating theoretical wave equations against live simulated output traces."
    ],
    screenshots: [
      "/project-images/ODE-solver.jpeg"
    ]
  },
  {
    title: "5DOF Robotic Arm + Bluetooth App",
    description:
      "A 5-DOF robotic arm controlled via a custom Android app over Bluetooth. Features a motion-saving system to record and replay arm movements for automation.",
    image: "/project-images/5DOF.jpg",
    date: "Apr 2024",
    category: ["embedded"],
    tags: ["Robotics", "Android", "Bluetooth", "Automation"],
    github: null,
    demo: "https://drive.google.com/drive/folders/1hbT6HnY4lBHV2FXyGStsSIo-WKb4RI3z?usp=sharing",
    featured: false,
  },
  {
    title: "WhatsApp Reader Flutter",
    description:
      "A Flutter app that translates selected WhatsApp messages with native-style UI. Features real-time language detection, accurate translations, and text-to-speech.",
    image: "/project-images/whatsapp-reader.png",
    date: "Jun 2024",
    category: ["app-dev"],
    tags: ["Flutter", "Dart", "Translation", "Mobile"],
    github: "https://github.com/rushikesh-D69/Whatsapp-Reader-Flutter-",
    demo: null,
    featured: false,
  },
  {
    title: "ML-Based Anti-lock Braking System",
    description:
      "An ML-enhanced ABS that uses real-time road surface classification to adaptively control brake pressure. Achieved 85.6% test accuracy with 56,000+ predictions/sec.",
    image: "/project-images/abs-system.jpg",
    date: "Mar 2025",
    category: ["ml", "embedded"],
    tags: ["Python", "MATLAB", "Simulink", "ML", "Control Systems"],
    github:
      "https://github.com/rushikesh-D69/ML-Based-Anti-lock-Braking-System-ABS-",
    demo: null,
    featured: false,
  },
  {
    title: "NekOPay – Transaction Management App",
    description:
      "A Flutter app for managing and visualizing transactions with add/delete/sort features, local storage via SharedPreferences, and a beautiful anime-themed UI.",
    image: "/project-images/nekopay.jpg",
    date: "Mar 2025",
    category: ["app-dev"],
    tags: ["Flutter", "Dart", "SharedPreferences", "Mobile App", "UI/UX"],
    github: "https://github.com/rushikesh-D69/NekOPay---FLUTTER",
    demo: null,
    featured: false,
  },
  {
    title: "AI Telescope Target Prioritization",
    description:
      "AI-driven pipeline for ranking telescope observation targets — habitability prediction, Pareto frontier analysis, and interactive Streamlit dashboard for exoplanet survey planning.",
    image: "/project-images/water-telescope.png",
    date: "Jun 2026",
    category: ["ml"],
    tags: ["Python", "Jupyter", "Streamlit", "Astronomy"],
    github: "https://github.com/rushikesh-D69/water",
    demo: null,
    featured: false,
  },
  {
    title: "TARA – CARLA Simulation Companion",
    description:
      "Photorealistic CARLA simulator for the TARA ADAS decision stack — validates lane detection, TSR, ACC, and TLR pipelines before hardware deployment.",
    image: "/project-images/tara-adas.jpg",
    date: "May 2026",
    category: ["embedded", "ml"],
    tags: ["Python", "CARLA", "ADAS", "Simulation"],
    github: "https://github.com/rushikesh-D69/TARA-Tracking_Adaptive_Road_Autonomous_Car",
    demo: null,
    featured: false,
  },
  {
    title: "STM32 RTOS Fire Evacuation System",
    description:
      "ARM Cortex-M4 fire evacuation system on FreeRTOS with DS18B20 and MQ-2 sensors, motorized emergency exit control, and alarm actuation.",
    image: "/project-images/stm32-fire.png",
    date: "May 2026",
    category: ["embedded"],
    tags: ["STM32", "FreeRTOS", "C", "Sensors"],
    github: "https://github.com/rushikesh-D69/STM32-RTOS-based-Fire-evacuation-system",
    demo: null,
    featured: false,
  },
  {
    title: "Ultra Low-Voltage CMOS 5:2 Compressor",
    description:
      "Ultra low-voltage, low-power CMOS 5:2 compressor designed and simulated in Cadence Virtuoso (gpdk045, 45 nm) — based on IEEE Figure 13, optimized for power, delay, and area in VLSI arithmetic circuits.",
    image: "/project-images/vlsi-compressor.svg",
    date: "Nov 2025",
    category: ["vlsi"],
    tags: ["Cadence Virtuoso", "CMOS", "VLSI", "gpdk045", "5:2 Compressor"],
    github:
      "https://github.com/rushikesh-D69/UltraLowVoltageLowPowerCompressor-CadenceVirtuoso",
    demo: null,
    featured: false,
    longDescription: [
      "IEEE reference design — Implemented Figure 13 from Rao et al. (IEEE TCAS-II, 2007) as a full 5:2 compressor schematic in Cadence Virtuoso.",
      "Custom submodules — Built XOR, XNOR, and MUX cells from scratch and verified transient performance across all 128 input combinations.",
      "Low-voltage optimization — Simulated at 0.8–1.2 V VDD targeting minimal Power–Delay Product with full-swing output verification.",
      "VLSI-ready flow — Schematic, layout, DRC/LVS, and ADE transient analysis on 45 nm gpdk045 for high-speed DSP arithmetic blocks.",
    ],
    screenshots: ["/project-images/vlsi-compressor.svg"],
  },
  {
    title: "Discrete Logic Digital Clock",
    description:
      "Real-life 24-hour digital clock using basic digital ICs — hours, minutes, and seconds counters with reset logic and full hardware functionality.",
    image: "/project-images/digital-clock.png",
    date: "Mar 2026",
    category: ["analog"],
    tags: ["Digital Logic", "IC Design", "Hardware"],
    github: "https://github.com/rushikesh-D69/Discrete-Logic-Based-Digital-Clock",
    demo: null,
    featured: false,
  },
];

export const filterCategories: FilterCategory[] = [
  { label: "All", value: "all" },
  { label: "Embedded & IoT", value: "embedded" },
  { label: "VLSI", value: "vlsi" },
  { label: "Analog", value: "analog" },
  { label: "Machine Learning", value: "ml" },
  { label: "App Development", value: "app-dev" },
];

export const categoryGroups: {
  value: string;
  label: string;
  description: string;
}[] = [
  {
    value: "ml",
    label: "Machine Learning",
    description: "Learning-based inference & signal models",
  },
  {
    value: "embedded",
    label: "Embedded & IoT",
    description: "Firmware, microcontrollers, sensors & connected edge systems",
  },
  {
    value: "vlsi",
    label: "VLSI",
    description: "CMOS layout, Cadence simulation & chip-level arithmetic design",
  },
  {
    value: "analog",
    label: "Analog & Signal",
    description: "Circuit design, simulation & signal chains",
  },
  {
    value: "app-dev",
    label: "Application Layer",
    description: "Interfaces, tooling & deployed software",
  },
];

export function getCategoryLabel(value: string): string {
  return filterCategories.find((c) => c.value === value)?.label ?? value;
}

export function groupProjectsByCategory<T extends Project>(projectList: T[]) {
  const groups: { group: (typeof categoryGroups)[number]; projects: T[] }[] = [];

  for (const group of categoryGroups) {
    const matched = projectList.filter((p) => p.category.includes(group.value));
    if (matched.length > 0) groups.push({ group, projects: matched });
  }

  return groups;
}

export const featuredProjects = projects.filter((p) => p.featured);

/** Primary showcase — TARA hardware ADAS stack */
export const flagshipProject =
  projects.find((p) => p.github?.includes("tara_hardware")) ?? featuredProjects[0];

/** Featured grid on homepage (flagship shown separately) */
export const HOMEPAGE_SHOWCASE_LIMIT = 6;

export const showcaseProjects = featuredProjects
  .filter((p) => p.title !== flagshipProject.title)
  .slice(0, HOMEPAGE_SHOWCASE_LIMIT);
