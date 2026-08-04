import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import PrototypeForm from "../components/PrototypeForm";

export const metadata: Metadata = {
  title: "Wellness & Spa | Rhythm Prime Phuket",
  description: "Explore the fictional Rhythm Wellness & Spa concept with treatment rooms, sauna, steam, fitness and yoga spaces.",
};

export default function WellnessPage() {
  return (
    <main className="rp-shell"><SiteHeader />
      <section className="rp-hero"><div className="rp-hero__media"><Image src="/images/home/rhythm-prime_spa-wellness.png.png" alt="Rhythm Prime spa and wellness interior" fill priority sizes="100vw" /></div><div className="rp-hero__overlay" /><div className="rp-container rp-hero__content"><p className="rp-eyebrow">LEVEL 8 · RHYTHM WELLNESS & SPA</p><h1 className="rp-title">Restore Your Rhythm.</h1><p className="rp-subtitle">A quiet floor for recovery, movement and ritual — designed to help the body slow down before the rest of the day begins again.</p><div className="rp-actions"><a className="rp-button rp-button--gold" href="#wellness-enquiry">Book a Wellness Experience</a></div></div></section>
      <section className="rp-section"><div className="rp-container rp-grid-2"><div><p className="rp-eyebrow">WELLNESS JOURNEY</p><h2 className="rp-title" style={{fontSize:"clamp(2.4rem,4vw,4.4rem)"}}>From movement to stillness.</h2><p className="rp-subtitle">The eighth floor combines active and restorative spaces without turning wellness into a checklist.</p><ul className="rp-feature-list"><li>Spa reception</li><li>Private treatment rooms</li><li>Three sauna rooms</li><li>Steam room</li><li>Relaxation lounge</li><li>Premium Technogym-style fitness area</li><li>Yoga and stretching zone</li></ul></div><div className="rp-image rp-image--portrait"><Image src="/images/home/rhythm-prime_spa-wellness.png.png" alt="Warm wellness environment with spa, fitness and relaxation zones" fill sizes="(max-width:720px) 100vw,50vw" /></div></div></section>
      <section id="wellness-enquiry" className="rp-section rp-section--warm"><div className="rp-container rp-grid-2"><div><p className="rp-eyebrow">ENQUIRE</p><h2 className="rp-title" style={{fontSize:"clamp(2.3rem,4vw,4rem)"}}>Choose the pace you need.</h2><p className="rp-subtitle">This prototype demonstrates how wellness interest can become a trackable conversion step in the guest journey.</p></div><PrototypeForm title="Wellness Enquiry" submitLabel="Send Wellness Enquiry" confirmation="Wellness Enquiry Received" fields={[{name:"name",label:"Name",required:true},{name:"email",label:"Email",type:"email",required:true},{name:"date",label:"Preferred Date",type:"date"},{name:"experience",label:"Experience",type:"select",options:["Spa Treatment","Sauna & Steam","Fitness & Yoga","Wellness Consultation"]},{name:"message",label:"Request",type:"textarea"}]} /></div></section>
      <SiteFooter /></main>
  );
}
