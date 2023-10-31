import React from "react";
import Link from "next/link";

const JoinButton = () => {
  return (
    <Link
      className="transition ease-in-out bg-gradient-to-r from-aag-red to-aag-orange text-3xl text-white font-bold px-5 py-2.5 
    hover:opacity-80 active:opacity-60"
      href=" https://docs.google.com/forms/d/e/1FAIpQLSd-83k_aUvm_-HMH4LZRpsSVBMDFK8yf3uRygBaFVJHRZQqnw/viewform"
    >
      JOIN
    </Link>
  );
};

export default JoinButton;
