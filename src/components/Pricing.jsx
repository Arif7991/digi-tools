export default function Pricing() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-5 md:px-10 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 mt-2 text-sm">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {/* Starter */}
          <div className="bg-white shadow-md rounded-2xl p-8 text-left border border-gray-100">
            <h3 className="font-bold text-gray-900 text-lg">Starter</h3>
            <p className="text-gray-500 text-sm mt-1">
              Perfect for getting started
            </p>

            <h2 className="text-4xl font-bold text-gray-900 mt-6">
              $0<span className="text-sm font-medium text-gray-500">/month</span>
            </h2>

            <ul className="mt-6 space-y-3 text-sm text-gray-600">
              <li>✅ Access to 10 free tools</li>
              <li>✅ Basic templates</li>
              <li>✅ Community support</li>
              <li>✅ 1 project per month</li>
            </ul>

            <button className="btn bg-purple-600 hover:bg-purple-700 text-white rounded-full w-full mt-8">
              Get Started Free
            </button>
          </div>

          {/* Pro */}
          <div className="relative bg-gradient-to-b from-purple-700 to-purple-600 text-white shadow-lg rounded-2xl p-8 text-left scale-105">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-4 py-1 rounded-full">
              Most Popular
            </span>

            <h3 className="font-bold text-lg">Pro</h3>
            <p className="text-sm opacity-90 mt-1">
              Best for professionals and businesses
            </p>

            <h2 className="text-4xl font-bold mt-6">
              $29<span className="text-sm font-medium opacity-90">/month</span>
            </h2>

            <ul className="mt-6 space-y-3 text-sm">
              <li>✅ Access to all premium tools</li>
              <li>✅ Unlimited templates</li>
              <li>✅ Priority support</li>
              <li>✅ Unlimited projects</li>
              <li>✅ Cloud sync</li>
              <li>✅ Advanced analytics</li>
            </ul>

            <button className="btn bg-white text-purple-700 hover:bg-gray-200 rounded-full w-full mt-8">
              Start Pro Trial
            </button>
          </div>

          {/* Enterprise */}
          <div className="bg-white shadow-md rounded-2xl p-8 text-left border border-gray-100">
            <h3 className="font-bold text-gray-900 text-lg">Enterprise</h3>
            <p className="text-gray-500 text-sm mt-1">
              For teams and businesses
            </p>

            <h2 className="text-4xl font-bold text-gray-900 mt-6">
              $99<span className="text-sm font-medium text-gray-500">/month</span>
            </h2>

            <ul className="mt-6 space-y-3 text-sm text-gray-600">
              <li>✅ Everything in Pro</li>
              <li>✅ Team collaboration</li>
              <li>✅ Custom integrations</li>
              <li>✅ Dedicated support</li>
              <li>✅ SLA guarantee</li>
              <li>✅ Custom branding</li>
            </ul>

            <button className="btn bg-purple-600 hover:bg-purple-700 text-white rounded-full w-full mt-8">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}