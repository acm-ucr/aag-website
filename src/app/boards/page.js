import React from "react";
import Board from "@/components/Board/";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { boards } from "@/data/boards";
import PageTitle from "@/components/PageTitle";
const Boards = () => {
  return (
    <>
      <PageTitle title="BOARDS" />
      <Row className="w-7/12 flex items-center justify-start">
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
