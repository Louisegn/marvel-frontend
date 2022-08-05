import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../assets/css/header.scss";

const Header = ({ token, setUser }) => {
  const navigate = useNavigate();

  return (
    <div className="header-container">
      <Link to="/">
        <img className="logo" src={logo} alt="" />
      </Link>

      <div className="header-nav">
        <ul>
          <li>
            <Link to="/">PERSONNAGES</Link>
          </li>
          <li>
            <Link to="/comics">COMICS</Link>
          </li>
          <li>
            <Link to="/favorites">FAVORIS</Link>
          </li>
          {/* <li>
          </li>
          <li>
          </li> */}
        </ul>

        <div className="JPPP">
          {token === null ? (
            <>
              <Link to="/user/signup">SIGNUP</Link>
              <Link to="/user/login">LOGIN</Link>
            </>
          ) : (
            <button
              onClick={() => {
                setUser(null);
                navigate("/");
              }}
            >
              Se déconnecter
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
