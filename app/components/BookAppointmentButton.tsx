"use client";

import Link from "next/link";

declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      parameters?: Record<string, unknown>,
    ) => void;
  }
}

interface Props {
  name: string;
}

export default function BookingButton({ name = "Appointment" }: Props) {
  const trackBookingClick = () => {
    window.gtag?.("event", "conversion", {
      send_to: "AW-18161433747/tQe5CKLWn88cEJP5hdRD",
      value: 1.0,
      currency: "USD",
    });
  };

  return (
    <Link
      href="/appointment"
      className="btn btn--accent"
      onClick={trackBookingClick}
    >
      {name}
    </Link>
  );
}
