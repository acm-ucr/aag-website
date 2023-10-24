import Board from "@/components/Board";
import PageTitle from "@/components/PageTitle";
import image1 from "public/cat.png";

const Boards = () => {
  return (
    <div className="text-white">
      <PageTitle title="BOARDS" />
      <Board image={image1} name="Evan little cat" role="Emotional Support" />
    </div>
  );
};

export default Boards;
