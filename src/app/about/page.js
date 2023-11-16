import React from "react";
import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import fire from "public/fire.png";
import ReactPlayer from "react-player";
const About = () => {
  return (
    <div>
      <title>AAG | About</title>
      <Image
        src={fire}
        alt="Background"
        className=" -translate-y-[7%] object-contain rotate-180 absolute top-0"
      />
      <PageTitle title="ABOUT" />
      <ReactPlayer url="https://youtu.be/W-9_lIJpM2I" />
    </div>
  );
};

export default About;
