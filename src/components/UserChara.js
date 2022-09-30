import "../assets/css/favorites.scss";
import { useNavigate } from "react-router-dom";

const UserChara = ({ token, favorite, userId }) => {
  // console.log(userId);
  const navigate = useNavigate();

  return (
    <div className="chara-container">
      <div>
        <p className="title">FAVORITES CHARA</p>
        <div className="div-test">
          {userId.favoritesChara.map((elem, index) => {
            let fav = false;
            return (
              <div className="chara-info" key={index}>
                {/* <img
                  src={elem.thumbnail.path + "." + elem.thumbnail.extension}
                  alt=""
                />
                <p>{elem.name}</p>
                <p>{elem.description}</p> */}
                <div
                  className="to-chara-link"
                  onClick={() => {
                    navigate(`/character/${elem._id}`);
                  }}
                >
                  <div className="chara-img--div">
                    <img
                      className="chara-img"
                      src={elem.thumbnail.path + "." + elem.thumbnail.extension}
                      alt=""
                    />
                  </div>

                  <div className="chara-separator"></div>

                  <div className="bottom-info">
                    <p className="chara--name">{elem.name}</p>
                    {/* <div className="overlay"></div> */}
                    {/* <p>{elem.description}</p> */}
                  </div>
                  <div className="overlay"></div>
                </div>
                <button
                  onClick={() => {
                    console.log(userId);
                    if (token === null) {
                      navigate("/user/login");
                    } else {
                      const charaId = elem;
                      favorite({ charaId });
                    }
                  }}
                >
                  <div className="heart">
                    <i className="fa-solid fa-heart yes"></i>
                  </div>
                </button>
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
