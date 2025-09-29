/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/


const puck = {
    x: 200,
    y: 200,
    size: 100,
    fill: "#ff0000",

    fills: {
        noOverlap: "#ff0000", // red for no overlap
        overlap: "#00ff00" // green for overlap
    }
};

const user = {
    x: undefined, // will be mouseX
    y: undefined, // will be mouseY
    size: 75,
    fill: "#000000"
};


const target = undefined
/**
 * Create the canvas
 */
const d = dist(user.x, user.y, puck.x, puck.y);
  // Check if that distance is smaller than their two radii, 
  // because if it is, they are overlapping by the amazing
  // power of geometry!
  const overlap = (d < user.size/2 + puck.size/2);
  // Set fill based on whether they overlap
  if (overlap) {
    puck.fill = puck.fills.overlap;
  }
  else {
    puck.fill = puck.fills.noOverlap;
  }
  
  // Draw the two circles
  push();
  noStroke();
  fill(targetCircle.fill);
  ellipse(targetCircle.x, targetCircle.y, targetCircle.size);
  pop();
  
  push();
  noStroke();
  fill(userCircle.fill);
  ellipse(userCircle.x, userCircle.y, userCircle.size);
  pop();





function setup() {
    createCanvas(400, 400);
}

/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
    background("#aaaaaa");

    // Move user circle
    moveUser();

    // Draw the user and puck
    drawUser();
    drawPuck();
    movePuck();
    drawTarget();
    checkTarget();
}

/**
 * Sets the user position to the mouse position
 */
function moveUser() {
    user.x = mouseX;
    user.y = mouseY;
}

/**
 * Displays the user circle
 */
function drawUser() {
    push();
    noStroke();
    fill(user.fill);
    ellipse(user.x, user.y, user.size);
    pop();
}

/**
 * Displays the puck circle
 */
function drawPuck() {
    push();
    noStroke();
    fill(puck.fill);
    ellipse(puck.x, puck.y, puck.size);
    pop();
}

function movePuck() {



}

function drawTarget() {


}

function checkTarget() {


}