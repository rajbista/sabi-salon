import React from "react";

// export default function Appointment() {
//   return <div>Appointment</div>;
// }

const BookingPage = () => {
  const bookingUrl =
    "https://book.squareup.com/appointments/i3cqi85ohchtbg/location/L42P9GCP7GMCB/services";

  return (
    <main className="booking-page">
      {/* <section className="booking-header"> */}
      {/* <h1>Book Your Appointment</h1> */}
      {/* <p>Select your service, preferred date, and appointment time below.</p> */}
      {/* </section> */}

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
