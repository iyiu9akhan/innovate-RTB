import React from "react";
import Container from "../Layout/container";
import { FaRegUser } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import Button from "../Layout/Button";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { PiBuildingOffice } from "react-icons/pi";

// import icon_one from "../../assets/pricing/price_one.png"

function Pricing() {

    const pricing_data =[
        {
            icon: <FaRegUser/>,
            title: 'personal',
            heading: '$10',
            // discount: 'Annual pricing',
            dis_digit: '20',
            feature : [
                {
                    0: 'Calendar View',
                    1: 'Custom Templates',
                    2: 'list view',
                    3: 'board view',
                    4: 'Assignees & Due Dates'
                },
            ]
        },
        {
            icon: <HiOutlineUserGroup />,
            title: 'team',
            heading: '$25',
            // discount: 'Annual pricing ',
            dis_digit: '35',
            feature : [
                {
                    0: 'Timeline Review',
                    1: 'Custom fields',
                    2: 'Custom Templates',
                    3: 'Task dependencies',
                    4: 'Milestones Manage'
                },
            ]
        },
        {
            icon: <PiBuildingOffice />,
            title: 'enterprise',
            heading: '$50',
            // discount: 'Annual pricing ',
            dis_digit: '40',
            feature : [
                {
                    0: 'Data export & deletion',
                    1: 'Block native integrations',
                    2: 'Custom branding',
                    3: 'Lock custom fields',
                    4: 'Priority support'
                },
            ]
        },
    ]
  return (
    <div>
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
        {pricing_data.map((item)=>(
              <div className="border-1 border-border-gray rounded-[20px] py-[60px] px-[40px] flex flex-col text-center group hover:bg-blueBtn-color transition-all duration-500">
            <div className=" mx-auto">
              <div className="h-[90px] w-[90px] bg-[#E8F2FA] rounded-[50%] flex items-center justify-center mb-8 group-hover:bg-white transition-all duration-500">
                <div className=" text-[#2290F5] group-hover:text-blueBtn-color transition-all duration-500 text-[40px]">
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
              <span className="text-blueBtn-color mb-[40px] transition-all duration-500 group-hover:text-btn"> (save {item.dis_digit}%)</span>
            </p>
            <div className="mb-[40px]">
              <div className="flex items-center mb-[26px]">
                <div className="h-[24px] w-[24px] bg-[#F4EBFF] rounded-[50%] flex justify-center items-center">
                  <GiCheckMark className="text-blueBtn-color" size={12} />
                </div>
                <p className="ml-[22px] font-secondary font-medium text-lg leading-[32px] text-info-color transition-all duration-500 group-hover:text-white">
                  Calendar View
                </p>
              </div>
              <div className="flex items-center mb-[26px]">
                <div className="h-[24px] w-[24px] bg-[#F4EBFF] rounded-[50%] flex justify-center items-center">
                  <GiCheckMark className="text-blueBtn-color" size={12} />
                </div>
                <p className="ml-[22px] font-secondary font-medium text-lg leading-[32px] text-info-color transition-all duration-500 group-hover:text-white">
                  Custom Templates
                </p>
              </div>
              <div className="flex items-center mb-[26px]">
                <div className="h-[24px] w-[24px] bg-[#F4EBFF] rounded-[50%] flex justify-center items-center">
                  <GiCheckMark className="text-blueBtn-color" size={12} />
                </div>
                <p className="ml-[22px] font-secondary font-medium text-lg leading-[32px] text-info-color transition-all duration-500 group-hover:text-white">
                  list view
                </p>
              </div>
              <div className="flex items-center mb-[26px]">
                <div className="h-[24px] w-[24px] bg-[#F4EBFF] rounded-[50%] flex justify-center items-center">
                  <GiCheckMark className="text-blueBtn-color" size={12} />
                </div>
                <p className="ml-[22px] font-secondary font-medium text-lg leading-[32px] text-info-color transition-all duration-500 group-hover:text-white">
                  board view
                </p>
              </div>
              <div className="flex items-center">
                <div className="h-[24px] w-[24px] bg-[#F4EBFF] rounded-[50%] flex justify-center items-center">
                  <GiCheckMark className="text-blueBtn-color" size={12} />
                </div>
                <p className="ml-[22px] font-secondary font-medium text-lg leading-[32px] text-info-color transition-all duration-500 group-hover:text-white">
                  Assignees & Due Dates
                </p>
              </div>
            </div>
            <Button className="w-[330px] transition-all duration-500 group-hover:text-black group-hover:bg-btn group-hover:border-btn">Purchase Now</Button>
          </div>
        ))}
        </div>
      </Container>
    </div>
  );
}

export default Pricing;
