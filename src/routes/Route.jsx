import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/Errorpage";

import AppsPage from "../pages/AppsPage";
import InstalledAppsPage from "../pages/InstalledAppsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomePage,
        loader: () => fetch("/data.json"),
      },
      { path: "apps", Component: AppsPage },
      { path: "installations", Component: InstalledAppsPage },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
