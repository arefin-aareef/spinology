import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import "./NavBar.css";

const NavBar = () => {

  const { user, logOut } = useContext(AuthContext);
  const [scrolled, setScrolled] = useState(false);


  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else setScrolled(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  const navOptions = (
    <div className="flex flex-col lg:flex-row font-semibold navigation">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to='/bicycles'>Bicycles</Link>
      </li>
      <li>
        <Link>Accessories</Link>
      </li>
      <li>
        <Link>Services</Link>
      </li>
      {user ? (
        <div className="flex flex-col lg:flex-row">
          <li onClick={handleLogOut} className=" inline-block">
            <Link to="/">Logout</Link>
          </li>

          <img
            style={{ width: 36, height: 36, borderRadius: "20%" }}
            src={user?.photoURL}
            alt={user?.displayName}
            title={user?.email}
            className="mx-3"
          />
        </div>
      ) : (
        <li className="">
          <Link to="/login">Login</Link>
        </li>
      )}
    </div>
  );
  return (
    <div className={`navbar bg-transparent fixed z-20 max-w-screen-2xl text-white ${
      scrolled ? "scrolled " : "transition-all duration-500 ease-in"
    }`}>
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-700 rounded-box w-52"
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
