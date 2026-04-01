import { toast } from "react-toastify";
import { useState } from "react";

export default function ProductCard({ product, handleAddToCart }) {
  const [added, setAdded] = useState(false);

  const handleBuyNow = () => {
    const success = handleAddToCart(product);

    if (success) {
      toast.success(`${product.name} added to cart!`);
      setAdded(true);
    } else {
      toast.warning("Already added to cart!");
    }
  };

  const tagColor =
    product.tagType === "popular"
      ? "bg-purple-600"
      : product.tagType === "new"
      ? "bg-green-600"
      : "bg-orange-500";

  return (
    <div className="card bg-white shadow-md border border-gray-100 rounded-2xl p-6 hover:shadow-xl transition">
      <div className="flex justify-between items-start">
        <div className="text-4xl">{product.icon}</div>

        <span className={`text-xs text-white px-3 py-1 rounded-full ${tagColor}`}>
          {product.tag}
        </span>
      </div>

      <h3 className="text-xl font-bold mt-4 text-gray-900">{product.name}</h3>

      <p className="text-gray-600 mt-2 text-sm leading-relaxed">
        {product.description}
      </p>

      <div className="mt-5 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-purple-700">
          ${product.price}
        </h2>
        <p className="text-sm text-gray-500">{product.period}</p>
      </div>

      <div className="mt-5">
        <h4 className="font-semibold text-gray-800 mb-2">Features</h4>
        <ul className="space-y-1 text-sm text-gray-600">
          {product.features.map((feature, index) => (
            <li key={index}>✅ {feature}</li>
          ))}
        </ul>
      </div>

      <button
  onClick={handleBuyNow}
  className={`btn text-white rounded-full w-full mt-7 ${
    added
      ? "bg-green-600 hover:bg-green-700"
      : "bg-purple-600 hover:bg-purple-700"
  }`}
>
  {added ? "Added to Cart" : "Buy Now"}
</button>
    </div>
  );
}