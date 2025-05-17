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
    <div className="mb-[140px]">
      <Container>
        <div className="rounded-[40px] bg-blueBtn-color bg-[url('/src/assets/facts/texture.png')] bg-no-repeat bg-cover flex">
          <div className="mt-[44px] ml-[41px] mr-[45px] content-end">
            <img src={illustration} alt="#illustration" />
          </div>
          <div className="mr-[70px] mt-[85px]">
            <h4 className="font-primary font-bold text-[44px] text-white mb-[64px] w-[554px]">
              Trusted by 35,000+ happy customers.
            </h4>
            <div className="flex justify-between mb-[85px] w-[608px]">
              {facts_data.map((item) => (
                <div className="">
                  <div className="flex gap-2 items-center">
                        <h4 className="font-primary font-black text-[44px] leading-[54px] text-white mb-3">
                      <CountUp
                        start={0}
                        end={item.digit}
                        delay={0}
                        duration={10}
                        decimals={item.digit % 1 !== 0 ? 1 : 0}
                      >
                        {({ countUpRef }) => (
                          <div>
                            <span ref={countUpRef} />
                          </div>
                        )}
                      </CountUp>
                    </h4>
                    <div className="font-primary font-black text-[44px] leading-[54px] text-white mb-4">
                      {item.digit === 720 || item.digit === 200 ? "+" : " "}
                    </div>
                  </div>
                  <p className="font-secondary font-medium text-lg leading-8 text-white w-[176px]">
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
