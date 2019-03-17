var Solution = require("./Solution");

var start = new Date().getTime();

// Compute the solution
var sol = new Solution([1, 2, 3, 4, 5, 0, 6, 7, 8]);
sol.mainBFS();
sol.printSolutionPath();

// Check the execution time
var end = new Date().getTime();
var time = end - start;
console.log("Execution time: " + time);