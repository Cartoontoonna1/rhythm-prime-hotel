import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import PrototypeForm from "../components/PrototypeForm";

export const metadata: Metadata = {
  title: "Ocean Restaurant | Rhythm Prime Phuket",
  description: "Explore the fictional Ocean Restaurant concept at Rhythm Prime Phuket, from breakfast to sunset dining.",
};

const dishes = [
  ["Andaman Seafood Platter", "THB 1,290"],
  ["Phuket Lobster Linguine", "THB 890"],
  ["Thai Wagyu Massaman", "THB 690"],
  ["Seared Andaman Sea Bass", "THB 620"],
  ["Mango Coconut Pavlova", "THB 320"],
];
const drinks = [
  ["Rhythm Sunset", "THB 390"],
  ["Andaman Breeze", "THB 350"],
  ["Phuket Tropical Cooler", "THB 220"],
  ["Cold Brew Coconut", "THB 190"],
];

export default function DiningPage() {
  return (
    <main className="rp-shell">
      <SiteHeader />
      <section className="rp-hero">
        <div className="rp-hero__media"><Image src="/images/home/rhythm-prime_ocean-restaurant.png.png" alt="Ocean Restaurant overlooking the Phuket horizon" fill priority sizes="100vw" /></div>
        <div className="rp-hero__overlay" />
        <div className="rp-container rp-hero__content">
          <p className="rp-eyebrow">OCEAN RESTAURANT · LEVEL 2</p>
          <h1 className="rp-title">Dine With The Horizon.</h1>
          <p className="rp-subtitle">From slow breakfasts to polished sunset dinners, every service is designed around the sea, local ingredients and the people you share the table with.</p>
          <div className="rp-actions"><a href="#reserve" className="rp-button rp-button--gold">Reserve a Table</a></div>
        </div>
      </section>

      <section className="rp-section">
        <div className="rp-container rp-grid-2">
          <div className="rp-image rp-image--landscape"><Image src="/images/home/restaurant-breakfast.png.png" alt="Breakfast buffet presentation in Ocean Restaurant" fill sizes="(max-width:720px) 100vw,50vw" /></div>
          <div>
            <p className="rp-eyebrow">BREAKFAST · 06:30–10:30</p>
            <h2 className="rp-title" style={{fontSize:"clamp(2.4rem,4vw,4.4rem)"}}>A softer start to the day.</h2>
            <p className="rp-subtitle">An ocean-facing breakfast experience mixing Thai comfort dishes, international favourites, fresh fruit, pastries and made-to-order selections.</p>
          </div>
        </div>
      </section>

      <section className="rp-section rp-section--warm">
        <div className="rp-container rp-grid-2">
          <div>
            <p className="rp-eyebrow">SIGNATURE MENU</p>
            <h2 className="rp-title" style={{fontSize:"clamp(2.3rem,4vw,4rem)"}}>Coastal flavours, refined.</h2>
            <div className="rp-menu">{dishes.map(([name,price]) => <div className="rp-menu__item" key={name}><span>{name}</span><span>{price}</span></div>)}</div>
            <p className="rp-eyebrow" style={{marginTop:"28px"}}>RECOMMENDED DRINKS</p>
            <div className="rp-menu">{drinks.map(([name,price]) => <div className="rp-menu__item" key={name}><span>{name}</span><span>{price}</span></div>)}</div>
          </div>
          <div className="rp-image rp-image--portrait"><Image src="/images/home/restaurant-signature-dishes.png.png" alt="Editorial presentation of Rhythm Prime signature dishes and drinks" fill sizes="(max-width:720px) 100vw,50vw" /></div>
        </div>
      </section>

      <section id="reserve" className="rp-section">
        <div className="rp-container rp-grid-2">
          <div><p className="rp-eyebrow">RESERVE</p><h2 className="rp-title" style={{fontSize:"clamp(2.3rem,4vw,4.1rem)"}}>Plan your table around the moment.</h2><p className="rp-subtitle">Choose breakfast, a relaxed daytime meal or an evening table timed for the changing light over Phuket.</p></div>
          <PrototypeForm title="Table Reservation Request" submitLabel="Send Reservation Request" confirmation="Reservation Request Received" fields={[
            {name:"name",label:"Name",required:true},{name:"email",label:"Email",type:"email",required:true},{name:"phone",label:"Phone",type:"tel",required:true},{name:"date",label:"Date",type:"date",required:true},{name:"time",label:"Time",type:"time",required:true},{name:"guests",label:"Guests",type:"number",required:true},{name:"preference",label:"Dining Preference",type:"select",options:["Breakfast","Lunch","Sunset Dinner","Private Dining"]},{name:"request",label:"Special Request",type:"textarea"}
          ]} />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
