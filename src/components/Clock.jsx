import React from "react";

function Clock(props) {
  var clockStyle = {
    textAlign: "center",
    color: "red"
  }
  return(
    <h2 style={clockStyle}>It's {new Date().toLocaleTimeString()}</h2>
  );
}

export default Clock;
