"use client";

import Image from "next/image";
import { FormEvent, useMemo, useState } from "react";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const packages = [
  { id: "day", label: "Day Pass", detail: "THB 1,500 / person", price: 1500, perGuest: true },
  { id: "fb", label: "Day Pass + F&B Credit", detail: "THB 2,100 / person · includes THB 800 F&B credit", price: 2100, perGuest: true },
  { id: "cabana", label: "Private Cabana for Two", detail: "THB 4,500", price: 4500, perGuest: false },
];

export default function PoolPageClient() {
  const [packageId, setPackageId] = useState("day");
  const [guests, setGuests] = useState(2);
  const [submitted, setSubmitted] = useState(false);
  const selected = packages.find((item) => item.id === packageId) ?? packages[0];
  const total = useMemo(() => selected.perGuest ? selected.price * Math.max(1, guests) : selected.price, [selected, guests]);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); if (event.currentTarget.reportValidity()) setSubmitted(true); };

  return (
    <main className="rp-shell">
      <SiteHeader />
      <section className="rp-hero">
        <div className="rp-hero__media"><Image src="/images/home/rhythm-prime_curved-infinity-pool.png.png" alt="Curved infinity pool overlooking Phuket" fill priority sizes="100vw" /></div>
        <div className="rp-hero__overlay" />
        <div className="rp-container rp-hero__content"><p className="rp-eyebrow">LEVEL 9 · POOL & DAY PASS</p><h1 className="rp-title">Where Water Meets The Sky.</h1><p className="rp-subtitle">A signature ribbon-like infinity pool with cabanas, a sunken lounge and a horizon that changes through the day.</p><div className="rp-actions"><a href="#day-pass" className="rp-button rp-button--gold">Buy Day Pass</a></div></div>
      </section>

      <section className="rp-section">
        <div className="rp-container rp-grid-2">
          <div><p className="rp-eyebrow">SIGNATURE EXPERIENCE</p><h2 className="rp-title" style={{fontSize:"clamp(2.4rem,4vw,4.4rem)"}}>A pool designed as part of the architecture.</h2><p className="rp-subtitle">The organic curve follows the view rather than a conventional rectangle, connecting underwater warm light, a social in-pool lounge, pool bar and quieter cabana moments.</p><ul className="rp-feature-list"><li>Curved infinity edge</li><li>Panoramic ocean view</li><li>Sunken lounge</li><li>Pool bar</li><li>Cabanas and daybeds</li><li>Day Pass for outside guests</li></ul></div>
          <div className="rp-grid-2" style={{gap:"14px"}}><div className="rp-image rp-image--portrait"><Image src="/images/home/pool-day-pass-cabana.png.png" alt="Day Pass cabana beside the Rhythm Prime pool" fill sizes="25vw" /></div><div className="rp-image rp-image--portrait"><Image src="/images/home/rhythm_sofa_swimmimg_pool_lounge.png" alt="In-pool lounge seating at the infinity pool" fill sizes="25vw" /></div></div>
        </div>
      </section>

      <section id="day-pass" className="rp-section rp-section--warm">
        <div className="rp-container rp-grid-2">
          <div><p className="rp-eyebrow">DAY PASS</p><h2 className="rp-title" style={{fontSize:"clamp(2.4rem,4vw,4.2rem)"}}>Spend the day in Rhythm Prime.</h2><p className="rp-subtitle">A portfolio prototype for turning the pool into a standalone lifestyle product for local guests and Phuket visitors.</p><div className="rp-menu">{packages.map((item) => <div className="rp-menu__item" key={item.id}><span>{item.label}</span><span>{item.detail}</span></div>)}</div></div>
          <form className="rp-form" onSubmit={handleSubmit}>
            <div><p className="rp-eyebrow">PORTFOLIO PROTOTYPE</p><h3 style={{fontSize:"2rem",marginTop:"8px"}}>Day Pass Request</h3></div>
            <div className="rp-form-grid">
              <label className="rp-field"><span>Name</span><input required /></label>
              <label className="rp-field"><span>Email</span><input type="email" required /></label>
              <label className="rp-field"><span>Phone</span><input type="tel" required /></label>
              <label className="rp-field"><span>Date</span><input type="date" required /></label>
              <label className="rp-field"><span>Guests</span><input type="number" min="1" value={guests} onChange={(e)=>setGuests(Number(e.target.value))} required /></label>
              <label className="rp-field"><span>Package</span><select value={packageId} onChange={(e)=>setPackageId(e.target.value)}>{packages.map((item)=><option key={item.id} value={item.id}>{item.label}</option>)}</select></label>
            </div>
            <div className="rp-confirmation"><strong>Estimated total: THB {total.toLocaleString("en-US")}</strong></div>
            <button className="rp-button rp-button--gold" type="submit">Send Day Pass Request</button>
            <p className="rp-note">No live payment gateway is connected.</p>
            {submitted ? <div className="rp-confirmation" role="status">Day Pass Request Received</div> : null}
          </form>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
