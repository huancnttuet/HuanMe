import React from "react";
import Anime from "react-anime";

const Timeline = props => (
  <Anime delay={(e, i) => i * 100} scale={[0.1, 0.9]}>
    <div className="blue" />
    <div className="green" />
    <div className="red" />
  </Anime>
);

export default Timeline;
