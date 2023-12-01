import React from "react";
import Link from "next/link";

const JoinButton = () => {
  return (
    <Link
      target="_blank"
      className="transition ease-in-out bg-gradient-to-r from-aag-red to-aag-orange text-3xl px-5 py-3 text-white font-bold md:rounded-none rounded-sm 
    hover:opacity-80 active:opacity-60"
      href=" https://docs.google.com/forms/d/e/1FAIpQLSd-83k_aUvm_-HMH4LZRpsSVBMDFK8yf3uRygBaFVJHRZQqnw/viewform"
    >
      JOIN
    </Link>
  );
};

export default JoinButton;
