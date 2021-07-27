const range = function(start, end, step) {
  let array = [];
  
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
    return array;
  }
  else {
    array.push(start);

    let nextNum = start + step;

    while (nextNum <= end) {
      array.push(nextNum);
      nextNum = nextNum + step;
    }
    return array;
  }  
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));