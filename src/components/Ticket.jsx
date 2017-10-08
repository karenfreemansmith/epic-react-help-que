import React from "react";
import PropTypes from "prop-types";

function Ticket(props) {
  var ticketStyle = {
    backgroundColor: "#f9f9f9",
    fontFamily: "Arial, sans-serif",
    margin: "15px",
    padding: "20px"
  }
  return(
    <div style={ticketStyle}>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string
};

export default Ticket;
