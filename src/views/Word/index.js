import "./index.css";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";

// components
import Definitions from "../../components/Definitions";
import Error from "../../components/Error";
import Example from "../../components/Examples";
import Loading from "../../components/Loading";
import PartOfSpeech from "../../components/PartOfSpeech";
import Phonetics from "../../components/Phonetics";
import WordVariations from "../../components/WordVariations";

// context
import { useWordContext } from "../../context/WordState";

// custom hook
import useFetch from "../../hook/UseFetch";

const Word = () => {
  const { word, setWord } = useWordContext();
  const [posIndex, setPosIndex] = useState(0);
  const navigate = useNavigate();

  const { data, isPending, error } = useFetch(
    word ? "https://api.dictionaryapi.dev/api/v2/entries/en/" + word : null
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
          <Example activePOS={activePOS} />
          <WordVariations activePOS={activePOS} handleSearch={handleSearch} />
        </div>
      )}
      {isPending ? <Loading /> : null}
      {error ? <Error message={"No match found."} /> : null}
    </div>
  );
};

export default Word;
