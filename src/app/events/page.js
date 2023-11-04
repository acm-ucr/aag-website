import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import fire from "public/fire.png";

const Events = () => {
  return (
    <>
      <Image
        src={fire}
        alt="Background"
        className="h-[30vh] object-cover md:h-auto rotate-180 absolute top-0 -z-10"
      />
      <div className="text-white">
        <PageTitle title="EVENTS" />
      </div>
    </>
  );
};

export default Events;
