/**
 * This menu file contains the code to run *only* the menu part of the program.
 * Note how it has its own draw, menuDraw(), and its own keyPressed, menuKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

const menuTitle = `
Design of Anxiety
`

const menusubTitle = `
A playful web exploration on the experience of an anxious 
student getting through his Design degree while dealing
with different sorts of difficulties
`


const menuText = `


Overview

Click (1) to Start | Level_1: Imposter Syndrome
Click (2) to Start | Level_2: Being Self-Taught
Click (3) to Start | Level_3: Rumination

`

let thoughtData;
let titlefont;

function preload() {
    thoughtData = loadJSON("assets/data/thoughts.json");
    titlefont = loadFont('./assets/font/workbench.ttf');
    subfont = loadFont('./assets/font/spacemono.ttf')
}

/**
 * Display the main menu
 */
function menuDraw() {
    createCanvas(1000, 700);
    stroke(0);
    strokeWeight(2);
    rect(0, 0, width, height);




    push();
    fill(0);
    noStroke();
    textFont(titlefont);
    textSize(55);
    textAlign(LEFT, CENTER);
    text(menuTitle, width / 4, height / 2.6);
    pop();


    push();
    fill(0);
    noStroke();
    textFont(subfont);
    textSize(14);
    textAlign(LEFT, CENTER);
    text(menusubTitle, width / 4, height / 1.9);
    pop();


    push();
    fill(0);
    noStroke();
    textFont(subfont);
    textSize(14);
    textAlign(LEFT, CENTER);
    text(menuText, width / 4, height / 1.6);
    pop();



}

/**
 * Listen to the keyboard
 */
function menuKeyPressed(event) {
    switch (event.keyCode) {
        case 49:
            state = "green-variation";
            greenSetup();
            break;
        case 50:
            state = "blue-variation";
            blueSetup();
            break;
        case 51:
            state = "red-variation";
            blueSetup();
            break;

    }
}

/**
 * This will be called whenever the mouse is pressed while the menu is active
 */
function menuMousePressed() {

}