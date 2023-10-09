import { Link } from "react-router-dom";
import CycleContainer from "../../Bicycles/CycleContainer/CycleContainer";

const FeaturedItem = () => {
  return (
    <div className="pt-8  pb-6">
      <h1 className="uppercase text-center text-5xl font-extrabold  pb-6 text-[#176B87]">
        Featured Collection
      </h1>

      <CycleContainer limit={4}></CycleContainer>
      <div className="flex justify-center ">
        <button className="transition  w-[98%] ease-in-out btn border-2 text-white bg-[#176B87] hover:text-[#176B87] hover:bg-white hover:border-2 hover:border-[#176B87] duration-500">
          <Link to="/bicycles">View All cycles </Link>
        </button>
      </div>
    </div>
  );
};

export default FeaturedItem;
