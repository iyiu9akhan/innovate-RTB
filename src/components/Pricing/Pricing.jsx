import React from "react";
import Container from "../Layout/container";
import { FaRegUser } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import Button from "../Layout/Button";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { PiBuildingOffice } from "react-icons/pi";

function Pricing() {
  const pricing_data = [
    {
      icon: <FaRegUser />,
      icon_color: "text-[#2290F5]",
      icon_bg: "bg-[#E8F2FA] group-hover:bg-white",
      title: "personal",
      heading: "$10",
      dis_digit: "20",
      feature: [
        [
          "Calendar View",
          "Custom Templates",
          "list view",
          "board view",
          "Assignees & Due Dates",
        ],
      ],
      feature_icon: <GiCheckMark />,
    },
    {
      icon: <HiOutlineUserGroup />,
      icon_color: "text-[#3639A4]",
      icon_bg: "bg-[#E6E6FA] group-hover:bg-white",
      title: "team",
      heading: "$25",
      dis_digit: "35",
      feature: [
        [
          "Timeline Review",
          "Custom fields",
          "Custom Templates",
          "Task dependencies",
          "Milestones Manage",
        ],
      ],
      feature_icon: <GiCheckMark />,
    },
    {
      icon: <PiBuildingOffice />,
      icon_color: "text-[#9472F9]",
      icon_bg: "bg-[#ECE8F9] group-hover:bg-white",
      title: "enterprise",
      heading: "$50",
      dis_digit: "40",
      feature: [
        [
          "Data export & deletion",
          "Block native integrations",
          "Custom branding",
          "Lock custom fields",
          "Priority support",
        ],
      ],
      feature_icon: <GiCheckMark />,
    },
  ];
  return (
    <div className="mb-[160px]">
      <Container>
        <div>
          <h1 className="font-primary font-bold text-[46px] leading-[56px] text-blue-color w-[623px] mb-[39px] capitalize mx-auto text-center">
            pricing designed to fit your business
          </h1>
          <h6 className="text-center mb-[77px] capitalize font-primary font-bold text-[24px] text-blueBtn-color">
            monthly
          </h6>
        </div>
        <div className="flex justify-between ">
          {pricing_data.map((item) => (
            <div className="border-1 border-border-gray rounded-[20px] px-[60px] py-[40px] flex flex-col text-center group hover:bg-blueBtn-color transition-all duration-500">
              <div className=" mx-auto group">
                <div
                  className={`h-[90px] w-[90px] rounded-full flex items-center justify-center mb-8 transition-all duration-500 ${item.icon_bg}`}
                >
                  <div
                    className={`text-[40px] transition-all duration-500 ${item.icon_color} group-hover:text-blueBtn-color`}
                  >
                    {item.icon}
                  </div>
                </div>
              </div>
              <h6 className=" font-primary font-bold text-[24px] leading-9 capitalize text-blueBtn-color mb-[2px] group-hover:text-btn transition-all duration-500">
                {item.title}
              </h6>
              <h2 className="font-primary font-bold text-[44px] leading-[54px] tracking-[-0.88px] mb-[14px] text-blue-color group-hover:text-white transition-all duration-500">
                {item.heading}/mth
              </h2>
              <p className="font-secondary font-medium text-lg leading-[18px] mb-[40px] group-hover:text-white transition-all duration-500">
                Annual pricing
                <span className="text-blueBtn-color mb-[40px] transition-all duration-500 group-hover:text-btn">
                  {" "}
                  (save {item.dis_digit}%)
                </span>
              </p>
              <div className="mb-[40px]">
                {item.feature[0].map((list, index) => (
                  <div className="flex items-center mb-[26px]" key={index}>
                    <div className="flex items-center">
                      <div className="h-[24px] w-[24px] bg-[#F4EBFF] rounded-[50%] flex justify-center items-center text-blueBtn-color text-[12px]">
                        {item.feature_icon}
                      </div>
                      <p className="ml-[22px] font-secondary font-medium text-lg leading-[32px] text-info-color transition-all duration-500 group-hover:text-white ">
                        {" "}
                        {list}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-[330px] transition-all duration-500 group-hover:text-black group-hover:bg-btn group-hover:border-btn hover:bg-white hover:border-white">
                Purchase Now
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Pricing;
