import React from "react";

function Clock(props) {
  return(
    <h2>It's {new Date().toLocaleTimeString()}</h2>
  );
}

export default Clock;
