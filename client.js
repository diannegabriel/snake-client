const net = require("net");

// establishes a connection with the game server
const connect = function () {

  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", (data) => {
    console.log('Successfully connected to game server!');
    conn.write('Name: DIA')
  });

  conn.on("data", (data) => {
    console.log('Server says...', data);
  });

  // setInterval(() => {
  //   conn.write("Move: up");
  // }, 700) 
  // setTimeout(() => {
  //   conn.write("Move: left");
  // }, 2500) 
  // setInterval(() => {
  //   conn.write("Move: right");
  // }, 1500) 
  // setInterval(() => {
  //   conn.write("Move: down");
  // }, 2000) 

  return conn;
};

module.exports = connect;