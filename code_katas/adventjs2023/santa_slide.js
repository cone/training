function cyberReindeer(road, time) {
  const response = [];
  const barrierIndexes = [];
  let roadArray = road.split('')
  roadArray.forEach((c, i) => {
    if (c == "|") barrierIndexes.push(i);
  });

  for (let t = 1; t <= time; t++) {
    response.push([...roadArray].join(''));

    if (t == 5) roadArray = roadArray.map((c) => {
      if (c == "|") return "*";
      return c;
    });

    const slideIndex = roadArray.findIndex((c) => c == "S");
    if (roadArray[slideIndex + 1] != "|") {
      roadArray[slideIndex] = barrierIndexes.includes(slideIndex) ? "*" : ".";
      roadArray[slideIndex + 1] = "S";
    }
  }
  return response;
}

console.log(cyberReindeer('S..|...|..', 10));
