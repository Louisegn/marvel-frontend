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
    <div>
      {data.comics.map((elem, index) => {
        return (
          <div>
            <div>{elem.title}</div>
            <img
              src={elem.thumbnail.path + "." + elem.thumbnail.extension}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
};

export default ComicsList;
