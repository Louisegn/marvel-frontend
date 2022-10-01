import "../assets/css/characters.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import cover from "../assets/css/img/marvel-comic-cover.jpeg";

import Search from "../components/Search";
import Pagination from "../components/Pagination";

const Characters = ({ token, favorite, userId }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [word, setWord] = useState("");
  const [counter, setCounter] = useState(0);

  const navigate = useNavigate();
  // const test = "capt";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://project-marvel-back.herokuapp.com/characters?name=${word}&skip=${counter}`
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.meassage);
      }
    };
    fetchData();
  }, [word, counter]);
  // console.log(userId);
  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="chara-page">
      {/* <img src={cover} alt="" /> */}
      <Search word={word} setWord={setWord} title="characters" />
      <Pagination
        counter={counter}
        setCounter={setCounter}
        count={data.count}
      />
      <div className="chara-container">
        {data.results.map((elem, index) => {
          let fav = false;
          if (userId) {
            for (let i = 0; userId.favoritesChara.length > i; i++) {
              if (userId.favoritesChara[i]._id === elem._id) {
                fav = true;
              }
            }
          }

          return (
            <div key={index}>
              <div className="chara-info">
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
                    // console.log(userId);
                    if (token === null) {
                      navigate("/user/login");
                    } else {
                      const charaId = elem;
                      favorite({ charaId });
                    }
                  }}
                >
                  <div className="heart">
                    {userId ? (
                      // userId.favoritesChara.indexOf(elem._id) === -1 ? (
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
          );
        })}
      </div>
    </div>
  );
};

export default Characters;
