import "./index.css";
import { GiSpeaker } from "react-icons/gi";

const Phonetics = ({ phonetics }) => {
  const handlePronunciation = (url) => {
    let audio = new Audio(url);
    audio.play();
  };

  return (
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
                  <GiSpeaker
                    size={26}
                    onClick={() => handlePronunciation(value.audio)}
                  />
                </li>
              );
            }
          })
        : null}
    </ul>
  );
};

export default Phonetics;
