import React from "react";
import Board from "@/components/Board/";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { boards } from "@/data/boards";
import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import fire from "public/fire.png";

const Boards = () => {
  return (
    <>
      <Image
        src={fire}
        alt="Background"
        className=" -translate-y-[10%] object-contain rotate-180 absolute top-0"
      />
      <PageTitle title="BOARDS" />
      <Row className="ml-[20%] md:ml-3 md:w-7/12 z-10 mt-[10%]">
        {boards.map((board, index) => (
          <Col key={index} xs={10} sm={2} lg={4}>
            <Board
              image={board.image}
              position={board.position}
              name={board.name}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Boards;
