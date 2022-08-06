import "../assets/css/character.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

// import ComicsList from "../components/ComicsList";

const Character = ({ favorite }) => {
  const { id } = useParams();

  const [data, setData] = useState();
  //   const [list, setList] = useState();
  const [isLoading, setIsLoading] = useState(true);
  //   const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://project-marvel-back.herokuapp.com/comics/${id}`
        );
        // console.log(response.data);
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
    <div className="chara-page-container">
      <button
        onClick={() => {
          favorite(data._id);
        }}
      >
        ADD FAV
      </button>
      <div className="chara-card">
        <img
          className="character-img"
          src={data.thumbnail.path + "." + data.thumbnail.extension}
          alt=""
        />
        <div className="info-part">
          <div>{data.name}</div>
          <div className="description">{data.description}</div>
          <div></div>
        </div>
      </div>

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
      {/* <ComicsList id={data._id} /> */}
    </div>
  );
};

export default Character;
