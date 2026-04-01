import { IoCartOutline } from "react-icons/io5";

export default function Navbar({ cartCount }) {
  return (
    <div className="navbar justify-between bg-white shadow-sm px-4 md:px-10 sticky top-0 z-50">
      <div className="">
        <h2 className="text-4xl font-bold text-purple-700">BigTools</h2>
      </div>

      <div className="hidden md:flex gap-6 font-medium text-gray-700">
        <a className="hover:text-purple-700 cursor-pointer">Products</a>
        <a className="hover:text-purple-700 cursor-pointer">Features</a>
        <a className="hover:text-purple-700 cursor-pointer">Pricing</a>
        <a className="hover:text-purple-700 cursor-pointer">Testimonials</a>
        <a className="hover:text-purple-700 cursor-pointer">FAQ</a>
      </div>

      <div className="flex gap-6 items-center ml-4">
         <span className=" relative">
          <IoCartOutline className=" text-4xl" />

        
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs font-bold px-2 py-[2px] rounded-full">
              {cartCount}
            </span>
          )}
        </span>
          <button>Login</button>
        <button className="btn  bg-purple-600 text-white hover:bg-purple-700 rounded-full px-6">
          Get Started
        </button>
      </div>
    </div>
  );
}