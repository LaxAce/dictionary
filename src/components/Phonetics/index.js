import "./index.css";
import { GiSpeaker } from "react-icons/gi";

const Phonetics = ({ phonetics }) => {
  let phonetic;

  if (phonetics.length > 0) {
    phonetic = phonetics[1] || phonetics[0];
  } else phonetic = [];

  const { audio, text } = phonetic;

  const handlePronunciation = (url) => {
    let audio = new Audio(url);
    audio.play();
  };

  return (
    <ul className="phonetics-list">
      {text ? (
        <li className="phonetics">
          {text}
          {audio && "-"}
        </li>
      ) : null}
      {audio ? (
        <li className="phonetics speaker">
          <GiSpeaker size={26} onClick={() => handlePronunciation(audio)} />
        </li>
      ) : null}
    </ul>
  );
};

export default Phonetics;
