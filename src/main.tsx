import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import Home from "./Home.tsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Home />
    <ToastContainer />
  </StrictMode>
);
