import React from "react";
import JoinIcon from "@/components/JoinIcon";

const JoinIcons = ({}) => {
  return (
    <div className="w-7/12 flex justify-between mt-[10%]">
      <JoinIcon type="gigsalad" />
      <JoinIcon type="instagram" />
      <JoinIcon type="facebook" />
      <JoinIcon type="tiktok" />
      <JoinIcon type="youtube" />
    </div>
  );
};

export default JoinIcons;
