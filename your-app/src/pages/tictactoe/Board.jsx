import React from "react";
import Square from "./Square";

const Board = (props) => {
  const { squares, onClick } = props;

  return (
    <div className="flexBox">
      {squares.map((item, i) => (
        <div className="board-row">
          <Square value={squares[i]} onClick={() => onClick(i)} />
        </div>
      ))}
    </div>
  );
};

Board.defaultProps = {
  squares: [],
  onClick: () => {},
};
export default Board;
