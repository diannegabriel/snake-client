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
    console.log('Connected!');
    conn.write('Name: Dianne')
  });

  conn.on("data", (data) => {
    console.log('Server says...', data);
  });
  return conn;
};

module.exports = connect;