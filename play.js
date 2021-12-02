const { stdin } = require('process');
const connect = require('./client')

// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

// Event Handling for User Input

const handleUserInputer = function () {
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  })
}
process.stdin.on("data", handleUserInputer);


setupInput()