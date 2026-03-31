import React, { useState } from "react";
import ProductGrid from "./ProductGrid";
import Cart from "./Cart";

const MainSection = ({ cartItems, addToCart, removeFromCart, clearCart }) => {
  const [activeView, setActiveView] = useState("products");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center gap-4 mb-8">
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
        <Cart
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
        />
      )}
    </div>
  );
};

export default MainSection;