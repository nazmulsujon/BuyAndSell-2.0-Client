import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useSeller from "../hooks/useSeller";
import Header from "../Pages/Shared/Header/Header";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);

  return (
    <div className="w-full">
      <Header></Header>
      <div className="drawer drawer-mobile drawer-end">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side shadow-lg">
          <label htmlFor="dashboard-drawer" className="drawer-overlay "></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content ">
            <li className="mb-2">
              {/*  Sidebar content here  */}
              <Link to="/dashboard">My Orders</Link>
            </li>
            {isAdmin && (
              <li className="mb-2">
                <Link to="/dashboard/allSellers">All Sellers</Link>
              </li>
            )}
            {isAdmin && (
              <li className="mb-2">
                <Link to="/dashboard/allBuyers">All Buyers</Link>
              </li>
            )}
            {isAdmin && (
              <li className="mb-2">
                <Link to="/dashboard/reportedItems">Reported Items</Link>
              </li>
            )}
            {isSeller && (
              <li className="mb-2">
                <Link to="/dashboard/addProduct">Add Product</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
