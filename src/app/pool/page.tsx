import type { Metadata } from "next";
import PoolPageClient from "./PoolPageClient";

export const metadata: Metadata = {
  title: "Pool & Day Pass | Rhythm Prime Phuket",
  description: "Explore Rhythm Prime's fictional curved infinity pool and Day Pass concept overlooking Phuket.",
};

export default function PoolPage() { return <PoolPageClient />; }
