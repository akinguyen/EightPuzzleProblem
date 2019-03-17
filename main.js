var Solution = require("./Solution");

var start = new Date().getTime();

// Compute the solution
var sol = new Solution([1, 0, 2, 3, 4, 5, 6, 7, 8]);
sol.mainBFS();
sol.printSolutionPath();
console.log(sol.getSolutionPath().reverse());
// Check the execution time
var end = new Date().getTime();
var time = end - start;
console.log("Execution time: " + time);
