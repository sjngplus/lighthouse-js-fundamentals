const smartGarbage = function(trash, bins) {
  bins[trash] = bins[trash] + 1
  return bins;
}

console.log(smartGarbage('compost', { waste: 4, recycling: 2, compost: 5 }));
