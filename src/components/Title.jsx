import React from "react";
import Image from "next/image";
import image1 from "../../public/fire.png";
import image2 from "../../public/logo.svg";
import JoinButton from "./JoinButton";

const Title = () => {
  return (
    <div className="relative">
      <Image src={image1} alt="description of the image" />
      <div className="absolute inset-x-0 top-10 flex flex-col items-center justify-start z-10 scale-150">
        <Image src={image2} alt="description of the image" />
        <div className="text-2xl text-white">UCR FUSION DANCE TEAM</div>
      </div>
      <div className="absolute inset-x-0 bottom-24 flex items-end justify-center z-10">
        <JoinButton />
      </div>
    </div>
  );
};

export default Title;
