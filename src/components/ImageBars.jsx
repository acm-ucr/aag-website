import React from "react";
import Image from "next/image";
import image1 from "../../public/image_1.png";
import image2 from "../../public/image_2.png";
import image3 from "../../public/image_3.png";
import image4 from "../../public/image_4.png";
import image5 from "../../public/image_5.png";



const ImageBars = () => {
  
    return(
      <div className="flex">
        <Image src={image1} alt="Blue Dancer" className="m-[0.85%] mb-[7%] mt-[3%]"/>
        <Image src={image4} alt="3 white pic" className="m-[0.85%] mt-[10%]"/>
        <Image src={image2} alt="Yellow w/purple background"className="m-[0.85%]  mb-[4%] mt-[6%]"/>
        <Image src={image5} alt="1 white pic"className="m-[0.85%] mt-[1%] mb-[10%] "/>
        <Image src={image3} alt="Red Background"className="m-[0.85%] mb-[2%] mt-[8%]"/>        
      </div>
    );
  
};

export default ImageBars;
