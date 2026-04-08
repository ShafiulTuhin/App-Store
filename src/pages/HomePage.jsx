import TrendingApp from "../components/Home/TrendingApp";
import Banner from "../components/Home/Banner";
import Stats from "../components/Home/Stats";

const HomePage = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Stats></Stats>
      <TrendingApp></TrendingApp>
    </div>
  );
};

export default HomePage;
