function naiveSearchOwn(str, searched) {
  let start = 0;
  let count = 0;

  for (let char of str) {
    if (char === searched[start]) {
      start++;
    } else {
      start = 0;
    }

    if (start === searched.length) {
      count++;
      start = 0;
    }
  }

  return count;
}

function naiveSearch(long, short) {
  let count = 0;

  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;

      if (j === short.length - 1) count++;
    }
  }

  return count;
}

console.log(naiveSearch("wowomgzomgomg", "omg"));
console.log(naiveSearch("deqpre", "qp"));
console.log(naiveSearch("lorie loled", "lol"));
