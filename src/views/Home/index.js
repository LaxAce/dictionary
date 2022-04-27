import "./index.css";
import React, { useEffect, useState, Suspense } from "react";
import { useWordContext } from "../../context/WordState";
import { useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import useFetch from "../../hook/UseFetch";
import RandomWord from "../../components/RandomWord";

const Home = () => {
  const { setWord } = useWordContext();
  const [input, setInput] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const navigate = useNavigate();

  const { data, isPendding, error } = useFetch(
    input == "" ? null : "https://api.datamuse.com/sug?s=" + input
  );

  useEffect(() => {
    data && setSuggestion(data);
    input == "" && setSuggestion([]);
  }, [data, input]);

  const handleSearch = (input) => {
    setWord(input);
    navigate("/word");
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
      <ul className="suggestion-list">
        {suggestion &&
          suggestion.map((value, i) => {
            const { word } = value;
            return (
              <li key={i} onClick={() => handleSuggestionClick(word)}>
                {word}
              </li>
            );
          })}
      </ul>
      <RandomWord />
    </div>
  );
};

export default Home;
