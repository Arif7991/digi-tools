import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar bg-base-100 shadow-md px-6 py-4">
      <div className="navbar-start">
        <a className="text-2xl font-bold">DigiTools</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li><a>Products</a></li>
          <li><a>Features</a></li>
          <li><a>Pricing</a></li>
          <li><a>Testimonials</a></li>
          <li><a>FAQ</a></li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <a className="btn btn-ghost">Login</a>
        <a className="btn btn-primary">Get Started</a>
        <div className="indicator ml-2">
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