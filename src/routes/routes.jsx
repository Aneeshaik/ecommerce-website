import { lazy } from "react";
import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from '../components/ProtectedRoute'

const Home = lazy(() => import("../pages/Home"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const Cart = lazy(() => import("../pages/Cart"));
const AllProductsDetails = lazy(() => import('../pages/AllProductsDetails'));
const Checkout = lazy(() => import('../pages/Checkout'));
const SignUp = lazy(() => import('../pages/SignUp'));
const SignIn = lazy(() => import('../pages/SignIn'));
const Search = lazy(() => import('../pages/Search'));
const Wishlist = lazy(() => import('../pages/Wishlist'));

export const routes = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'productDetails/:id', element: <ProductDetails /> },
            { path: 'allproductsDetails', element: <AllProductsDetails /> },
            { path: 'search', element: <Search /> },
            { path: 'wishlist', element: <Wishlist /> },
            {
              element: <ProtectedRoute />,
              children: [
                { path: 'cart', element: <Cart /> },
                { path: 'checkout', element: <Checkout /> }
              ]
            }
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