export const pickRandomCell = (cells: (string | number)[]) => {
  //Return id of random free cell
  const filteredCells = cells.filter((element) => typeof element == "number");
  return filteredCells[
    Math.floor(Math.random() * filteredCells.length)
  ].toString();
};
