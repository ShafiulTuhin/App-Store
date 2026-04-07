import React from "react";

import TrendingApp from "../components/Home/TrendingApp";
import Banner from "../components/Home/Banner";
import Stats from "../components/Home/Stats";
import { useLoaderData } from "react-router";

const HomePage = () => {
  const apps = useLoaderData();
  console.log(apps);

  return (
    <div className="">
      <Banner></Banner>
      <Stats></Stats>
      <TrendingApp></TrendingApp>
    </div>
  );
};

export default HomePage;
