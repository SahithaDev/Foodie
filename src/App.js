import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import { Outlet } from "react-router-dom";
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};
const AppRouter = createBrowserRouter([
  {
    path: "/", //base page
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
