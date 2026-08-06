export type ResearchKind = "collaboration" | "project" | "publication";

export interface ResearchLogo {
  src: string;
  alt: string;
  wide?: boolean;
}

export interface ResearchItem {
  title: string;
  org: string;
  period: string;
  description: string;
  tags: string[];
  kind: ResearchKind;
  href?: string;
  paperHref?: string;
  image?: string;
  logos: ResearchLogo[];
}

export const researchItems: ResearchItem[] = [
  {
    title: "Samsung PRISM — NTN Systems",
    org: "Samsung · Amrita Vishwa Vidyapeetham",
    period: "2024 – Present",
    description:
      "Research on embedded AI and non-terrestrial network (NTN) systems — signal topology, orbital node modelling, and firmware-level integration for satellite-ground communication stacks.",
    tags: ["NTN", "Embedded AI", "Signal Systems"],
    kind: "collaboration",
    image: "/research/ntn-networks.png",
    logos: [
      { src: "/logos/samsung.svg", alt: "Samsung" },
      { src: "/logos/amrita.png", alt: "Amrita Vishwa Vidyapeetham" },
    ],
  },
  {
    title: "Autonomous Exoplanet Observation Scheduling & AI Target Prioritization",
    org: "NASA Exoplanet Archive · Information-Theoretic ML",
    period: "2025 – 2026",
    description:
      "Two-stage active exploration framework for telescope target prioritization under uncertainty — ensemble ML on 5,500+ exoplanets, adaptive scheduling at 99.87% of oracle reference. Integrates an AI-driven habitability prediction pipeline, Pareto frontier analysis, and an interactive Three.js + Plotly + Streamlit dashboard for exoplanet survey planning.",
    tags: ["LightGBM", "Active Learning", "Three.js", "Streamlit", "Python", "Jupyter", "Astronomy"],
    kind: "project",
    href: "https://github.com/rushikesh-D69/water",
    image: "/research/observability-analysis.png",
    logos: [
      { src: "/logos/nasa.png", alt: "NASA" },
      { src: "/logos/github.svg", alt: "GitHub" },
    ],
  },
  {
    title:
      "A Low-Power Delay-Optimized High-Speed Dynamic Comparator with Temperature Compensation",
    org: "IEEE VLSI SATA 2026 · Amrita Bengaluru",
    period: "Jun 12 – 13, 2026",
    description:
      "Published at the 2026 IEEE 6th International Conference on VLSI Systems, Architecture, Technology and Applications (VLSI SATA). Presents a low-power, temperature-compensated high-speed dynamic comparator for ADC applications. Designed and simulated using 45 nm CMOS technology in Cadence Virtuoso, the proposed architecture integrates a cascode cross-coupled preamplifier with a temperature-stable latch, achieving 56.22% lower power consumption while improving delay stability under temperature variations. Well suited for low-power SAR and Flash ADCs used in wireless communication, edge computing, and sensor systems.",
    tags: ["Dynamic Comparator", "CMOS", "VLSI", "Temperature Compensation", "45nm", "Cadence Virtuoso", "SAR ADC"],
    kind: "publication",
    paperHref: "https://ieeexplore.ieee.org/document/11610524",
    image: "/research/dynamic-comparator-schematic.png",
    logos: [
      {
        src: "/logos/vlsi-sata-sponsors.png",
        alt: "IEEE VLSI SATA 2026 — IEEE CAS, Bangalore Section, VTS, CEDA, Amrita",
        wide: true,
      },
    ],
  },
];
