import "./index.css";
import { useState } from "react";
import useFetch from "../../hook/UseFetch";

const RandomWord = ({ handleSearch }) => {
  const [loading, setLoading] = useState(true);

  const { data, error } = useFetch("https://random-words-api.vercel.app/word");

  const randomWord = data && data[0];

  setTimeout(() => {
    setLoading(false);
  }, 2600);

  return (
    <div className="random-word">
      {!loading && data && (
        <div
          className="container"
          onClick={() => handleSearch(randomWord.word)}
        >
          <h1>Random Word!</h1>
          <h2>{randomWord.word}</h2>
          <h3>
            <span>Pronunciation:</span> {randomWord.pronunciation}
          </h3>
          <p>
            <span>Definition:</span> {randomWord.definition}
          </p>
        </div>
      )}
      {loading ? <div className="loading">Loading...</div> : null}
      {!loading && error ? (
        <div className="error">
          Something went wrong. Please refresh the page!
        </div>
      ) : null}
    </div>
  );
};

export default RandomWord;
