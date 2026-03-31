import React, { useState } from "react";
import ProductGrid from "./ProductGrid";
import Cart from "./Cart";

const PremiumTools = ({ cartItems, addToCart, removeFromCart, clearCart }) => {
  const [activeView, setActiveView] = useState("products");

  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Premium Digital Tools</h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
        </p>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            className={`btn ${activeView === "products" ? "btn-primary" : "btn-outline"}`}
            onClick={() => setActiveView("products")}
          >
            Products
          </button>
          <button
            className={`btn ${activeView === "cart" ? "btn-primary" : "btn-outline"}`}
            onClick={() => setActiveView("cart")}
          >
            Cart ({cartItems.length})
          </button>
        </div>

        {activeView === "products" ? (
          <ProductGrid addToCart={addToCart} />
        ) : (
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} clearCart={clearCart} />
        )}
      </div>
    </section>
  );
};

export default PremiumTools;