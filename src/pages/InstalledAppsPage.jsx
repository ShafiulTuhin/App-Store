import React, { useContext } from "react";
import { InstalledAppContext } from "../context/InstalledAppProvider";
import { FaDownload } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { VscCodeReview } from "react-icons/vsc";
import useApps from "../components/hooks/useApps";
import { HashLoader } from "react-spinners";

const InstalledAppsPage = () => {
  const { installedApps } = useContext(InstalledAppContext);
  const { loading } = useApps();
  console.log(installedApps);

  if (loading) {
    return (
      <div className="h-[60vh] flex justify-center items-center">
        <HashLoader color="#7c49eb" className="" />
      </div>
    );
  }
  if (installedApps.length === 0) {
    return (
      <div>
        <h2>No data found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-[600px] mx-auto lg:py-20 py-10 px-2 lg:px-0">
      {installedApps.map((app) => (
        <div className="bg-slate-200 mb-4 border border-gray-400 p-4 flex justify-between items-center rounded-lg">
          <div className="flex gap-4 items-center">
            <img src={app.image} alt="" className="w-20 h-20" />
            <div>
              <h2 className="font-bold">{app.title}</h2>
              <div className=" mt-2 flex gap-5">
                <div className="flex gap-1 items-center">
                  <FaDownload color="#1cd641" />
                  <p className="text-[#627382] ">{app.downloads}</p>
                </div>
                <div className="flex gap-1 items-center">
                  <FaStar color="#ff8812" />
                  <p className=" font-bold">{app.ratingAvg}</p>
                </div>
                <div className="flex gap-1 items-center">
                  <VscCodeReview color="#af11ed" />
                  <p className=" font-bold">{app.size} MB</p>
                </div>
              </div>
            </div>
          </div>
          <button className="btn btn-success text-white">Uninstall</button>
        </div>
      ))}
    </div>
  );
};

export default InstalledAppsPage;
