import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PageAtmosphere from "@/components/PageAtmosphere";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rushikesh D – Portfolio",
  description:
    "Portfolio of Rushikesh D — ECE student, Embedded Systems Developer, Analog Circuit Designer & Machine Learning Enthusiast.",
  openGraph: {
    title: "Rushikesh D – Portfolio",
    description:
      "ECE student building smart, real-time solutions at the intersection of hardware and software.",
    type: "website",
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </head>
      <body className="bg-bg-base text-text-1 font-inter antialiased relative">
        <PageAtmosphere />
        <div className="relative z-[1]">
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </div>
      </body>
    </html>
  );
}
