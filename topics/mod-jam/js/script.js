/**
 * Frogfrogfrog
 * Pippin Barr
 * 
 * A game of catching flies with your frog-tongue
 * 
 * Instructions:
 * - Move the frog with your mouse
 * - Click to launch the tongue
 * - Catch flies
 * 
 * Made with p5
 * https://p5js.org/
 */

"use strict";

// Our frog
const frog = {
    // The frog's body has a position and size
    body: {
        x: 320,
        y: 700,
        size: 150,
        width: 10
    },
    // The frog's tongue has a position, size, speed, and state
    tongue: {
        x: undefined,
        y: 480,
        size: 20,
        speed: 20,
        // Determines how the tongue moves each frame
        state: "idle" // State can be: idle, outbound, inbound
    }
};

// Our fly
// Has a position, size, and speed of vertical movement
const fly = {
    x: 20,
    y: 200, // Will be random
    size: 20,
    speed: 3
};

//this is a log
//has similar position and speed to the fly, but it's rectangular
const log = {
    x: 20,
    y: 200,
    w: 50,
    h: 100,
    speed: 4
}

/**
 * Creates the canvas and initializes the fly
 */
function setup() {
    createCanvas(900, 700);

    // Give the fly its first random position
    resetFly();
    resetLog();
}

function draw() {
    background("#87ceeb");
    moveFly();
    moveLog();
    drawFly();
    drawLog();
    moveFrog();
    moveTongue();
    drawFrog();
    checkTongueFlyOverlap();
}

/**
 * Moves the fly according to its speed
 * Resets the fly if it gets all the way to the bottom
 */
function moveFly() {
    // Move the fly
    fly.y += fly.speed;
    // Handle the fly going off the canvas
    if (fly.x > width) {
        resetFly();
    }

    if (fly.y > width) {
        resetFly();
    }
}

//moves the log according to its speed
//resets it if it goes beyond the bottom

function moveLog() {
    // Move the log vertically downwards
    log.y += log.speed;
    // Handle the log going off the canvas
    if (log.x > width) {
        resetLog();
    }

    if (log.y > width) {
        resetLog();
    }
}








/**
 * Draws the fly as a black circle
 */
function drawFly() {
    push();
    noStroke();
    fill("#000000");
    ellipse(fly.x, fly.y, fly.size);
    pop();
}

//Draws the log as a brown rectangle
function drawLog() {
    push();
    noStroke();
    fill("#473535ff");
    rect(log.x, log.y, log.w, log.h);
    pop();
}

function resetLog() {
    log.y = 0;
    log.x = random(50, 700);
}

/**
 * Resets the fly to the left with a random x
 */
function resetFly() {
    fly.y = 0;
    fly.x = random(100, 600);
}

/**
 * Moves the frog smoothly on the x axis by pressing on the left/right arrow, also stops it when it reaches the sides of the canva
 */
function moveFrog() {

    if (keyCode === LEFT_ARROW) {
        frog.body.x -= 5;
    } else if (keyCode === RIGHT_ARROW) {
        frog.body.x += 5;
    }

    if (frog.body.x > (width - frog.body.size / 2)) {
        frog.body.x -= 5;
    } else if (frog.body.x < (0 + frog.body.size / 2)) {
        frog.body.x += 5;
    }

}

/**
 * Handles moving the tongue based on its state
 */
function moveTongue() {
    // Tongue matches the frog's x

    frog.tongue.x = frog.body.x;


    // If the tongue is idle, it doesn't do anything
    if (frog.tongue.state === "idle") {
        // Do nothing
    }
    // If the tongue is outbound, it moves up
    else if (frog.tongue.state === "outbound") {
        frog.tongue.y += -frog.tongue.speed;
        // The tongue bounces back if it hits the top
        if (frog.tongue.y <= 0) {
            frog.tongue.state = "inbound";
        }
    }
    // If the tongue is inbound, it moves down
    else if (frog.tongue.state === "inbound") {
        frog.tongue.y += frog.tongue.speed;
        // The tongue stops if it hits the bottom
        if (frog.tongue.y >= height) {
            frog.tongue.state = "idle";
        }
    }
}

/**
 * Displays the tongue (tip and line connection) and the frog (body)
 */
function drawFrog() {
    // Draw the tongue tip
    push();
    fill("#ff0000");
    noStroke();
    ellipse(frog.tongue.x, frog.tongue.y, frog.tongue.size);
    pop();

    // Draw the rest of the tongue
    push();
    stroke("#ff0000");
    strokeWeight(frog.tongue.size);
    line(frog.tongue.x, frog.tongue.y, frog.body.x, frog.body.y);
    pop();

    // Draw the frog's body
    push();
    fill("#00ff00");
    noStroke();
    ellipse(frog.body.x, frog.body.y, frog.body.size);
    pop();
}

/**
 * Handles the tongue overlapping the fly
 */
function checkTongueFlyOverlap() {
    // Get distance from tongue to fly
    const d = dist(frog.tongue.x, frog.tongue.y, fly.x, fly.y);
    // Check if it's an overlap
    const eaten = (d < frog.tongue.size / 2 + fly.size / 2);
    if (eaten) {
        // Reset the fly
        resetFly();
        // Bring back the tongue
        frog.tongue.state = "inbound";
    }
}

/**
 * Launch the tongue on click (if it's not launched yet)
 */
function mousePressed() {
    if (frog.tongue.state === "idle") {
        frog.tongue.state = "outbound";
    }
}