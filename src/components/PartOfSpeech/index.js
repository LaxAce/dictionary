import "./index.css";

const PartOfSpeech = ({ meanings, handlePartOfSpeech, posIndex }) => {
  return (
    <ul className="part-of-speech-list">
      {meanings
        ? meanings.map((value, i) => {
            return (
              <li
                key={i}
                className={
                  posIndex == i ? "part-of-speech active" : "part-of-speech"
                }
                onClick={() => handlePartOfSpeech(i)}
              >
                {value.partOfSpeech}
              </li>
            );
          })
        : null}
    </ul>
  );
};

export default PartOfSpeech;
