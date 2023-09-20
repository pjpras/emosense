import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            Emosense
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
