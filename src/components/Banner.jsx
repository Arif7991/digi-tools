import React from "react";

const Banner = () => {
  return (
    <>
      <div id="home" className="hero min-h-[600px] bg-base-100">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <div className="badge badge-primary mb-4">New: All-Powered Tools Available</div>
            <h1 className="text-5xl font-bold">Supercharge Your Digital Workflow</h1>
            <p className="py-6 text-lg">
              Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
            </p>
            <div className="flex justify-center gap-4">
              <button className="btn btn-primary" onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}>
                Explore Products
              </button>
              <button className="btn btn-outline">Watch Demo</button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats stats-vertical lg:stats-horizontal shadow w-full my-12">
        <div className="stat">
          <div className="stat-value">60K+</div>
          <div className="stat-title">Active Users</div>
        </div>
        <div className="stat">
          <div className="stat-value">200+</div>
          <div className="stat-title">Premium Tools</div>
        </div>
        <div className="stat">
          <div className="stat-value">4.9</div>
          <div className="stat-title">Rating</div>
        </div>
      </div>
    </>
  );
};

export default Banner;