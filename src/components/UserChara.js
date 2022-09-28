import "../assets/css/favorites.scss";

const UserChara = ({ userId }) => {
  // console.log(userId);
  return (
    <div className="chara-container">
      <div>
        <p className="title">FAVORITES CHARA</p>
        <div className="div-test">
          {userId.favoritesChara.map((elem, index) => {
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
      <div className="separator"></div>
    </div>
  );
};

export default UserChara;
