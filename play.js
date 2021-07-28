const net = require("net");
const connect = require('./client');

// establishes a connection with the game server
// const connect = function () {

  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542,
  });

  // interpret incoming data as text
  // conn.setEncoding("utf8");

  // conn.on("data", (data) => {
  //   console.log(data);
  // });
  // return conn;
// };

const setupInput = function (data) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  const handleUserInput = function (data) {
    if (data === "\u0003") {
      console.log("Goodbye!");
      process.exit();
    }
  };
  
  stdin.on("data", handleUserInput);

  return stdin;
};

setupInput();
console.log("Connecting ...");
connect();