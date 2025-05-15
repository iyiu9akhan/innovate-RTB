import React from "react";
import Container from "../Layout/container";
import Button from "../Layout/Button";
import texture from "../../assets/contact/texture.png";

const Contact = () => {
  return (
    <div className="relative h-[309px] bg-white pt-[160px]">
      <Container>
        <div className="   bg-blueBtn-color rounded-[20px] px-[102px] py-[100px] flex justify-between items-center bg-[url('/src/assets/contact/texture.png')] ">
          <h1 className="font-primary font-bold text-[46px] leading-[58px] text-white w-[577px]">
            Don’t find the answer? contact us for any query.
          </h1>
          <Button className="bg-btn !text-black border-btn !border-1 hover:!border-btn hover:!text-white">
            contact us
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
