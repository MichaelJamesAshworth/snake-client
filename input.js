// const { stdin } = require('process');
// const { connect } = require('./client');
let connection;
// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInputer);
  return stdin;
}
  // Event Handling for User Input
  
  // Allows us to input from CLI (process.)
  const handleUserInputer = function (keystroke) {
      //If conditionals 
      if (keystroke === "w") connection.write("Move: up");
      if (keystroke === "a") connection.write("Move: left");
      if (keystroke === "s") connection.write("Move: down");
      if (keystroke === "d") connection.write("Move: right");
      if (keystroke === "f") connection.write("Say: ittybittisnakecommitte");
      if (keystroke === '\u0003') {
        console.log("Leaving Game...")
        process.exit();
      }
    }

module.exports = {
  setupInput
}