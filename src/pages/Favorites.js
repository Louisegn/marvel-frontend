import UserChara from "../components/UserChara";
import UserComics from "../components/UserComics";

const Favorites = ({ userId }) => {
  return (
    <div>
      <UserChara userId={userId} />
      <UserComics userId={userId} />
    </div>
  );
};

export default Favorites;
