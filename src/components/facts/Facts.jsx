import React from "react";
import Container from "../Layout/container";
import illustration from "../../assets/facts/illustration.png";
import CountUp from "react-countup";

function Facts() {
  const facts_data = [
    {
      digit: 720,
      info: "Over 500 business powered with us",
    },
    {
      digit: 4.5,
      info: "Rating on google play and app store",
    },
    {
      digit: 200,
      info: "Easily integrate with your favorite apps",
    },
  ];

  return (
    <div className="mb-[60px] md:mb-[140px]">
      <Container>
        <div className="flex flex-col-reverse rounded-[20px] pt-[30px] md:rounded-[40px] bg-blueBtn-color bg-[url('/src/assets/facts/texture.png')] bg-no-repeat bg-cover md:flex md:flex-row">
          <div className="mt-[44px] ml-[41px] mr-[45px] content-end">
            <img src={illustration} alt="#illustration" />
          </div>
          <div className="md:mr-[70px] md:mt-[85px] px-[20px] text-center">
            <h4 className="font-primary font-bold text-[35px] md:text-[44px] text-white mb-[45px] md:mb-[64px] md:w-[554px] text-center">
              Trusted by 35,000+ happy customers.
            </h4>
            <div className="flex flex-col items-center md:flex md:flex-row justify-between md:mb-[85px] md:w-[608px] ">
              {facts_data.map((item) => (
                <div className="flex flex-col items-center mb-[30px]">
                  <div className="flex gap-2 items-center">
                    <h4 className="font-primary font-black text-[44px] md:leading-[54px] text-white md:mb-3">
                      <CountUp
                        start={0}
                        end={item.digit}
                        delay={0}
                        duration={5}
                        decimals={item.digit % 1 !== 0 ? 1 : 0}
                      >
                        {({ countUpRef }) => (
                          <div>
                            <span ref={countUpRef} />
                          </div>
                        )}
                      </CountUp>
                    </h4>
                    <div className="font-primary font-black text-[44px] md:leading-[54px] text-white md:mb-4">
                      {item.digit === 720 || item.digit === 200 ? "+" : " "}
                    </div>
                  </div>
                  <p className=" font-secondary font-medium text-lg leading-8 text-white md:w-[176px]">
                    {item.info}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Facts;
