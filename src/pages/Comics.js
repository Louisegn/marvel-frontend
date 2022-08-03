import "../assets/css/comics.scss";
import axios from "axios";
import { useState, useEffect } from "react";

const Comics = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://project-marvel-back.herokuapp.com/comics"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.meassage);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="comics-page">
      <div className="comics-container">
        {data.results.map((elem, index) => {
          const comicImg = elem.thumbnail.path + "." + elem.thumbnail.extension;
          return (
            <div>
              <img className="comic-img" src={comicImg} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comics;
