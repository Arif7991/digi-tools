import React from "react";

const CTA = () => {
  return (
    <section className="py-16 bg-primary text-primary-content">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready To Transform Your Workflow?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Join thousands of professionals who are already using DigiTools to work smarter.
          <br />Start your free trial today
        </p>
        <div className="flex justify-center gap-4">
          <button className="btn btn-secondary">Explore Products</button>
          <button className="btn btn-outline btn-light">View Pricing</button>
        </div>
        <p className="text-sm mt-6 opacity-80">1-day free trial - No credit card required - Cancel anytime</p>
      </div>
    </section>
  );
};

export default CTA;