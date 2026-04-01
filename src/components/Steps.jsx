import { FaUser, FaBoxOpen, FaRocket } from "react-icons/fa";

export default function Steps() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-5 md:px-10 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Get Started In 3 Steps
        </h2>

        <p className="text-gray-500 mt-2 text-sm">
          Start using premium digital tools in minutes, not hours.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {/* Card 1 */}
          <div className="relative bg-white shadow-md rounded-2xl p-10 border border-gray-100">
            <span className="absolute top-5 right-5 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              01
            </span>

            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-purple-100 text-purple-600 text-2xl">
              <FaUser />
            </div>

            <h3 className="font-bold text-gray-900 mt-5">Create Account</h3>

            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white shadow-md rounded-2xl p-10 border border-gray-100">
            <span className="absolute top-5 right-5 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              02
            </span>

            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-purple-100 text-purple-600 text-2xl">
              <FaBoxOpen />
            </div>

            <h3 className="font-bold text-gray-900 mt-5">Choose Products</h3>

            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative bg-white shadow-md rounded-2xl p-10 border border-gray-100">
            <span className="absolute top-5 right-5 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              03
            </span>

            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-purple-100 text-purple-600 text-2xl">
              <FaRocket />
            </div>

            <h3 className="font-bold text-gray-900 mt-5">Start Creating</h3>

            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}