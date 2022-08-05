import "../assets/css/character.scss";
import { useState, useEffect } from "react";
import axios from "axios";

const ComicsList = ({ id }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://project-marvel-back.herokuapp.com/comics/${id}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.meassage);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="comics-id-container">
      {data.comics.map((elem, index) => {
        return (
          <div className="comics-info">
            <div>{elem.title}</div>
            <img
              className="comics-id-img"
              src={elem.thumbnail.path + "." + elem.thumbnail.extension}
              alt=""
            />
            <div>{elem.description}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ComicsList;
