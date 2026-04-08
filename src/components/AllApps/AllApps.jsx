import React, { useEffect, useState } from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";
import { HashLoader } from "react-spinners";

const AllApps = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(apps);
  const navigate = useNavigate();
  const handleShowAll = () => {
    navigate("/");
  };

  useEffect(() => {
    const fetchApps = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();

      setTimeout(() => {
        setApps(data);
        setLoading(false);
      }, 1000);
    };
    fetchApps();
  }, []);

  return (
    <div className="lg:py-20 py-10 px-4 lg:px-0 bg-slate-100">
      <h2 className="font-bold text-3xl text-center mb-2">Trending App</h2>
      <p className="text-[#627382] text-center">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="max-w-[1320px] mx-auto flex justify-between mt-8">
        <p className="text-[#001931] font-bold">({apps.length}) apps found</p>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
      </div>
      {loading ? (
        <HashLoader color="#7c49eb" className="mx-auto py-15" />
      ) : (
        <div className="max-w-[1320px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-4">
          {apps.map((app) => {
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
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default AllApps;
