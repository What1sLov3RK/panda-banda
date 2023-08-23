import React from 'react';
import MainPage from './pages/MainPage';
import Catalogue from "./pages/Catalogue";
import Delivery from "./pages/Delivery";
import {createBrowserRouter} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/rolls",
    element: <Catalogue />,
  },
  {
    path: "/pizza",
    element: <Catalogue />,
  },
      {
    path: "/drinks",
    element: <Catalogue />,
  },
  {
    path: "/delivery",
    element:<Delivery />,
  },
  ]);

export default router