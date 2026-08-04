"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

type FloorDetail = {
  key: string;
  label: string;
  heading: string;
  description: string;
  features: string[];
  image: string;
  alt: string;
  href?: string;
  cta?: string;
};

const floorDetails: FloorDetail[] = [
  {key:"10F",label:"Rooftop Bar & Dining",heading:"Rooftop Bar & Dining",description:"The highest rhythm of the hotel — sunset cocktails, dining, music and open-air nights above Phuket.",features:["Cocktail Bar","Sunset Deck","Fine & Private Dining","Indoor Glass Lounge","Open-Air Seating","Discreet DJ Area"],image:"/images/home/rhythm-prime_rooftop.png.png",alt:"Rhythm Prime rooftop at sunset",href:"/rooftop",cta:"Explore Rooftop"},
  {key:"09F",label:"Curved Infinity Pool",heading:"Pool & Day Pass",description:"A flowing infinity-pool experience shaped around the Andaman horizon.",features:["Curved Infinity Pool","Pool Bar","Day Pass","Sunken Lounge","Cabanas","Sunset Viewing"],image:"/images/home/rhythm-prime_curved-infinity-pool.png.png",alt:"Curved infinity pool overlooking Phuket",href:"/pool",cta:"Explore Pool & Day Pass"},
  {key:"08F",label:"Wellness & Spa",heading:"Wellness & Spa",description:"A restorative floor designed for movement, recovery and quiet.",features:["Spa Reception","Treatment Rooms","Three Sauna Rooms","Steam Room","Fitness","Yoga / Stretch","Relaxation Lounge"],image:"/images/home/rhythm-prime_spa-wellness.png.png",alt:"Rhythm Prime wellness and spa",href:"/wellness",cta:"Explore Wellness"},
  {key:"07F",label:"Rhythm Signature Suites",heading:"Rhythm Signature Suites",description:"The most spacious accommodation experience at Rhythm Prime.",features:["95 sqm","Master Bedroom","Living Area","Dining Area","Oversized Bathtub","Panoramic Ocean View","Private Balcony"],image:"/images/home/rhythm-prime_signature-suite.png.png",alt:"Rhythm Signature Suite",href:"/rooms/signature",cta:"View Signature Suite"},
  {key:"06F",label:"Premier Ocean View Rooms",heading:"Premier Ocean View Rooms",description:"Elevated rooms designed around panoramic views and slower mornings.",features:["55 sqm","Private Balcony","Ocean View","Indoor Freestanding Bathtub","Separate Rain Shower"],image:"/images/home/rhythm-prime_premier-ocean-view.png.png",alt:"Premier Ocean View room",href:"/rooms/premier",cta:"View Premier"},
  {key:"05F",label:"Premier Ocean View Rooms",heading:"Premier Ocean View Rooms",description:"Elevated rooms designed around panoramic views and slower mornings.",features:["55 sqm","Private Balcony","Ocean View","Indoor Freestanding Bathtub","Separate Rain Shower"],image:"/images/home/rhythm-prime_premier-ocean-view.png.png",alt:"Premier Ocean View room",href:"/rooms/premier",cta:"View Premier"},
  {key:"04F",label:"Deluxe Rooms",heading:"Deluxe Rooms",description:"Spacious rooms designed for comfort, calm and relaxed island stays.",features:["48 sqm","Private Balcony","Rain Shower","No Bathtub"],image:"/images/home/rhythm-prime_deluxe-room.png.png",alt:"Deluxe room",href:"/rooms/deluxe",cta:"View Deluxe"},
  {key:"03F",label:"Deluxe Rooms",heading:"Deluxe Rooms",description:"Spacious rooms designed for comfort, calm and relaxed island stays.",features:["48 sqm","Private Balcony","Rain Shower","No Bathtub"],image:"/images/home/rhythm-prime_deluxe-room.png.png",alt:"Deluxe room",href:"/rooms/deluxe",cta:"View Deluxe"},
  {key:"02F",label:"Ocean Restaurant & Meetings",heading:"Ocean Restaurant & Meetings",description:"The social and business heart of Rhythm Prime with sea views and flexible gathering spaces.",features:["Ocean Restaurant","Breakfast","Private Dining","Grand Event Room","Private Meeting Room"],image:"/images/home/rhythm-prime_ocean-restaurant.png.png",alt:"Ocean Restaurant at Rhythm Prime",href:"/dining",cta:"Explore Dining"},
  {key:"01F",label:"Grand Lobby, Concierge & Café",heading:"Grand Lobby, Concierge & Café",description:"The arrival experience and architectural heart of Rhythm Prime.",features:["Grand Lobby","Reception","Concierge","Café","Reflection Pool","Rhythm Staircase","Grand Piano"],image:"/images/home/rhythm-prime_grand-lobby-staircase.png.png",alt:"Rhythm Prime grand lobby staircase",href:"/about",cta:"Discover the Story"},
];

