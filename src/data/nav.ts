import { contactMailto } from "@/data/contact";

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
  { label: "Research",   href: "#research" },
  { label: "Experience", href: "#experience" },
  { label: "Skills",     href: "#skills" },
  { label: "Contact",    href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { icon: "fab fa-github",   href: "https://github.com/rushikesh-D69",         label: "GitHub" },
  { icon: "fab fa-linkedin", href: "https://www.linkedin.com/in/d-rushikesh/", label: "LinkedIn" },
  { icon: "fas fa-envelope", href: contactMailto, label: "Email" },
];

export const heroTypewriterTexts: string[] = [
  "Embedded System Developer",
  "IoT Engineer",
  "ML Enthusiast",
  "Embedded AI/Robotic",
];
