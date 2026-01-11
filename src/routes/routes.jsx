import { lazy } from "react";
import MainLayout from "../layouts/MainLayout";
import Cart from "../pages/Cart";
import AllProductsDetails from '../pages/AllProductsDetails'

const Home = lazy(() => import("../pages/Home"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));

export const routes = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'productDetails', element: <ProductDetails /> },
            { path: 'allproductsDetails', element: <AllProductsDetails /> },
            { path: 'cart', element: <Cart /> },
        ]
    },
]