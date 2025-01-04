import React, { useEffect, useState } from "react";
import Board from "./Board";
import Modal from "./Modal";
import { calculateWinner } from "../utiles/calculateWinner";

type Player = "X" | "O" | null;

const Game: React.FC = () => {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [Xturn, setXturn] = useState(true);
  const [modalMessage, setModalMessage] = useState<string | null>(null);

  const winner = calculateWinner(board);

  useEffect(() => {
    if (winner === "X" || winner === "O") {
      setModalMessage(`Winner: ${winner}`);
    } else if (winner === "draw") {
      setModalMessage("It's a draw!");
    }
  }, [winner]);

  const handleClick = (index: number) => {
    if (board[index] || winner) {
      return;
    }
    const newBoard = [...board];
    newBoard[index] = Xturn ? "X" : "O";
    setBoard(newBoard);
    setXturn(!Xturn);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXturn(true);
    setModalMessage(null);
  };

  return (
    <div style={styles.game}>
      <div style={styles.title}>
        <h1>Tic Tac Toe</h1>
      </div>
      <div style={styles.info}>
        {winner
          ? `Winner: ${winner}`
          : winner === "draw"
          ? "It's a draw!"
          : `Next Player: ${Xturn ? "X" : "O"}`}
      </div>
      <div style={styles.board}>
        <Board board={board} onClick={handleClick} />
      </div>
      <div>
        <button style={styles.button} onClick={resetGame}>
          Reset Game
        </button>
      </div>
      {modalMessage && (
        <Modal
          message={modalMessage}
          buttomText="reset"
          onConfirm={resetGame}
        />
      )}
    </div>
  );
};

const styles = {
  game: {
    display: "flex" as const,
    flexDirection: "column" as const,
    alignItems: "center" as const,
    justifyContent: "center" as const,
    height: "100vh",
    backgroundColor: "#f0f8ff",
    fontFamily: "'Poppins', sans-serif",
    textAlign: "center" as const,
  },
  title: {
    color: "#4CAF50",
    fontSize: "2.5rem",
    marginBottom: "1rem",
  },
  info: {
    color: "#555",
    fontSize: "1.5rem",
    marginBottom: "1.5rem",
  },
  board: {
    display: "flex" as const,
    flexDirection: "column" as const,
    alignItems: "center" as const,
    justifyContent: "center" as const,
    backgroundColor: "#ffffff",
    border: "2px solid #ccc",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s ease",
  },
};

export default Game;
