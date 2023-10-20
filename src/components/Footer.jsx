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
    <div className="text-white w-full pt-[15%] pb-[2%] px-[3%] flex justify-between items-end bg-gradient-to-b from-transparent to-aag-red font-jost">
      <Link href="/" className="flex items-end scale-110">
        <Image src={logo} alt="logo" />
        <Image className="ml-[10%]" src={aag} alt="logo" />
      </Link>

      <div className="flex text-white">
        <div className="flex flex-col border-r-4 mx-2 font-bold text-xl border-white pr-2 text-right">
          <p>Contact Us </p>
          <p>900 University Ave</p>
          <p> Riverside, CA</p>
          <p>92521</p>
        </div>

        <div className="flex flex-col text-3xl items-center">
          <Link href="https://www.instagram.com/ucraag/">
            <AiOutlineInstagram className=" scale-110 mb-0.5 hover:opacity-80 hover:text-aag-red hover:scale-90" />
          </Link>

          <Link href="https://www.facebook.com/people/UCR-Aag/61550312611527/">
            <AiFillFacebook className=" my-0.5 hover:opacity-80 hover:text-aag-red hover:scale-90" />
          </Link>

          <Link href="https://www.tiktok.com/@ucraag?ug_source=op.auth&ug_term=Linktr.ee&utm_source=awyc6vc625ejxp86&utm_campaign=tt4d_profile_link&_r=1">
            <BsTiktok className=" my-0.5 text-2xl hover:opacity-80 hover:text-aag-red hover:scale-90" />
          </Link>

          <Link href="https://www.youtube.com/@ucraag/videos">
            <AiFillYoutube className="mt-0.5 hover:text-aag-red hover:scale-90" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
