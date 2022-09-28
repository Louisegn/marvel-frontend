import "../assets/css/favorites.scss";

const UserComics = ({ userId }) => {
  return (
    <div className="comics-container">
      <div>
        <p className="title">FAVORITES COMICS</p>
        <div className="divdiv">
          {userId.favoritesComics.map((elem, index) => {
            return (
              <div className="chara" key={index}>
                <img
                  src={elem.thumbnail.path + "." + elem.thumbnail.extension}
                  alt=""
                />
                <p>{elem.name}</p>
                {/* <p>{elem.description}</p> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserComics;
