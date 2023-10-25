"use client";
import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
const NavBar = () => {
  const [selected, setSelected] = useState(typeof window !== 'undefined' ? window.location.pathname : "");
  const textFormat =
    "transition ease-in-out hover:!text-aag-red font-light mb-0 px-3 text-white text-xl whitespace-nowrap";
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      fixed="top"
      className="w-full m-0 md:min-h-[5vh] p-0 !bg-black/50 justify-between items-center backdrop-blur-sm"
    >
      <Navbar.Toggle
        className="list-unstyled !text-transparent border-0"
        aria-controls="basic-navbar-nav"
      >
        <FaBars className="text-white text-4xl" />
      </Navbar.Toggle>
      <Navbar.Collapse className="items-center justify-center flex">
        <Nav className="flex items-center">
          <Nav.Link
            as={Link}
            href="/"
            onClick={() => {
              setSelected("/");
            }}
            className={`${textFormat} ${
              selected === "/" ? "underline" : "no-underline"
            }`}
          >
            ABOUT
          </Nav.Link>
          <Nav.Link
            as={Link}
            href="/events"
            onClick={() => {
              setSelected("/events");
            }}
            className={`${textFormat} ${
              selected === "/events" ? "underline" : "no-underline"
            }`}
          >
            EVENTS
          </Nav.Link>
          <Nav.Link
            as={Link}
            href="/boards"
            onClick={() => {
              setSelected("/boards");
            }}
            className={`${textFormat} ${
              selected === "/boards" ? "underline" : "no-underline"
            }`}
          >
            BOARDS
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
