import { useEffect, useState } from "react";
import axios from "axios";
import "../assets/css/favorites.scss";

const UserChara = ({ userId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://project-marvel-back.herokuapp.com/characters?name=&skip=`
        );
        console.log(response.data);
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
    <div className="chara-container">
      <div>
        <p className="title">CHARA FAV</p>
        <div className="div-test">
          {data.results.map((elem, index) => {
            //   console.log(userId.favoritesChara);
            //console.log(elem._id);
            if (userId.favoritesChara.indexOf(elem._id) !== -1) {
              return (
                <div className="chara" key={index}>
                  <img
                    src={elem.thumbnail.path + "." + elem.thumbnail.extension}
                    alt=""
                  />
                  <p>{elem.name}</p>
                  <p>{elem.description}</p>
                </div>
              );
            } else return null;
          })}
        </div>
      </div>
      <div className="separator"></div>
    </div>
  );
};

export default UserChara;
