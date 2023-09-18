import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import "./scss/main.scss";

import ErrorPage from "./pages/ErrorPage";
import Root from "./pages/Root/Root";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Subscribe from "./pages/Subscribe/Subscribe";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="subscribe" element={<Subscribe />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
