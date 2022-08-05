import "../assets/css/characters.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Search from "../components/Search";
import Pagination from "../components/Pagination";

const Characters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [word, setWord] = useState("");
  const [counter, setCounter] = useState(0);

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

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="chara-page">
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
              <Link to={`/character/${elem._id}`}>
                <div className="chara-info">
                  <img
                    className="chara-img"
                    src={elem.thumbnail.path + "." + elem.thumbnail.extension}
                    alt=""
                  />
                  <h3>{elem.name}</h3>
                  <p>{elem.description}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Characters;
