import { Link } from "react-router-dom";
import imgBanner from '../../../assets/images/imgBanner.jpg'

const Banner = () => {
  return (
    <div
      className="hero min-h-screen "
      style={{ backgroundImage: `url(${imgBanner})` }}
    >
      <div className="hero-overlay bg-opacity-60 "></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-md">
          <h1 className=" mb-5 text-4xl lg:text-5xl font-bold">Pedal Your Dreams</h1>
          <p className="mb-5 text-xl">
          Your One-Stop Destination for Bikes and Beyond
          </p>
          <Link to='/signup'><button className="btn btn-outline text-white hover:bg-white hover:text-black">Explore Now</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;