export const checkDraw = (cells: (string | number)[]) => {
  if (cells.every((element) => typeof element == "string")) return true;
  else return false;
};
