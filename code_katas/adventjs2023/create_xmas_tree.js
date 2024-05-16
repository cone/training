function createChristmasTree(ornaments, height) {
  let response = '';
  let ornamentsArr = ornaments.split('');
  let oIndex = 0;
  for (let i = 1; i <= height ; i++) {
    const currentOrnaments = [];
    while (currentOrnaments.length < i) {
      currentOrnaments.push(ornamentsArr[oIndex]);
      oIndex = oIndex >= (ornamentsArr.length - 1) ? 0 : oIndex + 1;
    }
    const spaces = height - i;
    response += ' '.repeat(spaces) + currentOrnaments.join(' ') + '\n';
  }
  response += ' '.repeat(height - 1) + '|\n'
  return response;
}

console.log(createChristmasTree('123', 4));
console.log(createChristmasTree('*@o', 3));
