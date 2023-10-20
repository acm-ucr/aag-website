import React from "react";
import Link from "next/Link";
import Image from "next/image";
import {
  AiOutlineInstagram,
  AiFillYoutube,
  AiFillFacebook,
} from "react-icons/ai";
import { BiLogoTiktok } from "react-icons/bi";
const JoinIcon = ({ type }) => {
  if (type === "gigsalad") {
    return (
      <Link
        className="flex flex-col justify-center items-center space-y-5 no-underline transition ease-in-out hover:opacity-50"
        href="https://www.gigsalad.com/ucr_aag_riverside"
      >
        <Image width="70" height="70" src="logo.svg" />
        <h5 className="text-white font-extralight">GigSalad</h5>
      </Link>
    );
  }
  if (type === "instagram") {
    return (
      <Link
        className="flex flex-col justify-center items-center space-y-5 no-underline transition ease-in-out hover:opacity-50"
        href="https://www.instagram.com/ucraag"
      >
        <AiOutlineInstagram color="white" size="70" />
        <h5 className="text-white font-extralight">Instagram</h5>
      </Link>
    );
  }
  if (type === "tiktok") {
    return (
      <Link
        className="flex flex-col justify-center items-center space-y-5 no-underline transition ease-in-out hover:opacity-50"
        href="https://www.tiktok.com/@ucraag"
      >
        <BiLogoTiktok color="white" size="70" />
        <h5 className="text-white font-extralight">Tiktok</h5>
      </Link>
    );
  }
  if (type === "youtube") {
    return (
      <Link
        className="flex flex-col justify-center items-center space-y-5 no-underline transition ease-in-out hover:opacity-50"
        href="https://www.youtube.com/@ucraag/videos"
      >
        <AiFillYoutube color="white" size="70" />
        <h5 className="text-white font-extralight">Youtube</h5>
      </Link>
    );
  }
  if (type === "facebook") {
    return (
      <Link
        className="flex flex-col justify-center items-center space-y-5 no-underline transition ease-in-out hover:opacity-50"
        href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61550312611527"
      >
        <AiFillFacebook color="white" size="70" />
        <h5 className="text-white font-extralight">Facebook</h5>
      </Link>
    );
  }
};

export default JoinIcon;
