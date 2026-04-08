import { FaDownload, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";
import { HashLoader } from "react-spinners";
import useApps from "../hooks/useApps";
import AppCard from "../../ui/AppCard";

const AllApps = () => {
  const { apps, loading } = useApps();

  const navigate = useNavigate();
  const handleShowAll = () => {
    navigate("/");
  };

  return (
    <div className="lg:py-20 py-10 px-4 lg:px-0 bg-slate-100">
      <h2 className="font-bold text-3xl text-center mb-2">All Apps</h2>
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
            return <AppCard key={app.id} app={app}></AppCard>;
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
