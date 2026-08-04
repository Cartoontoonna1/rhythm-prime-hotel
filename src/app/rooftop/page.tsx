import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Rooftop | Rhythm Prime Phuket",
  description: "Explore the fictional Rhythm Prime rooftop concept with sunset cocktails, dining, private tables and discreet evening music.",
};

export default function RooftopPage() {
  return (
    <main className="rp-shell"><SiteHeader />
      <section className="rp-hero"><div className="rp-hero__media"><Image src="/images/home/rhythm-prime_rooftop.png.png" alt="Rhythm Prime rooftop at dusk" fill priority sizes="100vw" /></div><div className="rp-hero__overlay" /><div className="rp-container rp-hero__content"><p className="rp-eyebrow">LEVEL 10 · ROOFTOP</p><h1 className="rp-title">Your Night Has A New Rhythm.</h1><p className="rp-subtitle">Sunset cocktails move into dinner, music and open-air conversation above the Phuket coastline.</p><div className="rp-actions"><Link href="/dining#reserve" className="rp-button rp-button--gold">Plan an Evening</Link></div></div></section>
      <section className="rp-section"><div className="rp-container rp-grid-2"><div><p className="rp-eyebrow">SUNSET TO NIGHT</p><h2 className="rp-title" style={{fontSize:"clamp(2.4rem,4vw,4.4rem)"}}>A rooftop that changes tempo.</h2><p className="rp-subtitle">The experience begins with the horizon and gradually becomes more social — without turning into a nightclub.</p><ul className="rp-feature-list"><li>Open-air sunset deck</li><li>Indoor glass lounge</li><li>Cocktail bar</li><li>Fine and private dining</li><li>Discreet DJ setup</li><li>Panoramic Phuket atmosphere</li></ul></div><div className="rp-image rp-image--portrait"><Image src="/images/home/rhythm-prime_rooftop.png.png" alt="Open-air rooftop seating and cocktail bar at Rhythm Prime" fill sizes="(max-width:720px) 100vw,50vw" /></div></div></section>
      <SiteFooter /></main>
  );
}
