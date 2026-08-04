import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Rhythm Prime | Luxury Lifestyle Hotel Phuket",
    template: "%s | Rhythm Prime Phuket",
  },

  description:
    "Discover Rhythm Prime, a luxury lifestyle hotel in Phuket where contemporary Thai warmth meets French elegance. Stay, dine, unwind and find your rhythm by the sea.",

  keywords: [
    "Rhythm Prime",
    "Phuket hotel",
    "luxury hotel Phuket",
    "lifestyle hotel Phuket",
    "ocean view hotel Phuket",
    "Phuket resort",
    "luxury accommodation Phuket",
  ],

  openGraph: {
    title: "Rhythm Prime | Luxury Lifestyle Hotel Phuket",
    description:
      "A luxury lifestyle destination in Phuket designed around the rhythm of the sea.",
    type: "website",
    locale: "en_US",
    siteName: "Rhythm Prime",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}