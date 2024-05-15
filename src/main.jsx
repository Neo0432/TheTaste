import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./Pages/App.jsx";
import { MenuApp } from "./Pages/menu/Menu.jsx";
import { Stocks } from "./Pages/stocks/Stocks.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AboutUs } from "./Pages/aboutUs/AboutUs.jsx";
import { Contacts } from "./Pages/contacts/Contacts.jsx";
import { Booking } from "./Pages/booking/Booking.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/menu",
    element: <MenuApp />,
  },
  {
    path: "/stocks",
    element: <Stocks />,
  },
  {
    path: "/aboutUs",
    element: <AboutUs />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/booking",
    element: <Booking />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
