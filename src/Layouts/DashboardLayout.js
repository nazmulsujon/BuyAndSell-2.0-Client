import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import Header from "../Pages/Shared/Header/Header";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);

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
            <li>{isAdmin && <Link to="/dashboard/allSellers">All Sellers</Link>}</li>
            <li>{isAdmin && <Link to="/dashboard/allBuyers">All Buyers</Link>}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
