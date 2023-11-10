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
  "transition ease-in-out active:text-aag-red md:hover:text-aag-red md:text-6xl text-5xl flex flex-col justify-center items-center md:space-y-5";
const textFormat = "md:text-xl text-base font-light";

const JoinIcon = ({ type }) => {
  if (type === "instagram") {
    return (
      <div className="text-white ">
        <Link
          target="_blank"
          className={iconFormat}
          href="https://www.instagram.com/ucraag"
        >
          <AiOutlineInstagram />
          <p className={textFormat}>Instagram</p>
        </Link>
      </div>
    );
  }
  if (type === "tiktok") {
    return (
      <div className="text-white">
        <Link
          target="_blank"
          className={iconFormat}
          href="https://www.tiktok.com/@ucraag"
        >
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
          target="_blank"
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
          target="_blank"
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
          target="_blank"
          className={iconFormat}
          href="https://www.gigsalad.com/ucr_aag_riverside"
        >
          <Image
            className="scale-90 md:scale-100"
            width="60"
            height="60"
            src="logo.svg"
          />
          <p className="md:text-xl text-base font-light pt-1">GigSalad</p>
        </Link>
      </div>
    );
  }
};

export default JoinIcon;
