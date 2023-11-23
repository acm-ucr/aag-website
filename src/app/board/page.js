import React from "react";
import Board from "@/components/Board/";
import { boards } from "@/data/boards";
import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import fire from "public/fire.png";

const Boards = () => {
  return (
    <>
      <title>AAG | Board</title>
      <Image
        src={fire}
        alt="Background"
        className=" -translate-y-[7%] object-contain rotate-180 absolute top-0 -z-10"
      />
      <PageTitle title="BOARD" />
      <div className="w-full flex justify-center">
        <div className=" md:gap-16 md:grid-cols-3 grid grid-cols-1">
          {boards.map((board, index) => (
            <Board
              key={index}
              image={board.image}
              position={board.position}
              name={board.name}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Boards;
