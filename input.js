let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  const handleUserInput = function (data) {
    if (data === "w") {
      connection.write('Move: up');
    }
    if (data === "a") {
      connection.write('Move: left');
    }
    if (data === "s") {
      connection.write('Move: down');
    }
    if (data === "d") {
      connection.write('Move: right');
    }
    if (data === "l") {
      connection.write('Say: Take this L');
    }
    if (data === "g") {
      connection.write('Say: Great game!');
    }
    if (data === "\u0003") {
      console.log("Goodbye!");
      process.exit();
    }
  };
  
  stdin.on("data", handleUserInput);

  return stdin;
};

// setupInput();

module.exports = setupInput;