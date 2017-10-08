
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

function liveTime() {

  ReactDOM.render(
      <App/>,
      document.getElementById('react-app-root')
  );
}

setInterval(liveTime, 1000);
