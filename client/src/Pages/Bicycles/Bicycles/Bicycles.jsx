import BicycleBanner from "../BicycleBanner/BicycleBanner";
import CycleContainer from "../CycleContainer/CycleContainer";

const Bicycles = () => {
    return (
        <div>
            <BicycleBanner></BicycleBanner>
            <h1 className="uppercase text-center text-5xl font-extrabold pt-8 pb-6 text-[#176B87]">Our Latest Collection</h1>
            <CycleContainer></CycleContainer>
        </div>
    );
};

export default Bicycles;