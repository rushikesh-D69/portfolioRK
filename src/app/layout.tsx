import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "Rushikesh D – Portfolio",
  description:
    "Portfolio of Rushikesh D — ECE student, Embedded Systems Developer, Analog Circuit Designer & Machine Learning Enthusiast.",
  openGraph: {
    title:       "Rushikesh D – Portfolio",
    description: "ECE student building smart, real-time solutions at the intersection of hardware and software.",
    type:        "website",
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </head>
      <body className="bg-bg-1 text-text-1 font-inter antialiased">
        {/* particles.js CDN */}
        <Script
          src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
          strategy="beforeInteractive"
        />

        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
