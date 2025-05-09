import React from "react";
import Container from "../Layout/container";
import laptop_screen from "../../assets/laptop_screen.png";

function Banner({ children }) {
  return (
    <div className="bg-[url('/src/assets/bg_shape.png')] bg-no-repeat  relative w-full pt-[92px] mb-[160px]">
      {children}
      <Container>
        <div className="text-center">
          <h1 className="font-secondary font-bold text-[56px] w-[786px] mx-auto text-white mt-[98px] mb-[20px] leading-[64px]">
            Get your work done with Management Tool
          </h1>
          <p className="font-secondary font-normal text-lg tracking-[-0.0025em] text-white leading-8 w-[467px] mx-auto mb-8">
            The world's first project management platform that connects
            everything
          </p>
          <div className="relative mb-[98px]">
            <input
              type="text"
              className="h-[66px] w-[480px] rounded-[6px] bg-white   outline-0 pl-[24px] placeholder:text-[16px] capitalize leading-[26px] font-primary text-black"
              placeholder="Your business email"
            />
            <button className="absolute right-[472px] bottom-2  px-[28.5px] py-[15px] bg-btn rounded-[6px] cursor-pointer text-btn-text text-lg font-medium font-secondary leading-[20px] capitalize">
              try for free
            </button>
          </div>
          <img src={laptop_screen} alt="laptop_screen" className="mx-auto"/>
        </div>
      </Container>
    </div>
  );
}

export default Banner;
