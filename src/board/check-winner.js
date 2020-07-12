export const checkWinner = (moves) => {
  // Horizontal
  if (moves[0] && moves[0] === moves[1] && moves[0] === moves[2])
    return moves[0];
  if (moves[3] && moves[3] === moves[4] && moves[3] === moves[5])
    return moves[3];
  if (moves[6] && moves[6] === moves[7] && moves[6] === moves[8])
    return moves[6];

  // Diagonal
  if (moves[0] && moves[0] === moves[4] && moves[0] === moves[8])
    return moves[0];
  if (moves[2] && moves[2] === moves[4] && moves[2] === moves[6])
    return moves[2];

  //Vertical
  if (moves[0] && moves[0] === moves[3] && moves[0] === moves[6])
    return moves[0];
  if (moves[1] && moves[1] === moves[4] && moves[1] === moves[7])
    return moves[1];
  if (moves[2] && moves[2] === moves[5] && moves[2] === moves[8])
    return moves[2];

  return null;
};
