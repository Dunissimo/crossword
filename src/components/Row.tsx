import { FC, useState } from "react";
import Cell from "./Cell";

interface IProps {
  direction: "horizontal" | "vertical";
}

const Row: FC<IProps> = ({ direction }) => {
  const [word, setWord] = useState<string>("Привет");

  console.log(word.split(""));

  return (
    <div className={`crossword-row ${direction}`}>
      {word.split("").map((letter, i) => (
        <Cell key={i} letter={letter} />
      ))}
    </div>
  );
};

export default Row;
