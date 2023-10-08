import { Link } from "react-router-dom";

const NavBar = () => {
  const navOptions = (
    <div className="flex flex-col lg:flex-row font-semibold">
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Bicycles</a>
      </li>
      <li>
        <a>Accessories</a>
      </li>
      <li>
        <a>Services</a>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </div>
  );
  return (
    <div className="navbar bg-transparent fixed z-20 max-w-screen-2xl text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <a className="ms-5 text-3xl normal-case">Spinology</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
    </div>
  );
};

export default NavBar;
