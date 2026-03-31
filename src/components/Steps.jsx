import React from "react";

const Steps = () => {
  const steps = [
    { number: "01", title: "Create Account", desc: "Sign up for free in seconds. No credit card required to get started." },
    { number: "02", title: "Choose Products", desc: "Browse our catalog and select the tools that fit your needs." },
    { number: "03", title: "Start Creating", desc: "Download and start using your premium tools immediately." },
  ];

  return (
    <section id="features" className="py-16 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Get Started In 3 Steps</h2>
        <p className="text-center text-gray-500 mb-12">Start using premium digital tools in minutes, not hours.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="text-center">
              <div className="text-5xl font-bold text-primary mb-4">{step.number}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-500">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;