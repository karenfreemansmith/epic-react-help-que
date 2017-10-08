import React from "react";
import Header from "./Header";
import Clock from "./Clock";
import TicketList from "./TicketList";

function App(props) {
  return(
    <div>
      <Header/>
      <Clock/>
      <TicketList/>
    </div>
  );
}

export default App;
