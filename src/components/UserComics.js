import "../assets/css/favorites.scss";
import { useNavigate } from "react-router-dom";

const UserComics = ({ token, favorite, userId }) => {
  const navigate = useNavigate();

  return (
    <div className="comics-container">
      <div>
        <p className="title">FAVORITES COMICS</p>
        <div className="divdiv">
          {userId.favoritesComics.map((elem, index) => {
            return (
              <div className="comics" key={index}>
                {/* <img
                  src={elem.thumbnail.path + "." + elem.thumbnail.extension}
                  alt=""
                />
                <p>{elem.name}</p> */}
                <div className="comics-info">
                  <div className="comic-img--div">
                    <img
                      className="comic-img"
                      src={elem.thumbnail.path + "." + elem.thumbnail.extension}
                      alt=""
                    />
                  </div>
                  <div className="chara-separator"></div>
                  <div className="bottom-info">
                    <div className="comic--title">
                      <p>{elem.title}</p>
                    </div>
                    <div className="chara-separator"></div>

                    <div className="div-descript">
                      <p>{elem.description}</p>
                    </div>
                    <i class="fa-solid fa-chevron-down"></i>
                  </div>

                  <button
                    className="round"
                    onClick={() => {
                      if (token === null) {
                        navigate("/user/login");
                      } else {
                        const comicId = elem;
                        // const charaId = "";
                        console.log(elem);
                        favorite({ comicId });
                      }
                    }}
                  >
                    {/* <div>
                    <i className="fa-solid fa-heart"></i>
                  </div> */}
                    <div className="heart">
                      <i className="fa-solid fa-heart yes"></i>
                    </div>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserComics;
