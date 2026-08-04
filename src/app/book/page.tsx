import { Suspense } from "react";
import type { Metadata } from "next";
import BookingPageClient from "./BookingPageClient";

export const metadata: Metadata = {
  title: "Book Your Stay | Rhythm Prime Phuket",
  description:
    "Plan a stay at Rhythm Prime Phuket and explore rooms, dates and optional experiences in our booking prototype.",
};

export default function BookPage() {
  return (
    <Suspense fallback={null}>
      <BookingPageClient />
    </Suspense>
  );
}
