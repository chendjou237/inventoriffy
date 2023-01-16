import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import { ContextProvider } from "./context/ContextProvider";
import { Home, Login, Register } from "./pages";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    }
  ]
)
createRoot(document.getElementById("root")).render(
  <ContextProvider>
    {/* <RouterProvider router={router}/> */}
    {/* <BrowserRouter> */}
      <App />
    {/* </BrowserRouter> */}
  </ContextProvider>
);
