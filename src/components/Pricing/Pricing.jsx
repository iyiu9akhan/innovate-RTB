import React from "react";
import Container from "../Layout/container";
import { FaRegUser } from "react-icons/fa";

function Pricing() {
  return (
    <div>
      <Container>
        <div>
          <h1 className="font-primary font-bold text-[46px] leading-[56px] text-blue-color w-[623px] mb-[39px] capitalize mx-auto text-center">
            pricing designed to fit your business
          </h1>
          <h6 className="text-center mb-[77px] capitalize font-primary font-bold text-7 text-blueBtn-color">
            monthly
          </h6>
        </div>
        <div className="flex justify-between ">
          <div className="border-1 border-border-gray rounded-[20px] py-[60px] px-[40px] flex flex-col text-center items-center">
            <div className="h-[90px] w-[90px] bg-[#E8F2FA] rounded-[50%] flex items-center justify-center mb-8">
              <FaRegUser size={40} />
            </div>
            <h6 className=" font-primary font-bold text-8 leading-9 capitalize text-blueBtn-color mb-[2px]">personal</h6>
            <h2 className="font-primary font-bold text-[44px] leading-[54px] tracking-[-0.88px]">$10/mth</h2>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Pricing;
