import React from "react";
import Container from "../Layout/container";
import graph from "../../assets/graph.png";
import icon_one from "../../assets/features/icon_one.png";
import icon_two from "../../assets/features/icon_two.png";
import icon_three from "../../assets/features/icon_three.png";
import Button from "../Layout/Button";

function Features() {
  const featuresData = [
    {
      img: icon_one,
      title: "Fast and Easy to use",
      details: "Easily to convert API with just a few clicks",
    },
    {
      img: icon_three,
      title: "Get Organized",
      details: "From lists to boards, organize work your way. ",
    },
    {
      img: icon_two,
      title: "Safely Security",
      details: "All customer data is encrypted",
    },
  ];
  return (
    <div className="mb-[55px]">
      <Container>
        <div className="flex justify-between">
          <img src={graph} alt="#graph" className="w-[753px] h-[756px]" />
          <div>
            <h1 className="font-primary font-bold text-[46px] leading-[58px] tracking-[-1px] w-[553px] capitalize mb-[64px] text-justify">
              we provide features for your business
            </h1>
            <div className="grid grid-flow-col grid-rows-2 gap-x-[96px] gap-y-[40px]">
              {featuresData.map((item) => (
                <div>
                  <img src={item.img} alt="#icon_one" className="mb-[14px]" />
                  <h4 className="font-primary font-bold text-[22px] leading-[34px] text-blue-color  w-[215px] mb-[6px] tracking-[-0.11px]">
                    {item.title}
                  </h4>
                  <p className="w-[220px] font-secondary text-lg leading-8 text-info-color">
                    {item.details}
                  </p>
                </div>
              ))}
              {/* <button className="border-2 border-blueBtn-color capitalize font-secondary font-medium text-lg leading-[20px] text-white rounded-[6px] w-[196px] h-[60px]  bg-blueBtn-color mt-[98px] cursor-pointer hover:bg-transparent hover:text-black hover:border-2 hover:border-solid hover:border-blueBtn-color transition-all duration-300">
                get started
              </button> */}
              <Button className= 'mt-[98px] '>get started</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Features;
