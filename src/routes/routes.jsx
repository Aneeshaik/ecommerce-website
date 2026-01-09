import { lazy } from "react";
import MainLayout from "../layouts/MainLayout";
import Cart from "../pages/Cart";

const Home = lazy(() => import("../pages/Home"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));

export const routes = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'productDetails', element: <ProductDetails /> },
            { path: 'cart', element: <Cart /> },
        ]
    },
]