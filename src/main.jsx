import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./routes/Route.jsx";
import "./index.css";
import InstalledAppProvider from "./context/InstalledAppProvider.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <InstalledAppProvider>
      <RouterProvider router={router}></RouterProvider>
    </InstalledAppProvider>
    <ToastContainer />
  </StrictMode>,
);
