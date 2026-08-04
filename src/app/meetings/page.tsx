import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import PrototypeForm from "../components/PrototypeForm";

export const metadata: Metadata = {
  title: "Meetings & Events | Rhythm Prime Phuket",
  description: "Explore the fictional meeting and event spaces at Rhythm Prime Phuket for corporate retreats, executive meetings and private functions.",
};

export default function MeetingsPage() {
  return (
    <main className="rp-shell"><SiteHeader />
      <section className="rp-section rp-section--warm"><div className="rp-container"><p className="rp-eyebrow">MEETINGS & EVENTS</p><h1 className="rp-title">Gather With A Better View.</h1><p className="rp-subtitle">Flexible spaces for corporate retreats, workshops, executive meetings and intimate celebrations — supported by the wider Rhythm Prime hospitality experience.</p></div></section>
      <section className="rp-section"><div className="rp-container rp-grid-2"><div className="rp-image rp-image--landscape"><Image src="/images/home/rhythm-prime_large-meeting-room.png.png" alt="Large flexible event room at Rhythm Prime" fill sizes="(max-width:720px) 100vw,50vw" /></div><div><p className="rp-eyebrow">GRAND EVENT ROOM</p><h2 className="rp-title" style={{fontSize:"clamp(2.3rem,4vw,4rem)"}}>Flexible enough to change with the agenda.</h2><p className="rp-subtitle">Designed for presentations, workshops, corporate events and private celebrations with adaptable layouts and hotel-wide catering support.</p><ul className="rp-feature-list"><li>Theatre, classroom and banquet-style layouts</li><li>Presentation and workshop use</li><li>Corporate retreat programmes</li><li>Private celebrations and hosted dinners</li></ul></div></div></section>
      <section className="rp-section rp-section--warm"><div className="rp-container rp-grid-2"><div><p className="rp-eyebrow">PRIVATE MEETING ROOM</p><h2 className="rp-title" style={{fontSize:"clamp(2.3rem,4vw,4rem)"}}>For the conversations that need focus.</h2><p className="rp-subtitle">An intimate meeting room for approximately 8–14 guests, suited to leadership sessions, client meetings and private group dining.</p><ul className="rp-feature-list"><li>Approx. 8–14 guests</li><li>Executive meeting setup</li><li>Private presentations</li><li>Optional food and beverage service</li></ul></div><div className="rp-grid-2" style={{gap:"14px"}}><div className="rp-image rp-image--portrait"><Image src="/images/home/rhythm-prime_real_small-meeting-room.png.png" alt="Small private meeting room at Rhythm Prime" fill sizes="25vw" /></div><div className="rp-image rp-image--portrait"><Image src="/images/home/rhythm-prime-small-meeting-room-detail.png" alt="Detail view of the private meeting room" fill sizes="25vw" /></div></div></div></section>
      <section className="rp-section"><div className="rp-container rp-grid-2"><div><p className="rp-eyebrow">PLAN YOUR EVENT</p><h2 className="rp-title" style={{fontSize:"clamp(2.3rem,4vw,4rem)"}}>Start with the purpose, then shape the room.</h2><p className="rp-subtitle">A conversion-focused event enquiry prototype for the portfolio customer journey.</p></div><PrototypeForm title="Event Enquiry" submitLabel="Send Event Enquiry" confirmation="Event Enquiry Received" fields={[{name:"name",label:"Name",required:true},{name:"company",label:"Company"},{name:"email",label:"Email",type:"email",required:true},{name:"phone",label:"Phone",type:"tel"},{name:"type",label:"Event Type",type:"select",options:["Corporate Retreat","Workshop","Executive Meeting","Private Celebration"]},{name:"date",label:"Preferred Date",type:"date"},{name:"guests",label:"Guests",type:"number"},{name:"room",label:"Room Preference",type:"select",options:["Grand Event Room","Private Meeting Room","Not Sure Yet"]},{name:"message",label:"Requirements",type:"textarea"}]} /></div></section>
      <SiteFooter /></main>
  );
}
