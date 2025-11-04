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

//setting up the starting screen
var whichscreen = "start"

//setting up the gameover screen to false, so that we can make it true and trigger it
let gameOver = false;
let score = 0;


// Our frog
const frog = {
    // The frog's body has a position and size
    body: {
        x: 320,
        y: 700,
        size: 120,
        width: 10,
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


//special speedy rare bee will fly horizontally and give more points
const bee = {
    x: 20,
    y: 200, // Will be random
    size: 20,
    speed: 9,
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
resetBee();
    resetLog();

}

function draw() {

    if (whichscreen === "start") {
    startScreen()

  } else if (whichscreen === "maingame") {
    mainGame()

  } else {
    endScreen()
  }

}

function startScreen() {
    background("#90cec3ff");

textSize(80);
     textStyle(BOLD);
    textAlign(CENTER, CENTER);
    fill("#ac4d4dff");
    text("The Frog Feast", width/2, height/3.5);



    textSize(40);
     textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text("Click To Start!", width/2, height/2);

     textSize(20);
     textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text("Eat the flies, avoid the logs and enjoy the feast!", width/2, height/1.75);




 drawFly(firstFly);
    moveFly(firstFly);
     buzzFly(firstFly);
     checkTongueFlyOverlap(firstFly);
    moveFrog();
    moveTongue();
    drawFrog();
    

    if (mouseIsPressed) {
        whichscreen = "maingame"
}


}

function mainGame() {

     background("#90cec3ff");
     moveFly(firstFly);
    moveFly(secondFly);
    moveFly(thirdFly);
    moveLog();
    moveBee();
    drawBee();
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
    checkTongueBeeOverlap();
    logKills();
    displayUI();

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

function moveBee() {
    // Move the fly
    bee.x += bee.speed;

       if (bee.x > width) {
        resetBee();
    }

    if (bee.y > width) {
        resetBee();
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
 * added little wings on them
 */
function drawFly(fly) {
    push();
    noStroke();
  

     fill("#d2d5c8ff");
    ellipse(fly.x + 20, fly.y, fly.size + 10);
      ellipse(fly.x - 20, fly.y, fly.size + 10);

        fill("#000000ff");
    ellipse(fly.x, fly.y, fly.size);


    pop();
}


//draw the bee with its wings
function drawBee() {

    push();
    noStroke();

     fill("#d2d5c8ff");
    ellipse(bee.x + 20, bee.y, bee.size + 10);
      ellipse(bee.x - 20, bee.y, bee.size + 10);

        fill("#ffd343ff");
    ellipse(bee.x, bee.y, bee.size);

    pop();

}

//Draws the log as a brown rectangle
function drawLog() {
    push();
    noStroke();
    fill("#473535ff");
    rect(log.x, log.y, log.w, log.h);

    fill("#9f9f71ff");
ellipse(log.x + 30, log.y, 61)

   fill("#473535ff");
ellipse(log.x + 30, log.y + 140, 61)

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

function resetBee() {
    bee.x = 0;
    bee.y = random(20, 120);
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

    frog.tongue.x = mouseX;


    // If the tongue is idle, it doesn't do anything
    if (frog.tongue.state === "idle") {
        // Do nothing
        frog.tongue.x = frog.body.x;
        frog.tongue.y = frog.body.y
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
        score += 1;
        //make the frog grow a little bigger as it eats the flies
        frog.body.size += 1;

        //make the logs go faster little by little as you eat more flies
          log.speed += 0.1;

    }
}

function checkTongueBeeOverlap() {
    // Get distance from tongue to bee
    const d = dist(frog.tongue.x, frog.tongue.y, bee.x, bee.y);
    // Check if it's an overlap
    const eaten = (d < frog.tongue.size / 2 + bee.size / 2);
    if (eaten) {
        // Reset the bee
        resetBee();
        // Bring back the tongue
        frog.tongue.state = "inbound";
          score += 5;

          //make the tongue grow even bigger when frog eats magical gold bee
          frog.tongue.size += 3;
        
    }
}

// function gameFast() {

//     if(score) === 20 {

//     }
// }


function logKills() {

    //get distance from log to frog
    const e = dist(frog.body.x, frog.body.y, log.x, log.y);

    const touch = (e < frog.body.size / 2 + log.size / 2);

    if (touch) {
        lose();
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



function lose() {
  gameOver = true;
}

function displayUI() {
  if (gameOver) {
    push();
    textSize(48);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text("Froggy went to frog heaven...", width/2, height/3);
    pop();
  }
  displayScore();
}

function displayScore() {
  push();
  textSize(32);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);

    
  text(floor(score), width/1.1 , height/12);
  pop();
}
