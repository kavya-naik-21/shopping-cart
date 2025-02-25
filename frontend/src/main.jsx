import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductCreate from "./components/ProductCreate.jsx";
import Home from "./components/Home.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/create",
        element: <ProductCreate />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter}>
  <StrictMode>
    <App />
  </StrictMode>
  </RouterProvider>
);
