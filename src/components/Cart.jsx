import React from "react";
import { toast } from "react-toastify";

const Cart = ({ cartItems, removeFromCart, clearCart }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    clearCart();
    toast.success("Order placed! Cart cleared.");
  };

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-4 bg-base-100 rounded-lg shadow">
            <div>
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
            </div>
            <button
              className="btn btn-sm btn-outline btn-error"
              onClick={() => {
                removeFromCart(item.id);
                toast.info(`${item.name} removed from cart.`);
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-between items-center border-t pt-4">
        <span className="text-xl font-bold">Total: ${total.toFixed(2)}</span>
        <button className="btn btn-success" onClick={handleCheckout}>
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;