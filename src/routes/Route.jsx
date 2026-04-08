import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/Errorpage";

import AppsPage from "../pages/AppsPage";
import InstalledAppsPage from "../pages/InstalledAppsPage";
import AppDetailsPage from "../pages/AppDetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      { path: "apps", Component: AppsPage },
      { path: "apps/:id", Component: AppDetailsPage },
      { path: "installations", Component: InstalledAppsPage },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
