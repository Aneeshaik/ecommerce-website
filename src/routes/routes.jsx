import { lazy } from "react";
import MainLayout from "../layouts/MainLayout";

const Home = lazy(() => import("../pages/Home"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const Cart = lazy(() => import("../pages/Cart"));
const AllProductsDetails = lazy(() => import('../pages/AllProductsDetails'));
const Checkout = lazy(() => import('../pages/Checkout'));
const SignUp = lazy(() => import('../pages/SignUp'));
const SignIn = lazy(() => import('../pages/SignIn'));

export const routes = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'productDetails', element: <ProductDetails /> },
            { path: 'allproductsDetails', element: <AllProductsDetails /> },
            { path: 'cart', element: <Cart /> },
            { path: 'checkout', element: <Checkout /> }
        ]
    },
    {
    path: '/auth',
    children: [
      {path: 'signup', element: <SignUp />},
      {path: 'signin', element: <SignIn />}
    ],
  },
]