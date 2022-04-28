import "./index.css";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";

// components
import Phonetics from "../../components/Phonetics";
import PartOfSpeech from "../../components/PartOfSpeech";
import Definitions from "../../components/Definitions";
import WordVariations from "../../components/WordVariations";

// context
import { useWordContext } from "../../context/WordState";

// custom hook
import useFetch from "../../hook/UseFetch";

const Word = () => {
  const { word, setWord } = useWordContext();
  const [posIndex, setPosIndex] = useState(0);
  const navigate = useNavigate();

  const { data, error } = useFetch(
    "https://api.dictionaryapi.dev/api/v2/entries/en/" + word
  );

  const searchedWord = data ? data[0] : null;
  const displayWord = searchedWord?.word;
  const phonetics = searchedWord?.phonetics;
  const meanings = searchedWord?.meanings;

  const handleGoBack = () => {
    navigate("/");
  };

  const handlePartOfSpeech = (i) => {
    setPosIndex(i);
  };

  const handleSearch = (input) => {
    setWord(input);
    setPosIndex(0);
  };

  const activePOS = meanings?.find((value, i) => posIndex == i);

  return (
    <div className="word">
      <button className="go-back" onClick={handleGoBack}>
        <IoIosArrowBack size={24} /> <span>Search</span>
      </button>
      {data && (
        <div className="word-container">
          <h1>{displayWord}</h1>
          <Phonetics phonetics={phonetics} />
          <PartOfSpeech
            meanings={meanings}
            posIndex={posIndex}
            handlePartOfSpeech={handlePartOfSpeech}
          />
          <Definitions activePOS={activePOS} />
          <WordVariations activePOS={activePOS} handleSearch={handleSearch} />
        </div>
      )}
      {error ? <p className="error">No match found.</p> : null}
    </div>
  );
};

export default Word;
