import React from "react";
import Image from "next/image";
import image1 from "../../public/fire.png";
import image2 from "../../public/logo.svg";
import JoinButton from "./JoinButton";

const Title = () => {
  return (
    <div className="relative flex flex-col items-center w-full">
      <Image
        src={image1}
        alt="Background"
        className="h-[30vh] object-cover md:h-auto"
      />
      <div className="w-full pt-3 absolute top-2 flex flex-col items-center z-10">
        <Image
          src={image2}
          alt="Logo"
          className="md:w-1/6 w-1/4 object-contain"
        />
        <p className="mb-[5%] text-lg md:text-3xl mt-3 text-white font-bold">
          Fusion Dance Team at UCR
        </p>
        <JoinButton />
      </div>
    </div>
  );
};

export default Title;
