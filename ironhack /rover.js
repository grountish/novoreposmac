let rover = {
  direction: ["N","S","E","W"],
  currentDirection: "N"
};


// ======================



// ======================
function turnLeft(rover){
    let newDirection = rover.currentDirection;
      switch(newDirection){
        case "N": 
          newDirection = "W";
          break;
        case "W": 
          newDirection = "S";
          break;  
        case "S": 
          newDirection = "E";
          break; 
        case "E": 
          newDirection = "N";
          break;
      }
      console.log(newDirection);
  console.log("turnLeft was called!");
}

function turnRight(rover){
  console.log("turnRight was called!");
}

function moveForward(rover){
  console.log("moveForward was called")
}
function goLeft(rover) {
    let pos = rover.currentDirection;
    if (pos === "N") {
        pos = rover.direction[3];
    } else if (pos === "W"){
        pos = rover.direction[1];
    } else if (pos ===   "S"){
        pos = rover.direction[2];
    } else {
        pos = rover.direction[0];
    }
    console.log(pos);
}
