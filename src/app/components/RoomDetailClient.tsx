"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

type GalleryItem = { label: string; src: string; alt: string };

type Props = {
  eyebrow: string;
  name: string;
  size: string;
  description: string;
  hero: string;
  heroAlt: string;
  gallery: GalleryItem[];
  features: string[];
  bookingParam: string;
  notes?: string[];
};

export default function RoomDetailClient(props: Props) {
  const [active, setActive] = useState(0);
  const current = props.gallery[active];
  return (
    <main className="rp-shell">
      <SiteHeader />
      <section className="rp-hero" style={{minHeight:"72vh"}}>
        <div className="rp-hero__media"><Image src={props.hero} alt={props.heroAlt} fill priority sizes="100vw" /></div>
        <div className="rp-hero__overlay" />
        <div className="rp-container rp-hero__content">
          <p className="rp-eyebrow">{props.eyebrow}</p>
          <h1 className="rp-title">{props.name}</h1>
          <p className="rp-subtitle">{props.description}</p>
          <div className="rp-stat-row"><div className="rp-stat"><strong>{props.size}</strong><span>Room Size</span></div></div>
          <div className="rp-actions"><Link href={`/book?room=${props.bookingParam}`} className="rp-button rp-button--gold">Book This Room</Link><Link href="/#rooms" className="rp-button rp-button--light">Back to Rooms</Link></div>
        </div>
      </section>

      <section className="rp-section">
        <div className="rp-container rp-grid-2">
          <div>
            <p className="rp-eyebrow">ROOM DETAILS</p>
            <h2 className="rp-title" style={{fontSize:"clamp(2.3rem,4vw,4.3rem)"}}>Designed around the way you stay.</h2>
            <p className="rp-subtitle">Every zone is planned to feel calm, generous and intuitive, with materials and views that support the pace of the stay.</p>
            <ul className="rp-feature-list">{props.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
            {props.notes?.map((note) => <p className="rp-note" key={note}>{note}</p>)}
          </div>
          <div className="rp-room-gallery">
            <div className="rp-room-gallery__main"><Image src={current.src} alt={current.alt} fill sizes="(max-width: 720px) 100vw, 50vw" /></div>
            <div className="rp-room-gallery__tabs" role="tablist" aria-label={`${props.name} gallery`}>
              {props.gallery.map((item, index) => (
                <button key={item.label} type="button" aria-pressed={active === index} onClick={() => setActive(index)}>{item.label}</button>
              ))}
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
