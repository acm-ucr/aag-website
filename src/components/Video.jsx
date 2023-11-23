import React from "react";

const Video = ({ link, title }) => {
  return (
    <iframe
      className=" aspect-video md:w-7/12 w-10/12 my-3"
      src={link}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    />
  );
};

export default Video;
