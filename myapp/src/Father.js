import React from "react";
import Son from "./Son";

function Father() {
  return (
    <div style={{border: "2px solid green", padding: "10px", marginTop: "10px"}}>
      <h3>Father Component</h3>
      <Son />
    </div>
  );
}

export default Father;
