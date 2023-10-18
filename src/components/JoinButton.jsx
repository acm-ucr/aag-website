import React from "react";
import Link from "next/Link";

const JoinButton = () => {
  return (
    <Link href=" https://docs.google.com/forms/d/e/1FAIpQLSd-83k_aUvm_-HMH4LZRpsSVBMDFK8yf3uRygBaFVJHRZQqnw/viewform">
      <button
        className="bg-gradient-to-r from-aag-red to-aag-orange text-white font-bold px-4 py-2 
    hover:opacity-80 active:opacity-60"
      >
        JOIN
      </button>
    </Link>
  );
};

export default JoinButton;
