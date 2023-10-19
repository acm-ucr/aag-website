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
    <div className="text-white w-full pt-[8%] overflow-hidden flex justify-between items-end bg-gradient-to-b from-black to-aag-red">
      <div className="flex items-center scale-50 -translate-x-[20px]">
        <Image src={logo} alt="logo" />
        <Image
          className="translate-x-1/4 translate-y-[15px] text-xxs"
          src={aag}
          alt="logo"
        />
      </div>

      <div className="flex m-4 font-playfair">
        <div className=" flex flex-col translate-y-[15px]  -translate-x-[10px]  border-r-2 border-white  text-white p-2 text-xs text-right font-jost">
          <p className="">Contact Us </p>
          <p className="">900 University Ave</p>
          <p> Riverside, CA</p>
          <p>92521</p>
        </div>

        <div className="flex flex-col items-end translate-y-[22px]">
          <Link href="https://www.instagram.com/ucraag/">
            <AiOutlineInstagram className=" text-white hover:opacity-80 hover:text-aag-red activate:opacity-60 activate:text-aag-red" />
          </Link>

          <Link href="https://www.facebook.com/people/UCR-Aag/61550312611527/">
            <AiFillFacebook className=" text-white hover:opacity-80 hover:text-aag-red activate:opacity-60 activate:text-aag-red" />
          </Link>

          <Link href="https://www.tiktok.com/@ucraag?ug_source=op.auth&ug_term=Linktr.ee&utm_source=awyc6vc625ejxp86&utm_campaign=tt4d_profile_link&_r=1">
            <BsTiktok className=" text-white hover:opacity-80 hover:text-aag-red activate:opacity-60 activate:text-aag-red" />
          </Link>

          <Link href="https://www.youtube.com/@ucraag/videos">
            <AiFillYoutube className=" text-white hover:opacity-80 hover:text-aag-red activate:opacity-60 activate:text-aag-red" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
