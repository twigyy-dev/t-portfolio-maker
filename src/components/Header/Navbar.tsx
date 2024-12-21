import React from "react";
import "../../app/sass/navstyle.scss";
import Link from "next/link";
import Section from "../Common/Section";

// Nvigation bar section that has different sections for each section
const Navbar = () => {
  return (
    <section className="nav">
      <ul className="nav-child border-rounded-white">
        <li>
          <Link href="/" className="nav-h1">Home</Link>
        </li>
        <li>
          <Link href="/contact-us" className="nav-h1">Services</Link>{" "}
        </li>
        <li>
          <Link href="/contact-us" className="nav-h1">Pricing</Link>
        </li>
        <li>
          <Link href="/contact-us" className="nav-h1">FAQs</Link>{" "}
        </li>
        <li>
          <Link href="/contact-us" className="nav-h1">
            Contact Us
          </Link>{" "}
        </li>
      </ul>
    </section>
  );
};

export default Navbar;