function normalizeFloor(value: string) {
  const n = value.trim().toUpperCase().replace("F", "");
  if (n === "10") return "10F";
  const parsed = Number(n);
  if (Number.isFinite(parsed) && parsed >= 1 && parsed <= 9) return `${String(parsed).padStart(2,"0")}F`;
  return "10F";
}
function toQueryFloor(value: string) { return String(Number(value.replace("F",""))); }

export default function HotelPageClient() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedFloor = useMemo(() => normalizeFloor(searchParams.get("floor") ?? "10"), [searchParams]);
  const active = useMemo(() => floorDetails.find((item) => item.key === selectedFloor) ?? floorDetails[0], [selectedFloor]);
  const chooseFloor = (key: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("floor", toQueryFloor(key));
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <main className="rp-shell">
      <SiteHeader />
      <section className="rp-section rp-section--warm">
        <div className="rp-container rp-grid-2">
          <div><p className="rp-eyebrow">EXPLORE RHYTHM PRIME</p><h1 className="rp-title">Ten Floors. One Complete Experience.</h1><p className="rp-subtitle">Select a floor to see how the guest journey moves from arrival and rooms to dining, wellness, pool and rooftop.</p></div>
          <div className="rp-image rp-image--landscape"><Image src="/images/home/rhythm_hotel_overview.png" alt="Conceptual overview of Rhythm Prime floors" fill priority sizes="(max-width:720px) 100vw,50vw" /></div>
        </div>
      </section>

      <section className="rp-section">
        <div className="rp-container rp-grid-2" style={{alignItems:"start"}}>
          <div>
            <p className="rp-eyebrow">SELECT A FLOOR</p>
            <div className="rp-floor-strip" style={{gridTemplateColumns:"repeat(2,minmax(0,1fr))"}}>
              {floorDetails.map((floor) => <button key={floor.key} type="button" className="rp-floor-chip" style={{textAlign:"left",cursor:"pointer",borderColor: active.key === floor.key ? "var(--rp-gold)" : undefined}} onClick={() => chooseFloor(floor.key)} aria-pressed={active.key === floor.key}><strong>{floor.key}</strong><span>{floor.label}</span></button>)}
            </div>
          </div>
          <div>
            <div className="rp-image rp-image--landscape" style={{marginBottom:"26px"}}><Image src={active.image} alt={active.alt} fill sizes="(max-width:720px) 100vw,50vw" /></div>
            <p className="rp-eyebrow">{active.key} · FLOOR DETAIL</p><h2 className="rp-title" style={{fontSize:"clamp(2.3rem,4vw,4rem)"}}>{active.heading}</h2><p className="rp-subtitle">{active.description}</p><ul className="rp-feature-list">{active.features.map((feature)=><li key={feature}>{feature}</li>)}</ul>{active.href && active.cta ? <div className="rp-actions"><Link href={active.href} className="rp-button rp-button--gold">{active.cta}</Link></div> : null}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
