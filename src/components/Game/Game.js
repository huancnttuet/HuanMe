import React, { useState } from "react";
import Board from "../Board";
const Game = () => {
  const initMap = {
    height: 8,
    width: 8,
    mines: 10,
  };
  const [map, setMap] = useState(initMap);

  return (
    <div className="game">
      <Board height={map.height} width={map.width} mines={map.mines} />
    </div>
  );
};

export default Game;
