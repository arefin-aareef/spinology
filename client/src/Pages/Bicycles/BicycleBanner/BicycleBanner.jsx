import bicycleBanner from "../../../assets/images/bicycleBanner.jpg";

const BicycleBanner = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${bicycleBanner})` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content pt-28 pb-24">
        <div className="">
          <p className="mb-5 text-xl md:text-xl">
            Discover Your Ride <br /> Explore a World of Cycling Excellence at <span className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Spinology</span>
            <br /> Your Journey Starts Here!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BicycleBanner;
