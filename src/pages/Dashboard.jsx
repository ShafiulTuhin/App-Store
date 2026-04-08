import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { InstalledAppContext } from "../context/InstalledAppProvider";
import useApps from "../components/hooks/useApps";

const Dashboard = () => {
  const { installedApps } = useContext(InstalledAppContext);
  const { apps } = useApps();
  const uninstalledApps = apps.length - installedApps.length;
  const data = [
    { name: "Installed", value: installedApps.length, fill: "#0088FE" },
    { name: "Uninstalled", value: uninstalledApps, fill: "#1ef320" },
  ];

  return (
    <div className="py-10 max-w-[1320px] mx-auto border border-slate-300">
      <h2 className="text-center mb-10 font-semibold text-[#00f93] text-2xl">
        Apps Installation Graph
      </h2>
      <PieChart
        style={{
          width: "100%",
          maxWidth: "500px",
          maxHeight: "80vh",
          aspectRatio: 1,
          margin: "auto",
        }}
        responsive
      >
        <Pie
          data={data}
          innerRadius="80%"
          outerRadius="100%"
          // Corner radius is the rounded edge of each pie slice
          cornerRadius="50%"
          fill="#8884d8"
          // padding angle is the gap between each pie slice
          paddingAngle={5}
          dataKey="value"
          isAnimationActive={true}
        />
        <Legend />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Dashboard;
