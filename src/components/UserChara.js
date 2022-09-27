import { useEffect, useState } from "react";
import axios from "axios";
import "../assets/css/favorites.scss";

const UserChara = ({ userId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  // console.log(userId.favoritesChara);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `http://localhost:3000/character/by-id`,
          userId.favoritesChara
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
    <div className="chara-container">
      <div>
        <p className="title">FAVORITES CHARA</p>
        <div className="div-test">
          {data.map((elem, index) => {
            return (
              <div className="chara" key={index}>
                <img
                  src={elem.thumbnail.path + "." + elem.thumbnail.extension}
                  alt=""
                />
                <p>{elem.name}</p>
                {/* <p>{elem.description}</p> */}
              </div>
            );
          })}
        </div>
      </div>
      <div className="separator"></div>
    </div>
  );
};

export default UserChara;
