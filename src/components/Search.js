import "../assets/css/search.scss";

const Search = ({ word, setWord, title }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={`What ${title} are you looking for ?`}
        value={word}
        onChange={(event) => {
          setWord(event.target.value);
        }}
      />
    </div>
  );
};

export default Search;
