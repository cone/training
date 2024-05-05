function getIndexsForPalindrome(word) {
  const wordArr = word.split('');
  const isPalindrome = forward => {
    const backward = [...forward].reverse();
    return forward.join('') == backward.join('');
  }
  if (isPalindrome(wordArr)) return [];

  let response = null;
  for (let index = 0; index < wordArr.length; index++) {
    const current_char = wordArr[index];
    let temp = [];
    let tempIndex = 0;
    while (tempIndex < word.length) {
      temp = [...wordArr];
      const temp_char = temp[tempIndex];
      temp[index] = temp_char;
      temp[tempIndex] = current_char;
      if (isPalindrome(temp)) {
        response = [index, tempIndex];
        break;
      }
      tempIndex++;
    }
    if (response) return response;
  };

  return response;
}

console.log(getIndexsForPalindrome('anna')); // []
console.log(getIndexsForPalindrome('abab')); // [0, 1]
console.log(getIndexsForPalindrome('abac')); // null
console.log(getIndexsForPalindrome('aaababa')); // [1, 3]
console.log(getIndexsForPalindrome('rotaratov')); // [4, 8]
