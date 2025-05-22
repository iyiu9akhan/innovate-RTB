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
        <div className="md:flex justify-between">
          <img src={graph} alt="#graph" className="md:w-[753px] md:h-[756px]" />
          <div>
            <h1 className="mt-[15px] font-primary font-bold text-[30px] w-auto text-center mb-[35px] md:text-[46px] md:leading-[58px] tracking-[-1px] md:w-[553px] capitalize md:mb-[64px] md:mt-0">
              we provide features for your business
            </h1>
            <div className="flex flex-col gap-[15px] text-center md:grid grid-flow-col grid-rows-2 gap-x-[96px] gap-y-[40px]">
              {featuresData.map((item) => (
                <div className="flex flex-col items-center">
                  <img src={item.img} alt="#icon_one" className="mb-[14px]" />
                  <h4 className="font-primary font-bold text-[30px] md:text-[22px] leading-[34px] text-blue-color  md:w-[215px] mb-[6px] tracking-[-0.11px]">
                    {item.title}
                  </h4>
                  <p className="text-[18px] w-auto md:w-[220px] font-secondary md:text-lg leading-8 text-info-color">
                    {item.details}
                  </p>
                </div>
              ))}
              <Button className= 'md:mt-[98px] '>get started</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Features;
