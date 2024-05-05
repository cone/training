function drawGift(size, symbol) {
  const lines = [];
  const iterations = size + (size - 1);
  let repeat = 0;
  for (let i = 1; i <= iterations; i++) {
    let spaces = size - i > 0 ? size - i : 0;
    if (i == 1 || i == iterations) {
      lines.push(
        ' '.repeat(spaces) +
        '#'.repeat(size) +
        '\n'
      );
      continue;
    }
    if (i == size) {
      lines.push(
        ' '.repeat(spaces) +
        '#'.repeat(size) +
        symbol.repeat(i - 2) +
        '#\n'
      );
      repeat--;
      continue;
    }
    lines.push(
      ' '.repeat(spaces) +
      '#' +
      symbol.repeat(size - 2) +
      '#' +
      symbol.repeat(repeat) +
      '#\n'
    );
    i < size ? repeat++ : repeat--;
  }
  return lines.join('');
}

console.log(drawGift(4, '+'));
console.log(drawGift(5, '*'));
console.log(drawGift(1, '^'));
