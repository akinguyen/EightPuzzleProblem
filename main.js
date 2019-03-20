var Solution = require("./Solution");

var start = new Date().getTime();

// Compute the hardest 8-puzzle
var sol = new Solution([8, 6, 7, 2, 5, 4, 3, 0, 1]);
sol.mainDS();
sol.printSolutionPath();
//console.log(sol.getSolutionPath().reverse());

// Check the execution time
var end = new Date().getTime();
var time = end - start;
console.log("Execution time: " + time);
