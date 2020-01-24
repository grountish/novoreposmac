var roover = {
    position: [1,1],
    direction: "N",
    travelLog: []
  };
  
let direction = roover.direction;
let position = roover.position; 
let travel = roover.travelLog;

function turnLeft(roover){
    switch(direction) {
        case 'N':
          direction = "E";
          break;
        case 'E':
          direction = "S";
          break;
        case 'S':
          direction = "W";
          break;
        case 'W':
          direction = "N";
          break;
    }
    
    console.log(`the roover direction is: ${direction} `);
    console.log("turnLeft was called!");
}
  
function turnRight(roover){
    switch(direction) {
        case 'N':
          direction = "W";
          break;
        case 'W':
          direction = "S";
          break;
        case 'S':
          direction = "E";
          break;
        case 'E':
          direction = "N";
          break;
    }
    
    console.log(`the roover direction is: ${direction} `);
    console.log("turnRight was called!");
}
  
function moveForward(roover){
    if(position[0] >= 1 && position[0] <= 9 && position[1] >= 1 && position[1] <= 9){
    switch (direction) {
        case "N":
            position[1]++; 
            break;
        case "W":
            position[0]--; 
            break;
        case "S":
            position[1]--; 
            break;
        case "E":
            position[0]++; 
            break;   
    }
    //console.log(`the roover position is: ${position}`);
    console.log("moveForward was called")
} else {
    console.log("you can't move outside the map");
}
}
function moveBackward(roover){
    if(position[0] >= 1 && position[0] <= 9 && position[1] >= 1 && position[1] <= 9){
        
    switch (direction) {
        case "N":
            position[1]--; 
            break;
        case "W":
            position[0]++; 
            break;
        case "S":
            position[1]++; 
            break;
        case "E":
            position[0]--; 
            break;   
    }
    //console.log(`the roover position is: ${position}`);
    console.log("moveBackward was called");
} else {
    console.log("you can't move outside the map");
}
}
function command(roover,orders) {
    for (let i = 0; i < orders.length; i++) {
        let order = orders[i];
        
        if  (order !== "l" && order !== "f" && order !== "r" && order !== "b" ) {
            //console.log;
            return ("Provide correct commands!");

        }   else {        
        switch (order) {
            case "l":
                turnLeft(roover);
                break;
            case "r":
                turnRight(roover);
                break;
            case "f":
                moveForward(roover);
                break;
            case "b":
                moveBackward(roover);
                break;
        }
        

        
    }

console.log(`roover has position x=${position[0]}, y=${position[1]}`);
travel.push(i-- + " the path is: " + position + " \n " );

}
console.log(travel); 

}
