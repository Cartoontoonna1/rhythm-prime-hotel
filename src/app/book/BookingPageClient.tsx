"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import "./booking.css";

const roomOptions = [
  {
    id: "deluxe",
    name: "Deluxe Room",
    size: "48 sqm",
    rate: 5900,
    image: "/images/home/rhythm-prime_deluxe-room.png.png",
    alt: "Deluxe room at Rhythm Prime with warm materials and a private balcony",
    features: ["Private Balcony", "Rain Shower", "No Bathtub"],
    description:
      "A spacious contemporary retreat with warm materials, generous proportions and a private balcony.",
    cta: "SELECT DELUXE",
    stableId: "select-deluxe",
  },
  {
    id: "premier_ocean_view",
    name: "Premier Ocean View",
    size: "55 sqm",
    rate: 7900,
    image: "/images/home/rhythm-prime_premier-ocean-view.png.png",
    alt: "Premier ocean view room with panoramic views over Phuket",
    features: ["Private Balcony", "Panoramic Ocean View", "Freestanding Bathtub", "Separate Rain Shower"],
    description:
      "Wake to uninterrupted Phuket ocean views in a serene room created for slower mornings and sunset evenings.",
    cta: "SELECT PREMIER",
    stableId: "select-premier",
  },
  {
    id: "signature_suite",
    name: "Rhythm Signature Suite",
    size: "95 sqm",
    rate: 13900,
    image: "/images/home/rhythm-prime_signature-suite.png.png",
    alt: "Signature suite with expansive living area and panoramic views",
    features: ["Separate Living Area", "Dining Area", "Panoramic Ocean View", "Oversized Bathtub", "Private Balcony"],
    description:
      "The signature Rhythm Prime stay with expansive living spaces and panoramic views across the horizon.",
    cta: "SELECT SIGNATURE SUITE",
    stableId: "select-signature",
  },
];

const extraOptions = [
  {
    id: "airport_transfer",
    label: "AIRPORT TRANSFER",
    price: 1200,
    detail: "฿1,200 / trip",
  },
  {
    id: "breakfast_for_two",
    label: "BREAKFAST FOR TWO",
    price: 1100,
    detail: "฿1,100 / night",
  },
  {
    id: "sunset_cocktail",
    label: "SUNSET COCKTAIL EXPERIENCE",
    price: 1600,
    detail: "฿1,600 / stay",
  },
  {
    id: "spa_credit",
    label: "SPA CREDIT",
    price: 2000,
    detail: "฿1,000 / stay",
  },
];

function formatThb(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "THB",
    maximumFractionDigits: 0,
  }).format(value);
}

function getNightCount(checkIn: string, checkOut: string) {
  if (!checkIn || !checkOut) return 0;
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const diff = end.getTime() - start.getTime();
  return Math.max(0, Math.round(diff / (1000 * 60 * 60 * 24)));
}

function getRoomIdFromParam(roomParam: string | null) {
  if (roomParam === "deluxe") {
    return "deluxe";
  }

  if (roomParam === "premier") {
    return "premier_ocean_view";
  }

  if (roomParam === "signature") {
    return "signature_suite";
  }

  return null;
}

