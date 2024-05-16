// Changes backward text inside parenthesis to the correct way

function decode(message) {
  const message_arr = message.split('');
  let result = [];
  message_arr.forEach((c) => {
    if (c == ')') {
      let temp;
      let parsed = [];
      while (temp != '(' && result.length) {
        console.log(`current char: ${temp}`);
        temp = result.pop();
        if (temp != '(') parsed.push(temp);
      }
      result = result.concat(parsed);
    } else {
      result.push(c);
    }
  });
  return result.join('');
}

console.log(decode('hola (odnum)'));
// => hola mundo
