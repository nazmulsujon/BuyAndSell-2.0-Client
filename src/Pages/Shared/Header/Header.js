import React, { useContext } from "react";
import { FaCaretSquareLeft } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((res) => console.log("log out successfully"))
      .catch((err) => console.error(err));
  };

  const menuItems = (
    <React.Fragment>
      <li className="mr-1 my-1 font-semibold">
        <NavLink to={`/`} className={({ isActive }) => (isActive ? " text-info rounded" : " rounded")}>
          Home
        </NavLink>
      </li>
      <li className="mr-1 my-1 font-semibold">
        <NavLink to={`/about`} className={({ isActive }) => (isActive ? " text-info rounded" : " rounded")}>
          About
        </NavLink>
      </li>
      {user ? (
        <li className="mr-1 my-1 font-semibold">
          <NavLink to={`/dashboard`} className={({ isActive }) => (isActive ? " text-info rounded" : " rounded")}>
            Dashboard
          </NavLink>
        </li>
      ) : (
        <></>
      )}
      <li className="mr-1 my-1 font-semibold">
        <NavLink to={`/login`} className={({ isActive }) => (isActive ? " text-info rounded" : " rounded")}>
          Login
        </NavLink>
      </li>
      <li className="mr-1 my-1 font-semibold">
        <NavLink to={`/signup`} className={({ isActive }) => (isActive ? " text-info rounded" : " rounded")}>
          Sign up
        </NavLink>
      </li>
    </React.Fragment>
  );

  return (
    <section className="bg-neutral">
      <div className="navbar md:px-10">
        <div className="navbar-start w-11/12">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul
              tabIndex={1}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>

          <div className="w-full flex items-center">
            <img src={logo} alt="logo" className="w-8 mr-1 cursor-pointer" />
            <Link className="normal-case text-xl font-extrabold italic text-info ">BUY & SELL</Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          {user?.uid ? (
            <button onClick={handleLogOut} className="btn btn-secondary btn-outline rounded-lg">
              Logout
            </button>
          ) : (
            <></>
          )}
          <label htmlFor="dashboard-drawer" className="btn btn-ghost lg:hidden rounded-lg">
            <FaCaretSquareLeft className="text-3xl" />
          </label>
        </div>
      </div>
    </section>
  );
};

export default Header;
