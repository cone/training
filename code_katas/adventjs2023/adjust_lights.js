function adjustLights(lights) {
  const checkLights = (control) => (toChange, light) => {
    if (light !== control) toChange++;
    control = control == '🟢' ? '🔴' : '🟢';
    return toChange;
  }
  const forwardCount = lights.reduce(checkLights(lights[0]), 0);
  const lastLight = lights[lights.length - 1];
  const backwardCount = lights.reverse().reduce(checkLights(lastLight), 0);
  return Math.min(forwardCount, backwardCount);
}

console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])); // => 1
console.log(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])); // => 2
console.log(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])); // => 0
console.log(adjustLights(['🔴', '🔴', '🔴'])); // => 1
console.log(adjustLights(["🔴", "🔴", "🟢", "🔴", "🟢"])); // => 1
