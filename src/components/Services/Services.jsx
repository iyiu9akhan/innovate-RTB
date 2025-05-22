import React from "react";
import Container from "../Layout/container";
import services_one from "../../assets/services/services_one.png";
import services_two from "../../assets/services/services_two.png";
import services_three from "../../assets/services/services_three.png";
import services_four from "../../assets/services/services_four.png";
import Button from "../Layout/Button";
import { IoMdArrowRoundForward } from "react-icons/io";

function Services() {
  const services_data = [
    {
      img: services_one,
      title: "Plan Product Roadmap",
      details:
        "A product roadmap is a shared source of truth that outlines the vision, direction, priorities",
      button: "Read More",
    },
    {
      img: services_two,
      title: "Assign Any Work",
      details:
        "Work assignment or job assignment is allocating work to work centers or appropriate ",
      button: "Read More",
    },
    {
      img: services_three,
      title: "Monitor Work Progress",
      details:
        "Monitor Work ProgressKeeping records and monitoring activities helps people see progress ",
      button: "Read More",
    },
    {
      img: services_four,
      title: "Pertect Intergration",
      details:
        "App integration, in a general sense, is the process of resources or capabilities from one application ",
      button: "Read More",
    },
  ];
  return (
    <div className="mb-[100px] md:mb-[140px] ">
      <Container>
        <div className="text-center">
          <h6 className="font-secondary font-medium text-[20px] text-[#FF7364] capitalize  mb-1">
            our services
          </h6>
          <h4 className="font-primary font-bold text-[46px] leading-[58px] mb-[45px] md:mb-[80px] text-blue-color capitalize">
            how it works
          </h4>
        </div>
        <div className="flex flex-col items-center md:flex md:flex-row md:justify-between mb-[12px] md:mb-20">
          {services_data.map((item) => (
            <div className=" table border-1 border-[#DCE7FE] rounded-[20px] p-9 bg-blueBtn-color md:bg-transparent md:hover:bg-blueBtn-color group md:transition-all md:duration-500 mb-[30px] md:mb-0 ">
              <img src={item.img} alt="#features_one" className="mb-[26px]" />
              <h5 className="mb-2 font-primary font-bold text-[22px] leading-6 text-white md:text-blue-color md:group-hover:text-white md:transition-all md:duration-500">
                {item.title}
              </h5>
              <p className="font-secondary text-4 leading-[26px] tracking-[-0.04px] w-[258px] mb-[26px] text-white md:text-info-color md:group-hover:text-white md:transition-all md:duration-500">
                {item.details}
              </p>
              <button className="cursor-pointer  font-secondary text-4 font-medium leading-[26px] text-white md:text-[#3639A4] md:group-hover:text-white md:transition-all md:duration-500 flex gap-2 items-center">
                {item.button}
                <IoMdArrowRoundForward />
              </button>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button>view more </Button>
        </div>
      </Container>
    </div>
  );
}

export default Services;
