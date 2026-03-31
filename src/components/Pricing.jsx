import React from "react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for getting started",
    price: 0,
    period: "month",
    features: ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"],
    buttonText: "Get Started Free",
    buttonClass: "btn-outline"
  },
  {
    name: "Pro",
    description: "Best for professionals",
    price: 29,
    period: "month",
    features: ["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"],
    buttonText: "Start Pro Trial",
    buttonClass: "btn-primary"
  },
  {
    name: "Enterprise",
    description: "For teams and businesses",
    price: 99,
    period: "month",
    features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"],
    buttonText: "Contact Sales",
    buttonClass: "btn-outline"
  }
];

const Pricing = () => {
  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
        <p className="text-center text-gray-600 mb-12">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div key={idx} className="card bg-base-100 shadow-xl border border-gray-200">
              <div className="card-body">
                <h3 className="card-title text-2xl">{plan.name}</h3>
                <p className="text-gray-500">{plan.description}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-500">/{plan.period}</span>
                </div>
                <ul className="list-disc list-inside mt-4 space-y-1 text-sm">
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <div className="card-actions justify-end mt-6">
                  <button className={`btn ${plan.buttonClass} w-full`}>{plan.buttonText}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;