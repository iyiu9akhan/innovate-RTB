import React from "react";
import Container from "../Layout/container";
import laptop_screen from "../../assets/laptop_screen.png";

function Banner({ children }) {
  return (
    <div className="bg-[url('/src/assets/bg_shape.png')] bg-no-repeat bg-cover bg-center  relative w-full mb-[50px] md:mb-[160px]">
      {children}
      <Container>
        <div className="text-center">
          <h1 className=" font-secondary font-bold text-[30px] mt-[40px] leading-[55px] mb-[12px] md:text-[56px] md:w-[786px] mx-auto text-white md:mt-[98px] md:mb-[20px] md:leading-[64px]">
            Get your work done with Management Tool
          </h1>
          <p className="font-secondary font-normal text-[15px] w-auto md:text-lg tracking-[-0.0025em] text-white md:leading-8 md:w-[467px] mx-auto mb-8">
            The world's first project management platform that connects
            everything
          </p>
          <div className="relative mb-[40px] md:mb-[98px]">
            <input
              type="text"
              className="mb-5 h-[45px] w-[75%] block mx-auto md:h-[66px] md:w-[480px] md:mb-0 rounded-[6px] bg-white   outline-0 pl-[24px] placeholder:text-[16px] capitalize leading-[26px] font-primary text-black"
              placeholder="Your business email"
            />
            <button className="py-[10px] md:absolute md:right-[472px] bottom-2  px-[28.5px] md:py-[15px] bg-btn rounded-[6px] cursor-pointer text-blue-color text-lg font-medium font-secondary leading-[20px] capitalize">
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
