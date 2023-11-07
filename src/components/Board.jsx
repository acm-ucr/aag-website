import React from "react";
import Image from "next/image";

const Board = ({ image, position, name }) => {
  return (
    <div className="font-jost font-bold w-fit">
      <Image
        className="aspect-square object-cover w-52 my-4"
        src={image}
        alt="Board Member"
      />
      <p className="text-white text-2xl	">{name}</p>

      <p className="text-aag-red text-2xl	">{position}</p>
    </div>
  );
};

export default Board;
