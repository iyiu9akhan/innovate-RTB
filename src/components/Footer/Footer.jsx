import React from "react";
import Container from "../Layout/container";
import footer_logo from "../../assets/footer/footer-logo.png";
import {
  FaGoogle,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaTelegramPlane,
} from "react-icons/fa";

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
  const footer_menu = [
    {
      heading: "product",
      menu_item: ["Landingpages", "Pricing", "Benefits", "Features"],
    },
    {
      heading: "company",
      menu_item: [
        "About",
        "Privacy Policy",
        "Terms & Conditions",
        "Partners",
        "Contact",
      ],
    },
    {
      heading: "resources",
      menu_item: ["Guides and resources", "Blog", "Tools", "Support"],
    },
    {
      heading: "get latest updates",
      menu_item: [
        "Subscribe to our newsletter and get many interesting things every week",
      ],
      different: true,
    },
  ];
  return (
    <div className="bg-[#F7F7FC] pt-[100px] md:pt-[291px]">
      <Container>
        <div className="pb-[86px] md:flex justify-between">
          <div>
            <img
              src={footer_logo}
              alt="footer_logo"
              className="mb-[26px] cursor-pointer"
            />
            <p className="mb-[24px] font-secondary text-[16px] leading-[28px] text-info-color w-[263px]">
              Build a modern and creative website with Innovate.
            </p>
            <div className="flex gap-[8px]">
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
          <div className="flex justify-between w-[945px]">
            {footer_menu.map((menu) => (
              <div>
                <h6 className="list-none capitalize font-secondary font-medium text-lg leading-[32px] text-blue-color mb-[20px]">
                  {menu.heading}
                </h6>
                {menu.menu_item && (
                  <div className="">
                    {menu.different ? (
                      <div>
                        <p className="font-secondary font-normal text-[16px]  leading-[26px] text-info-color capitalize mb-[32px] w-[285px]">
                          {menu.menu_item}
                        </p>
                        <div className="relative ">
                          <input
                            type="text"
                            className="h-[46px] w-[269px] rounded-[6px] border-1 border-[#D2D2D2]  outline-0 pl-[24px] placeholder:text-[16px] capitalize leading-[26px] font-primary text-black"
                            placeholder="Your Email Address"
                          />
                          <button className="absolute  cursor-pointer h-9 w-9 bg-blueBtn-color rounded-[6px] right-[22px] top-[5px] flex items-center justify-center">
                            <FaTelegramPlane size={15} color="white"/>
                          </button>
                        </div>
                      </div>
                    ) : (
                      menu.menu_item.map((item, index) => (
                        <p
                          key={index}
                          className="cursor-pointer font-secondary font-normal text-[16px]  leading-[26px] text-info-color capitalize mb-3 hover:text-blueBtn-color transition-colors  duration-300"
                        >
                          {item}
                        </p>
                      ))
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="h-1 bg-[#d2d2d2] w-full rounded-full opacity-[20%]"></div>
        <p className="pt-[24px] pb-[30px] font-secondary font-normal text-[14px] leading-5 text-info-color">
          © 2024 Innovate - All Right Reserved
        </p>
      </Container>
    </div>
  );
}

export default Footer;
