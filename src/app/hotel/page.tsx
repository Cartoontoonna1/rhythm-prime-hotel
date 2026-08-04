import type { Metadata } from "next";
import { Suspense } from "react";
import HotelPageClient from "./HotelPageClient";

export const metadata: Metadata = {
  title: "Explore Rhythm Prime Hotel | Floor Guide Phuket",
  description:
    "Explore all ten floors of Rhythm Prime Phuket, from the grand lobby and ocean-view rooms to wellness, infinity pool and rooftop dining.",
};

export default function HotelPage() {
  return (
    <Suspense fallback={<div className="container">Loading hotel explorer…</div>}>
      <HotelPageClient />
    </Suspense>
  );
}
