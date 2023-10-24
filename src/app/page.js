import TextBlock from "@/components/TextBlock";
import ImageBars from "@/components/ImageBars";
import JoinButton from "@/components/JoinButton";
import JoinIcons from "@/components/JoinIcons";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <TextBlock
        title="ABOUT US"
        text="Aag at UCR, is Riverside's premier All-Male Bollywood Fusion Team! We specialize in various styles such as hip-hop, contemporary, jazz, bollywood, etc! We want to share our love and passion for dance with the community and allow for our dancers to flourish in a supportive environment."
      />
      <ImageBars />
      <TextBlock
        title="JOIN US"
        text=" We are so excited for the upcoming year and are looking forward to building our team. Please fill out this google form so we can gauge interest and start pushing out information for Fall recruiting."
      />
      <JoinButton />
      <JoinIcons />
    </div>
  );
};

export default Home;
