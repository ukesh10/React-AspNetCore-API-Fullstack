import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./layout/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { StoreProvider } from "./context/StoreContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreProvider>
      <RouterProvider router={router} />
    </StoreProvider>
  </StrictMode>
);
