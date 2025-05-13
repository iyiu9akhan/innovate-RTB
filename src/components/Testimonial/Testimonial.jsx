import React from "react";
import Container from "../Layout/container";
import Button from "../Layout/Button";
import human_one from "../../assets/testimonial/human_one.png";
import human_two from "../../assets/testimonial/human_two.png";
import human_three from "../../assets/testimonial/human_three.png";
import human_four from "../../assets/testimonial/human_four.png";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

function Testimonial() {
  const slider = {
    // dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const slider_info = [
    {
      img: human_one,
      review:
        "Excellent service and support! The team helped me navigate the complexities of trading with ease. Highly recommended!",
      name: "sarah johnson",
      title: "financial analyst",
      // rating: 5,
    },
    {
      img: human_two,
      review:
        "Decent platform but customer service could be faster. Had some issues with withdrawals that took time to resolve.",
      name: "michael chen",
      title: "entrepreneur",
      // rating: 3,
    },
    {
      img: human_three,
      review:
        "Absolutely life-changing experience! My portfolio grew 30% in just 3 months thanks to their expert advice.",
      name: "emily rodriguez",
      title: "freelance designer",
      // rating: 5,
    },
    {
      img: human_four,
      review:
        "Good educational resources but the platform interface feels outdated. Could use some modern UX improvements.",
      name: "david wilson",
      title: "software engineer",
      // rating: 4,
    },
  ];

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

          <div className="w-[687px]">
            <Slider {...slider}>
              {slider_info.map((item , index) => (
                <div key={index} className="bg-white rounded-[20px] p-[60px] relative mt-[80px]">
                  <p className="font-secondary font-normal text-[22px] leading-[44px] text-info-color mb-[37px] w-[567px]">
                    {item.review}
                  </p>
                  <div className="flex justify-between">
                    <div>
                      <h5 className="font-primary capitalize text-[24px] font-bold leading-[36px] text-[#30344E] mb-1">
                        {item.name}
                      </h5>
                      <p className="font-secondary font-normal text-[16px] leading-[26px] text-[#30344E] capitalize">
                        {item.title}
                      </p>
                    </div>
                    <div className="flex text-[#FFC34C] gap-1 ml-[18px] items-end">
                    <p>
                      <FaStar size={18} />
                    </p>
                    <p>
                      <FaStar size={18} />
                    </p>
                    <p>
                      <FaStar size={18} />
                    </p>
                    <p>
                      <FaStar size={18} />
                    </p>
                    <p>
                      <FaStarHalfAlt size={18} />
                    </p>
                  </div>
                  </div>
                  <div className="h-[124px] w-[124px] outline-10 rounded-[50%] absolute top-[-80px] outline-[#F7F7FC]">
                    <img
                      src={item.img}
                      alt="human_one"
                      className="rounded-[50%]"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Testimonial;
