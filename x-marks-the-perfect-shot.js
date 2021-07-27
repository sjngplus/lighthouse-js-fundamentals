
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

const finalPosition = function (moves) {  
  let x = 0;
  let y = 0;  

  for (let i = 0; i < moves.length; i++) {
    
    console.log (moves[i]);

    switch (moves[i]) {
    case "north":
      y = y + 1;
      break;
    case "south":
      y = y - 1;
      break;
    case "east":
      x = x + 1;
      break;
    case "west":
      x = x - 1;
      break;
    default:
      console.log("Error: not a valid move");
    }

    //console.log (x,y);    
  }

  let coordinates = [x,y];
  return coordinates;
}

console.log(finalPosition(moves));