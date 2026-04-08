import { createContext, useState } from "react";
import { toast } from "react-toastify";
export const InstalledAppContext = createContext();

const InstalledAppProvider = ({ children }) => {
  const [installedApps, setInstalledApps] = useState([]);
  const handleInstalledApps = (newApp) => {
    const isExist = installedApps.find((app) => app.id == newApp.id);

    if (!isExist) {
      setInstalledApps([...installedApps, newApp]);
      toast.success(`${newApp.title} is installing...`, {
        position: "top-left",
        autoClose: 2000,
      });
    } else {
      toast.error(`${newApp.title} already installed`);
    }
  };
  const props = { installedApps, setInstalledApps, handleInstalledApps };

  return (
    <InstalledAppContext.Provider value={props}>
      {children}
    </InstalledAppContext.Provider>
  );
};

export default InstalledAppProvider;
