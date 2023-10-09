

const CycleCard = ({item}) => {
    const { name, details, image, price } = item;
  return (
    <div className="border-4 border-[#176B87] card card-compact w-full bg-[#176B87] text-white shadow-2xl relative overflow-hidden">
          <p className="absolute top-2 right-2 text-black border-2 rounded-lg border-[#176B87] px-1 font-semibold">${price}</p>
      <figure>
        <img
          src={image}
          alt="Shoes"
          style={{ width: "100%", height: 250, objectFit: "cover" }}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{details}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-sm text-white btn-outline">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default CycleCard;
