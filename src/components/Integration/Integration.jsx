import React from "react";
import Container from "../Layout/container";
import Button from "../Layout/Button";
import brand_one from "../../assets/integration/brand_one.png";
import brand_two from "../../assets/integration/brand_two.png";
import brand_three from "../../assets/integration/brand_three.png";
import brand_four from "../../assets/integration/brand_four.png";
import brand_five from "../../assets/integration/brand_five.png";
import brand_six from "../../assets/integration/brand_six.png";
import brand_seven from "../../assets/integration/brand_seven.png";
import brand_eight from "../../assets/integration/brand_eight.png";
import Brand_logo from "../Layout/Brand_logo"; //integration section's right side brand logo [component/layout]
import integration_shape from "../../assets/integration/integration_shape.png";

function Integration() {
  return (
    <div className="bg-sectionBG-color md:pt-[124px] relative md:mb-[140px]">
      <img
        src={integration_shape}
        alt="#integration_shape"
        className="absolute bottom-[23px] left-[100px] hidden md:block"
      />
      <Container>
        <div className="md:flex justify-between relative">
          <div className="pt-[49px] pb-[23px]">
            <p className="font-secondary font-medium text-[20px] text-[#FF7364] capitalize mb-1">
              integrations
            </p>
            <h4 className="font-primary font-bold text-[30px] w-auto md:text-[46px] md:leading-[58px] tracking-[-1px] md:w-[587px] text-blue-color mb-[20px]">
              Easily integrate with your favorite apps
            </h4>
            <p className="font-secondary text-lg leading-8 text-info-color text-justify md:w-[533px] tracking-[-0.045px]">
              App integration, in a general sense, is the process of bringing
              resources or capabilities from one application to another. As the
              world of apps continues to evolve, app integration is becoming
              expected in many contexts.
            </p>
            <div className="text-center md:text-start">
              <Button className="mt-[40px] mb-[25px] md:mb-0">
                get started
              </Button>
            </div>
          </div>
          <div className="mb-[55px] md:mb-[120px] pb-[50px] md:pb-0">
            <div className="flex justify-center md:justify-between gap-x-[20px] mb-[20px] md:gap-x-[30px] md:mb-[35px]">
              <Brand_logo className="w-[332px]">
                <img src={brand_one} alt="#brand_one" className="px-[12px] md:px-0"/>
              </Brand_logo>

              <Brand_logo className="w-[332px]">
                <img src={brand_two} alt="#brand_two" className="px-[12px] md:px-0"/>
              </Brand_logo>
            </div>

            <div className="flex justify-center md:justify-between gap-x-[20px] mb-[20px] md:gap-x-[30px] md:mb-[35px]">
              <Brand_logo className="w-[151px]">
                <img src={brand_three} alt="#brand_three" className="px-[12px] md:px-0"/>
              </Brand_logo>

              <Brand_logo className="w-[332px]">
                <img src={brand_four} alt="#brand_four" className="px-[12px] md:px-0"/>
              </Brand_logo>

              <Brand_logo className="w-[151px]">
                <img src={brand_five} alt="#brand_five" className="px-[12px] md:px-0"/>
              </Brand_logo>
            </div>

            <div className="flex justify-center md:justify-between gap-x-[20px] md:gap-x-[30px]">
              <Brand_logo className="w-[290px]">
                <img src={brand_six} alt="#brand_six" className="px-[12px] md:px-0"/>
              </Brand_logo>

              <Brand_logo className="w-[151px]">
                <img src={brand_seven} alt="#brand_seven" className="px-[12px] md:px-0"/>
              </Brand_logo>

              <Brand_logo className="w-[196px]">
                <img src={brand_eight} alt="#brand_eight" className="px-[12px] md:px-0"/>
              </Brand_logo>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Integration;
