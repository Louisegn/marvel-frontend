import "../assets/css/character.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// import ComicsList from "../components/ComicsList";

const Character = ({ token, favorite, userId }) => {
  const { id } = useParams();
  const [fav, setFav] = useState(false);
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://project-marvel-back.herokuapp.com/comics/${id}`
        );
        setData(response.data);
        if (userId && data) {
          for (let i = 0; userId.favoritesChara.length > i; i++) {
            if (userId.favoritesChara[i]._id === response.data._id) {
              setFav(true);
            }
          }
        }
        setIsLoading(false);
      } catch (error) {
        console.log(error.meassage);
      }
    };
    fetchData();
  }, [id, data, userId, fav]);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="chara-page-container">
      <div className="chara-card">
        <div className="chara-info">
          <div className="chara-img--div">
            <img
              className="chara-img"
              src={data.thumbnail.path + "." + data.thumbnail.extension}
              alt=""
            />
          </div>

          <div className="chara-separator"></div>

          <div className="bottom-info">
            <p className="chara--name">{data.name}</p>
            <p className="chara--descript">{data.description}</p>
          </div>
          <button
            onClick={() => {
              if (token === null) {
                navigate("/user/login");
              } else {
                const charaId = data;
                favorite({ charaId });
              }
            }}
          >
            <div className="heart">
              {userId && data ? (
                fav === false ? (
                  <i className="fa-solid fa-heart nop"></i>
                ) : (
                  <i className="fa-solid fa-heart yes"></i>
                )
              ) : (
                <i className="fa-solid fa-heart nop"></i>
              )}
            </div>
          </button>
        </div>
      </div>
      <div className="separator"></div>

      <div className="comics-id-container">
        {data.comics.map((elem, index) => {
          return (
            <div className="comics-info" key={index}>
              {/* <div>{elem.title}</div>
              <img
                className="comics-id-img"
                src={elem.thumbnail.path + "." + elem.thumbnail.extension}
                alt=""
              />
              <div>{elem.description}</div> */}
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
            </div>
          );
        })}
      </div>
      {/* <ComicsList id={data._id} /> */}
    </div>
  );
};

export default Character;
