import React from "react";
import Father from "./Father";

function Grandfather() {
  return (
    <div style={{border: "2px solid blue", padding: "10px"}}>
      <h2>Grandfather Component</h2>
      <Father />
    </div>
  );
}

export default Grandfather;
