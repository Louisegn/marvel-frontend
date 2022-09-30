import UserChara from "../components/UserChara";
import UserComics from "../components/UserComics";
import "../assets/css/favorites.scss";
const Favorites = ({ token, favorite, userId }) => {
  return (
    <div className="favorites-main">
      <UserChara token={token} favorite={favorite} userId={userId} />
      <UserComics token={token} favorite={favorite} userId={userId} />
    </div>
  );
};

export default Favorites;
