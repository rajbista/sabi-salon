import React from "react";
import Service from "./service/page";
import Testimonail from "./components/Testimonail";
import Callout from "./components/Callout";

export default function page() {
  return (
    <>
      <Service />
      <div />
      <div className="container block">
        <div className="callout callout--primary callout-signup">
          <div className="grid grid--1x2">
            <div className="callout__content">
              <h2 className="callout__heading">Ready to make an div?</h2>
              <p>
                Call us: (630) 888-2098
                <a href="tel:630-888-2098" />
              </p>
            </div>
            <a href="tel:630-888-2098" className="btn btn--accent">
              Get Appointment
            </a>
          </div>
        </div>
      </div>
      <div />
      <Service />
      <Testimonail />
      <Callout />
    </>
  );
}
