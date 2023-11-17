import React from "react";

const Video = ({ link, title }) => {
  return (
    <iframe
      className="w-3/4 aspect-video"
      src={link}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
      height="800"
    />
  );
};

export default Video;
