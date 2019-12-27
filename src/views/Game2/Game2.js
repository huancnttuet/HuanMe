import React, { useState, useRef, useEffect } from "react";

import Scene from "../../components/Scene";

const Game2 = () => {
  // const [bird, setBird] = useState({
  //   x: 50,
  //   y: 50,
  //   radius: 20,
  // });
  // const canvasRef = useRef(null);

  // const draw = () => {
  //   const canvas = canvasRef.current;
  //   const ctx = canvas.getContext("2d");
  //   // implement draw on ctx here
  //   ctx.fillStyle = "green";
  //   ctx.beginPath();
  //   ctx.arc(bird.x, bird.y, bird.radius, 0, 2 * Math.PI);
  //   ctx.fill();
  //   ctx.stroke();
  // };

  // useEffect(() => {
  //   draw();
  //   console.log("draw");
  // });

  return (
    <>
      <Scene />
    </>
  );
};

export default Game2;
