import React from "react";
import Container from "../Layout/container";
import footer_logo from "../../assets/footer/footer-logo.png";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#F7F7FC] pt-[291px]">
      <Container>
        <div className="pb-[86px]">
          <div>
            <img src={footer_logo} alt="footer_logo" className="mb-[26px] cursor-pointer"/>
            <p className="mb-[24px] font-secondary text-[16px] leading-[28px] text-info-color w-[263px]">
              Build a modern and creative website with Innovate.
            </p>
            <div className="flex gap-[6px] mb-[24px] ">
              <a href="#" className="w-[42px] h-[42px] rounded-full bg-[#EEEEEE] flex items-center justify-center group">
                <FaGoogle size={16} color="#645E76" className="group-hover:!color-[#EA4335]/>
              </a>
              <a href="#" className="w-[42px] h-[42px] rounded-full bg-[#EEEEEE] flex items-center justify-center">
                <FaTwitter size={16} color="#645E76"/>
              </a>
              <a href="#" className="w-[42px] h-[42px] rounded-full bg-[#EEEEEE] flex items-center justify-center">
                <FaInstagram size={16} color="#645E76"/>
              </a>
              <a href="#" className="w-[42px] h-[42px] rounded-full bg-[#EEEEEE] flex items-center justify-center">
                <FaLinkedin size={16} color="#645E76"/>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
