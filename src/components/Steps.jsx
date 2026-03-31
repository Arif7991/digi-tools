import React from "react";

const Steps = () => {
  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Get Started In 3 Steps</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-4">01</div>
            <h3 className="text-xl font-semibold mb-2">Create Account</h3>
            <p className="text-gray-600">Sign up for free in seconds. No credit card required to get started.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-4">02</div>
            <h3 className="text-xl font-semibold mb-2">Choose Products</h3>
            <p className="text-gray-600">Browse our catalog and select the tools that fit your needs.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-4">03</div>
            <h3 className="text-xl font-semibold mb-2">Start Creating</h3>
            <p className="text-gray-600">Download and start using your premium tools immediately.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;