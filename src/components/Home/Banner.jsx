import { FaAppStore, FaGooglePlay } from "react-icons/fa";
import BannerImg from "../../assets/images/hero.png";
const Banner = () => {
  return (
    <div className="text-center max-w-[1320px] mx-auto lg:pt-20 pt-8">
      <h2 className="font-bold text-[#001931] lg:text-5xl text-3xl">
        We build <br /> <span className="text-purple-500">Productive</span> Apps
      </h2>
      <p className="text-[#627382] mt-5 mb-10">
        At HERO.IO , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. <br /> Our goal is to turn your
        ideas into digital experiences that truly make an impact.
      </p>
      <div className="flex justify-center gap-4">
        <button className="flex justify-center gap-3 items-center btn shadow">
          <FaGooglePlay color="purple"></FaGooglePlay>
          Google Play
        </button>
        <button className="flex justify-center gap-3 items-center btn shadow">
          <FaAppStore color="purple"></FaAppStore>
          App Store
        </button>
      </div>
      <div>
        <div className="mt-6">
          <img src={BannerImg} alt="" className="mx-auto image-full" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
