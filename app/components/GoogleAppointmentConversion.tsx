"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      parameters?: Record<string, unknown>,
    ) => void;
  }
}

export default function GoogleAppointmentConversion() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-18161433747/tQe5CKLWn88cEJP5hdRD",
        value: 1.0,
        currency: "USD",
      });
    }
  }, []);

  return null;
}
