import Link from "next/link";
import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto text-center px-5">
          <div className="flex justify-center space-x-6 ">
            <Link
              href="#"
              className="text-white  transition-all duration-500 hover:text-[rgba(210,193,175,1)] cursor-pointer"
            >
              <FaInstagram size={30} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/drali-ai"
              target="_blank"
              className="text-white  transition-all duration-500 hover:text-[rgba(210,193,175,1)] cursor-pointer"
            >
              <FaLinkedin size={30} />
            </Link>
            <Link
              href="#"
              className="text-white  transition-all duration-500 hover:text-[rgba(210,193,175,1)] cursor-pointer"
            >
              <FaFacebook size={30} />
            </Link>
            <Link
              href="#"
              className="text-white  transition-all duration-500 hover:text-[rgba(210,193,175,1)] cursor-pointer"
            >
              <FaXTwitter size={30} />
            </Link>
          </div>
          <div className="flex justify-center gap-2 md:gap-6 mt-8">
            <div className="relative group inline-block">
              <Link
                href="#"
                className="text-white text-sm font-popin transition-all duration-500 hover:text-[rgba(210,193,175,1)] "
              >
                HOME
              </Link>
              <div className=" absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-500 group-hover:w-full text-[rgb(210,193,175)]"></div>
            </div>

            <div className="relative group inline-block">
              <Link
                href="#"
                className="text-white text-sm font-popin  transition-all duration-500 hover:text-[rgba(210,193,175,1)] "
              >
                PORTFOLIO
              </Link>
              <div className=" absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-500 group-hover:w-full text-[rgb(210,193,175)]"></div>
            </div>
            <div className="relative group inline-block">
              <Link
                href="#"
                className="text-white text-sm font-popin  transition-all duration-500 hover:text-[rgba(210,193,175,1)] "
              >
                ABOUT
              </Link>
              <div className=" absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-500 group-hover:w-full text-[rgb(210,193,175)]"></div>
            </div>
            <div className="relative group inline-block">
              <Link
                href="#"
                className="text-white text-sm  font-popin  transition-all duration-500 hover:text-[rgba(210,193,175,1)] "
              >
                CONSULTANCY
              </Link>
              <div className=" absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-500 group-hover:w-full text-[rgb(210,193,175)]"></div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
