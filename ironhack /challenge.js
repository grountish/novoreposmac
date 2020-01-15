const player = {
    x:1,
    y:1
};

function placeHorizontal(thePlayer, command) {
    if(thePlayer.y >= 0 && thePlayer.y < 2){
        if(command === "l"){
            thePlayer.y--;
        } else {
            thePlayer.y++;
        }
        
        console.log(`Player has position: x=${thePlayer.x}, y=${thePlayer.y}`);
        
     } else {
        console.log("You can't place player outside of the board!");
     }
}

placeHorizontal(player, "l");
placeHorizontal(player, "l");
placeHorizontal(player, "l");