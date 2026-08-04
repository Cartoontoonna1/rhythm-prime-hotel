import type { Metadata } from "next";
import RoomDetailClient from "../../components/RoomDetailClient";

export const metadata: Metadata = {
  title: "Premier Ocean View | Rhythm Prime Phuket",
  description: "Explore the 55 sqm Premier Ocean View room concept with private balcony, panoramic ocean view and freestanding bathtub.",
};

export default function PremierRoomPage() {
  return <RoomDetailClient
    eyebrow="PREMIER OCEAN VIEW · 55 SQM"
    name="Premier Ocean View"
    size="55 sqm"
    description="A brighter, more elevated stay shaped around the horizon — with a generous ocean-facing balcony, freestanding bathtub and separate rain shower."
    hero="/images/home/rhythm-prime_premier-ocean-view.png.png"
    heroAlt="Premier Ocean View room at Rhythm Prime"
    bookingParam="premier"
    features={["King bed", "Panoramic ocean view", "Enhanced private balcony", "Freestanding bathtub inside the bathroom", "Separate rain shower", "Smart TV and premium Wi-Fi", "Mini bar, safe and room service"]}
    notes={["The bathtub is part of the indoor bathroom experience and is never positioned on the balcony."]}
    gallery={[
      {label:"Bedroom", src:"/images/home/rhythm-prime_premier-ocean-view.png.png", alt:"Premier Ocean View bedroom overlooking Phuket"},
      {label:"Ocean Balcony", src:"/images/home/premier-ocean-balcony.png.png", alt:"Premier Ocean View private balcony focused on the sea"},
      {label:"Bathtub", src:"/images/home/premier-bathtub.png.png", alt:"Indoor freestanding bathtub with an exterior view"},
    ]}
  />;
}
