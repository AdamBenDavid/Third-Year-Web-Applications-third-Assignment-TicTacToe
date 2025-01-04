import React from "react";
import Board from "./components/Board";

const App: React.FC = () => (
  <Board board={Array(9).fill(null)} onClick={() => {}} />
);

export default App;
