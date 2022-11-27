import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Header = () => {
  const menuItems = (
    <React.Fragment>
      <li className="mr-1 my-1 font-semibold">
        <Link to={`/`} className="rounded">
          Home
        </Link>
      </li>
      <li className="mr-1 my-1 font-semibold">
        <Link to={`/about`} className="rounded">
          About
        </Link>
      </li>
      <li className="mr-1 my-1 font-semibold">
        <Link to={`/appointment`} className="rounded">
          Appointment
        </Link>
      </li>
      <li className="mr-1 my-1 font-semibold">
        <Link to={`/login`} className="rounded">
          Login
        </Link>
      </li>
      <li className="mr-1 my-1 font-semibold">
        <Link to={`/signup`} className="rounded">
          Sign up
        </Link>
      </li>
    </React.Fragment>
  );

  return (
    // <section className="navbar container mx-auto">
    //   <div className="navbar-start w-1/2">
    //     <div className="dropdown">
    //       <label tabIndex={0} className="btn btn-ghost lg:hidden">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
    //         </svg>
    //       </label>
    //       <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
    //         {menuItems}
    //       </ul>
    //     </div>
    //     <Link className="normal-case text-xl font-bold italic text-info shadow-sm rounded-lg p-2">BUY & SELL</Link>
    //   </div>
    //   <div className="navbar-center hidden lg:flex navbar-end w-1/2">
    //     <ul className="menu menu-horizontal p-0">{menuItems}</ul>
    //   </div>
    // </section>
    <section className="bg-neutral">
      <div className="navbar md:px-10">
        <div className="navbar-start w-11/12">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              tabIndex={0}
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
          <button className="btn btn-outline rounded-lg">Logout</button>
        </div>
      </div>
    </section>
  );
};

export default Header;
