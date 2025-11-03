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
        size: 120,
        width: 10
    },
    // The frog's tongue has a position, size, speed, and state
    tongue: {
        x: undefined,
        y: 480,
        size: 40,
        speed: 20,
        // Determines how the tongue moves each frame
        state: "idle" // State can be: idle, outbound, inbound
    }
};

// Our fly
// Has a position, size, and speed of vertical movement
const firstFly = {
    x: 20,
    y: 200, // Will be random
    size: 20,
    speed: 3,
    buzziness: 2
};

//second fly that will go in different speed, also different size
const secondFly = {
    x: 20,
    y: 200, // Will be random
    size: 30,
    speed: 2.5,
    buzziness: 3
};

//third fly that will go in different speed, also different size
const thirdFly = {
    x: 20,
    y: 200, // Will be random
    size: 15,
    speed: 5,
    buzziness: 4
};


//this is a log
//has similar position and speed to the fly, but it's rectangular
const log = {
    x: 20,
    y: 200,
    w: 60,
    h: 150,
    speed: 4
}

/**
 * Creates the canvas and initializes the fly
 */
function setup() {
    createCanvas(900, 700);

    // Give the fly its first random position
    resetFly(firstFly);
     resetFly(secondFly);
      resetFly(thirdFly);
    resetLog();
}

function draw() {
    background("#90cec3ff");
    moveFly(firstFly);
    moveFly(secondFly);
    moveFly(thirdFly);
    moveLog();
    drawFly(firstFly);
    drawFly(secondFly);
    drawFly(thirdFly);
    buzzFly(firstFly);
    buzzFly(secondFly);
    buzzFly(thirdFly);
    drawLog();
    moveFrog();
    moveTongue();
    drawFrog();
    checkTongueFlyOverlap(firstFly);
    checkTongueFlyOverlap(secondFly);
    checkTongueFlyOverlap(thirdFly);
}

/**
 * Moves the fly according to its speed
 * Resets the fly if it gets all the way to the bottom
 */
function moveFly(fly) {
    // Move the fly
    fly.y += fly.speed;
    // Handle the fly going off the canvas
    if (fly.x > width) {
        resetFly(fly);
    }

    if (fly.y > width) {
        resetFly(fly);
    }
}


//gave the flies a little buzz to destabilize the frog
function buzzFly(fly) {
     fly.x += random(-fly.buzziness, fly.buzziness);
    fly.y += random(-fly.buzziness, fly.buzziness);
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
function drawFly(fly) {
    push();
    noStroke();
    fill("#000000ff");
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

//resets the log to the top with a random x, the y is negative because log is long so it needs to smooth in the frame...
function resetLog() {
    log.y = -80;
    log.x = random(50, 700);
}

/**
 * Resets the fly to the top with a random x
 */
function resetFly(fly) {
    fly.y = 0;
    fly.x = random(100, 600);
}

/**
 * Moves the frog smoothly on the x axis by pressing on the left/right arrow, also stops it when it reaches the sides of the canva
 */
function moveFrog() {

    if (keyCode === LEFT_ARROW) {
        frog.body.x -= 6;
    } else if (keyCode === RIGHT_ARROW) {
        frog.body.x += 6;
    }

    if (frog.body.x > (width - frog.body.size / 2)) {
        frog.body.x -= 6;
    } else if (frog.body.x < (0 + frog.body.size / 2)) {
        frog.body.x += 6;
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
    fill("#ac4d4dff");
    noStroke();
    ellipse(frog.tongue.x, frog.tongue.y, frog.tongue.size);
    pop();

    // Draw the rest of the tongue
    push();
    stroke("#ba4848ff");
    strokeWeight(frog.tongue.size);
    line(frog.tongue.x, frog.tongue.y, frog.body.x, frog.body.y);
    pop();

    // Draw the frog's body 
    //draw the frog's eyeballs
    push();
    fill("#003e1cff");
    noStroke();
    ellipse(frog.body.x, frog.body.y, frog.body.size);
    ellipse(frog.body.x + 45, frog.body.y - 20, frog.body.size - 30)
    ellipse(frog.body.x - 45, frog.body.y - 20, frog.body.size - 30)

     fill("#dce3b1ff");
     ellipse(frog.body.x + 52, frog.body.y - 40, frog.body.size - 60)
      ellipse(frog.body.x - 52, frog.body.y - 40, frog.body.size - 60)


          fill("#000000ff");
        ellipse(frog.body.x + 52, frog.body.y - 50, frog.body.size - 80)
      ellipse(frog.body.x - 52, frog.body.y - 50, frog.body.size - 80)

       fill("#ffffffff");
            ellipse(frog.body.x + 44, frog.body.y - 50, frog.body.size - 110)
      ellipse(frog.body.x - 60, frog.body.y - 50, frog.body.size - 110)
    pop();
}

/**
 * Handles the tongue overlapping the fly
 */
function checkTongueFlyOverlap(fly) {
    // Get distance from tongue to fly
    const d = dist(frog.tongue.x, frog.tongue.y, fly.x, fly.y);
    // Check if it's an overlap
    const eaten = (d < frog.tongue.size / 2 + fly.size / 2);
    if (eaten) {
        // Reset the fly
        resetFly(fly);
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

