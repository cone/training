// The minimum distance between indexes is "2" because they
// should not be adjacent e.g. [1,X,3] (the X represents an adjacent number).
//
// The maximum distance between indexes is "3" because leaving more
// space leaves out non adjacent numbers e.g. [1,X,X,4].
//
// So, considering a number "n" that belongs to the array "houses",
// we need to find "n + 2" and "n + 3" (it's a tree!!) and then do the same process
// for those numbers.
// Considering the example [9, 10, 9, 0, 9] we would end up with
// something like this for "houses[0]":
//     9
//    / \
//   9   0
//  /
// 9
//
// Then, as we skipped "10" because it is adjacent, we need to cover
// also the tree for for "houses[1]":
//     10
//    / \
//   0   9
//
// And that should cover all the possible combinations. Then we should
// return the maximum result of all combinations (Math.max()).

// The following recursive code worked but, it timed out
// (probably because it exceeded the call stack):

// function maxGifts(houses) {
//   const getSum = (currentIndex, housesArray, sum) => {
//     if (housesArray[currentIndex] == undefined) return 0;

//     const index1 = currentIndex + 2;
//     const index2 = currentIndex + 3;
//     if (index1 >= housesArray.length && index2 >= housesArray.length) {
//       return housesArray[currentIndex];
//     }

//     return sum += housesArray[currentIndex] + Math.max(
//       getSum(index1, housesArray, sum),
//       getSum(index2, housesArray, sum),
//     );
//   }

//   // const sums = [];
//   // houses.forEach((_, i) => {
//   //   return sums.push(getSum(i, houses, 0));
//   // });

//   return Math.max(
//     getSum(0, houses, 0),
//     getSum(1, houses, 0)
//   );
// }

// This also times out :'(
// function maxGifts(houses) {
//   const getSum = (currentIndex, housesArray) => {
//     let stack = [{
//       index: currentIndex,
//       value: housesArray[currentIndex]
//     }];
//     let hasChildren = true;
//     while (hasChildren) {
//       const tempStack = [];
//       let childrenCount = 0;
//       // console.log(`Temp stack length: ${tempStack.length} =============================`);
//       stack.forEach(obj => {
//         // console.log(`Obj index: ${obj.index}. Obj value: ${obj.value}`);
//         const leftIndex = obj.index + 2;
//         const rightIndex = obj.index + 3;
//         // console.log(`Left index: ${leftIndex}. Right index: ${rightIndex}`);
//         if (leftIndex < housesArray.length) {
//           tempStack.push({
//             index: leftIndex,
//             value: obj.value + housesArray[leftIndex]
//           });
//         }
//         if (rightIndex < housesArray.length) {
//           tempStack.push({
//             index: rightIndex,
//             value: obj.value + housesArray[rightIndex]
//           });
//         }
//         if (leftIndex >= housesArray.length && rightIndex >= housesArray.length) {
//           tempStack.push(obj);
//         } else {
//           childrenCount++;
//         }
//       });
//       stack = [...tempStack];
//       hasChildren = childrenCount > 0;
//     }
//     // console.log('===== Stack content:');
//     // stack.forEach(obj => {
//     //   console.log(`Index: ${obj.index}. Value: ${obj.value}`);
//     // });
//     const results = stack.map(obj => obj.value);
//     return Math.max(...results);
//   }

//   return Math.max(
//     getSum(0, houses),
//     getSum(1, houses)
//   );
// }

// Provided by chatGPT
function maxGifts(houses) {
  if (houses.length === 0) return 0;
  if (houses.length === 1) return houses[0];
  if (houses.length === 2) return Math.max(houses[0], houses[1]);

  let dp = new Array(houses.length);
  dp[0] = houses[0];
  dp[1] = Math.max(houses[0], houses[1]);

  for (let i = 2; i < houses.length; i++) {
      dp[i] = Math.max(dp[i-1], houses[i] + dp[i-2]);
  }

  return dp[houses.length - 1];
}

console.log(maxGifts([2, 4, 2])); // 4 (4)
console.log(maxGifts([5, 1, 1, 5])); // 10 (5 + 5)
console.log(maxGifts([4, 1, 1, 4, 2, 1])); // 9 (4 + 4 + 1)
console.log(maxGifts([1, 3, 1, 3, 100])); // 103 (3 + 100)
console.log(maxGifts([2, 7, 9, 3, 1])); // 12
console.log(maxGifts([9, 10, 9, 0, 9])); // 27
