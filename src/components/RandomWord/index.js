import "./index.css";
import { useState } from "react";

// custom hook
import useFetch from "../../hook/UseFetch";

const RandomWord = ({ handleSearch }) => {
  const [loading, setLoading] = useState(true);

  const { data, error } = useFetch("https://random-words-api.vercel.app/word");

  const randomWord = data && data[0];

  const word = randomWord?.word;
  const pronunciation = randomWord?.pronunciation;
  const definition = randomWord?.definition;

  setTimeout(() => {
    setLoading(false);
  }, 2600);

  return (
    <div className="random-word">
      {!loading && data && randomWord && (
        <div className="container" onClick={() => handleSearch(word)}>
          <h1>Random Word!</h1>
          <h2>{word}</h2>
          <h3>
            <span>Pronunciation:</span> {pronunciation}
          </h3>
          <p>
            <span>Definition:</span> {definition}
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
