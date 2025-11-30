/**
 * This file contains the code to run *only* the blue variation part of the program.
 * Note how it has its own draw, blueDraw(), and its own keyPressed, blueKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

/**
 * This will be called just before the blue variation starts
 */



//created our little character
let yourself = {
    x: 200,
    y: 200,
    size: 30,
    fill: "#000000",
};






function blueSetup() {
      createCanvas(1000, 700);
stroke(0);
strokeWeight(2);
rect(0, 0, width, height);

  

}

/**
 * This will be called every frame when the blue variation is active
 */
function blueDraw() {

    
    you();
    youmovement();
    yousize();
}



function you() {
   

    ellipse(yourself.x, yourself.y, yourself.size)
}


//to make yourself move with the arrows

function youmovement() {

if (keyIsPressed){
    if (keyCode == 38){
      yourself.y-=3;
    } else if (keyCode == 40){
      yourself.y+=3;
    }

     if (keyCode == 37){
      yourself.x-=3;
    } else if (keyCode == 39){
      yourself.x+=3;
    }
  
  }
  

}

function yousize() {

    if (keyIsPressed){
    if (keyCode == 83){
      yourself.size+=1;

} else if (keyCode == 65){
      yourself.size-=1;
    }
    }
}
    







function blueKeyPressed(event) {
    if (event.keyCode === 27) {
        state = "menu";
    }
}

/**
 * This will be called whenever the mouse is pressed while the blue variation is active
 */
function blueMousePressed() {

}