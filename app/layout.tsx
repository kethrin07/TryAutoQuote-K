import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });

export const metadata: Metadata = {
  title: "TryAutoQuote:Compare Auto Insurance in 90 Seconds",
  description: "Compare 40+ top auto insurers side by side. Free, fast, no spam. Average drivers save $547/year.",
  openGraph: {
    title: "TryAutoQuote:Compare Auto Insurance in 90 Seconds",
    description: "Compare 40+ top auto insurers side by side. Free, fast, no spam.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
