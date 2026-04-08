import { useNavigate } from "react-router";
import { HashLoader } from "react-spinners";
import useApps from "../hooks/useApps";
import AppCard from "../../ui/AppCard";

const TrendingApp = () => {
  const { apps, loading } = useApps();
  const navigate = useNavigate();
  const handleShowAll = () => {
    navigate("/apps");
  };

  return (
    <div className="lg:py-20 py-10 px-4 lg:px-0 bg-slate-100">
      <h2 className="font-bold text-3xl text-center mb-2">Trending Apps</h2>
      <p className="text-[#627382] text-center">
        Explore All Trending Apps on the Market developed by us
      </p>
      {loading ? (
        <HashLoader color="#7c49eb" className="mx-auto py-15" />
      ) : (
        <div className="max-w-[1320px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-8">
          {apps.slice(0, 8).map((app) => {
            return <AppCard key={app.id} app={app}></AppCard>;
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
