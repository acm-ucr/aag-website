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
    </>
  );
};

export default About;
