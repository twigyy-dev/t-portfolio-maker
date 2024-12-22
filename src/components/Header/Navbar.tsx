import React from "react";
import Link from "next/link";
import "../../app/sass/navstyle.scss";

const Navbar = () => {
  return (
    <section className="nav">
      <ul className="nav-child border-rounded-white">
        <li>
          <Link href="/" className="nav-h1">
            Home
          </Link>
        </li>
        <li className="nav-dropdown">
          <span className="nav-h1">Services</span>
          <ul className="dropdown-menu">
            <li>
              <Link href="/services/web-development" className="dropdown-item">
                Web Development
              </Link>
            </li>
            <li>
              <Link href="/app-development" className="dropdown-item">
                App Development
              </Link>
            </li>
            <li>
              <Link href="/digital-marketing" className="dropdown-item">
                Digital Marketing
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/pricing" className="nav-h1">
            Pricing
          </Link>
        </li>
        <li>
          <Link href="/faqs" className="nav-h1">
            FAQs
          </Link>
        </li>
        <li>
          <Link href="/contact-us" className="nav-h1">
            Contact Us
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Navbar;