export default function BookingPageClient() {
  const searchParams = useSearchParams();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");
  const [rooms, setRooms] = useState("1");
  const [error, setError] = useState("");
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(() => getRoomIdFromParam(searchParams.get("room")));
  const [showAvailability, setShowAvailability] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [guestDetails, setGuestDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    specialRequests: "",
  });

  const nights = useMemo(() => getNightCount(checkIn, checkOut), [checkIn, checkOut]);
  const selectedRoom = roomOptions.find((room) => room.id === selectedRoomId) ?? null;
  const selectedRoomRate = selectedRoom?.rate ?? 0;
  const extraTotal = selectedExtras.reduce((sum, extraId) => {
    const extra = extraOptions.find((item) => item.id === extraId);
    return sum + (extra?.price ?? 0);
  }, 0);
  const estimatedTotal = selectedRoomRate * nights * Number(rooms) + extraTotal;

  const handleSearch = () => {
    if (!checkIn || !checkOut) {
      setError("Please choose both a check-in and check-out date.");
      return;
    }

    if (new Date(checkOut) <= new Date(checkIn)) {
      setError("Check-out must be after check-in.");
      return;
    }

    setError("");
    setShowAvailability(true);
    setShowDetails(false);
    setShowReview(false);
    setShowConfirmation(false);
    document.getElementById("availability")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSelectRoom = (roomId: string) => {
    setSelectedRoomId(roomId);
    setShowDetails(false);
    setShowReview(false);
    setShowConfirmation(false);
    setTimeout(() => {
      document.getElementById("extras")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  const handleExtraToggle = (extraId: string) => {
    setSelectedExtras((current) =>
      current.includes(extraId) ? current.filter((item) => item !== extraId) : [...current, extraId]
    );
  };

  const handleContinueToDetails = () => {
    setShowDetails(true);
    setShowReview(false);
    setShowConfirmation(false);
    setTimeout(() => {
      document.getElementById("guest-details")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  const handleReview = () => {
    setShowReview(true);
    setShowConfirmation(false);
    setTimeout(() => {
      document.getElementById("review")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  const handleComplete = () => {
    setShowConfirmation(true);
    setTimeout(() => {
      document.getElementById("confirmation")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  const bookingSummary = [
    ["Check-in", checkIn || "Select date"],
    ["Check-out", checkOut || "Select date"],
    ["Guests", `${adults} Adults${children !== "0" ? `, ${children} Children` : ""}`],
    ["Rooms", rooms],
  ];

  return (
    <main className="booking-page" data-event="booking_start">
      <header className="internal-header">
        <div className="container internal-header__inner">
          <Link href="/" className="brand brand--dark">
            RHYTHM PRIME
          </Link>

          <nav className="internal-nav" aria-label="Booking page navigation">
            <Link href="/">Home</Link>
            <Link href="/hotel">Hotel</Link>
            <Link href="/#rooms">Rooms</Link>
            <Link href="/#dining">Dining</Link>
            <Link href="/#pool">Pool</Link>
            <Link href="/#rooftop">Rooftop</Link>
            <Link href="/#wellness">Wellness</Link>
            <Link href="/#meetings">Meetings & Events</Link>
          </nav>

          <Link href="/book" className="book-button book-button--current">
            BOOK NOW
          </Link>
        </div>
      </header>

      <div className="container breadcrumb" aria-label="Breadcrumb">
        <Link href="/">HOME</Link>
        <span>/</span>
        <span>BOOK YOUR STAY</span>
      </div>

      <section className="booking-hero">
        <div className="container booking-hero__content">
          <p className="eyebrow">PORTFOLIO BOOKING PROTOTYPE</p>
          <h1>Book Your Stay</h1>
          <p className="booking-hero__copy">
            Choose your dates, guests and room to begin your Rhythm Prime stay.
          </p>
        </div>
      </section>

      <section className="booking-search-section">
        <div className="container search-shell">
          <div className="search-fields">
            <label className="field">
              <span>CHECK-IN</span>
              <input id="booking-checkin" type="date" value={checkIn} onChange={(event) => setCheckIn(event.target.value)} />
            </label>
            <label className="field">
              <span>CHECK-OUT</span>
              <input id="booking-checkout" type="date" value={checkOut} onChange={(event) => setCheckOut(event.target.value)} />
            </label>
            <label className="field">
              <span>ADULTS</span>
              <select id="booking-adults" value={adults} onChange={(event) => setAdults(event.target.value)}>
                {Array.from({ length: 4 }, (_, index) => (
                  <option key={index + 1} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </select>
            </label>
            <label className="field">
              <span>CHILDREN</span>
              <select id="booking-children" value={children} onChange={(event) => setChildren(event.target.value)}>
                {Array.from({ length: 4 }, (_, index) => (
                  <option key={index} value={index}>
                    {index}
                  </option>
                ))}
              </select>
            </label>
            <label className="field">
              <span>ROOMS</span>
              <select id="booking-rooms" value={rooms} onChange={(event) => setRooms(event.target.value)}>
                {Array.from({ length: 3 }, (_, index) => (
                  <option key={index + 1} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <button id="search-availability" className="btn btn-primary search-button" data-event="search_availability" onClick={handleSearch}>
            SEARCH AVAILABILITY
          </button>

          {error ? <p className="form-error">{error}</p> : null}
        </div>
      </section>

      {showAvailability || selectedRoom ? (
        <section className="container booking-summary" aria-live="polite">
          <div className="summary-card">
            <p className="eyebrow">BOOKING SUMMARY</p>
            <div className="summary-grid">
              {bookingSummary.map(([label, value]) => (
                <div key={label}>
                  <strong>{label}</strong>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section id="availability" className="container room-section">
        <div className="section-heading">
          <p className="eyebrow">ROOM INVENTORY</p>
          <h2>Select Your Retreat.</h2>
          <p>Choose the room that best suits your pace, your stay and the way you want to begin.</p>
        </div>

        <div className="room-grid">
          {roomOptions.map((room) => {
            const isSelected = selectedRoomId === room.id;
            return (
              <article key={room.id} className={`room-card room-card--booking ${isSelected ? "room-card--selected" : ""}`}>
                <div className="image-frame room-image">
                  <Image src={room.image} alt={room.alt} width={900} height={1100} />
                </div>
                <div className="room-card__body">
                  <div className="room-card__head">
                    <div>
                      <h3>{room.name}</h3>
                      <p>{room.size}</p>
                    </div>
                    <span className="room-rate">{formatThb(room.rate)} / night</span>
                  </div>
                  <ul className="room-highlights">
                    {room.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <p>{room.description}</p>
                  <button
                    id={room.stableId}
                    className="btn btn-primary room-card__button"
                    data-event="select_room"
                    data-room-type={room.id}
                    onClick={() => handleSelectRoom(room.id)}
                  >
                    {room.cta}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {selectedRoom ? (
        <section id="extras" className="extras-section">
          <div className="container extras-shell">
            <div className="section-heading">
              <p className="eyebrow">STEP 2 · EXTRAS</p>
              <h2>Make It Yours.</h2>
            </div>

            <div className="extras-grid">
              {extraOptions.map((extra) => (
                <label key={extra.id} className={`extra-option ${selectedExtras.includes(extra.id) ? "extra-option--selected" : ""}`}>
                  <input
                    type="checkbox"
                    checked={selectedExtras.includes(extra.id)}
                    onChange={() => handleExtraToggle(extra.id)}
                    data-event="add_extra"
                    data-extra-name={extra.id}
                  />
                  <div>
                    <strong>{extra.label}</strong>
                    <p>{extra.detail}</p>
                  </div>
                </label>
              ))}
            </div>

            <div className="section-actions section-actions--inline">
              <button id="booking-continue-details" className="btn btn-primary" data-event="booking_step" data-booking-step="extras" onClick={handleContinueToDetails}>
                CONTINUE TO GUEST DETAILS
              </button>
            </div>
          </div>
        </section>
      ) : null}

      {showDetails || showReview || showConfirmation ? (
        <section id="guest-details" className="container guest-details-section">
          <div className="section-heading">
            <p className="eyebrow">STEP 3 · GUEST DETAILS</p>
            <h2>Welcome You In.</h2>
          </div>

          <form className="guest-form" onSubmit={(event) => event.preventDefault()}>
            <label>
              <span>First Name</span>
              <input value={guestDetails.firstName} onChange={(event) => setGuestDetails({ ...guestDetails, firstName: event.target.value })} />
            </label>
            <label>
              <span>Last Name</span>
              <input value={guestDetails.lastName} onChange={(event) => setGuestDetails({ ...guestDetails, lastName: event.target.value })} />
            </label>
            <label>
              <span>Email</span>
              <input type="email" value={guestDetails.email} onChange={(event) => setGuestDetails({ ...guestDetails, email: event.target.value })} />
            </label>
            <label>
              <span>Phone</span>
              <input value={guestDetails.phone} onChange={(event) => setGuestDetails({ ...guestDetails, phone: event.target.value })} />
            </label>
            <label>
              <span>Country</span>
              <input value={guestDetails.country} onChange={(event) => setGuestDetails({ ...guestDetails, country: event.target.value })} />
            </label>
            <label className="guest-form__full">
              <span>Special Requests</span>
              <textarea value={guestDetails.specialRequests} onChange={(event) => setGuestDetails({ ...guestDetails, specialRequests: event.target.value })} />
            </label>
          </form>

          <div className="section-actions section-actions--inline">
            <button id="booking-review" className="btn btn-primary" data-event="booking_step" data-booking-step="guest_details" onClick={handleReview}>
              REVIEW BOOKING
            </button>
          </div>
        </section>
      ) : null}

      {showReview || showConfirmation ? (
        <section id="review" className="container review-section">
          <div className="section-heading">
            <p className="eyebrow">STEP 4 · REVIEW</p>
            <h2>Your Stay, Reviewed.</h2>
            <p>Prototype pricing for portfolio demonstration only.</p>
          </div>

          <div className="review-card">
            <div className="review-card__block">
              <h3>Dates</h3>
              <p>{checkIn} · {checkOut}</p>
            </div>
            <div className="review-card__block">
              <h3>Guests</h3>
              <p>{adults} adults, {children} children, {rooms} room(s)</p>
            </div>
            <div className="review-card__block">
              <h3>Selected Room</h3>
              <p>{selectedRoom?.name ?? "No room selected"}</p>
            </div>
            <div className="review-card__block">
              <h3>Selected Extras</h3>
              <p>{selectedExtras.length ? selectedExtras.map((extraId) => extraOptions.find((extra) => extra.id === extraId)?.label).join(", ") : "No extras selected"}</p>
            </div>
            <div className="review-card__block review-card__block--total">
              <h3>Estimated Total</h3>
              <p>{formatThb(estimatedTotal)}</p>
            </div>
          </div>

          <div className="section-actions section-actions--inline">
            <button id="booking-complete" className="btn btn-primary" data-event="booking_complete" onClick={handleComplete}>
              COMPLETE DEMO BOOKING
            </button>
          </div>
        </section>
      ) : null}

      {showConfirmation ? (
        <section id="confirmation" className="container confirmation-section">
          <div className="confirmation-card">
            <p className="eyebrow">CONFIRMED</p>
            <h2>Your Rhythm Begins Here.</h2>
            <p>
              Thank you for exploring the Rhythm Prime booking experience. This is a portfolio prototype and no real reservation has been created.
            </p>
          </div>
        </section>
      ) : null}

      {selectedRoom ? (
        <div className="sticky-cta" aria-live="polite">
          <div className="container sticky-cta__inner">
            <div>
              <p className="eyebrow">SELECTED ROOM</p>
              <strong>{selectedRoom.name}</strong>
            </div>
            <div>
              <p className="eyebrow">STARTING RATE</p>
              <strong>{formatThb(selectedRoom.rate)} / night</strong>
            </div>
            <button id="booking-continue-extras" className="btn btn-primary" data-event="booking_step" data-booking-step="room_selected" onClick={() => {
              document.getElementById("extras")?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}>
              CONTINUE TO EXTRAS
            </button>
          </div>
        </div>
      ) : null}
    </main>
  );
}
