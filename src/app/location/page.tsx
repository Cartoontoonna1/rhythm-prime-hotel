import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Location | Rhythm Prime Phuket",
  description: "Explore the conceptual Phuket location story for the fictional Rhythm Prime hospitality portfolio project.",
};

const points = [
  ["Phuket International Airport", "Gateway for domestic and international arrivals"],
  ["Andaman Coast", "The seaside setting that shapes the Rhythm Prime experience"],
  ["Phuket Old Town", "Culture, architecture, cafés and local character"],
  ["Island Experiences", "Beaches, viewpoints, dining and day-trip connections"],
];

export default function LocationPage() {
  return (
    <main className="rp-shell"><SiteHeader />
      <section className="rp-hero"><div className="rp-hero__media"><Image src="/images/home/phuket-coastline-aerial.png.png" alt="Aerial view of Phuket coastline" fill priority sizes="100vw" /></div><div className="rp-hero__overlay" /><div className="rp-container rp-hero__content"><p className="rp-eyebrow">PHUKET · CONCEPTUAL LOCATION EXPERIENCE</p><h1 className="rp-title">Close To The Island. Away From The Noise.</h1><p className="rp-subtitle">Rhythm Prime is imagined as a seaside Phuket destination connected to the airport, the beach, Old Town and the wider rhythm of the island.</p></div></section>
      <section className="rp-section"><div className="rp-container rp-grid-2"><div><p className="rp-eyebrow">DESTINATION LOGIC</p><h2 className="rp-title" style={{fontSize:"clamp(2.4rem,4vw,4.3rem)"}}>A location designed around the guest journey.</h2><p className="rp-subtitle">This portfolio concept intentionally avoids claiming a real address or fabricated travel times. Instead, the location strategy demonstrates how a Phuket lifestyle hotel can communicate access, atmosphere and nearby experiences.</p><div className="rp-floor-strip">{points.map(([name,detail])=><div className="rp-floor-chip" key={name}><strong>{name}</strong><span>{detail}</span></div>)}</div></div><div className="rp-image rp-image--portrait"><Image src="/images/home/rhythm-prime-location-map.png.png" alt="Conceptual Rhythm Prime map showing airport, beach, Old Town and island landmarks" fill sizes="(max-width:720px) 100vw,50vw" /></div></div></section>
      <section className="rp-section rp-section--dark"><div className="rp-container rp-grid-2"><div className="rp-image rp-image--landscape"><Image src="/images/home/phuket-sunset-ocean.png.png" alt="Phuket ocean at sunset" fill sizes="(max-width:720px) 100vw,50vw" /></div><div><p className="rp-eyebrow">THE EMOTIONAL DESTINATION</p><h2 className="rp-title" style={{fontSize:"clamp(2.4rem,4vw,4.2rem)"}}>The map explains access. The horizon explains why guests come.</h2><p className="rp-subtitle">The location story balances practical orientation with the emotional promise of Phuket — sea light, slower evenings and a sense of escape.</p></div></div></section>
      <SiteFooter /></main>
  );
}
