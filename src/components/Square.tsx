import React from "react";

interface SquareProps {
  value: "X" | "O" | null;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <button style={styles.square} onClick={onClick}>
      {value}
    </button>
  );
};

const styles = {
  square: {
    width: "100px",
    height: "100px",
    fontSize: "24px",
    textalign: "center",
    border: "1px solid #000",
    backgroundColor: "#f9f9f9",
    cursor: "pointer",
  },
};

export default Square;
