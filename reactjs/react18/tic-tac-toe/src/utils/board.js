import { BOARD_SIZE } from "./constants";

const getRowAndCol = (str) => {
  const result = str.match(/(\d)-(\d)/);
  return [parseInt(result[1]), parseInt(result[2])];
}

const getEmptyStringArray = () => new Array(BOARD_SIZE).fill([]).map(() => new Array(BOARD_SIZE).fill(""));

export { getRowAndCol, getEmptyStringArray };
