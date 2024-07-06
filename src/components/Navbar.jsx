import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar justify-content-center">
      <Link className="mx-2" to="/">
        {" "}
        Home{" "}
      </Link>{" "}
      |{" "}
      <Link className="mx-2" to="/favoritos">
        {" "}
        Favoritos{" "}
      </Link>
    </nav>
  );
};
export default Navbar;
