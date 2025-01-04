import React from "react";
import Square from "./Square";

interface BoardProps {
  board: ("X" | "O" | null)[];
  onClick: (index: number) => void;
}

const Board: React.FC<BoardProps> = ({ board, onClick }) => {
  const renderSquare = (index: number) => {
    return (
      <Square key={index} value={board[index]} onClick={() => onClick(index)} />
    );
  };

  return (
    <div style={styles.board}>
      {board.map((_, index) => renderSquare(index))}
    </div>
  );
};

const styles = {
  board: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 100px)",
    gap: "5px",
  },
};

export default Board;
