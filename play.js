const connect = require('./client');
const setupInput = require('./input');

console.log("Connecting ...");
let objectConnect = connect();
setupInput(objectConnect);
