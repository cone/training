function checkIsValidCopy(original, copy) {
  const DEGRADATIONS = ['#', '+', ':', '.', ' '];
  function isValidDegradation(origChar, copyChar) {
    if (
      /[a-zA-Z]/.test(origChar) &&
      DEGRADATIONS.includes(copyChar)
    ) return true;

    const charIndex = DEGRADATIONS.findLastIndex(deg => deg === origChar);
    const possibleDegradations = DEGRADATIONS.slice(charIndex + 1, DEGRADATIONS.length);
    return possibleDegradations.includes(copyChar);
  }
  const originalArr = original.split('');
  const copyArr = copy.split('');
  if (original.length !== copy.length) return false;

  return originalArr.every((char, index) => {
    const lowerChar = char.toLowerCase();
    if (
      char === copyArr[index] ||
      lowerChar === copyArr[index] ||
      isValidDegradation(char, copyArr[index])
    ) return true;
    return false;
  });
}

console.log(checkIsValidCopy('Santa Claus', 's#+:. c:. s')); // true
console.log(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')); // false
console.log(checkIsValidCopy('3 #egalos', '3 .+:# #:')); // true
