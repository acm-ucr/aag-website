import React from "react";
import JoinIcon from "@/components/JoinIcon";

const JoinIcons = ({}) => {
  return (
    <div className="md:w-7/12 md:flex justify-between md:py-0 py-5 space-y-5 md:space-y-0 md:mt-[10%]">
      <JoinIcon type="gigsalad" />
      <JoinIcon type="instagram" />
      <JoinIcon type="facebook" />
      <JoinIcon type="tiktok" />
      <JoinIcon type="youtube" />
    </div>
  );
};

export default JoinIcons;
