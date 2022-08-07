import UserChara from "../components/UserChara";
import UserComics from "../components/UserComics";
import "../assets/css/favorites.scss";
const Favorites = ({ userId }) => {
  return (
    <div className="favorites-main">
      <UserChara userId={userId} />
      <UserComics userId={userId} />
    </div>
  );
};

export default Favorites;
