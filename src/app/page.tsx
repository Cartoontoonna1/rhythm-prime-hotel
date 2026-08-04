import Image from "next/image";
import Link from "next/link";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

const rooms = [
  {name:"Deluxe Room", size:"48 sqm", image:"/images/home/rhythm-prime_deluxe-room.png.png", href:"/rooms/deluxe", detail:"Private balcony · Rain shower · No bathtub"},
  {name:"Premier Ocean View", size:"55 sqm", image:"/images/home/rhythm-prime_premier-ocean-view.png.png", href:"/rooms/premier", detail:"Ocean view · Enhanced balcony · Freestanding bathtub"},
  {name:"Rhythm Signature Suite", size:"95 sqm", image:"/images/home/rhythm-prime_signature-suite.png.png", href:"/rooms/signature", detail:"Bedroom · Living & dining · Oversized bathtub"},
];

export default function Home() {
  return (
    <main className="rp-shell">
      <SiteHeader />
      <section className="rp-hero">
        <div className="rp-hero__media"><Image src="/images/home/rhythm-prime_exterior-hero.png" alt="Rhythm Prime luxury lifestyle hotel concept on the Phuket coast" fill priority sizes="100vw" /></div>
        <div className="rp-hero__overlay" />
        <div className="rp-container rp-hero__content">
          <p className="rp-eyebrow">LUXURY LIFESTYLE HOTEL · PHUKET</p>
          <h1 className="rp-title">A New Rhythm of Seaside Luxury</h1>
          <p className="rp-subtitle">A restorative seaside escape where architecture, ocean views, dining and wellness move at the pace of the guest.</p>
          <div className="rp-actions"><Link href="/hotel" className="rp-button rp-button--light">Explore the Hotel</Link><Link href="/book" className="rp-button rp-button--gold" data-event="book_now_click">Book Now</Link></div>
        </div>
      </section>

      <section className="rp-section" id="story">
        <div className="rp-container rp-grid-2">
          <div>
            <p className="rp-eyebrow">THE RHYTHM STORY</p>
            <h2 className="rp-title" style={{fontSize:"clamp(2.4rem,4vw,4.4rem)"}}>Every stay has its own rhythm.</h2>
            <p className="rp-subtitle">Wake with soft Phuket light, move through a slower afternoon, meet the horizon at sunset and let the rooftop carry the evening forward. Rhythm Prime is designed as one continuous guest journey rather than a collection of separate facilities.</p>
            <div className="rp-actions"><Link href="/about" className="rp-button">Discover Our Story</Link><Link href="/location" className="rp-button">Explore Phuket</Link></div>
          </div>
          <div className="rp-image rp-image--portrait"><Image src="/images/home/rhythm-prime_grand-lobby-staircase.png.png" alt="Grand lobby with sculptural staircase and warm hospitality lighting" fill sizes="(max-width:720px) 100vw,50vw" /></div>
        </div>
      </section>

      <section className="rp-section rp-section--warm" id="rooms">
        <div className="rp-container">
          <p className="rp-eyebrow">ROOM COLLECTION</p>
          <h2 className="rp-title" style={{fontSize:"clamp(2.5rem,4vw,4.5rem)"}}>Three Ways to Stay.</h2>
          <p className="rp-subtitle">Each room category has a distinct reason to choose it — from an easy rain-shower retreat to a panoramic suite with separate living spaces.</p>
          <div className="rp-grid-3" style={{marginTop:"36px"}}>
            {rooms.map((room) => <article className="rp-card" key={room.name}><div className="rp-image rp-image--portrait" style={{borderRadius:0}}><Image src={room.image} alt={`${room.name} at Rhythm Prime`} fill sizes="(max-width:720px) 100vw,33vw" /></div><div className="rp-card__body"><p className="rp-eyebrow">{room.size}</p><h3>{room.name}</h3><p>{room.detail}</p><div className="rp-actions"><Link href={room.href} className="rp-button" data-event="view_room">View Room</Link></div></div></article>)}
          </div>
        </div>
      </section>

      <section className="rp-section" id="dining">
        <div className="rp-container rp-grid-2"><div className="rp-image rp-image--landscape"><Image src="/images/home/restaurant-breakfast.png.png" alt="Ocean Restaurant breakfast experience" fill sizes="(max-width:720px) 100vw,50vw" /></div><div><p className="rp-eyebrow">OCEAN RESTAURANT · LEVEL 2</p><h2 className="rp-title" style={{fontSize:"clamp(2.4rem,4vw,4.3rem)"}}>Dine with the horizon.</h2><p className="rp-subtitle">From breakfast through sunset dinner, the restaurant is planned as a destination for hotel guests and outside visitors alike.</p><div className="rp-actions"><Link href="/dining" className="rp-button rp-button--gold">Explore Dining</Link><Link href="/dining#reserve" className="rp-button">Reserve a Table</Link></div></div></div>
      </section>

      <section className="rp-section rp-section--dark" id="pool">
        <div className="rp-container rp-grid-2"><div><p className="rp-eyebrow">LEVEL 9 · CURVED INFINITY POOL</p><h2 className="rp-title" style={{fontSize:"clamp(2.5rem,4vw,4.4rem)"}}>Where water meets the sky.</h2><p className="rp-subtitle">A signature ribbon-like pool shaped around the horizon, with a sunken lounge, pool bar, cabanas and a Day Pass product for outside guests.</p><div className="rp-actions"><Link href="/pool" className="rp-button rp-button--light">Explore Pool & Day Pass</Link></div></div><div className="rp-image rp-image--portrait"><Image src="/images/home/pool-day-pass-cabana.png.png" alt="Cabana beside Rhythm Prime curved infinity pool" fill sizes="(max-width:720px) 100vw,50vw" /></div></div>
      </section>

      <section className="rp-section" id="wellness">
        <div className="rp-container rp-grid-2"><div className="rp-image rp-image--portrait"><Image src="/images/home/rhythm-prime_spa-wellness.png.png" alt="Spa and wellness floor at Rhythm Prime" fill sizes="(max-width:720px) 100vw,50vw" /></div><div><p className="rp-eyebrow">LEVEL 8 · WELLNESS</p><h2 className="rp-title" style={{fontSize:"clamp(2.4rem,4vw,4.2rem)"}}>Restore your rhythm.</h2><p className="rp-subtitle">Treatment rooms, sauna, steam, relaxation, fitness and yoga are sequenced as one restorative floor rather than isolated amenities.</p><div className="rp-actions"><Link href="/wellness" className="rp-button">Discover Wellness</Link></div></div></div>
      </section>

      <section className="rp-section rp-section--warm" id="rooftop">
        <div className="rp-container rp-grid-2"><div><p className="rp-eyebrow">LEVEL 10 · ROOFTOP</p><h2 className="rp-title" style={{fontSize:"clamp(2.4rem,4vw,4.3rem)"}}>Sunset changes the tempo.</h2><p className="rp-subtitle">An indoor-outdoor rooftop for cocktails, fine dining, private tables and discreet music above the Phuket coastline.</p><div className="rp-actions"><Link href="/rooftop" className="rp-button rp-button--gold">Experience the Rooftop</Link></div></div><div className="rp-image rp-image--landscape"><Image src="/images/home/rhythm-prime_rooftop.png.png" alt="Rhythm Prime rooftop at sunset" fill sizes="(max-width:720px) 100vw,50vw" /></div></div>
      </section>

      <section className="rp-section" id="meetings">
        <div className="rp-container rp-grid-2"><div className="rp-image rp-image--landscape"><Image src="/images/home/rhythm-prime_large-meeting-room.png.png" alt="Large flexible meeting and event room" fill sizes="(max-width:720px) 100vw,50vw" /></div><div><p className="rp-eyebrow">MEETINGS & EVENTS</p><h2 className="rp-title" style={{fontSize:"clamp(2.4rem,4vw,4.2rem)"}}>Bring the team somewhere worth remembering.</h2><p className="rp-subtitle">Flexible corporate and private spaces connect meetings with the hotel’s dining, wellness, pool and rooftop experiences.</p><div className="rp-actions"><Link href="/meetings" className="rp-button">Plan Your Event</Link></div></div></div>
      </section>

      <section className="rp-section rp-section--dark">
        <div className="rp-container rp-grid-2"><div><p className="rp-eyebrow">PHUKET</p><h2 className="rp-title" style={{fontSize:"clamp(2.5rem,4vw,4.4rem)"}}>The island is part of the experience.</h2><p className="rp-subtitle">The conceptual location story balances airport access, beach life and Phuket Old Town with the emotional reason to travel: light, coastline and a different pace.</p><div className="rp-actions"><Link href="/location" className="rp-button rp-button--light">Explore Location</Link><Link href="/gallery" className="rp-button rp-button--light">View Gallery</Link></div></div><div className="rp-image rp-image--landscape"><Image src="/images/home/phuket-sunset-ocean.png.png" alt="Phuket ocean at sunset" fill sizes="(max-width:720px) 100vw,50vw" /></div></div>
      </section>

      <section className="rp-section"><div className="rp-container" style={{textAlign:"center"}}><p className="rp-eyebrow">YOUR STAY</p><h2 className="rp-title" style={{fontSize:"clamp(2.6rem,5vw,5rem)",maxWidth:"800px",marginInline:"auto"}}>Ready to find your rhythm?</h2><p className="rp-subtitle" style={{marginInline:"auto"}}>Continue into the booking prototype and experience the conversion journey designed for this MarTech portfolio project.</p><div className="rp-actions" style={{justifyContent:"center"}}><Link href="/book" className="rp-button rp-button--gold" data-event="book_now_click">Book Your Stay</Link><Link href="/hotel" className="rp-button">Explore All Floors</Link></div></div></section>
      <SiteFooter />
    </main>
  );
}
