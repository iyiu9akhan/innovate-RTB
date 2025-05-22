import React from "react";
import Container from "../Layout/container";
import img_one from "../../assets/using_one.png";
import img_two from "../../assets/using_two.png";
import img_three from "../../assets/using_three.png";

function Using() {
  const infoData = [
    {
      img: img_one,
      title: "Login or sign up to be able use our platform",
      details:
        "This quickstart shows you how to use Identity Platform to sign in a user with an email and password. ",
    },
    {
      img: img_two,
      title: "Connect your website with just a few click",
      details:
        "Once your website is online, you can configure it, I will show you how to put your website online",
    },
    {
      img: img_three,
      title: "Login or sign up to be able use our platform",
      details:
        "Once your website is online, you can configure it, I will show you how to put your website online",
    },
  ];
  return (
    <div className="mb-[160px]">
      <Container>
        <div className="md:px-[58px]">
          <div className="md:flex justify-between mb-[50px] md:mb-[116px]">
            <h5 className="text-[34px] text-center md:text-start font-primary font-bold md:text-[46px] capitalize md:leading-[58px] text-blue-color md:w-[504px] tracking-[-1px]">
              how simple is it to use our platform
            </h5>
            <p className="text-center md:text-start md:w-[530px] md:text-lg font-secondary font-normal md:leading-8 tracking-[-0.045px] text-info-color">
              This Innovate Con guide explores the most popular platforms and
              walks you through how to use them to grow your business.
            </p>
          </div>
          <div className="md:flex justify-between text-center">
            {infoData.map((item) => (
              <div>
                <div className="flex md:flex-col gap-[26px] md:gap-0">
                  <img
                  src={item.img}
                  alt="#icon_one"
                  className="mx-auto mb-[12px] md:mb-[26px] h-[65px] w-[65px] md:h-[110px] md:w-[110px]"
                />
                <h4 className="flex items-center text-[20px] text-start md:text-center font-primary font-medium md:font-bold md:text-[24px] md:leading-9 text-blue-color  w-[300px] mx-auto mb-[12px] ">
                  {item.title}
                </h4>
                </div>
                <p className="text-justify md:text-center md:w-[300px] font-secondary md:text-lg md:leading-8 text-info-color mx-auto mb-[50px] md:mb-0">
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Using;
