const PLAYER_X = 'X';
const PLAYER_O = 'O';

const hasPlayerWon = (board, player) => {
  //CheckRows
  for (let row = 0; row < board.length; row++) {
    if (
      board[row][0] === player &&
      board[row][1] === player &&
      board[row][2] === player
    ) {
      return true;
    }
  }
  //CheckColumns
  for (let col = 0; col < board.length; col++) {
    if (
      board[0][col] === player &&
      board[1][col] === player &&
      board[2][col] === player
    ) {
      return true;
    }
  }
  //CheckDiagonals
  if (
    (board[0][0] === player &&
      board[1][1] === player &&
      board[2][2] === player) ||
    (board[0][2] === player && board[1][1] === player && board[2][0] === player)
  ) {
    return true;
  }
  return false;
};

const isDraw = board => {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      if (board[row][col] === '') {
        return false;
      }
    }
  }
  return true;
};

const minimax = (board, player) => {
  if (hasPlayerWon(board, PLAYER_O)) {
    return {bestScore: player === PLAYER_O ? 1 : -1};
  }
  if (hasPlayerWon(board, PLAYER_X)) {
    return {bestScore: player === PLAYER_X ? 1 : -1};
  }
  if (isDraw(board)) {
    return {bestScore: 0};
  }

  let bestScore = player === 'X' ? -Infinity : Infinity;
  let bestBoard = null;
  let bestMove = {row: null, col: null};

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      if (board[row][col] === '') {
        //Temporary symbol assign for calculation of possible outcomes
        board[row][col] = player;
        //Calculation of the next players best possible outcome
        const {bestScore: score} = minimax(board, player === 'X' ? 'O' : 'X');
        board[row][col] = '';
        if (player === 'X') {
          if (score > bestScore) {
            bestScore = score;
            bestMove = {row, col};
            bestBoard = board.map(row => [...row]);
          }
        } else {
          if (score < bestScore) {
            bestScore = score;
            bestMove = {row, col};
            bestBoard = board.map(row => [...row]);
          }
        }
      }
    }
  }

  return {bestMove, bestScore, bestBoard};
};

export default minimax;
