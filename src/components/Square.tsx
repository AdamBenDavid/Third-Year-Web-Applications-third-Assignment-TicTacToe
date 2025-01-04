import React from "react";
import XIcon from "../assets/x.svg";
import OIcon from "../assets/o.svg";

interface SquareProps {
  value: "X" | "O" | null;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <button style={styles.square} onClick={onClick}>
      {value === "X" && <img src={XIcon} alt="X" style={styles.icon} />}
      {value === "O" && <img src={OIcon} alt="O" style={styles.icon} />}
    </button>
  );
};

const styles = {
  square: {
    width: "100px",
    height: "100px",
    fontSize: "24px",
    textAlign: "center" as const,
    border: "1px solid #000",
    backgroundColor: "#f9f9f9",
    cursor: "pointer",
    display: "flex" as const,
    alignItems: "center" as const,
    justifyContent: "center" as const,
  },
  icon: {
    width: "70%",
    height: "70%",
  },
};

export default Square;
