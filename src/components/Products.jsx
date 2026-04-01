import { use } from "react";
import { fetchProducts } from "../data/productsResource";
import ProductCard from "./ProductCard";

export default function Products({ handleAddToCart }) {
  const products = use(fetchProducts());

  return (
    <div className="grid md:grid-cols-3 gap-7">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
}