import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PageAtmosphere from "@/components/PageAtmosphere";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollRestore from "@/components/ScrollRestore";
import BackToTop from "@/components/BackToTop";
import { BASE_PATH, SITE_URL } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Rushikesh D – Portfolio",
  description:
    "Portfolio of Rushikesh D — ECE student, Embedded Systems Developer, Analog Circuit Designer & Machine Learning Enthusiast.",
  openGraph: {
    title: "Rushikesh D – Portfolio",
    description:
      "ECE student building smart, real-time solutions at the intersection of hardware and software.",
    type: "website",
    url: SITE_URL,
  },
  icons: {
    icon: [
      { url: `${BASE_PATH}/favicon.png`, sizes: "512x512", type: "image/png" },
      { url: `${BASE_PATH}/favicon-32.png`, sizes: "32x32", type: "image/png" },
      { url: `${BASE_PATH}/favicon-16.png`, sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: `${BASE_PATH}/favicon.png`, sizes: "512x512", type: "image/png" }],
    shortcut: `${BASE_PATH}/favicon.png`,
  },
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
        <ScrollRestore />
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
