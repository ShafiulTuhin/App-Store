import React from "react";

const Stats = () => {
  return (
    <div className="px-4 lg:px-0 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-8 text-white">
      <h2 className="font-bold text-3xl text-center mb-7">
        Trusted by Millions, Built for You
      </h2>
      <div className="max-w-[1320px] mx-auto grid grid-cols-3 ">
        <div className="lg:space-y-3 space-y-1 text-center">
          <p className="text-[#ffffffc9]">Total Downloads</p>
          <h2 className="lg:text-6xl text-3xl font-bold">29.6M</h2>
          <p className="text-[#ffffffc9]">21% more than last month</p>
        </div>
        <div className="space-y-3 text-center">
          <p className="text-[#ffffffc9]">Total Reviews</p>
          <h2 className="lg:text-6xl text-3xl font-bold">906K</h2>
          <p className="text-[#ffffffc9]">46% more than last month</p>
        </div>
        <div className="space-y-3 text-center">
          <p className="text-[#ffffffc9]">Active Apps</p>
          <h2 className="lg:text-6xl text-3xl font-bold">132+</h2>
          <p className="text-[#ffffffc9]">31 more will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
