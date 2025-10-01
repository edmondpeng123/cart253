/**
 * YOU LOSE TITLE
 * Edmond Peng and AHMAD Alrazzaz
 * 
 * if you move anything you lose game
 */

"use strict";

//current score
let score = 0;

// Is the game over?
let gameOver = false;

let startingmouseX;
let startingmouseY;

/**
 * canvas and x and y
*/
function setup() {
createCanvas(400, 400);

startingmouseX = mouseX;
startingmouseY = mouseY;

}


/**
 *update the score and display the UI
*/
function draw() {


    background("#87ceeb");
  
  // Only increase the score if the game is not over
  if (!gameOver) {
    // Score increases relatively slowly
    score += 0.05;
  }
  displayUI();
  checkForInput();
}

//show the game over if needed

function displayUI() {
  if (gameOver) {
    push();
    textSize(48);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text("You lose!", width/2, height/3);
    pop();
  }
  displayScore();
}

/**
 * Display the score
 */
function displayScore() {
  push();
  textSize(48);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(floor(score), width/2, height/2);
  pop();
}


function checkForInput() {
if (
    keyIsPressed ||
    mouseIsPressed ||
    mouseX !== startingmouseX ||
    mouseY !== startingmouseY
  ) {
    lose();
    }

  document.addEventListener("visibilitychange", () => {
    lose();
  });

  if (!document.hasFocus()) {
    lose();
  }

  addEventListener("online", (event) => { lose(); })
  addEventListener("offline", (event) => { lose(); })
}

function lose() {
  gameOver = true;
}
