# EightPuzzleProblem

This respository contains the Javascript solution for the Eight Puzzle Problem. The current solution utilizes the BFS, DFS, Greedy Search, Dijkstra and A\* algorithm (Manhattan cost).

- 0 is the slider or non-number block
- See the result by simply running `npm install js-priority-queue and node main.js`
- Modify `var sol = new Solution([1, 2, 3, 4, 5, 0, 6, 7, 8])` into `var solution = new Solution(positions_array)` to solve custom initial state

Note: [1, 0, 2, 3, 4, 5, 6, 7, 8] will be presented in the format:

1 0 2
<br>
3 4 5
<br>
6 7 8
<br>

### Running example for case [1, 0, 2, 3, 4, 5, 6, 7, 8]

`var sol = new Solution([1, 0, 2, 3, 4, 5, 6, 7, 8]);`
<br>
`sol.mainBFS(); // Call sol.mainDFS, sol.mainAStar, sol.mainGreedySearch, sol.mainDS for other solving options`
<br>
`sol.printSolutionPath();`

0 1 2
<br>
3 4 5
<br>
6 7 8
<br>

1 0 2
<br>
3 4 5
<br>
6 7 8

### Get sequence of moves from getSolutionPath()

getSolutionPath() returns the sequence of moves from the current position of the slider ( 0 )

#### Move dictionary:

0: Do Nothing
<br>
1 : Up
<br>
2: Down
<br>
3: Left
<br>
4: Right
<br>

#### getSolutionPath() Usage

`var sol = new Solution([1, 0, 2, 3, 4, 5, 6, 7, 8]);`
<br>
`sol.mainBFS();`
<br>
`let path = sol.getSolutionPath().reverse()`
<br>
`console.log(path) // [0, 3]`
