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
}

export interface FilterCategory {
  label: string;
  value: string;
}

export const projects: Project[] = [
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
  },
  {
    title: "5DOF Robotic Arm + Bluetooth App",
    description:
      "A 5-DOF robotic arm controlled via a custom Android app over Bluetooth. Features a motion-saving system to record and replay arm movements for automation.",
    image: "/project-images/5DOF.jpg",
    date: "Apr 2024",
    category: ["embedded", "iot"],
    tags: ["Robotics", "Android", "Bluetooth", "Automation"],
    github: null,
    demo: "https://drive.google.com/drive/folders/1hbT6HnY4lBHV2FXyGStsSIo-WKb4RI3z?usp=sharing",
    featured: false,
  },
  {
    title: "WhatsApp Reader Flutter",
    description:
      "A Flutter app that translates selected WhatsApp messages with native-style UI. Features real-time language detection, accurate translations, and text-to-speech.",
    image:
      "https://raw.githubusercontent.com/rushikesh-D69/Whatsapp-Reader-Flutter-/main/preview.png",
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
];

export const filterCategories: FilterCategory[] = [
  { label: "All", value: "all" },
  { label: "Embedded Systems", value: "embedded" },
  { label: "IoT", value: "iot" },
  { label: "Analog", value: "analog" },
  { label: "Machine Learning", value: "ml" },
  { label: "App Development", value: "app-dev" },
];

export const featuredProjects = projects.filter((p) => p.featured);
