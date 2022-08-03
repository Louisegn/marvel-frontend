import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../assets/css/header.scss";

const Header = () => {
  return (
    <div className="header-container">
      <img className="logo" src={logo} alt="" />
      <div className="header-nav">
        <ul>
          <li>
            <Link to="/">PERSONNAGES</Link>
          </li>
          <li>
            <Link to="/comics">COMICS</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
