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
import Brand_logo from "../Layout/Brand_logo";

function Integration() {
  return (
    <div className="bg-sectionBG-color pt-[124px]">
      <Container>
        <div className="flex justify-between">
          <div className="pt-[49px] pb-[23px]">
            <p className="font-secondary font-medium text-[20px] text-[#FF7364] capitalize mb-1">
              integrations
            </p>
            <h4 className="font-primary font-bold text-[46px] leading-[58px] tracking-[-1px] w-[587px] text-blue-color mb-[20px]">
              Easily integrate with your favorite apps
            </h4>
            <p className="font-secondary text-lg leading-8 text-info-color w-[533px] tracking-[-0.045px]">
              App integration, in a general sense, is the process of bringing
              resources or capabilities from one application to another. As the
              world of apps continues to evolve, app integration is becoming
              expected in many contexts.
            </p>
            <Button className="mt-[40px] ">get started</Button>
          </div>
          <div className="mb-[120px]">
            <div className="flex justify-between gap-x-[30px] mb-[35px]">
              <Brand_logo className=" w-[332px]">
                <img src={brand_one} alt="#brand_one" className="max-w-full max-h-full object-contain"/>
              </Brand_logo>

              <Brand_logo className=" w-[332px]">
                <img src={brand_two} alt="#brand_two" />
              </Brand_logo>
            </div>

            <div className="flex justify-between mb-[35px] gap-x-[30px]">
              <Brand_logo className="w-[151px]">
                <img src={brand_three} alt="#brand_three" />
              </Brand_logo>

              <Brand_logo className="w-[332px]">
                <img src={brand_four} alt="#brand_four" />
              </Brand_logo>

              <Brand_logo className="w-[151px]">
                <img src={brand_five} alt="#brand_five" />
              </Brand_logo>
            </div>

            <div className="flex justify-between gap-x-[30px]">
              <Brand_logo className=" w-[290px]">
                <img src={brand_six} alt="#brand_six" />
              </Brand_logo>

              <Brand_logo className="w-[151px]">
                <img src={brand_seven} alt="#brand_seven" />
              </Brand_logo>

              <Brand_logo className="w-[196px]">
                <img src={brand_eight} alt="#brand_eight" />
              </Brand_logo>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Integration;
