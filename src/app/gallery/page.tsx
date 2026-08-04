import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Gallery | Rhythm Prime Phuket",
  description: "Browse the visual world of the fictional Rhythm Prime Phuket hospitality concept.",
};

const images = [
  ["/images/home/rhythm_grand_lobby_at_night.png", "Grand Lobby at night"],
  ["/images/home/rhythm-cooridoor.png.png", "Rhythm Walk corridor"],
  ["/images/home/rhythm-prime_premier-ocean-view.png.png", "Premier Ocean View room"],
  ["/images/home/restaurant-signature-dishes.png.png", "Signature dishes and drinks"],
  ["/images/home/rhythm-prime_curved-infinity-pool.png.png", "Curved infinity pool"],
  ["/images/home/phuket-coastline-aerial.png.png", "Phuket coastline from above"],
];

export default function GalleryPage() {
  return <main className="rp-shell"><SiteHeader /><section className="rp-section rp-section--warm"><div className="rp-container"><p className="rp-eyebrow">VISUAL STORY</p><h1 className="rp-title">Gallery</h1><p className="rp-subtitle">A curated view of the spaces, food, light and destination moments that define the Rhythm Prime concept.</p></div></section><section className="rp-section"><div className="rp-container rp-gallery">{images.map(([src,alt]) => <figure key={src}><Image src={src} alt={alt} fill sizes="(max-width:720px) 100vw, 50vw" /></figure>)}</div></section><SiteFooter /></main>;
}
