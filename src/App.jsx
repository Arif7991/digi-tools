import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import ToggleSection from "./components/ToggleSection";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import WorkFlow from "./components/WorkFlow";

export default function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const alreadyAdded = cart.find((item) => item.id === product.id);

    if (alreadyAdded) {
      return false;
    }

    setCart([...cart, product]);
    return true;
  };

  const handleRemoveFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const handleCheckout = () => {
    setCart([]);
  };

  return (
    <div className="bg-white">
      <Navbar cartCount={cart.length} />
      <Banner />
      <Stats />

      <ToggleSection
        cart={cart}
        handleAddToCart={handleAddToCart}
        handleRemoveFromCart={handleRemoveFromCart}
        handleCheckout={handleCheckout}
      />

      <Steps />
      <Pricing />
      <WorkFlow />
      <Footer />
    </div>
  );
}