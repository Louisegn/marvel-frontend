import { Link } from "react-router-dom";

const Home = ({ token }) => {
  return (
    <div>
      <Link to="characters">CHARACTERS</Link>
      <Link to="/comics">COMICS</Link>

      {token === null ? (
        <Link to="/user/login">FAVORIS</Link>
      ) : (
        <Link to="/favorites">FAVORIS</Link>
      )}
    </div>
  );
};

export default Home;
