import React from 'react';
import MainPage from './pages/MainPage';
import Catalogue from "./pages/Catalogue";
import Delivery from "./pages/Delivery";
import {createBrowserRouter} from "react-router-dom";


const router = createBrowserRouter(
[
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/delivery",
    element: <Delivery />,
  },
  {
    path: "/rolls",
    element: <Catalogue />,
  },
  {
    path: "/roll_sets",
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
    path: "/snacks",
    element:<Catalogue />,
  },
  {
    path: "/soups",
    element:<Catalogue />,
  },
  {
    path: "/wok",
    element:<Catalogue />,
  },
  {
    path: "/other",
    element:<Catalogue />,
  },
]);

export default router