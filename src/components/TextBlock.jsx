import React from "react";

const TextBlock = ({ title, text }) => {
  return (
    <div className="flex flex-col items-center font-jost w-1/2">
      <div className="text-3xl pl-3 font-bold border-l-8 border-aag-red mb-[8%]">
        {title}
      </div>
      <p className="text-xl text-center">{text}</p>
    </div>
  );
};

export default TextBlock;
