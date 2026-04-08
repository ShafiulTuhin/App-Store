import React, { useEffect, useState } from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";
import { HashLoader } from "react-spinners";

const TrendingApp = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(apps);
  const navigate = useNavigate();
  const handleShowAll = () => {
    navigate("/apps");
  };

  useEffect(() => {
    const fetchApps = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();

      setTimeout(() => {
        setApps(data);
        setLoading(false);
      }, 2000);
    };
    fetchApps();
  }, []);

  return (
    <div className="lg:py-20 py-10 px-4 lg:px-0 bg-slate-100">
      <h2 className="font-bold text-3xl text-center mb-2">Trending App</h2>
      <p className="text-[#627382] text-center">
        Explore All Trending Apps on the Market developed by us
      </p>
      {loading ? (
        <HashLoader color="#7c49eb" className="mx-auto py-15" />
      ) : (
        <div className="max-w-[1320px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-8">
          {apps.slice(0, 8).map((app) => {
            return (
              <div
                key={app.id}
                className="border-8 border-white p-3 rounded-lg"
              >
                <img src={app.image} alt="" className="w-60 h-60 mx-auto" />
                <p className="font-bold text-[#001931] mt-4">{app.title}</p>
                <div className="flex justify-between mt-5">
                  <p className="bg-gray-200 px-2 py-1 text-green-500 font-bold flex gap-2 items-center">
                    <FaDownload></FaDownload> {app.downloads}
                  </p>
                  <p className="bg-yellow-50 text-bold text-amber-400 px-2 py-1 border-1 border-amber-400 flex gap-2 items-center">
                    <FaStar /> {app.ratingAvg}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <div className="flex justify-center  mt-7">
        <button
          onClick={handleShowAll}
          className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white"
        >
          Show All
        </button>
      </div>
    </div>
  );
};

export default TrendingApp;
