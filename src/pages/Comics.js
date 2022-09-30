import "../assets/css/comics.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Search from "../components/Search";
import Pagination from "../components/Pagination";

const Comics = ({ token, favorite, userId }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [word, setWord] = useState("");
  const [counter, setCounter] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://project-marvel-back.herokuapp.com/comics?title=${word}&skip=${counter}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.meassage);
      }
    };
    fetchData();
  }, [word, counter]);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="comics-main">
      <Search word={word} setWord={setWord} title="comics" />

      <Pagination
        counter={counter}
        setCounter={setCounter}
        count={data.count}
      />
      <div className="comics-container">
        {data.results.map((elem, index) => {
          if (elem.description) {
            elem.description = elem.description.replaceAll("&#39;", "'");
          }

          let fav = false;
          if (userId) {
            for (let i = 0; userId.favoritesComics.length > i; i++) {
              if (userId.favoritesComics[i]._id === elem._id) {
                fav = true;
              }
            }
          }
          return (
            <div key={index}>
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
                    {userId ? (
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

export default Comics;
