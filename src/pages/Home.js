import { Link } from "react-router-dom";
import "../assets/css/home.scss";
import banner from "../assets/img/homme-banner.jpeg";

const Home = ({ token }) => {
  return (
    <div className="home-main">
      <img className="banner" src={banner} alt="" />
      <div className="home-container">
        <Link to="characters">CHARACTERS</Link>
        <Link to="/comics">COMICS</Link>
        {token === null ? (
          <Link to="/user/login">FAVORITES</Link>
        ) : (
          <Link to="/favorites">FAVORITES</Link>
        )}
      </div>
    </div>
  );
};

export default Home;
