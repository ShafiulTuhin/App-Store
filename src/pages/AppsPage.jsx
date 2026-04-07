import React, { useEffect, useState } from "react";
import AllApps from "../components/AllApps/AllApps";

const AppsPage = () => {
  const [apps, setApps] = useState([]);
  console.log(apps);

  useEffect(() => {
    const fetchApps = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      setApps(data);
    };
    fetchApps();
  }, []);
  return (
    <div>
      <AllApps></AllApps>
    </div>
  );
};

export default AppsPage;
