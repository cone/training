const getRowAndCol = (str) => {
  const result = str.match(/(\d)-(\d)/);
  return [parseInt(result[1]), parseInt(result[2])];
}

export { getRowAndCol };
