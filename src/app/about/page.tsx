import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "About Rhythm Prime | Phuket Hospitality Concept",
  description: "Learn the strategy, design language and guest experience behind the fictional Rhythm Prime Phuket hospitality concept.",
};

export default function AboutPage() {
  return (
    <main className="rp-shell"><SiteHeader />
      <section className="rp-section rp-section--warm"><div className="rp-container"><p className="rp-eyebrow">ABOUT RHYTHM PRIME</p><h1 className="rp-title">A hotel concept built around the rhythm of the stay.</h1><p className="rp-subtitle">Rhythm Prime is a fictional Phuket hospitality concept created to demonstrate how brand strategy, content, UX and MarTech thinking can become one coherent digital experience.</p></div></section>
      <section className="rp-section"><div className="rp-container rp-grid-2"><div><p className="rp-eyebrow">BRAND IDEA</p><h2 className="rp-title" style={{fontSize:"clamp(2.3rem,4vw,4rem)"}}>Rhythm of Life.</h2><p className="rp-subtitle">The concept starts with a simple promise: true rest does not mean doing nothing. It means letting the guest move naturally between breakfast, beach, wellness, pool, sunset and night without friction.</p><ul className="rp-feature-list"><li>Natural luxury rather than formality</li><li>Contemporary Thai warmth with subtle French influence</li><li>Ocean views as an emotional anchor</li><li>Dining, pool and rooftop designed as standalone lifestyle products</li><li>Architecture and content shaped around flow</li></ul></div><div className="rp-image rp-image--portrait"><Image src="/images/home/rhythm_hotel_overview.png" alt="Conceptual visual overview of Rhythm Prime Phuket" fill sizes="(max-width:720px) 100vw,50vw" /></div></div></section>
      <section className="rp-section rp-section--dark"><div className="rp-container rp-grid-2"><div className="rp-image rp-image--landscape"><Image src="/images/home/rhythm-cooridoor.png.png" alt="Rhythm Walk corridor expressing the hotel's flowing design language" fill sizes="(max-width:720px) 100vw,50vw" /></div><div><p className="rp-eyebrow">DIGITAL EXPERIENCE</p><h2 className="rp-title" style={{fontSize:"clamp(2.3rem,4vw,4rem)"}}>Designed as a marketing journey, not just a brochure.</h2><p className="rp-subtitle">The website moves from inspiration to consideration to conversion: brand story → room comparison → lifestyle experiences → location → booking or enquiry. The structure is intentionally ready for future GTM and GA4 event tracking.</p></div></div></section>
      <SiteFooter /></main>
  );
}
