import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import PrototypeForm from "../components/PrototypeForm";

export const metadata: Metadata = {
  title: "Contact | Rhythm Prime Phuket",
  description: "Contact and enquiry prototype for the fictional Rhythm Prime Phuket hospitality portfolio concept.",
};

export default function ContactPage() {
  return (
    <main className="rp-shell"><SiteHeader />
      <section className="rp-section rp-section--warm"><div className="rp-container"><p className="rp-eyebrow">CONTACT</p><h1 className="rp-title">Start with the experience you need.</h1><p className="rp-subtitle">This conceptual contact page demonstrates how stay, dining, event and wellness enquiries can share one clear conversion point without pretending a real hotel operation exists.</p></div></section>
      <section className="rp-section"><div className="rp-container rp-grid-2"><div><div className="rp-image rp-image--landscape"><Image src="/images/home/rhythm-prime-location-map.png.png" alt="Conceptual Rhythm Prime Phuket location map" fill sizes="(max-width:720px) 100vw,50vw" /></div><p className="rp-note" style={{marginTop:"14px"}}>Conceptual Phuket location visual for portfolio demonstration. No real hotel address is represented.</p></div><PrototypeForm title="General Enquiry" submitLabel="Send Enquiry" confirmation="Enquiry Received" fields={[{name:"name",label:"Name",required:true},{name:"email",label:"Email",type:"email",required:true},{name:"phone",label:"Phone",type:"tel"},{name:"interest",label:"I’m Interested In",type:"select",options:["Stay","Dining","Pool & Day Pass","Wellness","Meetings & Events","General"]},{name:"message",label:"Message",type:"textarea",required:true}]} /></div></section>
      <SiteFooter />
    </main>
  );
}
