import "./index.css";
import { useState } from "react";

// component
import Error from "../Error";
import Loading from "../Loading";

// custom hook
import useFetch from "../../hook/UseFetch";

const RandomWord = ({ handleSearch }) => {
  const [loading, setLoading] = useState(true);

  const { data, error } = useFetch("https://random-word-api.herokuapp.com/word");

  const randomWord = data && data[0];

  const word = randomWord;
  const pronunciation = randomWord?.pronunciation;
  const definition = randomWord?.definition;

  setTimeout(() => {
    setLoading(false);
  }, 2600);

  return (
    <div className="random-word">
      {!loading && data && randomWord && (
        <div className="container" onClick={() => handleSearch(word)}>
          <h1>Word of the moment</h1>
          <h2>{word}</h2>
          {pronunciation ? (<h3>
            <span>Pronunciation:</span> {pronunciation}
          </h3>) : null
          }
          {definition ? (<p>
            <span>Definition:</span> {definition}
          </p>) : null}
        </div>
      )}
      {loading ? <Loading /> : null}
      {!loading && error ? (
        <Error message={"Something went wrong. Please refresh the page!"} />
      ) : null}
    </div>
  );
};

export default RandomWord;
