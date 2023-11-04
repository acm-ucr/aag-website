import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import fire from "public/fire.png";

const Events = () => {
  return (
    <>
      <Image
        src={fire}
        alt="Background"
        className="scale-110 object-contain rotate-180 absolute top-0"
      />
      <PageTitle title="EVENTS" />
    </>
  );
};

export default Events;
