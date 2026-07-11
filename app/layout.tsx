import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./css/styles.css";
import "./css/normalize.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SABI SALON",
  description:
    "Beauty Salon in Aurora, IL 60506. Eyebrow Threading, Waxing, Women Hair cut, Hair Removal, Eyelashes, Facial, Permanent Makeup, Henna.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href="https://www.sabisalon.com/" />
      <link rel="icon" href="https://sabisalon.com/logo_no-buffer.png" />
      <title>SABI SALON - Beauty Salon in Aurora, IL 60506.</title>
      <meta
        name="description"
        content="Beauty Salon offering Eyebrow Threading, Waxing, Women Hair cut, Hair Removal, Eyelashes, Facial, Permanent Makeup, Henna in Aurora, IL 60506. Affordable beauty services."
      />
      <meta
        property="og:title"
        content="Beauty Salon for Eyebrow Threading, Waxing, Women hair cut, Hair removal, Eyelashes, Facial, Permanent Makeup, Henna"
      />
      <meta
        property="og:description"
        content="Beauty Salon | Eyebrow Threading | Waxing | Women hair cut | Hair removal | Eyelashes | Permanent Makeup | Facial | Henna in Aurora, IL 60506. Affordable beauty services."
      />
      <meta property="og:type" content="Website" />
      <meta
        property="og:image"
        content="https://sabisalon.com/logo_no-buffer.png"
      />
      <meta property="og:url" content="https://sabisalon.com" />
      <meta
        name="google-site-verification"
        content="IZpAWiDgWmWSrmdnJBYZEvLzQpG0zHaJuQJFCybmcXA"
      />
      <body>
        <NavBar />
        <main>
          {children}
          {/* <SpeedInsights /> */}
        </main>
        <Footer />
      </body>
    </html>
  );
}
