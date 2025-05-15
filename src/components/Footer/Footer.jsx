import React from "react";
import Container from "../Layout/container";
import footer_logo from "../../assets/footer/footer-logo.png";
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
      menu_item: ["Subscribe to our newsletter and get many interesting things every week"],
      different: true
    },
  ];
  return (
    <div className="bg-[#F7F7FC] pt-[291px]">
      <Container>
        <div className="pb-[86px] flex justify-between">
          <div >
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
                    {menu.different?(
                        <p className="font-secondary font-normal text-[16px]  leading-[26px] text-info-color capitalize mb-[32px] w-[285px]">
                        {menu.menu_item[0]}
                      </p>
                    ):(
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
      </Container>
    </div>
  );
}

export default Footer;
