import "./index.css";
import { GiSpeaker } from "react-icons/gi";

const Phonetics = ({ phonetics }) => {
  const phonetic = phonetics[1] || phonetics[0];

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
