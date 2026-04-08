import { FaDownload, FaStar } from "react-icons/fa";
import useApps from "../components/hooks/useApps";
import { useNavigate } from "react-router";

const AppCard = ({ app }) => {
  const { apps } = useApps();
  const navigate = useNavigate();
  const handleAppDetails = (appId) => {
    const findApp = apps.find((app) => app.id == appId);
    navigate(`/apps/${appId}`);
  };
  return (
    <div
      onClick={() => handleAppDetails(app.id)}
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
};

export default AppCard;
