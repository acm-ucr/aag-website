import React from "react";
import Image from "next/image";
import image1 from "../../public/fire.png";
import image2 from "../../public/logo.svg";
import JoinButton from "./JoinButton";

const Title = () => {
  return (
    <div className="relative flex flex-col items-center">
      <Image src={image1} alt="Background" />
      <div className=" pt-3 absolute top-2 flex flex-col items-center z-10">
        <Image src={image2} alt="Logo" width="200" />
        <p className=" mb-[30%] text-3xl mt-3 text-white font-bold">
          Fusion Dance Team at UCR
        </p>
        <JoinButton />
      </div>
    </div>
  );
};

export default Title;
