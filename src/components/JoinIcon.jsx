import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AiOutlineInstagram,
  AiFillYoutube,
  AiFillFacebook,
} from "react-icons/ai";
import { BiLogoTiktok } from "react-icons/bi";


const iconFormat =
  "transition ease-in-out hover:text-aag-red text-6xl flex flex-col justify-center items-center space-y-5";
const textFormat = "text-lg font-light";

const JoinIcon = ({ type }) => {
  if (type === "instagram") {
    return (
      <div className="text-white">
        <Link className={iconFormat} href="https://www.instagram.com/ucraag">
          <AiOutlineInstagram />
          <p className={textFormat}>Instagram</p>
        </Link>
      </div>
    );
  }
  if (type === "tiktok") {
    return (
      <div className="text-white">
        <Link className={iconFormat} href="https://www.tiktok.com/@ucraag">
          <BiLogoTiktok />
          <p className={textFormat}>Tiktok</p>
        </Link>
      </div>
    );
  }
  if (type === "youtube") {
    return (
      <div className="text-white">
        <Link
          className={iconFormat}
          href="https://www.youtube.com/@ucraag/videos"
        >
          <AiFillYoutube />
          <p className={textFormat}>Youtube</p>
        </Link>
      </div>
    );
  }
  if (type === "facebook") {
    return (
      <div className="text-white">
        <Link
          className={iconFormat}
          href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61550312611527"
        >
          <AiFillFacebook />
          <p className={textFormat}>Facebook</p>
        </Link>
      </div>
    );
  }
  if (type === "gigsalad") {
    return (
      <div className="text-white">
        <Link
          className={iconFormat}
          href="https://www.gigsalad.com/ucr_aag_riverside"
        >
          <Image
            className="fill-aag-red"
            width="60"
            height="60"
            src="logo.svg"
          />
          <p className="text-xl font-light mt-4">GigSalad</p>
        </Link>
      </div>
    );
  }
};

export default JoinIcon;
