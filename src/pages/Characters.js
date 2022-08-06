import "../assets/css/characters.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
          // console.log(elem);
          return (
            <div key={index}>
              <div className="chara-info">
                <Link className="to-chara-link" to={`/character/${elem._id}`}>
                  <div>
                    <img
                      className="chara-img"
                      src={elem.thumbnail.path + "." + elem.thumbnail.extension}
                      alt=""
                    />
                  </div>

                  <div className="chara-separator"></div>
                  <div className="bottom-info">
                    <h3>{elem.name}</h3>
                    <p>{elem.description}</p>
                  </div>
                </Link>
                <button
                  // className={
                  //   userId.favoritesChara.indexOf(elem._id) === -1 ? "nop" : "fav"
                  // }
                  onClick={() => {
                    if (token === null) {
                      navigate("/user/login");
                    } else {
                      favorite(elem._id);
                    }
                  }}
                >
                  <div>
                    <i className="fa-solid fa-heart"></i>
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
