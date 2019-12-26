import React from "react";
import Haha from "../../components/Haha";
import Hihi from "../../components/Hihi";
import "./styles.css";

const MyOneYear = () => {
  return (
    <div class="container">
      <div class="background-img">
        <div style={{ textAlign: "center" }}>
          <Haha></Haha>
        </div>
        <div class="box">
          <span></span>
          <span></span>
          <span></span>
          <span></span>

          <Hihi></Hihi>
        </div>
      </div>
    </div>
  );
};

export default MyOneYear;
