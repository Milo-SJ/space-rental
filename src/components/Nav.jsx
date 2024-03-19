import { Link, NavLink, Route } from "react-router-dom";
import About from "../pages/About";

const Nav = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink> <NavLink to="/ships">Ships</NavLink>{" "}
        <NavLink to="/destinations">Destinations</NavLink>{" "}
        <NavLink to="/about">About us</NavLink>{" "}
        <NavLink to="/contactus">Contact us</NavLink>
      </nav>
    </div>
  );
};

export default Nav;
