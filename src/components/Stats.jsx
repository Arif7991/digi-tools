import React from "react";

const Stats = () => {
  const stats = [
    { label: "Projects Completed", value: "50K+" },
    { label: "Happy Clients", value: "200+" },
    { label: "Stars", value: "4.9" },
  ];

  return (
    <section className="stats stats-vertical lg:stats-horizontal shadow w-full my-12">
      {stats.map((stat, idx) => (
        <div className="stat" key={idx}>
          <div className="stat-value">{stat.value}</div>
          <div className="stat-title">{stat.label}</div>
        </div>
      ))}
    </section>
  );
};

export default Stats;