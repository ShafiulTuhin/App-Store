import { FaAppStore, FaGooglePlay } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="text-center">
      <h2 className="font-bold text-[#001931] text-5xl">
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
    </div>
  );
};

export default Banner;
