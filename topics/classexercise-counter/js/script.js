/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

// "use strict";

// /**
//  * OH LOOK I DIDN'T DESCRIBE SETUP!!
// */
// function setup() {

// }


// /**
//  * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
// */
// function draw() {

// }


"use strict";

// let carData = undefined;
// let dinosaurData = undefined;
// let langData = undefined;
// let lang = "fr";

// // Starts with the instruction
// let carName = "Click to generate a car name.";

let CELL_SIZE = 125;
let NUM_COLS = 4;
let NUM_ROWS = 4;
let currentMaze = null;
let jsonData;
let counter = 0;


/**
 * Load the car and dinosaur data
 */
// function preload() {

// }

/**
 * Create the canvas
*/

function preload() {

jsonData = loadJSON("assets/data/mazeClass.json")

}
function setup() {
    createCanvas(500, 500);
   // console.log(jsonData);

   //get first maze
    currentMaze = jsonData.mazes[0];
    console.log(currentMaze);
    NUM_COLS = currentMaze.length
    NUM_ROWS = currentMaze.length
    CELL_SIZE = width/currentMaze.length
}

/**
 * Display the current main text (either instructions or a car)
*/
function draw() {

    background(0);
        drawMaze();


}

    // push();
    // fill("pink");
    // textAlign(CENTER, CENTER);
    // textSize(32);
    // text(carName, width / 2, height / 2);
    // pop();


function drawMaze() {
    for(let i=0; i<NUM_COLS; i++) {
for(let j=0; j<NUM_ROWS; j++) {
    // 2d array
    if(currentMaze[i][j] === 1) {

    }
    drawCell(i,j);
}
    }
}


function drawCell(x,y) {
     fill('#FF0000');
    rectMode(CORNER);
    rect(x*CELL_SIZE, y*CELL_SIZE, CELL_SIZE, CELL_SIZE);
}

function mousePressed() {
    counter++;
    console.log(counter);
    currentMazeObject = jsonData.mazes[counter]
    currentMaze = currentMazeObject.maze;
}
/**
 * Generate a new car name
//  */
// function mousePressed() {

// }