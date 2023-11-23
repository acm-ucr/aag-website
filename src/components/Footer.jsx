import React from "react";
import Image from "next/image";
import logo from "../../public/logo.svg";
import aag from "../../public/aag.svg";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { BsTiktok } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="text-white w-full pt-[15%] md:pb-[2%] pb-[4%] px-[3%] flex justify-between items-end bg-gradient-to-b from-transparent to-aag-red font-jost">
      <Link
        href="/"
        className="transition ease-in-out hover:opacity-80 flex items-end md:scale-110"
      >
        <Image className="md:w-full w-1/4" src={logo} alt="logo" />
        <Image
          className="md:w-full w-1/2 md:ml-[10%] ml-[7%]"
          src={aag}
          alt="logo"
        />
      </Link>

      <div className="flex text-white">
        <div className="flex flex-col border-r-4 md:mx-2 mx-1 font-bold lg:text-2xl text-xs border-white pr-2 text-right">
          <p>Contact Us </p>
          <p>900 University Ave</p>
          <p>Riverside, CA</p>
          <p>92521</p>
        </div>

        <div className="flex flex-col md:text-3xl text-xs items-center">
          <Link target="_blank" href="https://www.instagram.com/ucraag/">
            <AiOutlineInstagram className="transition ease-in-out scale-110 mb-0.5 hover:opacity-80 hover:text-aag-red hover:scale-95" />
          </Link>

          <Link
            target="_blank"
            href="https://www.facebook.com/people/UCR-Aag/61550312611527/"
          >
            <AiFillFacebook className="transition ease-in-out my-0.5 hover:opacity-80 hover:text-aag-red hover:scale-95" />
          </Link>

          <Link
            target="_blank"
            href="https://www.tiktok.com/@ucraag?ug_source=op.auth&ug_term=Linktr.ee&utm_source=awyc6vc625ejxp86&utm_campaign=tt4d_profile_link&_r=1"
          >
            <BsTiktok className="transition ease-in-out my-0.5 hover:opacity-80 hover:text-aag-red hover:scale-95" />
          </Link>

          <Link target="_blank" href="https://www.youtube.com/@ucraag/videos">
            <AiFillYoutube className="transition ease-in-out mt-0.5 hover:text-aag-red hover:scale-95" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
