import "./index.css";

const WordVariations = ({ activePOS, handleSearch }) => {
  return (
    <div className="word-variations">
      <ul className="synonyms">
        <h3>Synonyms</h3>
        {activePOS?.synonyms?.map((value, i) => (
          <li key={i} onClick={() => handleSearch(value)}>
            {value}
          </li>
        ))}
        {activePOS?.synonyms.length == 0 ? "none" : null}
      </ul>
      <ul className="antonyms">
        <h3>Antonyms</h3>
        {activePOS?.antonyms?.map((value, i) => (
          <li key={i} onClick={() => handleSearch(value)}>
            {value}
          </li>
        ))}
        {activePOS?.antonyms.length == 0 ? "none" : null}
      </ul>
    </div>
  );
};

export default WordVariations;
