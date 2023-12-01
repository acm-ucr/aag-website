import React from "react";
import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import fire from "public/fire.png";
import Video from "@/components/Video";
import { videos } from "@/data/videos";
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
      {videos.map((video, index) => (
        <Video key={index} title={video.title} link={video.link} />
      ))}
    </>
  );
};

export default About;
