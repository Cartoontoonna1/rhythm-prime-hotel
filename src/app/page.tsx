import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <Image
          src="/images/home/rhythm-prime_exterior-hero.png"
          alt="Rhythm Prime luxury lifestyle hotel in Phuket"
          fill
          priority
          className="hero-image"
        />

        <div className="hero-overlay" />

        <header className="navbar">
          <a href="/" className="brand">
            RHYTHM PRIME
          </a>

          <nav className="nav-links">
            <a href="#rooms">Rooms</a>
            <a href="#dining">Dining</a>
            <a href="#wellness">Wellness</a>
            <a href="#experiences">Experiences</a>
            <a href="#meetings">Meetings & Events</a>
          </nav>

          <a href="#booking" className="book-button">
            Book Now
          </a>
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

          <a href="#rooms" className="hero-cta">
            Discover Rhythm Prime
          </a>
        </div>

        <div className="scroll-indicator">
          <span>SCROLL TO DISCOVER</span>
          <span>↓</span>
        </div>
      </section>
    </main>
  );
}