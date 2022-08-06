import { useEffect, useState } from "react";
import axios from "axios";

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
    <div>
      <div>
        <p>CHARA FAV</p>
        {data.results.map((elem, index) => {
          //   console.log(userId.favoritesChara);
          //console.log(elem._id);
          if (userId.favoritesChara.indexOf(elem._id) !== -1) {
            return (
              <div key={index}>
                <img
                  src={elem.thumbnail.path + "." + elem.thumbnail.extension}
                  alt=""
                />
              </div>
            );
          } else return null;
        })}
      </div>
    </div>
  );
};

export default UserChara;
