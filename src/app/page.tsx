"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Reveal from "./components/Reveal";

const rooms = [
  {
    name: "Deluxe Room",
    size: "Approx. 48 sqm",
    highlights: ["Private Balcony", "Rain Shower", "No Bathtub"],
    description:
      "A spacious contemporary retreat with warm natural materials, generous proportions and a private balcony.",
    imageSrc: "/images/home/rhythm-prime_deluxe-room.png.png",
    alt: "Deluxe room at Rhythm Prime with warm interior finishes",
    href: "/book?room=deluxe",
    cta: "VIEW DELUXE",
    id: "room-deluxe",
    dataRoomType: "deluxe-room",
    event: "view_room",
  },
  {
    name: "Premier Ocean View",
    size: "Approx. 55 sqm",
    highlights: ["Private Balcony", "Panoramic Ocean View", "Freestanding Bathtub"],
    description:
      "Wake to uninterrupted Phuket ocean views in a serene room created for slower mornings and sunset evenings.",
    imageSrc: "/images/home/rhythm-prime_premier-ocean-view.png.png",
    alt: "Premier ocean view room with a panoramic Phuket coastline view",
    href: "/book?room=premier",
    cta: "VIEW PREMIER",
    id: "room-premier",
    dataRoomType: "premier-ocean-view",
    event: "view_room",
  },
  {
    name: "Rhythm Signature Suite",
    size: "Approx. 95 sqm",
    highlights: ["Separate Living Area", "Dining Area", "Panoramic Ocean View"],
    description:
      "The signature Rhythm Prime experience with expansive living spaces and panoramic views across the horizon.",
    imageSrc: "/images/home/rhythm-prime_signature-suite.png.png",
    alt: "Signature suite with a generous living area and ocean view",
    href: "/book?room=signature",
    cta: "VIEW SIGNATURE SUITE",
    id: "room-signature",
    dataRoomType: "signature-suite",
    event: "view_room",
  },
];

