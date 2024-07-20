"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { links } from "./data";
import { GrLinkedin } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  return (
    <div className=" sticky  top-0 z-50 w-full ">
      <div
        className={`sticky  top-0 z-50 w-full backdrop-blur-sm   ${
          isMenuOpen ? " bg-black" : ""
        } `}
      >
        <div className=" px-5 md:px-10 lg:px-20 flex justify-between   py-5 border-b border-white">
                   <Link href={'/'}>
                    <div className=" poppinsu">DR. ATIF ALI</div>
                    </Link>

          <div className=" flex justify-between w-9/12 lg:w-2/3 max-md:hidden">
            <div className=" flex gap-2 md:gap-5">
              {links.map((link, index) => (
                <Link
                  key={index}  
                    className="text-sm/6 px-1 md:px-2 font-semibold relative group text-white hover:text-custom-main"
                  href={link.href}
                  
                >
                  <span
                    
                    className={` inline-flex poppinsu text-nowrap justify-center items-center font-semibold ${
                      path === link.href ? "text-custom-main" : ""
                    }`}
                  >
                    {link.name}
                  </span>
                  <div
                    className={`absolute left-0 -bottom-1 h-[1px] bg-white group-hover:bg-custom-main w-0 transition-all duration-300 group-hover:w-full`}
                  ></div>
                </Link>
              ))}
            </div>
            <div>
              <div className="text-white flex gap-2 sm:gap-5 items-center">
                <Link
                  href={"#"}
                  target="_blank"
                  className=" hover:scale-105 hover:text-custom-main transition-all duration-150"
                >
                   <FaInstagram size={20} />
                   
                </Link>
                <Link
                  href="https://www.linkedin.com/in/drali-ai/"
                  
                  target="_blank"
                  className=" hover:scale-105 transition-all hover:text-custom-main duration-150"
                >
                  <GrLinkedin size={20} />
                </Link>
                <Link
                  href={"#"}
                  target="_blank"
                  className=" hover:scale-105 transition-all hover:text-custom-main duration-150"
                >
                  <FaFacebook size={20} />
                </Link>
                <Link
                  href={"#"}
                  target="_blank"
                  className=" hover:scale-105 transition-all hover:text-custom-main duration-150"
                >
                  <FaTwitter size={20} />
                </Link>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button className=" h-auto w-auto" onClick={toggleMenu}>
              {isMenuOpen ? (
                <IoClose className=" text-white h-6 w-auto hover:scale-95" />
              ) : (
                <IoMdMenu className=" text-white h-6 w-auto hover:scale-95" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          isMenuOpen
            ? "z-50 transform origin-top transition-all opacity-100 duration-300  translate-y-0"
            : " -translate-y-12 opacity-0 transition-all duration-300 pointer-events-none -z-40"
        } w-full absolute  h-full  `}
      >
        <div className="bg-black absolute w-full h-fit">
          {links.map((link, index) => (
            <div
              key={index}
              className={` border-b border-white ${
                path === link.href ? "border-custom-main" : ""
              }   pt-4`}
            >
              <Link
                key={index}
                className="text-sm/6 px-5  md:px-2 font-semibold relative group text-white hover:text-custom-main"
                href={link.href}
              >
                <span
                  className={` inline-flex poppinsu text-nowrap justify-center items-center font-semibold ${
                    path === link.href ? "text-custom-main" : ""
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            </div>
          ))}
          <div>
            <div className="text-white px-5 py-6 flex gap-x-5 sm:gap-5 items-center">
              <Link
                href={"#"}
                target="_blank"
                className=" hover:scale-105 hover:text-custom-main transition-all duration-150"
                
              >
                <FaInstagram size={20} />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/drali-ai/"}
                target="_blank"
                className=" hover:scale-105 transition-all hover:text-custom-main duration-150"
              >
                <GrLinkedin size={20} />
              </Link>
              <Link
                href={"#"}
                target="_blank"
                className=" hover:scale-105 transition-all hover:text-custom-main duration-150"
              >
                <FaFacebook size={20} />
              </Link>
              <Link
                href={"#"}
                target="_blank"
                className=" hover:scale-105 transition-all hover:text-custom-main duration-150"
              >
                <FaTwitter size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
