import React from "react";
import Container from "../Layout/container";
import footer_logo from "../../assets/footer/footer-logo.png";
// import { FaGoogle } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  const social_media = [
    {
      icon: <FaGoogle />,
      hover_color: "group-hover:text-[#EA4335]",
    },
    {
      icon: <FaTwitter />,
      hover_color: "group-hover:text-[#00acee]",
    },
    {
      icon: <FaInstagram />,
      hover_color: "group-hover:text-[#C13584]",
    },
    {
      icon: <FaLinkedin />,
      hover_color: "group-hover:text-[#005983]",
    },
  ];
  return (
    <div className="bg-[#F7F7FC] pt-[291px]">
      <Container>
        <div className="pb-[86px]">
          <div>
            <img
              src={footer_logo}
              alt="footer_logo"
              className="mb-[26px] cursor-pointer"
            />
            <p className="mb-[24px] font-secondary text-[16px] leading-[28px] text-info-color w-[263px]">
              Build a modern and creative website with Innovate.
            </p>
            <div className="flex gap-[8px] mb-[24px] ">
              {social_media.map((item, index) => (
                <div className="group cursor-pointer w-[42px] h-[42px] rounded-full bg-[#EEEEEE] flex items-center justify-center  text-[#645E76]  ">
                  <div
                    key={index}
                    className={`${item.hover_color} transition-colors duration-500 text-lg`}
                  >
                    {item.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
