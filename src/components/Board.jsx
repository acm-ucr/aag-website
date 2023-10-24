import React from "react";
import Image from "next/image";
// import image2 from "../../public/cat.png";

const Board = ({ image, role, name }) => {
  return (
    // <div>Board</div>
    <div className="font-jost font-bold">
      <Image
        className="aspect-square object-cover w-56"
        src={image}
        alt="Board Member"
      />
      <p className="text-white text-2xl	">{name}</p>

      <p className="text-aag-red text-2xl	">{role}</p>
    </div>
  );
};

export default Board;
