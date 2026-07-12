import Link from "next/link";
const Callout = () => {
  return (
    <div className="container block">
      <div className="callout callout--primary callout-signup">
        <div className="grid grid--1x2">
          <div className="callout__content">
            <h2 className="callout__heading">Ready to make an Appointment?</h2>
            <p>
              Call us: (630) 888-2098
              <a href="tel:630-888-2098" />
            </p>
          </div>
          {/* <a href="tel:630-888-2098" className="btn btn--accent">
            Get Appointment
          </a> */}
          {/* <Link to="/appointment" className="btn btn--accent">
            Get Appointment
          </Link> */}
          <Link href="/appointment" className="btn btn--accent">
            Get Appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Callout;
