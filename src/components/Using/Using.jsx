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
    <div>
      <Container>
        <div className="flex justify-between px-[58px] mb-[116px]">
          <h5 className="font-primary font-bold text-[46px] capitalize leading-[58px] text-blue-color w-[504px] tracking-[-1px]">
            how simple is it to use our platform
          </h5>
          <p className="w-[530px] text-lg font-secondary font-normal leading-8 tracking-[-0.045px] text-info">
            This Innovate Con guide explores the most popular platforms and
            walks you through how to use them to grow your business.
          </p>
        </div>
        <div className="flex justify-between text-center">
          {infoData.map((item) => (
            <div>
              <img src={item.img} alt="#icon_one" className="mx-auto mb-[26px]"/>
              <h4 className="font-primary font-bold text-[24px] leading-9 text-blue-color  w-[300px] mx-auto mb-3">{item.title}</h4>
              <p className="w-[300px] font-secondary text-lg leading-8 text-info">{item.details}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Using;
