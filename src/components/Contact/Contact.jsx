import React from "react";
import Container from "../Layout/container";
import Button from "../Layout/Button";

const Contact = () => {
  return (
    <div className="relative h-[309px] bg-white pt-[80px] md:pt-[160px]">
      <Container>
        <div className="flex flex-col bg-blueBtn-color rounded-[20px] px-[50px] md:px-[102px] py-[50px] md:py-[100px] md:flex justify-between items-center bg-[url('/src/assets/contact/texture.png')] ">
          <h1 className="text-center mb-[20px] md:mb-0 font-primary font-bold text-[23px] md:text-[46px] md:leading-[58px] text-white md:w-[577px]">
            Don’t find the answer? contact us for any query.
          </h1>
          <Button className=" bg-btn !text-black border-btn !border-1 hover:!border-btn hover:!text-white">
            contact us
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
