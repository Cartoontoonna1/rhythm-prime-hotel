import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "./portfolio.css";

export const metadata: Metadata = {
  title: {
    default: "Rhythm Prime Phuket | Luxury Lifestyle Hotel Concept",
    template: "%s | Rhythm Prime Phuket",
  },
  description:
    "A fictional luxury lifestyle hotel in Phuket created as a Digital Marketing and MarTech portfolio experience, featuring ocean-view rooms, dining, wellness and curated lifestyle experiences.",
  keywords: [
    "Rhythm Prime",
    "Phuket hotel concept",
    "hospitality portfolio",
    "MarTech portfolio",
    "digital marketing portfolio",
    "luxury lifestyle hotel concept",
  ],
  openGraph: {
    title: "Rhythm Prime Phuket | Luxury Lifestyle Hotel Concept",
    description:
      "A fictional Phuket hospitality concept created as a Digital Marketing and MarTech portfolio experience.",
    type: "website",
    locale: "en_US",
    siteName: "Rhythm Prime",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
