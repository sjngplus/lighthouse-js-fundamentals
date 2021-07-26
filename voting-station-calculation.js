const stations = [
  ['YMCA', 30, 'community centre'],
  ['Big Bear Donair', 25, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];


function chooseStations (stations) {

  let choosenStations = [];

  for (let i = 0; i < stations.length; i++) {

    if (stations[i][1] >= 20 && (stations[i][2] === "school" || stations[i][2] === "community centre")) {
      choosenStations.push(stations[i][0]);
    }  
  }

  return choosenStations;

}

console.log(chooseStations(stations));

