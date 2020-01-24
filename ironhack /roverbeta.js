var rover1 = {
    name: "rover1",
    x:0,
    y:0,
    position: [1,1],
    direction: "N",
    travelLog: [],
    myTurn: true
};
var rover2 = {
    name: "rover2",
    x:0,
    y:9,
    position: [0,9],
    direction: "N",
    travelLog: [],
    myTurn: false
};
let grid = [
    ['rover1','X','','','','','','','','',],
    ['','','','','','','','X','','',],
    ['','','','','','','','','','',],
    ['','','','X','','','','','','',],
    ['','X','','','','','','X','','',],
    ['','','','','','','','','','',],
    ['','','','','','','','','','',],
    ['','','','','X','','','','','',],
    ['','','','','','','','','X','',],
    ['rover2','','','','','','','','','',],
]

let rovers = [rover1, rover2];
let roverArray = [rover1, rover2];
let direction = rovers[0].direction;
let position = rovers[0].position; 
let travel = rovers[0].travelLog;

rover = roverArray[0];


function turnLeft(rover){
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
    
    console.log(`the rover direction is: ${direction} `);
    console.log("turnLeft was called!");
}
  
function turnRight(rover){
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
    
    console.log(`the rover direction is: ${direction} `);
    console.log("turnRight was called!");
}
  
function moveForward(rover){
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
    //console.log(`the rover position is: ${position}`);
    console.log("moveForward was called")
} else {
    console.log("you can't move outside the map");
}
}
function moveBackward(rover){
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
    console.log("moveBackward was called");
} else {
    console.log("you can't move outside the map");
}
}
function command(rover,orders) {
    for (let i = 0; i < orders.length; i++) {
        let order = orders[i];

        
        if  (order !== "l" && order !== "f" && order !== "r" && order !== "b" ) {
            return ("Provide correct commands!");
        

        }   else {        
        switch (order) {
            case "l":
                turnLeft(rover);
                break;
            case "r":
                turnRight(rover);
                break;
            case "f":
                moveForward(rover);
                break;
            case "b":
                moveBackward(rover);
                break;
        }
    
    }

console.log(`${rover.name} has position x=${position[0]}, y=${position[1]}`);
travel.push(i + " the path is: " + position + " \n " );
}
console.log(travel); 

}

