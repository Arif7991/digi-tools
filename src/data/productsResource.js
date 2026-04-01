let productsPromise;

export function fetchProducts() {
  if (!productsPromise) {
    productsPromise = fetch("/products.json").then((res) => res.json());
  }
  return productsPromise;
}