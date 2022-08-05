import "../assets/css/comics.scss";
import axios from "axios";
import { useState, useEffect } from "react";

import Search from "../components/Search";
import Pagination from "../components/Pagination";

const Comics = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [word, setWord] = useState("");
  const [counter, setCounter] = useState(0);

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
    <div className="comics-page">
      <Search word={word} setWord={setWord} title="comics" />

      <Pagination
        counter={counter}
        setCounter={setCounter}
        count={data.count}
      />
      <div className="comics-container">
        {data.results.map((elem, index) => {
          return (
            <div key={index}>
              {/* {elem.title.indexOf(word) !== -1 && ( */}
              <div className="comics-info">
                <div>{elem.title}</div>
                <img
                  className="comic-img"
                  src={elem.thumbnail.path + "." + elem.thumbnail.extension}
                  alt=""
                />
                <div className="div-descript">{elem.description}</div>
              </div>
              {/* )} */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comics;
