import React from "react";
import { toast } from "react-toastify";

const ProductCard = ({ product, addToCart }) => {
  const { name, description, price, period, tag, features, icon } = product;

  const handleBuyNow = () => {
    addToCart(product);
    toast.success(`${name} added to cart!`);
  };

  return (
    <div className="card bg-base-100 shadow-xl border border-gray-100">
      <div className="card-body">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <span className="text-3xl">{icon}</span>
            <h2 className="card-title">{name}</h2>
          </div>
          {tag && <div className="badge badge-primary">{tag}</div>}
        </div>
        <p className="text-sm text-gray-500">{description}</p>
        <div className="flex items-baseline gap-2 mt-2">
          <span className="text-2xl font-bold">${price}</span>
          <span className="text-sm text-gray-500">/{period}</span>
        </div>
        <ul className="list-disc list-inside text-sm mt-2 space-y-1">
          {features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary" onClick={handleBuyNow}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;