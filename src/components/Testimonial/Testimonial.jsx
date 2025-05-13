import React from "react";
import Container from "../Layout/container";
import Button from "../Layout/Button";
import human_one from "../../assets/testimonial/human_one.png";
import human_two from "../../assets/testimonial/human_two.png";
import human_three from "../../assets/testimonial/human_three.png";
import human_four from "../../assets/testimonial/human_four.png";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

function Testimonial() {
  return (
    <div className="bg-[#F4FAFA] py-[200px]">
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-primary font-bold text-[46px] leading-[58px] text-blue-color w-[594px] mb-[20px]">
              What they are talking about us?
            </h3>
            <p className="font-secondary font-normal text-lg leading-[32px] tracking-[-0.045px] w-[503px] text-info-color mb-10">
              Testimonials are evidence of customers talking about your product
              or service in their own words. At their best, they are authentic,
              descriptive.
            </p>
            <Button>Get Started</Button>
            <div className="mt-[85px]">
              <div className="flex relative mr-[30px]">
                <div className="absolute">
                  <img
                    src={human_one}
                    alt="#human_one"
                    className="w-[58px] h-[58px] bg-red-900 rounded-[50%] outline-2 outline-white"
                  />
                </div>
                <div className="absolute left-[40px]">
                  <img
                    src={human_two}
                    alt="#human_two"
                    className="w-[58px] h-[58px] bg-red-900 rounded-[50%] outline-2 outline-white"
                  />
                </div>
                <div className="absolute left-[80px]">
                  <img
                    src={human_three}
                    alt="#human_three"
                    className="w-[58px] h-[58px] bg-red-900 rounded-[50%] outline-2 outline-white"
                  />
                </div>
                <div className="absolute left-[120px]">
                  <img
                    src={human_four}
                    alt="#human_four"
                    className="w-[58px] h-[58px] bg-red-900 rounded-[50%] outline-2 outline-white"
                  />
                </div>
              </div>
              <div className="ml-[230px] w-[153px]">
                <div className="flex items-center justify-between ">
                  <h1
                    className="relative font-primary font-black text-[24px] leading-[36px] text-[#52C5B6]
                 after:content-[''] after:absolute after:top-[11px] after:right-[-18px] 
                 after:bg-gray-300 after:h-[15px] after:w-[2px]"
                  >
                    4.5
                  </h1>
                  <div className="flex text-[#FFC34C] gap-1 ml-[18px]">
                    <p>
                      <FaStar size={14} />
                    </p>
                    <p>
                      <FaStar size={14} />
                    </p>
                    <p>
                      <FaStar size={14} />
                    </p>
                    <p>
                      <FaStar size={14} />
                    </p>
                    <p>
                      <FaStarHalfAlt size={14} />
                    </p>
                  </div>
                </div>
                <p className="font-secondary font-medium text-lg leading-[32px] text-info-color">
                  280k Total Review
                </p>
              </div>
            </div>
          </div>
          <div>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, iste.</h1>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Testimonial;
