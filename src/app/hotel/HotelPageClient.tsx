"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import "./hotel.css";

type FloorDetail = {
  key: string;
  label: string;
  heading: string;
  description: string;
  features: string[];
  cta?: string;
  ctaId?: string;
  dataEvent?: string;
  href?: string;
};

const floorDetails: FloorDetail[] = [
  {
    key: "10F",
    label: "10F — Rooftop Bar & Dining",
    heading: "Rooftop Bar & Dining",
    description:
      "The highest rhythm of the hotel — sunset cocktails, fine dining, music and open-air nights above Phuket.",
    features: ["Cocktail Bar", "Sunset Deck", "Fine Dining", "Private Dining", "DJ Area", "Indoor Air-Conditioned Lounge", "Open-Air Dining"],
    cta: "EXPLORE ROOFTOP",
    ctaId: "hotel-floor-rooftop",
    dataEvent: "hotel_floor_select",
    href: "/#rooftop",
  },
  {
    key: "09F",
    label: "09F — Curved Infinity Pool",
    heading: "Pool & Day Pass",
    description: "A flowing infinity pool experience overlooking the Andaman Sea.",
    features: ["Curved Infinity Pool", "Pool Bar", "Day Pass Zone", "In-Pool Lounge", "Cabanas", "Sunset Viewing"],
    cta: "EXPLORE POOL & DAY PASS",
    ctaId: "hotel-floor-pool",
    dataEvent: "hotel_floor_select",
    href: "/#pool",
  },
  {
    key: "08F",
    label: "08F — Wellness & Spa",
    heading: "Wellness & Spa",
    description: "A restorative floor designed for movement, recovery and quiet.",
    features: ["Spa Reception", "Treatment Rooms", "Premium Gym", "3 Sauna Rooms", "Steam Area", "Yoga / Stretching", "Relaxation Lounge"],
    cta: "EXPLORE WELLNESS",
    ctaId: "hotel-floor-wellness",
    dataEvent: "hotel_floor_select",
    href: "/#wellness",
  },
  {
    key: "07F",
    label: "07F — Rhythm Signature Suites",
    heading: "Rhythm Signature Suites",
    description: "The most spacious and elevated residential experience at Rhythm Prime.",
    features: ["Approx. 95 sqm suites", "Separate Bedroom", "Living Area", "Dining Area", "Panoramic Ocean View", "Oversized Bathtub", "Private Balcony"],
    cta: "VIEW SIGNATURE SUITE",
    ctaId: "hotel-floor-signature",
    dataEvent: "hotel_floor_select",
    href: "/book?room=signature",
  },
  {
    key: "06F",
    label: "06F — Premier Ocean View Rooms",
    heading: "Premier Ocean View Rooms",
    description: "Elevated rooms designed around panoramic views and slower mornings.",
    features: ["Approx. 55 sqm", "Private Balcony", "Ocean View", "Freestanding Bathtub", "Separate Rain Shower"],
    cta: "VIEW PREMIER ROOMS",
    ctaId: "hotel-floor-premier",
    dataEvent: "hotel_floor_select",
    href: "/book?room=premier",
  },
  {
    key: "05F",
    label: "05F — Premier Ocean View Rooms",
    heading: "Premier Ocean View Rooms",
    description: "Elevated rooms designed around panoramic views and slower mornings.",
    features: ["Approx. 55 sqm", "Private Balcony", "Ocean View", "Freestanding Bathtub", "Separate Rain Shower"],
    cta: "VIEW PREMIER ROOMS",
    ctaId: "hotel-floor-premier-2",
    dataEvent: "hotel_floor_select",
    href: "/book?room=premier",
  },
  {
    key: "04F",
    label: "04F — Deluxe Rooms",
    heading: "Deluxe Rooms",
    description: "Spacious rooms designed for comfort, calm and relaxed island stays.",
    features: ["Approx. 48 sqm", "Private Balcony", "Rain Shower", "No Bathtub"],
    cta: "VIEW DELUXE ROOMS",
    ctaId: "hotel-floor-deluxe",
    dataEvent: "hotel_floor_select",
    href: "/book?room=deluxe",
  },
  {
    key: "03F",
    label: "03F — Deluxe Rooms",
    heading: "Deluxe Rooms",
    description: "Spacious rooms designed for comfort, calm and relaxed island stays.",
    features: ["Approx. 48 sqm", "Private Balcony", "Rain Shower", "No Bathtub"],
    cta: "VIEW DELUXE ROOMS",
    ctaId: "hotel-floor-deluxe-2",
    dataEvent: "hotel_floor_select",
    href: "/book?room=deluxe",
  },
  {
    key: "02F",
    label: "02F — Ocean Restaurant & Meetings",
    heading: "Ocean Restaurant & Meetings",
    description: "The social and business heart of Rhythm Prime with sea views and flexible gathering spaces.",
    features: ["Ocean Restaurant", "Private Dining", "Large Meeting Room", "Small Meeting Room", "Corporate Events", "Company Outings"],
    cta: "EXPLORE DINING & EVENTS",
    ctaId: "hotel-floor-dining",
    dataEvent: "hotel_floor_select",
    href: "/#dining",
  },
  {
    key: "01F",
    label: "01F — Grand Lobby, Concierge & Café",
    heading: "Grand Lobby, Concierge & Café",
    description: "The arrival experience and architectural heart of Rhythm Prime.",
    features: ["Grand Lobby", "Reception", "Concierge", "Café", "Reflection Pool", "Rhythm Staircase", "Grand Piano"],
    cta: "DISCOVER THE LOBBY",
    ctaId: "hotel-floor-lobby",
    dataEvent: "hotel_floor_select",
    href: "/#story",
  },
  {
    key: "G",
    label: "G — Parking & Back-of-House",
    heading: "Parking & Back-of-House",
    description: "Operational and guest arrival support spaces.",
    features: ["Guest Parking", "Service Access", "Back-of-House Operations"],
  },
];

