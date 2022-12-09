import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Cards from "./Components/Cards";
import Category from "./Components/Category";
import Product from "./Components/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Cards /> },
      {
        path: "/category/:category",
        element: <Category />,
      },
      {
        path: "/product/:product",
        element: <Product />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
