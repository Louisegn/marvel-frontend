import "../assets/css/pagination.scss";

const Pagination = ({ counter, setCounter, count }) => {
  // const nb = Math.ceil(count / 100) * 100;
  // console.log("NB", nb);
  // console.log("COUNTER", counter);

  return (
    <div className="pagination-main">
      {counter >= 100 && (
        <div>
          <button
            onClick={() => {
              setCounter(counter - 100);
            }}
          >
            <i className="fa-solid fa-caret-left"></i>
            <p>PREV</p>
          </button>
        </div>
      )}
      <div className="index">
        {counter / 100}/{Math.ceil(count / 100) - 1}
      </div>
      <div>
        {counter <= Math.ceil(count / 100) * 100 - 200 && (
          <button
            onClick={() => {
              setCounter(counter + 100);
            }}
          >
            <p>NEXT</p>

            <i className="fa-solid fa-caret-right"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
