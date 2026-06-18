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
    title: "Autonomous Exoplanet Observation Scheduling",
    org: "NASA Exoplanet Archive · Information-Theoretic ML",
    period: "2025 – 2026",
    description:
      "Two-stage active exploration framework for telescope target prioritization under uncertainty — ensemble ML on 5,500+ exoplanets, adaptive scheduling at 99.87% of oracle reference, and an interactive Three.js + Plotly dashboard.",
    tags: ["LightGBM", "Active Learning", "Three.js", "Streamlit"],
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
      "Published and presented at the 6th IEEE International Conference on VLSI Systems, Architecture, Technology and Applications (VLSI SATA). Proposes a delay-optimized dynamic comparator with temperature compensation for high-speed, low-power CMOS sensing and ADC front-ends.",
    tags: ["Dynamic Comparator", "CMOS", "VLSI", "Temperature Compensation"],
    kind: "publication",
    paperHref: "/papers/dynamic-comparator-vlsi-sata-2026.pdf",
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
