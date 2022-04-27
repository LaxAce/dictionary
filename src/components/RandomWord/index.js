import "./index.css";
import { useEffect, useState } from "react";
import useFetch from "../../hook/UseFetch";

const RandomWord = () => {
  const [loading, setLoading] = useState(true);

  const { data, isPendding, error } = useFetch(
    "https://random-words-api.vercel.app/word"
  );

  const randomWord = data && data[0];

  console.log(randomWord);

  setTimeout(() => {
    setLoading(false);
  }, 2600);

  return (
    <div className="random-word">
      {loading ||
        (data && (
          <div className="container">
            <h1>Random Word!</h1>
            <h2>{randomWord.word}</h2>
            <h3>
              <span>Pronunciation:</span> {randomWord.pronunciation}
            </h3>
            <p>
              <span>Definition:</span> {randomWord.definition}
            </p>
          </div>
        ))}
    </div>
  );
};

export default RandomWord;
