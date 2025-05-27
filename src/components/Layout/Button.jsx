import React from "react";

function Button({children, className}) {
  return (
    <div>
      <button className= {`w-[130px] h-[40px] text-[14px] border-2 border-blueBtn-color capitalize font-secondary font-medium md:text-lg leading-[20px] text-white rounded-[6px] md:w-[196px] md:h-[60px]  bg-blueBtn-color cursor-pointer hover:bg-transparent hover:text-black hover:border-2 hover:border-solid hover:border-blueBtn-color transition-all duration-300 ${className}`}>
       {children}
      </button>
    </div>
  );
}

export default Button;
