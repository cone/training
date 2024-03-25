const getRowAndCol = (str) => {
  const result = str.match(/(\d)-(\d)/);
  return [parseInt(result[1]), parseInt(result[2])];
}

const getEmptyStringArray = () => new Array(3).fill([]).map(() => new Array(3).fill(""));

export { getRowAndCol, getEmptyStringArray };
