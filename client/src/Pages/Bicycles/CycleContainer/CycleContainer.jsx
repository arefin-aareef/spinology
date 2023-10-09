import useCycle from "../../../hooks/useCycle";
import CycleCard from "../CycleCard/CycleCard";


const CycleContainer = ({limit}) => {

    const [cycles] = useCycle()
    
    const featuredCycles = limit ? cycles.slice(0, limit) : cycles


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2 md:p-4">
            {
                featuredCycles.map((item, index) => (
                    <CycleCard key={index} item={item} ></CycleCard>
                    ))
            }
        </div>
    );
};

export default CycleContainer;