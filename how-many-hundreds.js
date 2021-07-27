const howManyHundreds = function(bottles) {
  let remainder = bottles % 100;
  let container = (bottles - remainder) / 100;
  return container;
}


console.log(howManyHundreds(150));