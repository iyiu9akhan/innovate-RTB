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
// import Slider from "../Layout/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

function SampleNextArrow(props) {
  var { style, onClick } = props;
  return (
    <div
      className="group cursor-pointer absolute right-[35%]  md:-right-0 -bottom-12 "
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#3639A4",
        height: "30px",
        width: "30px",
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      <IoMdArrowDropright
        color="#fff"
        size={22}
        className="group-hover:#fff "
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  var { style, onClick } = props;
  return (
    <div
      className="group cursor-pointer absolute left-[35%] md:left-[85%] md:right-12 -bottom-12 "
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#3639A4",
        height: "30px",
        width: "30px",
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      <IoMdArrowDropleft color="#fff" size={22} />
    </div>
  );
}
function Testimonial() {
  const slider = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const slider_info = [
    {
      img: human_one,
      review:
        "Excellent service and support! The team helped me navigate the complexities of trading with ease. Highly recommended!",
      name: "sarah johnson",
      title: "financial analyst",
      rating: 2,
    },
    {
      img: human_two,
      review:
        "Decent platform but customer service could be faster. Had some issues with withdrawals that took time to resolve.",
      name: "michael chen",
      title: "entrepreneur",
      rating: 1,
    },
    {
      img: human_three,
      review:
        "Excellent service and support! The team helped me navigate the complexities of trading with ease. Highly recommended!",
      name: "emily rodriguez",
      title: "freelance designer",
      rating: 3,
    },
    {
      img: human_four,
      review:
        "Good educational resources but the platform interface feels outdated. Could use some modern UX improvements.",
      name: "david wilson",
      title: "software engineer",
      rating: 4,
    },
  ];

  return (
    <div className="bg-[#F4FAFA] py-[50px] md:py-[200px]">
      <Container>
        <div className="md:flex justify-between">
          <div>
            <h3 className="font-primary font-bold text-[35px] md:text-[46px] leading-[58px] text-blue-color md:w-[594px] mb-[20px]">
              What they are talking about us?
            </h3>
            <p className="text-justify font-secondary font-normal text-lg leading-[32px] tracking-[-0.045px] md:w-[503px] text-info-color mb-10">
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
              <div className="ml-[200px] md:ml-[230px] w-[153px]">
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

          <div className="my-[50px] md:my-0 md:w-[687px] ">
            <Slider {...slider}>
              {slider_info.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[20px] p-[60px] relative mt-[80px]"
                >
                  <p className="mt-4  font-secondary font-normal text-justify text-[16px] md:mt-0 md:text-[22px] md:leading-[44px] text-info-color mb-[37px] md:w-[567px]">
                    {item.review}
                  </p>
                  <div className="md:flex justify-between ">
                    <div>
                      <h5 className="font-primary capitalize text-[24px] font-bold leading-[36px] text-[#30344E] mb-1">
                        {item.name}
                      </h5>
                      <p className="font-secondary font-normal text-[16px] leading-[26px] text-[#30344E] capitalize">
                        {item.title}
                      </p>
                    </div>
                    <div className="flex items-end gap-1 mt-3 md:mt-0">
                      {[...Array(5)].map((unused, index) => (
                        <span key={index}>
                          {index < item.rating ? (
                            <FaStar color="#ffc107" size={18} />
                          ) : (
                            <FaStar color="#ddd" size={18} />
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="h-[124px] w-[124px] outline-10 rounded-[50%] absolute top-[-80px]  outline-[#F7F7FC]">
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
