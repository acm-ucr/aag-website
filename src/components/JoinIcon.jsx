import React from "react";
import Link from "next/Link";

const JoinIcon = (props) => {
  return (
    <Link
      className="flex flex-col justify-center items-center no-underline transition ease-in-out hover:opacity-50"
      href={props.herf}
    >
      <img src={props.img} />
      <h4 className="text-white">{props.name}</h4>
    </Link>
  );
};

export default JoinIcon;
