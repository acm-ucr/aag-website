import React from "react";
import JoinIcon from "@/components/JoinIcon";

const JoinIcons = ({}) => {
  return (
    <div className="w-1/2 flex justify-between mt-[6%]">
      <JoinIcon type="gigsalad" />
      <JoinIcon type="instagram" />
      <JoinIcon type="facebook" />
      <JoinIcon type="tiktok" />
      <JoinIcon type="youtube" />
    </div>
  );
};

export default JoinIcons;
