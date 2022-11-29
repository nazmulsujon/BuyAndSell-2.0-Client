import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import logo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-neutral sticky top-[100vh]">
      <div className="py-3 md:flex justify-center items-center">
        <h6 className="p-1 text-2xl text-accent text-center font-bold ">Follow us on :</h6>
        <div className="flex justify-center my-5 text-secondary">
          <a className="mx-3" href="https://www.facebook.com/profile.php?id=100017560637039">
            <FaFacebook className=" text-3xl mx-2 "></FaFacebook>
          </a>
          <a className="mx-2" href="https://www.linkedin.com/in/nazmul-sujon-39647b244/">
            <FaLinkedinIn className="  text-3xl mx-2"></FaLinkedinIn>
          </a>
          <a className="mx-2" href="https://github.com/nazmul68">
            <FaGithub className="  text-3xl mx-2"></FaGithub>
          </a>
          <a className="mx-2" href="https://api.whatsapp.com/send/?phone=01776097768">
            <FaWhatsapp className="  text-3xl mx-2"></FaWhatsapp>
          </a>
          <a className="mx-2" href="https://www.instagram.com/nazmul_sujon/">
            <FaInstagram className="  text-3xl mx-2"></FaInstagram>
          </a>
        </div>
      </div>
      <footer className="footer p-10 text-base-content">
        <div className="flex items-center ">
          <img src={logo} alt="logo" className="w-24" />
          <p className="text-info text-2xl font-bold italic">BUY & SELL</p>
        </div>
        <div>
          <span className="font-bold text-accent">Categories</span>
          <Link to="/allMeals" className="link link-hover">
            Home
          </Link>
          <Link className="link link-hover text-secondary">Office </Link>
          <Link className="link link-hover text-secondary">Restaurent </Link>
          <Link className="link link-hover text-secondary">All</Link>
        </div>
        <div className="">
          <span className="font-bold text-accent">More about</span>
          <Link className="link link-hover text-secondary">About us</Link>
          <Link className="link link-hover text-secondary">Contact</Link>
          <Link className="link link-hover text-secondary">Privacy</Link>
          <Link className="link link-hover text-secondary">Policy</Link>
        </div>
      </footer>
      <p className="text-accent text-center">All Right Reserved By @BUY&SELL || 2022</p>
    </div>
  );
};

export default Footer;
