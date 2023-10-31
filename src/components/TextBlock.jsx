import React from "react";

const TextBlock = ({ title, text }) => {
  return (
    <div className="text-white flex flex-col items-center font-jost w-1/2 my-[5%]">
      {title === "ABOUT US" && (
        <p className="text-aag-red text-xl mb-3 font-bold">who we are</p>
      )}
      <div className="text-3xl pl-3 font-bold border-l-[10px] border-aag-red mb-[8%]">
        {title}
      </div>
      <p className="text-xl text-center">{text}</p>
    </div>
  );
};

export default TextBlock;
