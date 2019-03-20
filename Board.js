class Board {
  constructor(moveLedTo, slidePos, positions) {
    this.slidePos = slidePos;
    this.moveLedTo = moveLedTo;
    this.positions = positions;
    this.hash = this.hashCode();
    this.manhattan = this.manhattanCost();
  }
  manhattanCost() {
    let cost = 0;
    for (let i = 0; i < 9; i++) {
      cost +=
        Math.abs(this.getCol(this.positions[i]) - this.getCol(i)) +
        Math.abs(this.getRow(this.positions[i]) - this.getRow(i));
    }
    return cost;
  }

  // Print out the solution
  show() {
    let board = [];
    for (let i = 0; i < 9; i++) {
      if (i % 3 == 0 && i !== 0) {
        board.push("\n");
      }
      board.push(` ${this.positions[i]} `);
    }
    console.log(board.join(""));
    console.log();
  }

  //Get the row of the current number
  getRow(pos) {
    return Math.trunc(pos / 3);
  }

  //Get the col of the current number
  getCol(pos) {
    return pos % 3;
  }

  //Get new board based on current move and newPosition
  getNewBoard(move, newPos) {
    let newBoard = this.positions.slice(0);
    let temp = newBoard[newPos];
    newBoard[newPos] = 0;
    newBoard[this.slidePos] = temp;
    return new Board(move, newPos, newBoard);
  }

  // Get new state based on the current move
  /*
  1 : Up
  2: Down
  3: Left
  4: Right
  */
  getState(move) {
    if (move === 1) {
      return this.getNewBoard(1, this.slidePos - 3);
    }
    if (move === 2) {
      return this.getNewBoard(2, this.slidePos + 3);
    }
    if (move === 3) {
      return this.getNewBoard(3, this.slidePos - 1);
    }
    return this.getNewBoard(4, this.slidePos + 1);
  }

  // Get all of the possible nextMoves
  /*
  1 : Up
  2: Down
  3: Left
  4: Right
  */
  nextMoves() {
    let nextMoves = [];
    let row = this.getRow(this.slidePos);
    let col = this.getCol(this.slidePos);
    if (row !== 0) {
      nextMoves.push(this.getState(1));
    }
    if (row !== 2) {
      nextMoves.push(this.getState(2));
    }
    if (col !== 0) {
      nextMoves.push(this.getState(3));
    }
    if (col !== 2) {
      nextMoves.push(this.getState(4));
    }
    return nextMoves;
  }

  // Hash the current board
  hashCode() {
    let hash = 0;
    for (var pos of this.positions) {
      hash = hash * 31 + pos;
    }
    return hash;
  }
}

module.exports = Board;
