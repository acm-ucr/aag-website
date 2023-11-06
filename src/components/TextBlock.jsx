import React from "react";

const TextBlock = ({ title, text }) => {
  return (
    <div className="text-white flex flex-col items-center font-jost  my-[5%] w-3/4 md:w-1/2">
      {title === "ABOUT US" && (
        <p className="text-aag-red text-2lg mb-3 font-bold md:text-xl">
          who we are
        </p>
      )}
      <div className="text-xl pl-3 font-bold border-l-[10px] border-aag-red mb-[8%] md:text-3xl">
        {title}
      </div>
      <p className=" text-center md:text-xl">{text}</p>
    </div>
  );
};

export default TextBlock;
