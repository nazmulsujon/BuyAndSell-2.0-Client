import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Main from "../../Layouts/Main";
import Blog from "../../Pages/Blog/Blog";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import ReportedItems from "../../Pages/Dashboard/ReportedItems/ReportedItems";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import FurnitureCategory from "../../Pages/FurnitureCategory/FurnitureCategory";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/category/:id",
        element: (
          <PrivateRoute>
            <FurnitureCategory></FurnitureCategory>
          </PrivateRoute>
        ),
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <MyOrders></MyOrders>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/allSellers",
        element: (
          <AdminRoute>
            <AllSellers></AllSellers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allBuyers",
        element: (
          <AdminRoute>
            <AllBuyers></AllBuyers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/reportedItems",
        element: (
          <AdminRoute>
            <ReportedItems></ReportedItems>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addProduct",
        element: (
          <SellerRoute>
            <AddProduct></AddProduct>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/myProducts",
        element: (
          <SellerRoute>
            <MyProducts></MyProducts>
          </SellerRoute>
        ),
      },
    ],
  },
]);
