import type { Metadata } from "next";
import RoomDetailClient from "../../components/RoomDetailClient";

export const metadata: Metadata = {
  title: "Rhythm Signature Suite | Rhythm Prime Phuket",
  description: "Explore the 95 sqm Rhythm Signature Suite concept with separate bedroom, living and dining areas, oversized bathtub and panoramic ocean view.",
};

export default function SignatureRoomPage() {
  return <RoomDetailClient
    eyebrow="RHYTHM SIGNATURE SUITE · 95 SQM"
    name="Rhythm Signature Suite"
    size="95 sqm"
    description="The flagship Rhythm Prime stay — a private sequence of bedroom, living and dining spaces connected by a panoramic ocean-facing experience."
    hero="/images/home/rhythm-prime_signature-suite.png.png"
    heroAlt="Rhythm Signature Suite at Rhythm Prime"
    bookingParam="signature"
    features={["King master bedroom", "Separate living room", "Dining area", "Walk-in wardrobe", "Mini bar and pantry", "Signature bathroom with oversized bathtub", "Separate rain shower", "Panoramic ocean view", "Private balcony", "Premium Wi-Fi and smart TV"]}
    notes={["The living-room sofa is positioned against a solid wall to keep the ocean-facing side visually open.", "The oversized bathtub remains indoors as part of the signature bathroom experience."]}
    gallery={[
      {label:"Suite", src:"/images/home/rhythm-prime_signature-suite.png.png", alt:"Rhythm Signature Suite overview"},
      {label:"Master Bedroom", src:"/images/home/signature-bedroom.png.png", alt:"Signature Suite master bedroom"},
      {label:"Living Room", src:"/images/home/signature-living-room.png", alt:"Signature Suite living room with sofa against a solid wall"},
      {label:"Bathroom", src:"/images/home/signature-bathroom.png.png", alt:"Signature Suite bathroom with oversized indoor bathtub"},
      {label:"Suite Plan", src:"/images/home/signature-plan.png.png", alt:"Conceptual floor plan of the Rhythm Signature Suite"},
    ]}
  />;
}
