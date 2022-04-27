import "./index.css";
import { useWordContext } from "../../context/WordState";

const Word = () => {
  const { word } = useWordContext();

  console.log(word);

  return (
    <div className="word">
      Welcome
      {word}
    </div>
  );
};

export default Word;
