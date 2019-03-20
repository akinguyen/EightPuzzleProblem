var Solution = require("./Solution");

var start = new Date().getTime();

// Compute the solution
var sol = new Solution([4, 6, 1, 0, 8, 2, 7, 5, 3]);
sol.mainAStar();
sol.printSolutionPath();
//console.log(sol.getSolutionPath().reverse());

// Check the execution time
var end = new Date().getTime();
var time = end - start;
console.log("Execution time: " + time);
