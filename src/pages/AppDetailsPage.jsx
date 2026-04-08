import React, { useContext } from "react";
import { useParams } from "react-router";
import useApps from "../components/hooks/useApps";
import { FaDownload, FaStar } from "react-icons/fa";
import { VscCodeReview } from "react-icons/vsc";
import { HashLoader } from "react-spinners";
import { InstalledAppContext } from "../context/InstalledAppProvider";

const AppDetailsPage = () => {
  const { handleInstalledApps } = useContext(InstalledAppContext);
  const params = useParams();
  const { apps, loading } = useApps();

  const findApp = apps.find((app) => app.id == params.id);

  if (loading) {
    return (
      <div className="h-[60vh] flex justify-center items-center">
        <HashLoader color="#7c49eb" className="" />
      </div>
    );
  }

  return (
    <div className=" py-20 bg-slate-200">
      <div className="flex gap-5 max-w-[1320px] mx-auto border-b border-gray-400 pb-5">
        <div className="bg-white h-full">
          <img src={findApp.image} alt="" className="w-60 p-10" />
        </div>

        <div>
          <div className="border-b border-gray-300 pb-2">
            <h2 className="font-bold text-3xl text-[#001931]">
              {findApp.title}
            </h2>
            <p className="text-[#627382] mt-3">
              Developed by:
              <span className="text-purple-500"> {findApp.companyName}</span>
            </p>
          </div>
          <div className="mt-4 flex gap-10">
            <div className="space-y-2">
              <FaDownload color="#1cd641" />
              <p className="text-[#627382] ">Downloads</p>
              <p className="text-2xl font-bold">{findApp.downloads}</p>
            </div>
            <div className="space-y-2">
              <FaStar color="#ff8812" />
              <p className="text-[#627382] ">Ratings</p>
              <p className="text-2xl font-bold">{findApp.ratingAvg}</p>
            </div>
            <div className="space-y-2">
              <VscCodeReview color="#af11ed" />

              <p className="text-[#627382] ">Ratings</p>
              <p className="text-2xl font-bold">{findApp.reviews}</p>
            </div>
          </div>
          <button
            onClick={() => handleInstalledApps(findApp)}
            className="btn btn-success mt-3 text-white"
          >
            Install Now ({findApp.size} MB)
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppDetailsPage;
