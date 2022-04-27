import { createContext, useContext, useState } from "react";

export const WordContext = createContext();

export const useWordContext = () => {
  const context = useContext(WordContext);

  return context;
};

export const WordProvider = ({ children }) => {
  const [word, updateWord] = useState("");

  const setWord = (word) => {
    updateWord(word);
  };

  const contexts = { word, setWord };

  return (
    <WordContext.Provider value={contexts}>{children}</WordContext.Provider>
  );
};
