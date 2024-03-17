import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Link to="/">Home</Link> <Link to="/ships">Ships</Link>{" "}
      <Link to="/destinations">Destinations</Link>{" "}
      <Link to="/about">About</Link> <Link to="/contactus">Contact us</Link>
    </div>
  );
};

export default Nav;
