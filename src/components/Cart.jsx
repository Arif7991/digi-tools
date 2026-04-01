import { toast } from "react-toastify";

export default function Cart({ cart, handleRemoveFromCart, handleCheckout }) {
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const handleProceedCheckout = () => {
    if (cart.length === 0) {
      toast.error("Cart is empty!");
      return;
    }

    handleCheckout();
    toast.success("Checkout successful! Cart cleared.");
  };

  return (
    <div className="container mx-auto">
      {cart.length === 0 ? (
        <div className="bg-purple-50 text-center py-40 rounded-xl">
          <h2 className="text-xl font-bold text-gray-800">
            Your Cart is Empty 🛒
          </h2>
          <p className="text-gray-600 mt-2">
            Add products to see them here.
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-white shadow-md p-5 rounded-xl"
            >
              <div className="flex items-center gap-4">
                <p className="text-3xl">{item.icon}</p>
                <div>
                  <h3 className="font-bold text-gray-900">{item.name}</h3>
                  <p className="text-gray-500 text-sm">${item.price}</p>
                </div>
              </div>

              <button
                onClick={() => {
                  handleRemoveFromCart(item.id);
                  toast.info(`${item.name} removed`);
                }}
                className="btn btn-sm bg-red-500 hover:bg-red-600 text-white rounded-full"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="bg-purple-50 p-6 rounded-xl shadow-sm">
            <div className="flex justify-between mb-4">
              <p className="font-bold text-gray-800">
                Total Products: {cart.length}
              </p>

              <p className="font-bold text-purple-700">
                Total Price: ${totalPrice}
              </p>
            </div>

            <button
              onClick={handleProceedCheckout}
              className="btn bg-purple-600 hover:bg-purple-700 text-white rounded-full w-full"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}