function normalizeFloor(value: string) {
  const trimmed = value.trim().toUpperCase();
  if (trimmed === "10") return "10F";
  if (trimmed === "9") return "09F";
  if (trimmed === "8") return "08F";
  if (trimmed === "7") return "07F";
  if (trimmed === "6") return "06F";
  if (trimmed === "5") return "05F";
  if (trimmed === "4") return "04F";
  if (trimmed === "3") return "03F";
  if (trimmed === "2") return "02F";
  if (trimmed === "1") return "01F";
  return trimmed;
}

function toQueryFloor(value: string) {
  if (value === "10F") return "10";
  if (value === "09F") return "9";
  if (value === "08F") return "8";
  if (value === "07F") return "7";
  if (value === "06F") return "6";
  if (value === "05F") return "5";
  if (value === "04F") return "4";
  if (value === "03F") return "3";
  if (value === "02F") return "2";
  if (value === "01F") return "1";
  return value;
}

export default function HotelPageClient() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const floorParam = searchParams.get("floor");

  const selectedFloor = useMemo(() => {
    const normalized = normalizeFloor(floorParam ?? "10");
    return floorDetails.find((floor) => floor.key === normalized)?.key ?? "10F";
  }, [floorParam]);

  const activeFloor = useMemo(
    () => floorDetails.find((floor) => floor.key === selectedFloor) ?? floorDetails[0],
    [selectedFloor]
  );

  const handleFloorSelect = (floorKey: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("floor", toQueryFloor(floorKey));
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <main className="hotel-page" data-event="hotel_floor_select">
      <header className="internal-header">
        <div className="container internal-header__inner">
          <Link href="/" className="brand brand--dark">
            RHYTHM PRIME
          </Link>

          <nav className="internal-nav" aria-label="Hotel overview navigation">
            <Link href="/">Home</Link>
            <Link href="/hotel">Hotel</Link>
            <Link href="/#rooms">Rooms</Link>
            <Link href="/#dining">Dining</Link>
            <Link href="/#pool">Pool</Link>
            <Link href="/#rooftop">Rooftop</Link>
            <Link href="/#wellness">Wellness</Link>
            <Link href="/#meetings">Meetings & Events</Link>
          </nav>

          <Link href="/book" className="book-button book-button--current">
            BOOK NOW
          </Link>
        </div>
      </header>

      <div className="container breadcrumb" aria-label="Breadcrumb">
        <Link href="/">HOME</Link>
        <span>/</span>
        <span>EXPLORE HOTEL</span>
      </div>

      <section className="hotel-hero">
        <div className="container hotel-hero__content">
          <div className="hotel-hero__copy">
            <p className="eyebrow">EXPLORE RHYTHM PRIME</p>
            <h1>Ten Floors. One Complete Experience.</h1>
            <p>
              From arrival to sunset, every floor at Rhythm Prime is designed around a different rhythm of the stay.
            </p>
            <a href="#rooms" className="btn btn-primary">
              EXPLORE BY FLOOR
            </a>
          </div>

          <div className="image-frame hotel-hero__visual">
            <Image
              src="/images/home/rhythm_hotel_overview.png"
              alt="Editorial overview of Rhythm Prime and its floors"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      <section id="rooms" className="explorer-section">
        <div className="container explorer-shell">
          <div className="explorer-list" role="list">
            {floorDetails.map((floor) => {
              const isActive = floor.key === activeFloor.key;
              return (
                <button
                  key={floor.key}
                  type="button"
                  className={`explorer-row ${isActive ? "explorer-row--active" : ""}`}
                  onClick={() => handleFloorSelect(floor.key)}
                  data-event="hotel_floor_select"
                  data-floor={floor.key}
                  data-floor-name={floor.heading}
                >
                  <span className="explorer-row__floor">{floor.key}</span>
                  <span className="explorer-row__name">{floor.label}</span>
                </button>
              );
            })}
          </div>

          <div className="explorer-detail" aria-live="polite">
            <p className="eyebrow">FLOOR DETAIL</p>
            <h2>{activeFloor.heading}</h2>
            <p>{activeFloor.description}</p>
            <ul className="feature-list feature-list--stacked">
              {activeFloor.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            {activeFloor.cta && activeFloor.href ? (
              <Link href={activeFloor.href} className="btn btn-outline" id={activeFloor.ctaId} data-event={activeFloor.dataEvent}>
                {activeFloor.cta}
              </Link>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}
