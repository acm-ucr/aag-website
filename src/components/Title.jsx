import React from "react";
import Image from "next/image";
import image1 from "../../public/fire.png";
import image2 from "../../public/logo.svg";
import JoinButton from "./JoinButton";

const Title = () => {
  return (
    <div className="relative flex flex-col items-center w-full mb-[7%]">
      <Image
        src={image1}
        alt="Background"
        className="h-[60vh] object-cover md:h-[85vh] md:scale-125 w-full"
      />
      <div className="w-full mt-[15%] md:mt-[4%] absolute top-2 flex flex-col items-center z-10">
        <Image
          src={image2}
          alt="Logo"
          className="md:w-1/6 w-2/5 object-contain"
        />
        <p className="md:mb-[7%] mb-[20%] text-2xl md:text-4xl mt-8 text-white font-bold">
          Fusion Dance Team at UCR
        </p>
        <JoinButton />
      </div>
    </div>
  );
};

export default Title;
