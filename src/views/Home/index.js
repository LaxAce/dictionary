import "./index.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

// components
import RandomWord from "../../components/RandomWord";
import Suggestion from "../../components/Suggestions";

// context
import { useWordContext } from "../../context/WordState";

// custom hook
import useFetch from "../../hook/UseFetch";

const Home = () => {
  const { setWord } = useWordContext();
  const [input, setInput] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const navigate = useNavigate();

  const { data } = useFetch(
    input == "" ? null : "https://api.datamuse.com/sug?s=" + input
  );

  useEffect(() => {
    data && setSuggestion(data);
    input == "" && setSuggestion([]);
  }, [data, input]);

  const handleSearch = (input) => {
    if (input != "") {
      setWord(input);
      navigate("/word");
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter" && e.target.value != "") {
      handleSearch(e.target.value);
    }
  };

  const handleSuggestionClick = (word) => {
    const current = suggestion.find((current) => current.word == word);
    if (current) handleSearch(word);
  };

  return (
    <div className="home">
      <h1>Dictionary</h1>
      <div className="search-container">
        <input
          type="text"
          name="word"
          placeholder="search here"
          autoComplete="off"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleEnter}
        />
        <BiSearch
          className="search-icon"
          size={24}
          onClick={() => handleSearch(input)}
        />
      </div>
      <Suggestion
        suggestion={suggestion}
        handleSuggestionClick={handleSuggestionClick}
      />
      {input ? null : <RandomWord handleSearch={handleSearch} />}
    </div>
  );
};

export default Home;
