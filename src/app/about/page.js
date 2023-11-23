import React from "react";
import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import fire from "public/fire.png";
import Video from "@/components/Video";
const About = () => {
  return (
    <>
      <title>AAG | About</title>
      <Image
        src={fire}
        alt="Background"
        className=" -z-10 -translate-y-[7%] object-contain rotate-180 absolute top-0"
      />
      <PageTitle title="ABOUT" />
      <Video
        title="AAG: The Beginning"
        link="https://www.youtube.com/embed/W-9_lIJpM2I"
      />
      <Video
        title="AAG: The Beginning"
        link="https://www.youtube.com/embed/rM87uwSaH2M"
      />
    </>
  );
};

export default About;
