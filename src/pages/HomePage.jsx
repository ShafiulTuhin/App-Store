import React from "react";

import TrendingApp from "../components/Home/TrendingApp";
import Banner from "../components/Home/Banner";
import Stats from "../components/Home/Stats";

const HomePage = () => {
  return (
    <div className="max-w-[1320px] mx-auto py-20">
      <Banner></Banner>
      <Stats></Stats>
      <TrendingApp></TrendingApp>
    </div>
  );
};

export default HomePage;
