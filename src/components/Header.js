import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../assets/css/header.scss";

const Header = ({ token, setUser }) => {
  const navigate = useNavigate();

  return (
    <div className="header-main">
      <Link to="/">
        <img className="logo" src={logo} alt="" />
      </Link>
      <div className="header-container">
        <div className="header-nav">
          <Link to="characters">PERSONNAGES</Link>

          <Link to="/comics">COMICS</Link>

          {token === null ? (
            <Link to="/user/login">FAVORIS</Link>
          ) : (
            <Link to="/favorites">FAVORIS</Link>
          )}
        </div>
        <div className="JPPP">
          {token === null ? (
            <>
              {/* <Link to="/user/signup">SIGNUP</Link> */}
              <Link to="/user/login">SIGN IN</Link>
            </>
          ) : (
            <button
              onClick={() => {
                setUser(null);
                navigate("/");
              }}
            >
              LOG OUT
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
