import React from "react";
import Image from "next/image";
import image1 from "../../public/fire.png";
import image2 from "../../public/logo.svg";
import JoinButton from "./JoinButton";

const Title = () => {
  return (
    <div className="relative">
      <Image src={image1} alt="Background" className="scale-95" />
      <div className="absolute inset-x-0 top-20 flex flex-col items-center justify-start z-10 scale-110">
        <Image src={image2} alt="Logo" width="200" />
        <div className="text-3xl mt-1 text-white font-bold">
          Fusion Dance Team at UCR
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-20 flex items-end justify-center z-10">
        <JoinButton />
      </div>
    </div>
  );
};

export default Title;