const galleryItems = [
  {
    src: "/images/home/rhythm-prime_exterior-hero.png",
    alt: "Rhythm Prime exterior at sunset",
    className: "gallery-card gallery-card--wide",
  },
  {
    src: "/images/home/rhythm-prime_grand-lobby-staircase.png.png",
    alt: "Grand lobby staircase at Rhythm Prime",
    className: "gallery-card",
  },
  {
    src: "/images/home/rhythm-prime_deluxe-room.png.png",
    alt: "Elegant deluxe room interior",
    className: "gallery-card",
  },
  {
    src: "/images/home/rhythm-prime_ocean-restaurant.png.png",
    alt: "Ocean restaurant dining space",
    className: "gallery-card gallery-card--tall",
  },
  {
    src: "/images/home/rhythm-prime_curved-infinity-pool.png.png",
    alt: "Curved infinity pool at Rhythm Prime",
    className: "gallery-card",
  },
  {
    src: "/images/home/rhythm-prime_rooftop.png.png",
    alt: "Rooftop dining and lounge at dusk",
    className: "gallery-card",
  },
  {
    src: "/images/home/rhythm-prime_spa-wellness.png.png",
    alt: "Spa and wellness spaces",
    className: "gallery-card",
  },
  {
    src: "/images/home/rhythm-cooridoor.png.png",
    alt: "Rhythm corridor architecture detail",
    className: "gallery-card",
  },
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="site-main">
      <section className="hero">
        <Image
          src="/images/home/rhythm-prime_exterior-hero.png"
          alt="Rhythm Prime luxury lifestyle hotel in Phuket"
          fill
          priority
          className="hero-image"
        />

        <div className="hero-overlay" />

        <header className={`navbar ${isScrolled ? "navbar--solid" : ""}`}>
          <Link href="/" className="brand">
            RHYTHM PRIME
          </Link>

          <nav className="nav-links" aria-label="Primary navigation">
            <Link href="/">Home</Link>
            <Link href="/hotel">Hotel</Link>
            <Link href="/#rooms">Rooms</Link>
            <Link href="/#dining">Dining</Link>
            <Link href="/#pool">Pool</Link>
            <Link href="/#rooftop">Rooftop</Link>
            <Link href="/#wellness">Wellness</Link>
            <Link href="/#meetings">Meetings & Events</Link>
          </nav>

          <Link href="/book" className="book-button" data-event="book_now_click">
            Book Now
          </Link>
        </header>

        <div className="hero-content">
          <p className="eyebrow">LUXURY LIFESTYLE HOTEL · PHUKET</p>

          <h1>
            Find Your Rhythm.
            <br />
            Stay Awhile.
          </h1>

          <p className="hero-description">
            A sanctuary shaped by the rhythm of the sea,
            <br />
            where every stay moves at your pace.
          </p>

          <Reveal direction="up" delay={140}>
            <Link href="/#story" className="hero-cta">
              Discover Rhythm Prime
            </Link>
          </Reveal>
        </div>

        <div className="scroll-indicator" aria-hidden="true">
          <span>SCROLL TO DISCOVER</span>
          <span>↓</span>
        </div>
      </section>

      <section id="story" className="section-block section-light" data-event="story_section">
        <div className="container story-grid">
          <div className="story-content">
            <p className="eyebrow">THE RHYTHM STORY</p>
            <h2>Every Stay Has Its Own Rhythm.</h2>
            <p>
              At Rhythm Prime, every moment is designed to move at your pace.
              Wake to the light of Phuket, spend slow afternoons by the sea, watch the horizon turn gold, and let the evening find its own rhythm.
            </p>
            <p>
              This is more than a place to stay. It is a place to remember.
            </p>
            <Link href="/#design" id="story-discover" className="btn btn-outline" data-event="story_discover">
              DISCOVER OUR STORY
            </Link>
          </div>

          <div className="image-frame story-visual">
            <Image
              src="/images/home/rhythm-prime_grand-lobby-staircase.png.png"
              alt="Grand lobby staircase with warm lighting and sculptural architecture"
              width={1200}
              height={1500}
            />
          </div>
        </div>
      </section>

      <section id="rooms" className="section-block section-ivory" data-event="rooms_section">
        <div className="container">
          <div className="section-heading section-heading--center">
            <p className="eyebrow">STAY</p>
            <h2>Your Space to Slow Down.</h2>
            <p>
              Three distinct ways to experience Rhythm Prime, each designed around space, comfort and the rhythm of your stay.
            </p>
          </div>

          <div className="room-grid">
            {rooms.map((room) => (
              <Reveal as="article" key={room.name} direction="up" delay={room.name === "Deluxe Room" ? 60 : room.name === "Premier Ocean View" ? 180 : 300} className="room-card">
                <div className="image-frame room-image">
                  <Image src={room.imageSrc} alt={room.alt} width={800} height={1000} />
                </div>
                <div className="room-body">
                  <div className="room-head">
                    <h3>{room.name}</h3>
                    <p>{room.size}</p>
                  </div>
                  <ul className="room-highlights" aria-label={`${room.name} highlights`}>
                    {room.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <p>{room.description}</p>
                  <Link
                    href={room.href}
                    id={room.id}
                    className="text-link"
                    data-event={room.event}
                    data-room-type={room.dataRoomType}
                  >
                    {room.cta}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="room-collection-teaser">
            <div className="image-frame room-collection-visual">
              <Image
                src="/images/home/rhythm_rooms_types.png"
                alt="Collection of rooms and suites at Rhythm Prime"
                width={1200}
                height={900}
              />
            </div>
            <div className="room-collection-content">
              <p className="eyebrow">ROOM COLLECTION</p>
              <h3>Three Ways to Stay.</h3>
              <Link href="/hotel#rooms" className="btn btn-outline" data-event="room_collection_click">
                VIEW ROOM COLLECTION
              </Link>
            </div>
          </div>

          <div className="section-actions">
            <Link href="/hotel#rooms" id="rooms-explore" className="btn btn-outline" data-event="room_list_explore">
              EXPLORE ALL ROOMS
            </Link>
          </div>
        </div>
      </section>

      <section id="experiences" className="section-block section-dark" data-event="experience_section">
        <div className="container experience-grid">
          <Reveal direction="left" delay={120}>
            <div className="experience-visual image-frame">
              <Image
                src="/images/home/rhythm-cooridoor.png.png"
                alt="Cinematic corridor and rhythm walk at Rhythm Prime"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </Reveal>

          <div className="experience-content">
            <p className="eyebrow">EXPERIENCE</p>
            <h2>Find Your Rhythm.</h2>
            <div className="moment-list" role="list">
              <div className="moment-item" role="listitem">
                <span className="moment-number">01</span>
                <div>
                  <h3>Morning</h3>
                  <p>Slow breakfast, soft light and quiet beginnings.</p>
                </div>
              </div>
              <div className="moment-item" role="listitem">
                <span className="moment-number">02</span>
                <div>
                  <h3>Day</h3>
                  <p>Explore Phuket or return to the hotel for wellness and slow afternoons.</p>
                </div>
              </div>
              <div className="moment-item" role="listitem">
                <span className="moment-number">03</span>
                <div>
                  <h3>Sunset</h3>
                  <p>Watch the horizon turn gold from the ninth-floor infinity pool.</p>
                </div>
              </div>
              <div className="moment-item" role="listitem">
                <span className="moment-number">04</span>
                <div>
                  <h3>Night</h3>
                  <p>Cocktails, dinner, music and warm light above the Phuket coastline.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="dining" className="section-block section-light" data-event="dining_section">
        <div className="container dining-grid">
          <div className="dining-content">
            <p className="eyebrow">CULINARY JOURNEY</p>
            <h2>Dine With The Horizon.</h2>
            <p>
              From slow breakfasts to sunset dinners, dining at Rhythm Prime is designed around the view, the atmosphere and the people you share it with.
            </p>
            <div className="feature-badge">OCEAN RESTAURANT · LEVEL 2</div>
            <div className="section-actions section-actions--inline">
              <Link href="/#dining" id="dining-explore" className="btn btn-primary" data-event="reserve_dining_click">
                EXPLORE DINING
              </Link>
              <Link href="/#dining" id="dining-reserve" className="btn btn-outline" data-event="reserve_dining_click">
                RESERVE A TABLE
              </Link>
            </div>
          </div>

          <Reveal direction="right" delay={140}>
            <div className="image-frame dining-visual">
              <Image
                src="/images/home/rhythm-prime_ocean-restaurant.png.png"
                alt="Ocean restaurant with a sweeping view over the Phuket horizon"
                width={1200}
                height={1500}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="pool" className="section-block section-warm" data-event="pool_section">
        <div className="container pool-layout">
          <div className="pool-visual">
            <Reveal direction="scale" delay={120}>
              <div className="image-frame pool-main-image">
                <Image
                  src="/images/home/rhythm-prime_curved-infinity-pool.png.png"
                  alt="Curved infinity pool overlooking the Phuket horizon"
                  width={1400}
                  height={1600}
                />
              </div>
            </Reveal>
            <Reveal direction="up" delay={240}>
              <div className="image-frame pool-support-image">
              <Image
                src="/images/home/rhythm_sofa_swimmimg_pool_lounge.png"
                alt="In-pool lounge seating beside the infinity pool"
                width={700}
                height={900}
              />
              </div>
            </Reveal>
          </div>

          <div className="pool-content">
            <p className="eyebrow">LEVEL 9</p>
            <h2>Where Water Meets The Sky.</h2>
            <p>
              A flowing ninth-floor infinity pool shaped around the Phuket horizon, created for slow afternoons, sunset conversations and moments that deserve more time.
            </p>
            <ul className="feature-list">
              <li>CURVED INFINITY POOL</li>
              <li>IN-POOL LOUNGE</li>
              <li>POOL BAR</li>
              <li>CABANAS</li>
              <li>DAY PASS</li>
            </ul>
            <div className="section-actions section-actions--inline">
              <Link href="/hotel?floor=9" id="pool-explore" className="btn btn-primary" data-event="buy_day_pass_click">
                EXPLORE THE POOL
              </Link>
              <Link href="/hotel?floor=9" id="pool-day-pass" className="btn btn-outline" data-event="buy_day_pass_click">
                BUY DAY PASS
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="rooftop" className="section-block rooftop-section" data-event="rooftop_section">
        <div className="container rooftop-grid">
          <div className="rooftop-content">
            <p className="eyebrow">LEVEL 10 · ROOFTOP</p>
            <h2>Your Night Has A New Rhythm.</h2>
            <p>
              As the sun disappears over Phuket, Rhythm Prime moves into another tempo — cocktails, dinner, music and conversations above the coastline.
            </p>
            <ul className="feature-list feature-list--light">
              <li>COCKTAILS</li>
              <li>FINE DINING</li>
              <li>SUNSET</li>
              <li>DJ</li>
              <li>PRIVATE DINING</li>
              <li>INDOOR LOUNGE</li>
              <li>OPEN-AIR DINING</li>
            </ul>
            <div className="section-actions section-actions--inline">
              <Link href="/hotel?floor=10" id="rooftop-explore" className="btn btn-primary" data-event="rooftop_reservation_click">
                EXPLORE ROOFTOP
              </Link>
              <Link href="/hotel?floor=10" id="rooftop-reserve" className="btn btn-outline btn-outline--light" data-event="rooftop_reservation_click">
                RESERVE A TABLE
              </Link>
            </div>
          </div>

          <Reveal direction="right" delay={140}>
            <div className="image-frame rooftop-visual">
              <Image
                src="/images/home/rhythm-prime_rooftop.png.png"
                alt="Rooftop lounge and dining with evening views over Phuket"
                width={1200}
                height={1500}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="wellness" className="section-block section-light" data-event="wellness_section">
        <div className="container wellness-grid">
          <Reveal direction="left" delay={130}>
            <div className="image-frame wellness-visual">
              <Image
                src="/images/home/rhythm-prime_spa-wellness.png.png"
                alt="Spa and wellness spaces at Rhythm Prime"
                width={1200}
                height={1500}
              />
            </div>
          </Reveal>

          <div className="wellness-content">
            <p className="eyebrow">LEVEL 8 · WELLNESS</p>
            <h2>Slow Down. Restore. Begin Again.</h2>
            <p>
              Spaces created for movement, recovery and quiet — allowing every guest to return to their own rhythm.
            </p>
            <ul className="feature-list">
              <li>SPA</li>
              <li>PREMIUM GYM</li>
              <li>3 SAUNA ROOMS</li>
              <li>STEAM</li>
              <li>YOGA & STRETCHING</li>
              <li>RELAXATION LOUNGE</li>
            </ul>
            <Link href="/hotel?floor=8" id="wellness-explore" className="btn btn-outline" data-event="view_wellness">
              EXPLORE WELLNESS
            </Link>
          </div>
        </div>
      </section>

      <section id="meetings" className="section-block section-ivory" data-event="meetings_section">
        <div className="container meetings-grid">
          <div className="meetings-content">
            <p className="eyebrow">MEETINGS & EVENTS</p>
            <h2>Business Meets Escape.</h2>
            <p>
              Bring your team somewhere ideas can breathe — with spaces designed for meetings, retreats, workshops and meaningful time together.
            </p>
            <ul className="feature-list">
              <li>CORPORATE RETREATS</li>
              <li>COMPANY OUTINGS</li>
              <li>EXECUTIVE WORKSHOPS</li>
              <li>PRIVATE MEETINGS</li>
              <li>SMALL EVENTS</li>
            </ul>
            <Link href="/hotel?floor=2" id="meetings-explore" className="btn btn-primary" data-event="meeting_inquiry_start">
              PLAN YOUR EVENT
            </Link>
          </div>

          <div className="meetings-visuals">
            <Reveal direction="right" delay={120}>
              <div className="image-frame meetings-main">
                <Image
                  src="/images/home/rhythm-prime_large-meeting-room.png.png"
                  alt="Large meeting room with contemporary architecture and soft light"
                  width={1200}
                  height={900}
                />
              </div>
            </Reveal>
            <Reveal direction="up" delay={260}>
              <div className="image-frame meetings-secondary">
                <Image
                  src="/images/home/rhythm-prime_real_small-meeting-room.png.png"
                  alt="Smaller meeting room detail within Rhythm Prime"
                  width={800}
                  height={900}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="design" className="section-block section-light" data-event="design_section">
        <div className="container design-grid">
          <Reveal direction="left" delay={120}>
            <div className="image-frame design-visual">
              <Image
                src="/images/home/rhythm-cooridoor.png.png"
                alt="Editorial architecture details of the Rhythm Prime corridor"
                width={1400}
                height={1800}
              />
            </div>
          </Reveal>

          <div className="design-content">
            <p className="eyebrow">DESIGN</p>
            <h2>Every Detail Has A Rhythm.</h2>
            <p>
              Flowing curves, warm stone, soft light and crafted transitions connect every part of Rhythm Prime.
            </p>
            <ul className="feature-list feature-list--stacked">
              <li>FLOWING CURVES</li>
              <li>WARM TRAVERTINE</li>
              <li>BRUSHED BRASS</li>
              <li>SOFT INDIRECT LIGHT</li>
              <li>CONTEMPORARY THAI + FRENCH DETAILING</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="rhythm-hour" className="rhythm-hour-section" data-event="rhythm_hour_section">
        <Image
          src="/images/home/rhythm_grand_lobby_at_night.png"
          alt="Grand lobby at night with warm lighting and evening atmosphere"
          fill
          priority={false}
          sizes="100vw"
          className="rhythm-hour-image"
        />
        <div className="rhythm-hour-overlay" />
        <div className="container rhythm-hour-content">
          <p className="eyebrow">RHYTHM HOUR</p>
          <h2>The Rhythm Changes After Dark.</h2>
          <p>
            As daylight fades, Rhythm Prime transforms through warm light, intimate spaces and the quiet energy of Phuket nights.
          </p>
          <ul className="feature-list feature-list--light">
            <li>RHYTHM STAIRCASE</li>
            <li>GRAND PIANO</li>
            <li>RHYTHM CHANDELIER</li>
            <li>WARM EVENING LIGHT</li>
          </ul>
          <Link href="/#story" id="rhythm-hour-discover" className="btn btn-primary" data-event="story_discover">
            DISCOVER THE RHYTHM STORY
          </Link>
        </div>
      </section>

      <section id="hotel-directory" className="section-block section-light" data-event="hotel_directory_section">
        <div className="container hotel-teaser-grid">
          <Reveal direction="scale" delay={120}>
            <div className="image-frame hotel-teaser-visual">
              <Image
                src="/images/home/rhythm_hotel_overview.png"
                alt="Editorial overview of the Rhythm Prime hotel floors"
                width={1400}
                height={1200}
              />
            </div>
          </Reveal>

          <div className="hotel-teaser-content">
            <p className="eyebrow">EXPLORE THE HOTEL</p>
            <h2>Ten Floors. One Complete Experience.</h2>
            <p>
              Explore Rhythm Prime from the grand lobby to rooftop evenings, with every floor designed around a different part of the stay.
            </p>
            <div className="hotel-teaser-highlights" role="list">
              <span role="listitem">Grand Lobby</span>
              <span role="listitem">Infinity Pool</span>
              <span role="listitem">Wellness</span>
              <span role="listitem">Rooftop Dining</span>
            </div>
            <Link href="/hotel" id="homepage-explore-hotel" className="btn btn-outline" data-event="hotel_explorer_click">
              EXPLORE THE HOTEL
            </Link>
          </div>
        </div>
      </section>

      <section id="gallery" className="section-block section-ivory" data-event="gallery_section">
        <div className="container">
          <div className="section-heading section-heading--center">
            <p className="eyebrow">GALLERY</p>
            <h2>Moments at Rhythm Prime.</h2>
          </div>

          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <Reveal as="div" key={`${item.src}-${index}`} direction="up" delay={index * 90} className={item.className}>
                <div className="image-frame gallery-image">
                  <Image src={item.src} alt={item.alt} fill sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
              </Reveal>
            ))}
          </div>

          <div className="section-actions">
            <Link href="/hotel" id="gallery-explore" className="btn btn-outline" data-event="gallery_interaction">
              EXPLORE GALLERY
            </Link>
          </div>
        </div>
      </section>

      <section id="location" className="section-block section-light" data-event="location_section">
        <div className="container location-grid">
          <div className="location-content">
            <p className="eyebrow">LOCATION</p>
            <h2>Phuket, At Your Pace.</h2>
            <p>
              A starting point for discovering the island, with the calm of Rhythm Prime waiting when you return.
            </p>
            <div className="location-list" role="list">
              <div className="location-pill" role="listitem" data-location="airport">
                PHUKET INTERNATIONAL AIRPORT
              </div>
              <div className="location-pill" role="listitem" data-location="beach">
                NEARBY BEACH
              </div>
              <div className="location-pill" role="listitem" data-location="old-town">
                PHUKET OLD TOWN
              </div>
              <div className="location-pill" role="listitem" data-location="attractions">
                LOCAL ATTRACTIONS
              </div>
            </div>
            <Link href="/book" id="location-explore" className="btn btn-outline" data-event="location_click">
              EXPLORE LOCATION
            </Link>
          </div>

          <div className="location-map" aria-label="Future Google Maps integration placeholder">
            <div className="map-frame" />
          </div>
        </div>
      </section>

      <section id="booking" className="booking-section" data-event="booking_section">
        <Image
          src="/images/home/rhythm_grand_lobby_at_night.png"
          alt="Warm evening atmosphere in the grand lobby"
          fill
          sizes="100vw"
          className="booking-image"
        />
        <div className="booking-overlay" />
        <div className="container booking-content">
          <h2>Ready to Find Your Rhythm?</h2>
          <p>Your next Phuket memory starts here.</p>
          <div className="section-actions section-actions--inline">
            <Link href="/book" id="final-book-now" className="btn btn-primary" data-event="booking_start">
              BOOK YOUR STAY
            </Link>
            <Link href="/hotel" id="final-explore" className="btn btn-outline btn-outline--light" data-event="booking_start">
              EXPLORE RHYTHM PRIME
            </Link>
          </div>
        </div>
      </section>

      <footer className="footer" data-event="footer_section">
        <div className="container footer-grid">
          <div className="footer-brand">
            <h3>RHYTHM PRIME</h3>
            <p>PHUKET · THAILAND</p>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <Link href="/hotel">About</Link>
            <Link href="/#rooms">Rooms</Link>
            <Link href="/#dining">Dining</Link>
            <Link href="/#pool">Pool & Day Pass</Link>
            <Link href="/#rooftop">Rooftop</Link>
            <Link href="/#wellness">Wellness</Link>
            <Link href="/#meetings">Meetings & Events</Link>
            <Link href="/hotel">Gallery</Link>
            <Link href="/book">Contact</Link>
          </nav>

          <div className="footer-actions">
            <h4>Guest Actions</h4>
            <ul>
              <li><Link href="/book">Book Your Stay</Link></li>
              <li><Link href="/book">Reserve Dining</Link></li>
              <li><Link href="/hotel?floor=9">Buy Day Pass</Link></li>
              <li><Link href="/hotel?floor=2">Plan an Event</Link></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4>STAY IN RHYTHM.</h4>
            <form className="newsletter-form">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input id="newsletter-email" type="email" placeholder="Email address" />
              <button type="submit" className="btn btn-primary" data-event="newsletter_signup">
                SUBSCRIBE
              </button>
            </form>
            <div className="footer-socials">
              <span>Instagram</span>
              <span>Facebook</span>
            </div>
          </div>
        </div>

        <div className="container footer-legal">
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Terms & Conditions</Link>
          <Link href="/">Cookie Settings</Link>
          <p>© 2026 Rhythm Prime Phuket. Concept hospitality and MarTech portfolio project.</p>
        </div>
      </footer>
    </main>
  );
}