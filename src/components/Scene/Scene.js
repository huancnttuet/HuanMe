import React, { useState, useRef, useEffect } from "react";

import Matter from "matter-js";

const Scene = () => {
  const sceneRef = useRef(null);
  useEffect(() => {
    var Engine = Matter.Engine,
      Render = Matter.Render,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint;

    var engine = Engine.create({
      // positionIterations: 20
    });

    var render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: 600,
        height: 600,
        wireframes: false,
      },
    });

    var ballA = Bodies.circle(210, 100, 30, {
      restitution: 0.5,
      render: {
        sprite: {
          texture: "https://opengameart.org/sites/default/files/styles/medium/public/SoccerBall_0.png",
          xScale: 0.4,
          yScale: 0.4,
        },
      },
    });
    var ballB = Bodies.circle(110, 50, 30, { restitution: 0.5 });
    World.add(engine.world, [
      // walls
      Bodies.rectangle(200, 0, 600, 50, { isStatic: true }),
      Bodies.rectangle(200, 600, 600, 50, { isStatic: true }),
      Bodies.rectangle(260, 300, 50, 600, { isStatic: true }),
      Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),
    ]);

    World.add(engine.world, [ballA, ballB]);

    // add mouse control
    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false,
          },
        },
      });

    World.add(engine.world, mouseConstraint);

    Matter.Events.on(mouseConstraint, "mousedown", function(event) {
      World.add(engine.world, Bodies.circle(150, 50, 30, { restitution: 0.7 }));
    });

    Engine.run(engine);

    Render.run(render);
  }, []);

  return (
    <>
      <div ref={sceneRef} />
    </>
  );
};
export default Scene;
