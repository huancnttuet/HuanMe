import { config } from "react-spring";
import img from "./image/1.jpg";
export const slides = [
  require("./image/1.jpg"),
  require("./image/2.jpg"),
  require("./image/3.jpg"),
  require("./image/4.jpg"),
  require("./image/5.jpg"),
  require("./image/6.jpg"),
  require("./image/7.jpg"),
  require("./image/8.jpg")
];

export const defaultState = {
  enabled: true,
  autoplay: true,
  index: 0,
  nbSlides: 8,
  trail: true,
  vertical: false,
  draggedScale: 0.8,
  sliderWidth: 80,
  variableWidth: false,
  variableHeight: false,
  draggedSpring: "default",
  trailingSpring: "default"
};

export const draggedSpringOptions = {
  ...config,
  default: { tension: 1200, friction: 40 }
};

export const trailingSpringOptions = {
  ...config,
  default: { mass: 10, tension: 800, friction: 200 }
};
