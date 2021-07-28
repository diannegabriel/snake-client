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

module.exports = setupInput;