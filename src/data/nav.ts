export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  icon: string;
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { label: "Home",       href: "#home" },
  { label: "About",      href: "#about" },
  { label: "Projects",   href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills",     href: "#skills" },
  { label: "Contact",    href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { icon: "fab fa-github",   href: "https://github.com/rushikesh-D69",         label: "GitHub" },
  { icon: "fab fa-linkedin", href: "https://www.linkedin.com/in/d-rushikesh/", label: "LinkedIn" },
  { icon: "fas fa-envelope", href: "mailto:drushikesh0105@gmail.com",           label: "Email" },
];

export const typewriterTexts: string[] = [
  "Embedded Systems Developer",
  "Analog Circuit Designer",
  "Machine Learning Enthusiast",
  "Microcontroller Programmer",
  "Hardware-Software Integrator",
  "Robotics & Automation Engineer",
];
