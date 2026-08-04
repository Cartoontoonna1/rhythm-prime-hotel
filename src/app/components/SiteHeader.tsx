"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  ["Hotel", "/hotel"],
  ["Rooms", "/#rooms"],
  ["Dining", "/dining"],
  ["Pool", "/pool"],
  ["Rooftop", "/rooftop"],
  ["Wellness", "/wellness"],
  ["Meetings", "/meetings"],
  ["Gallery", "/gallery"],
  ["Location", "/location"],
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="rp-header">
      <div className="rp-container rp-header__inner">
        <Link href="/" className="rp-brand">RHYTHM PRIME</Link>
        <button className="rp-menu-button" type="button" aria-expanded={open} aria-controls="rp-primary-nav" onClick={() => setOpen((value) => !value)}>
          {open ? "Close" : "Menu"}
        </button>
        <nav id="rp-primary-nav" className={`rp-nav ${open ? "rp-nav--open" : ""}`} aria-label="Primary navigation">
          {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
        </nav>
        <Link href="/book" className="rp-book">Book Now</Link>
      </div>
    </header>
  );
}
