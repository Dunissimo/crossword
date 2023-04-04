import { FC } from "react";

interface IProps {
  letter: string;
}

const Cell: FC<IProps> = ({ letter }) => {
  return <div className="crossword-cell">{letter.toUpperCase()}</div>;
};

export default Cell;
