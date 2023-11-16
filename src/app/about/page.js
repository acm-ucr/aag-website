import React from "react";
import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import fire from "public/fire.png";

const About = () => {
  return (
    <>
      <title>AAG | About</title>
      <Image
        src={fire}
        alt="Background"
        className=" -translate-y-[7%] object-contain rotate-180 absolute top-0"
      />
      <PageTitle title="ABOUT" />
      <iframe
        width="1512"
        height="696"
        src="https://www.youtube.com/embed/W-9_lIJpM2I"
        title="UCR Aag Gig Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      />
    </>
  );
};

export default About;
