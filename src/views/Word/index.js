import "./index.css";
import { useNavigate } from "react-router-dom";
import { useWordContext } from "../../context/WordState";
import { IoIosArrowBack } from "react-icons/io";
import { GiSpeaker } from "react-icons/gi";
import useFetch from "../../hook/UseFetch";
import { useEffect, useState } from "react";

const Word = () => {
  const { word } = useWordContext();
  const navigate = useNavigate();
  const [pos, setPos] = useState([]);
  const [posIndex, setPosIndex] = useState(0);

  const { data, isPendding, error } = useFetch(
    "https://api.dictionaryapi.dev/api/v2/entries/en/" + word
  );

  const searchedWord = data ? data[0] : null;
  const displayWord = searchedWord?.word;
  const phonetics = searchedWord?.phonetics;
  const meanings = searchedWord?.meanings;

  console.log(searchedWord);

  const handleGoBack = () => {
    navigate("/");
  };

  const handlePartOfSpeech = (i) => {
    setPosIndex(i);
    setPos();
  };

  const activePOS = meanings?.find((value, i) => posIndex == i);
  console.log(activePOS);

  return (
    <div className="word">
      <button className="go-back" onClick={handleGoBack}>
        <IoIosArrowBack size={24} /> <span>Search</span>
      </button>
      {data && (
        <div className="word-container">
          <h1>{displayWord}</h1>
          <ul className="phonetics-list">
            {phonetics
              ? phonetics.map((value, i) => {
                  if (value.text) {
                    return (
                      <li key={i} className="phonetics">
                        {value.text}-
                      </li>
                    );
                  }
                  if (value.audio) {
                    return (
                      <li key={i} className="phonetics speaker">
                        <GiSpeaker size={20} />
                        {/* {value.audio} */}
                      </li>
                    );
                  }
                })
              : null}
          </ul>
          <ul className="part-of-speech-list">
            {meanings
              ? meanings.map((value, i) => {
                  return (
                    <li
                      key={i}
                      className={
                        posIndex == i
                          ? "part-of-speech active"
                          : "part-of-speech"
                      }
                      onClick={() => handlePartOfSpeech(i)}
                    >
                      {value.partOfSpeech}
                    </li>
                  );
                })
              : null}
          </ul>

          <div className="definition-container">
            <h3 className="definition-heading">Definition</h3>
            <ol className="definition">
              {activePOS?.definitions?.map((value, i) => (
                <li key={i}>{value.definition}</li>
              ))}
            </ol>
          </div>

          <div className="word-variations">
            <ul className="synonyms">
              <h3>Synonyms</h3>
              {activePOS?.synonyms?.map((value, i) => (
                <li key={i}>{value}</li>
              ))}
              {activePOS?.synonyms.length == 0 ? "none" : null}
            </ul>
            <ul className="antonyms">
              <h3>Antonyms</h3>
              {activePOS?.antonyms?.map((value, i) => (
                <li key={i}>{value}</li>
              ))}
              {activePOS?.antonyms.length == 0 ? "none" : null}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Word;
