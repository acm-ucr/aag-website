"use client";
import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
const NavBar = () => {
  const [selected, setSelected] = useState(
    typeof window !== "undefined" ? window.location.pathname : ""
  );
  const textFormat =
    "transition ease-in-out hover:!text-aag-red font-light mb-0 px-3 text-xl whitespace-nowrap";
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      fixed="top"
      className=" justify-end w-full md:min-h-[5vh] p-0 !bg-black/50 backdrop-blur-sm"
    >
      <Link
        className="flex flex-grow px-3 space-x-3 opacity-80 hover:opacity-50 transition"
        onClick={() => {
          setSelected("/");
        }}
        href="/"
      >
        <Image width="40" height="40" src="logo.svg" />
        <Image width="100" height="40" src="aag.svg" />
      </Link>
      <Navbar.Toggle
        className="list-unstyled !text-transparent border-0"
        aria-controls="basic-navbar-nav"
      >
        <FaBars className="text-white text-4xl" />
      </Navbar.Toggle>
      <Navbar.Collapse className="items-center justify-end md:mr-8 flex">
        <Nav className="flex items-center w-full md:w-auto">
          <Nav.Link
            as={Link}
            href="/about"
            onClick={() => {
              setSelected("/about");
            }}
            className={`${textFormat} ${
              selected === "/about" ? "!text-aag-red" : "text-white"
            }`}
          >
            ABOUT
          </Nav.Link>
          <Nav.Link
            as={Link}
            href="/board"
            onClick={() => {
              setSelected("/board");
            }}
            className={`${textFormat} ${
              selected === "/board" ? "!text-aag-red" : "text-white"
            }`}
          >
            BOARD
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
