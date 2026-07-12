import Link from "next/link";
import GoogleAppointmentConversion from "@/components/GoogleAppointmentConversion";

export default function AppointmentThankYouPage() {
  return (
    <main className="appointment-success">
      <GoogleAppointmentConversion />

      <div className="appointment-success__card">
        <p className="appointment-success__eyebrow">Appointment confirmed</p>

        <h1>Thank you for booking with SABI SALON!</h1>

        <p>
          Your appointment has been successfully scheduled. Please check your
          email or text messages for confirmation details.
        </p>

        <Link href="/" className="btn btn--outline">
          Return Home
        </Link>
      </div>
    </main>
  );
}
