import React from "react";

function Button({children, className}) {
  return (
    <div>
      <button className= {` border-2 border-blueBtn-color capitalize font-secondary font-medium text-lg leading-[20px] text-white rounded-[6px] w-[196px] h-[60px]  bg-blueBtn-color cursor-pointer hover:bg-transparent hover:text-black hover:border-2 hover:border-solid hover:border-blueBtn-color transition-all duration-300 ${className}`}>
       {children}
      </button>
    </div>
  );
}

export default Button;
