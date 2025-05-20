import React, { useState } from "react";
import logo from "../../assets/logo.png";
import menu_logo from "../../assets/menu_logo.png";
import Container from "../Layout/container";
import { HiMenuAlt1 } from "react-icons/hi";
import { GoHomeFill } from "react-icons/go";
import { RiFunctionAddFill } from "react-icons/ri";
import { MdWebStories } from "react-icons/md";
import { FaPager } from "react-icons/fa6";
import { FaBlogger } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";


function Navbar() {
  const [show, setShow] = useState(false);

  const click = () => {
    console.log("check");
    setShow(!show);
  };

  return (
    <div className="pt-8 relative top-0 left-0 w-full z-10">
      <Container>
        <div className="flex flex-col items-start md:flex-row md:justify-between md:items-center ">
          <div className="mb-5 flex justify-between items-center w-full md:mb-0 md:w-auto">
            <a href="#">
              <img src={logo} alt="main_logo" />
            </a>
            <div className="block md:hidden">
              {show ? (
                <RxCross2 
                  className="text-white size-[25px] cursor-pointer"
                  onClick={click}
                />
              ) : (
                <HiMenuAlt1
                  className="text-white size-[25px] cursor-pointer"
                  onClick={click}
                />
              )}
            </div>
          </div>
          <div>
            <ul className="hidden md:flex gap-x-[50px] capitalize font-secondary text-lg font-medium text-white items-center">
              <li>
                <a href="#">home</a>
              </li>
              <li>
                <a href="#">features</a>
              </li>
              <li>
                <a href="#">service</a>
              </li>
              <li>
                <a href="#">pages</a>
              </li>
              <li>
                <a href="#">blog</a>
              </li>
            </ul>
          </div>
          <div className="hidden md:block">
            <div className=" text-white font-secondary font-medium text-lg gap-9 flex items-center ">
              <button className="leading-[200%] cursor-pointer capitalize">
                login
              </button>
              <button className="leading-[20px] py-5 px-12 bg-btn rounded-[6px] cursor-pointer text-black capitalize">
                register
              </button>
            </div>
          </div>
        </div>
      </Container>
      {show && (
        <div className="flex flex-col  md:flex-row md:justify-between md:items-center  absolute top-0 w-[85%] h-screen z-[999] px-[15px] bg-white rounded-r-[12px] ">
          <div className="mb-[32px]">
            <div className="pt-[32px] pb-[32px]">
              <a href="#">
                <img src={menu_logo} alt="main_logo" />
              </a>
            </div>
            <ul className="flex-col flex  capitalize font-secondary text-[20px] font-medium text-black gap-y-8">
              <li>
                <a href="#" className="flex items-center gap-6">
                  <GoHomeFill color="#C4C4C4" size={30}/>
                  home
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-6">
                  <RiFunctionAddFill color="#C4C4C4" size={30}/>
                  features</a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-6">
                  <MdWebStories color="#C4C4C4" size={30}/>
                  services</a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-6">
                  <FaPager color="#C4C4C4" size={30}/>
                  pages</a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-6">
                  <FaBlogger color="#C4C4C4" size={30}/>
                  blog</a>
              </li>
            </ul>
          </div>
          <div className=" text-black font-secondary font-medium text-lg gap-9 flex items-center ">
            <button className="leading-[200%] cursor-pointer capitalize">
              login
            </button>
            <button className="leading-[20px] py-5 px-12 bg-btn rounded-[6px] cursor-pointer text-black capitalize">
              register
            </button>
          </div>
        </div>
      ) }
    </div>
  );
}

export default Navbar;
