function organizeGifts(gifts) {
  const segments = gifts.match(/\d+[a-z]+/g);
  let response = '';
  segments.forEach(segment => {
    const [_, quantityStr, sym] = segment.match(/(\d+)([a-z]+)/);
    const quantity = parseInt(quantityStr);
    const intialBoxes = Math.floor(quantity / 10);
    const items = quantity % 10;
    const palletes = Math.floor(intialBoxes / 5);
    const boxes = intialBoxes % 5;
    if (palletes) response += `[${sym}]`.repeat(palletes);
    if (boxes) response += `{${sym}}`.repeat(boxes);
    if (items) response += `(${sym.repeat(items)})`;
  });
  return response;
}

console.log(organizeGifts('76a11b'));
