export const checkWinner = (cells: (string | number)[]) => {
  if (
    (cells[0] == cells[1] && cells[0] == cells[2]) ||
    (cells[0] == cells[3] && cells[0] == cells[6]) ||
    (cells[0] == cells[4] && cells[0] == cells[8]) ||
    (cells[3] == cells[4] && cells[3] == cells[5]) ||
    (cells[6] == cells[7] && cells[6] == cells[8]) ||
    (cells[1] == cells[4] && cells[1] == cells[7]) ||
    (cells[2] == cells[5] && cells[2] == cells[8]) ||
    (cells[2] == cells[4] && cells[2] == cells[6])
  )
    return true;
  else return false;
};
