import "../assets/css/pagination.scss";

const Pagination = ({ counter, setCounter, count }) => {
  // const nb = Math.ceil(count / 100) * 100;
  // console.log("NB", nb);
  // console.log("COUNTER", counter);

  return (
    <div className="pagination-main">
      {counter >= 100 && (
        <button
          onClick={() => {
            setCounter(counter - 100);
          }}
        >
          Précédent
        </button>
      )}
      <div>
        Page {counter / 100}/{Math.ceil(count / 100) - 1}
      </div>
      {counter <= Math.ceil(count / 100) * 100 - 200 && (
        <button
          onClick={() => {
            setCounter(counter + 100);
          }}
        >
          Suivant
        </button>
      )}
    </div>
  );
};

export default Pagination;
