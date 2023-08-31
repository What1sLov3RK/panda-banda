import React from 'react';
import MainPage from './pages/MainPage';
import Catalogue from "./pages/Catalogue";
import Delivery from "./pages/Delivery";
import { createBrowserRouter } from "react-router-dom";
import ProductPage from "./pages/ProductPage";

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
    path: "/catalogue/rolls",
    element: <Catalogue />,
  },
  {
    path: "/catalogue/roll_sets",
    element: <Catalogue />,
  },
  {
    path: "/catalogue/pizza",
    element: <Catalogue />,
  },
  {
    path: "/catalogue/drinks",
    element: <Catalogue />,
  },
  {
    path: "/catalogue/snacks",
    element:<Catalogue />,
  },
  {
    path: "/catalogue/soups",
    element:<Catalogue />,
  },
  {
    path: "/catalogue/wok",
    element:<Catalogue />,
  },
  {
    path: "/catalogue/other",
    element:<Catalogue />,
  },
  {
    path: "/catalogue/:type/:name",
    element: <ProductPage />,
  }
]);

export default router