/**
 * This file contains the code to run *only* the green variation part of the program.
 * Note how it has its own draw, greenDraw(), and its own keyPressed, greenKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

/**
 * This will be called just before the green variation starts
 */
function greenSetup() {
  createCanvas(1000, 700);
    stroke(0);
    strokeWeight(1.6);
    rect(0, 0, width, height);


    fill(0);
    rect(0, 600, width, height );

}


/**
 * This will be called every frame when the green variation is active
 */
function greenDraw() {



 
}

/**
 * This will be called whenever a key is pressed while the green variation is active
 */
function greenKeyPressed(event) {
    if (event.keyCode === 49) {
        state = "menu";
    }
}

/**
 * This will be called whenever the mouse is pressed while the green variation is active
 */
function greenMousePressed() {

}