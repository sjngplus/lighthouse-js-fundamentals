
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = "redness";

const judgeVegetable = function(vegetables, metric) {
  let maxScore = 0;
  let index;
  for (let i = 0; i < vegetables.length; i++) {
    if (maxScore < vegetables[i][metric]) {
      maxScore = vegetables[i][metric];
      index = i;
    }    
  }
  return vegetables[index].submitter;  
}


//judgeVegetable(vegetables, metric);
console.log(judgeVegetable(vegetables, metric));