import FooterItem from "./FooterItem";
import Image from "next/image";

interface Props {
  scrollRef: any;
}
const Footer = () => {
  const contact = [
    { ref: "#", label: "1276 N Lake St, Aurora, IL 60506" },
    { ref: "#", label: "Phone: (630) 888-2098" },
    { ref: "#", label: "thesabisalon@gmail.com" },
  ];
  const businessHours = [
    { ref: "#", label: "MONDAY - SATURDAY" },
    { ref: "#", label: " 10 AM - 7 PM" },
    { ref: "#", label: "SUNDAY" },
    { ref: "#", label: "Closed" },
  ];
  const followUs = [
    { ref: "https://www.instagram.com/sabi_salom/", label: "InstaGram" },
    { ref: "https://www.facebook.com/thesabisalon/", label: "Facebook" },
    { ref: "https://www.tiktok.com/@thesabisalon", label: "TikTok" },
  ];

  return (
    <footer className="footer grid footer__sections">
      <FooterItem
        title="Contact Us"
        icon="chevron"
        content={contact}
        expanded={true}
      />
      <FooterItem
        title="Business Hour"
        icon="chevron"
        content={businessHours}
      />
      <FooterItem title="Follow Us" icon="chevron" content={followUs} />

      <section className="collapsible__footer footer__brand">
        <Image
          src="/logo_no-buffer.png"
          alt="SABI SALON Logo"
          width={155}
          height={45}
          style={{
            filter: "invert(100%) brightness(200%)",
          }}
          priority
        />

        <p className="footer__copyright">Copyright &copy;</p>
      </section>
    </footer>
  );
};

export default Footer;
