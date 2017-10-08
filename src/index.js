function liveTime() {
  var heading = React.createElement('h1', {}, 'Help Queue');
  var clock = React.createElement('h2', {}, `It is ${new Date().toLocaleTimeString()}`);
  var ticketLocation = React.createElement('h3', {}, '3a');
  var ticketNames = React.createElement('h3', {}, 'Thato and Haley');
  var ticketIssue = React.createElement('h3', {}, 'Firebase won\'t save record');
  var app= React.createElement('div', {}, heading, clock, ticketLocation, ticketNames, ticketIssue);


  ReactDOM.render(
      app,
      document.getElementById('react-app-root')
  );
}

setInterval(liveTime, 1000);
