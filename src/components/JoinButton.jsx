import React from "react";
import Link from "next/Link";

const JoinButton = () => {
  return (
    <Link href=" https://docs.google.com/forms/d/e/1FAIpQLSd-83k_aUvm_-HMH4LZRpsSVBMDFK8yf3uRygBaFVJHRZQqnw/viewform">
      <button
        className="bg-gradient-to-r from-orange-800 to-orange-500 hover:bg-none hover:bg-orange-800 text-white font-bold px-4 py-2 
    rounded-md hover:rounded-lg active:rounded-full"
      >
        JOIN
      </button>
    </Link>
  );
};

export default JoinButton;
