"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ServiceCard from "../components/ServiceCard";

interface Props {
  scrollRef: any;
}

const Service = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const data = [
    {
      icon: "easy",
      title: "BROW & FACIAL THREADING",
      content:
        "Get beautifully shaped brows and smooth skin at SABI SALON in Aurora, IL. We remove unwanted facial hair using traditional cotton thread or waxing for clean, precise, and natural-looking results. Choose the method that works best for your skin and preference.",
      picture: "threading.png",
    },
    {
      icon: "clock",
      title: "EYELASHES SERVICES",
      content:
        "Enhance your natural beauty with professional eyelash services at SABI SALON in Aurora, IL. From lash extensions and lash lifts to lash tinting, we create beautiful, natural-looking lashes customized to your eye shape and style.",
      picture: "eyelashes.webp",
    },
    {
      icon: "easy",
      title: "HAIR SERVICES",
      content:
        "Refresh your look with professional women’s hair services at SABI SALON in Aurora, IL. We offer haircuts, styling, coloring, highlights, keratin treatments, and hair care services customized to your hair type, style, and needs.",
      picture: "hair.jpg",
    },
    {
      icon: "easy",
      title: "BODY WAXING",
      content:
        "Enjoy smooth, soft skin with professional body waxing services at SABI SALON in Aurora, IL. We offer Brazilian waxing, bikini waxing, underarm waxing, leg waxing, arm waxing, full body waxing, and more with gentle care for clean, long-lasting results.",
      picture: "waxing.png",
    },
    {
      icon: "easy",
      title: "PERMANENT MAKEUP",
      content:
        "Wake up looking effortlessly beautiful with professional permanent makeup at SABI SALON in Aurora, IL. We offer microblading, powder brows, shade & blade, permanent eyeliner, and lash line enhancement for natural-looking, long-lasting results customized to your features.",
      picture: "permanent_makeup.webp",
    },
    {
      icon: "computer",
      title: "FACIAL & SKINCARE",
      content:
        "Refresh and nourish your skin with professional facials at SABI SALON in Aurora, IL. We offer customized skincare treatments for deep cleansing, hydration, brightening, and relaxation to help your skin look healthy, smooth, and naturally glowing.",
      picture: "facial.png",
    },
    {
      icon: "clock",
      title: "HENNA & BRIDAL SERVICES",
      content:
        "Celebrate your special day with professional henna and bridal beauty services at SABI SALON in Aurora, IL. We offer custom henna designs, bridal makeup, hairstyling, and personalized beauty services to help you look and feel beautiful for weddings and special occasions.",
      picture: "henna.png",
    },
  ];
  return (
    <section className="container services">
      <h1>OUR SERVICES</h1>

      {data.map((item, index) => (
        <ServiceCard
          key={index}
          title={item.title}
          content={item.content}
          picture={item.picture}
        />
      ))}
    </section>
  );
};

export default Service;
