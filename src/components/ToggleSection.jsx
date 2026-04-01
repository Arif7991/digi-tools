import { useState, Suspense } from "react";
import Products from "./Products";
import Cart from "./Cart";

export default function ToggleSection({
  cart,
  handleAddToCart,
  handleRemoveFromCart,
  handleCheckout,
}) {
  const [activeTab, setActiveTab] = useState("products");

  return (
    <div className="max-w-6xl mx-auto px-5 md:px-10 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">
          Premium Digital Tools
        </h2>
        <p className="text-gray-600 mt-2">
          Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.
        </p>
      </div>

      {/* Toggle Buttons Like Figma */}
      <div className="flex justify-center mb-12">
        <div className="border border-purple-600 rounded-full flex w-[320px]">
          {/* Product Button */}
          <button
            onClick={() => setActiveTab("products")}
            className={`w-1/2 py-2 rounded-full font-semibold transition ${
              activeTab === "products"
                ? "bg-purple-600 text-white"
                : "text-purple-700"
            }`}
          >
            Product
          </button>

          {/* Cart Button */}
          <button
            onClick={() => setActiveTab("cart")}
            className={`w-1/2 py-2 rounded-full font-semibold transition ${
              activeTab === "cart"
                ? "bg-purple-600 text-white"
                : "text-purple-700"
            }`}
          >
            Cart
            <span className="ml-2">{cart.length > 0 && `(${cart.length})`}</span>
          </button>
        </div>
      </div>

      {activeTab === "products" ? (
        <Suspense
          fallback={
            <div className="text-center py-14">
              <span className="loading loading-spinner loading-lg text-purple-600"></span>
              <p className="text-gray-500 mt-4">Loading products...</p>
            </div>
          }
        >
          <Products handleAddToCart={handleAddToCart} />
        </Suspense>
      ) : (
        <Cart
          cart={cart}
          handleRemoveFromCart={handleRemoveFromCart}
          handleCheckout={handleCheckout}
        />
      )}
    </div>
  );
}