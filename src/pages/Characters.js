import "../assets/css/characters.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Characters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://project-marvel-back.herokuapp.com/characters"
        );
        // console.log(response.data);
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
    <div className="chara-page">
      <div className="chara-container">
        {data.results.map((elem, index) => {
          console.log(elem);
          const charaImg = elem.thumbnail.path + "." + elem.thumbnail.extension;
          return (
            <div className="chara-info">
              <Link to={`/character/${elem._id}`}>
                <img className="chara-img" src={charaImg} alt="" />
                <div>{elem.name}</div>
                <div>{elem.description}</div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Characters;
