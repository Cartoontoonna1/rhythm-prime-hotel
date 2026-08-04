import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="rp-footer">
      <div className="rp-container">
        <div className="rp-footer__grid">
          <div>
            <p className="rp-eyebrow">RHYTHM PRIME · PHUKET</p>
            <h2 style={{fontSize:"2.4rem", margin:"12px 0"}}>Find your rhythm by the sea.</h2>
            <p>A fictional luxury lifestyle hotel concept exploring hospitality, UX and MarTech thinking through a complete digital guest journey.</p>
          </div>
          <div className="rp-footer__links">
            <Link href="/hotel">Explore Hotel</Link>
            <Link href="/#rooms">Rooms</Link>
            <Link href="/dining">Dining</Link>
            <Link href="/pool">Pool & Day Pass</Link>
            <Link href="/wellness">Wellness</Link>
          </div>
          <div className="rp-footer__links">
            <Link href="/meetings">Meetings & Events</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/location">Location</Link>
            <Link href="/about">About Rhythm Prime</Link>
            <Link href="/book">Book Now</Link>
          </div>
        </div>
        <p className="rp-disclosure">Rhythm Prime is a fictional hospitality concept created as a Digital Marketing & MarTech portfolio project. Images, room concepts and booking interactions are for portfolio demonstration.</p>
      </div>
    </footer>
  );
}
