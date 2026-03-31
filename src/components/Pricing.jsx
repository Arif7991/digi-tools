import React from "react";

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "/month",
    description: "Perfect for getting started",
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    buttonText: "Get Started Free",
    buttonClass: "btn-outline",
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "Best for professionals",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
    buttonText: "Start Pro Trial",
    buttonClass: "btn-primary",
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/month",
    description: "For teams and businesses",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    buttonText: "Contact Sales",
    buttonClass: "btn-outline",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
        <p className="text-center text-gray-500 mb-12">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div key={idx} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-2xl">{plan.name}</h3>
                <p className="text-sm text-gray-500">{plan.description}</p>
                <p className="text-4xl font-bold mt-2">
                  {plan.price}
                  <span className="text-base font-normal text-gray-500">{plan.period}</span>
                </p>
                <ul className="list-disc list-inside mt-4 space-y-1">
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