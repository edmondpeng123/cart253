


function redSetup() {

    createCanvas(1000, 700);
    stroke(0);
    strokeWeight(1.6);
    rect(0, 0, width, height);


}


function redDraw() {
    
}


//to make yourself move with the arrows








function redKeyPressed(event) {
    if (event.keyCode === 51) {
        state = "menu";
    }
}

/**
 * This will be called whenever the mouse is pressed while the blue variation is active
 */
function redMousePressed() {

}