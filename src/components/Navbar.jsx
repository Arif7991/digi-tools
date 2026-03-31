// src/components/Navbar.jsx
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ cartCount }) => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar bg-base-100 shadow-md px-6 py-3 sticky top-0 z-50">
      <div className="flex-1">
        <button
          className="text-2xl font-bold"
          onClick={() => scrollTo("home")}
        >
          DigiTools
        </button>
      </div>
      <div className="flex-none gap-4">
        <button className="btn btn-ghost" onClick={() => scrollTo("products")}>
          Products
        </button>
        <button className="btn btn-ghost" onClick={() => scrollTo("features")}>
          Features
        </button>
        <button className="btn btn-ghost" onClick={() => scrollTo("pricing")}>
          Pricing
        </button>
        <button className="btn btn-ghost" onClick={() => scrollTo("testimonials")}>
          Testimonials
        </button>
        <button className="btn btn-ghost" onClick={() => scrollTo("faq")}>
          FAQ
        </button>
        <button className="btn btn-ghost" onClick={() => scrollTo("login")}>
          Login
        </button>
        <button className="btn btn-primary" onClick={() => scrollTo("pricing")}>
          Get Started
        </button>
        <div className="indicator cursor-pointer" onClick={() => scrollTo("cart")}>
          <FaShoppingCart className="text-2xl" />
          {cartCount > 0 && (
            <span className="badge badge-sm indicator-item">{cartCount}</span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;