import type { Metadata } from "next";
import RoomDetailClient from "../../components/RoomDetailClient";

export const metadata: Metadata = {
  title: "Deluxe Room | Rhythm Prime Phuket",
  description: "Explore the 48 sqm Deluxe Room concept at Rhythm Prime Phuket, with private balcony and rain shower.",
};

export default function DeluxeRoomPage() {
  return <RoomDetailClient
    eyebrow="DELUXE · 48 SQM"
    name="Deluxe Room"
    size="48 sqm"
    description="A spacious, warm retreat for easy island stays — generous sleeping space, a private balcony and a rain shower wrapped in natural materials."
    hero="/images/home/rhythm-prime_deluxe-room.png.png"
    heroAlt="Deluxe Room interior at Rhythm Prime"
    bookingParam="deluxe"
    features={["King or twin sleeping configuration", "Private balcony with outdoor seating", "Rain shower", "No bathtub", "Smart TV and premium Wi-Fi", "Mini bar and in-room safe", "Room service and luxury bath amenities"]}
    notes={["Deluxe intentionally uses a rain-shower-only bathroom to keep the room open, efficient and calm."]}
    gallery={[
      {label:"Bedroom", src:"/images/home/rhythm-prime_deluxe-room.png.png", alt:"Deluxe bedroom with warm contemporary finishes"},
      {label:"Balcony", src:"/images/home/deluxe-balcony.png.png", alt:"Private Deluxe balcony with seating and Phuket view"},
      {label:"Bathroom", src:"/images/home/deluxe-bathroom.png.png", alt:"Deluxe bathroom with rain shower and no bathtub"},
    ]}
  />;
}
