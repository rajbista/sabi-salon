import React from "react";

const BookingPage = () => {
  const bookingUrl =
    "https://book.squareup.com/appointments/i3cqi85ohchtbg/location/L42P9GCP7GMCB/services";
  return (
    <main className="booking-page">
      <div className="booking-container">
        <iframe
          src={bookingUrl}
          title="Book an appointment with SABI SALON"
          width="100%"
          height="900"
          loading="lazy"
          allow="payment"
        />
      </div>
    </main>
  );
};

export default BookingPage;
