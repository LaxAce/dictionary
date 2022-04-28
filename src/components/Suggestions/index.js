import "./index.css";

const Suggestions = ({ suggestion, handleSuggestionClick }) => {
  return (
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
  );
};

export default Suggestions;
