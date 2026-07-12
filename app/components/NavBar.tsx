"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import Callout from "./Callout";

const NavBar = () => {
  let [isCollapse, setCollapse] = useState(true);

  const links = [
    { label: "Home", href: "/" },
    { label: "Appointment", href: "/appointment" },
    { label: "Gift Card", href: "/offer" },
    { label: "Contact", href: "/contact" },
  ];

  const onMenuClick = (e: string) => {
    setCollapse(true);
  };

  return (
    <nav
      className={isCollapse ? "nav collapsible" : "nav collapsible expanded"}
    >
      <Link href="/">
        <Image
          src="/logo_no-buffer.png"
          alt="SABI SALON Logo"
          width={155}
          height={45}
          style={{
            filter: "invert(100%) brightness(200%)",
            margin: "5px",
          }}
          priority
        />
      </Link>

      <div className="nav__toggle" onClick={() => setCollapse(!isCollapse)}>
        {isCollapse ? (
          <MdMenu color="white" size="40" />
        ) : (
          <MdClose color="white" size="40" />
        )}
      </div>

      <ul className="list nav__list collapsible__content">
        <Link href="/appointment" className="btn btn--outline">
          Get Appointment
        </Link>
        {links.map((link) => (
          <li
            key={link.label}
            className="nav__item"
            onClick={() => onMenuClick(link.label)}
          >
            <Link href={link.href}>{link.label.toUpperCase()}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
