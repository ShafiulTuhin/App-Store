import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/Errorpage";

import AppsPage from "../pages/AppsPage";

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
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
