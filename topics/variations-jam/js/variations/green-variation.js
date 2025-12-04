/**
 * This file contains the code to run *only* the green variation part of the program.
 * Note how it has its own draw, greenDraw(), and its own keyPressed, greenKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

let gameOver = false;

var whichscreen = "startgame";

const egoman = {
    x: 500,
    y: 350,
    w: 40,
    h: 40,
    size: 20,

};

let egotext = "Ego";

const health = {
    x: 960,
    y: 20,
    w: 20,
    h: 200,
}

const rumititle = 'Rumination'

const rumitext = `







Objective: Maintain your mental health by dodging anxious thoughts 
(up/down/left/right arrows)

Click anywhere to Start                            (1)Back to Menu

POVs (Point of views)
1. You spent three weeks thinking of a concept and 
now you have two days to actually start working on your project.

2. You're trying to explain your concept to someone and 
you realize mid-speech how confusing and schizophrenic you sound.

3. You just presented your project and it went so bad that 
you're rethinking all of your social interactions.
`
const losetitle =  'Burnout'

const losetext = `

Oh no, you gave in to your anxiety.
You are mentally tapped out...
Please take some time to rest well :-(


Refresh to go back to Menu.
`

// const thoughty = {
//     x: 150,
//     y: 200,
//     w: 50,
//     h: 150,
//     speed: 1,

// }

// const thoughtx = {
//     x: 0,
//     y: 20,
//     w: 100,
//     h: 50,
//     speed: 4,

// }



/**
 * This will be called just before the green variation starts
 */
function greenSetup() {
    createCanvas(1000, 700);


    // rectMode(CENTER);

    thoughts = [];
    for (let i = 0; i < totalThoughts; i++) {
        thoughts.push(newThought());
    }



}



/**
 * This will be called every frame when the green variation is active
 */
function greenDraw() {

    console.log(thoughtData);
    background(255);

    if (whichscreen === "startgame") {
        startGame()
        //setting up the start screen into the main game screen and the end screen
    }
    else if (whichscreen === "maingame") {
        mainGame()

    } else if (whichscreen === "endgame") {
        endScreen()
    }

    if (gameOver) {
        endScreen();
        return;
    }

     if (health.h <= 0) {
        gameOver = true;
    }

    //    startGame();
    //     mainGame();
    //  endScreen();

    // egomovement();
    // egomovementy()
    // ego();
    // thoughtsdraw();
    // // thoughtscollide();
    // newThought();
    // // thoughtsy();
    // // thoughtsx();
    // // resetthought();
}


// function interface() {


//     // // createCanvas(1000, 700);
//     // // rectMode(CENTER);
//     // push();
//     // stroke(0);
//     // strokeWeight(1.6);
//     // rect(width / 2, height / 2, width, height);
//     // pop();

// }

//making the little character
function ego() {

    push();
    rectMode(CENTER);
    fill(0);
    rect(egoman.x, egoman.y, egoman.w, egoman.h);


    textAlign(CENTER, CENTER); // Center text horizontally and vertically
    fill(255);
    textFont(subfont);
    text(egotext, egoman.x, egoman.y - 2.5);
    pop();
}


function startGame() {
    whichscreen = "startgame";

    push();
    stroke(0);
    strokeWeight(1.6);
    rect(width / 2, height / 2, width, height);
    pop();

    push();
    fill(0);
    noStroke();
    textFont(titlefont);
    textSize(55);
    textAlign(LEFT, CENTER);
    text(rumititle, width / 4, height / 2.6);
    pop();


    push();
    fill(0);
    noStroke();
    textFont(subfont);
    textSize(12);
    textAlign(LEFT, CENTER);
    text(rumitext, width / 4, height / 1.9);
    pop();



    if (mouseIsPressed) {
        whichscreen = "maingame"
    }
}

function mainGame() {

    fill(255)

    push();
    stroke(0);
    strokeWeight(1.6);
    rect(width / 2, height / 2, width, height);
    pop();

    whichscreen = "maingame";

    // background(255);
    egomovement();
    egomovementy();
    healthbar();
    ego();
    thoughtsdraw();
    // thoughtscollide();
    newThought();
    // thoughtsy();
    // thoughtsx();
    // resetthought();
}

function endScreen() {
    whichscreen = "endgame";

    push();
    stroke(0);
    strokeWeight(1.6);
    rect(width / 2, height / 2, width, height);
    pop();

     push();
    fill(255);
    noStroke();
    textFont(titlefont);
    textSize(55);
    textAlign(LEFT, CENTER);
    text(losetitle, width / 4, height / 2.6);
    pop();

     push();
    fill(255);
    noStroke();
    textFont(subfont);
    textSize(12);
    textAlign(LEFT, CENTER);
    text(losetext, width / 4, height / 1.9);
    pop();


}




function egomovement() {

    if (keyIsPressed) {
        if (keyCode == 37) {
            egoman.x -= 3;
        } else if (keyCode == 39) {
            egoman.x += 3;
        }

    }

    //make the egoman stay within the width of the screen
    if (egoman.x > (1000 - egoman.w / 2)) {
        egoman.x -= 4;
    } else if (egoman.x < (egoman.w / 2)) {
        egoman.x += 4;
    }
}

function egomovementy() {

    if (keyIsPressed) {
        if (keyCode == 38) {
            egoman.y -= 3;
        } else if (keyCode == 40) {
            egoman.y += 3;
        }
    }
    if (egoman.y > (700 - egoman.h / 2)) {
        egoman.y -= 4;
    } else if (egoman.y < (egoman.h / 2)) {
        egoman.y += 4;
    }
}

function healthbar() {

  push();
  rectMode(CORNER);
    stroke(0);
    strokeWeight(1);
    rect(960, 20, 20, 200);
    pop();

    push();
     rectMode(CORNER);
    stroke(0);
    strokeWeight(1);
    fill(0)
    rect(health.x, health.y, health.w, health.h);
    pop();

  
}

// function thoughtsx() {

//     rect(thoughtx.x, thoughtx.y, thoughtx.w, thoughtx.h);
//     thoughtx.x += thoughtx.speed;


//     if (thoughtx.x > width) {
//         resetthought();
//     }

//     if (thoughtx.y > width) {
//         resetthought();
//     }

// }

// function thoughtsy() {

//     rect(thoughty.x, thoughty.y, thoughty.w, thoughty.h);
//     thoughty.y += thoughty.speed;

//     if (thoughty.y > height) {
//         resetthought();
//     }
// }


// function resetthought() {
//     thoughty.y = -thoughty.h;
//     thoughty.x = random(50, 1000);
// }
// const anxiety = thoughtData.anxiety;
let thoughts = [];
let totalThoughts = 30; // quantity of thoughts popping up

function thoughtsdraw() {

    rectMode(CENTER);
    //   background(220);

    for (let t of thoughts) {
        // rectMode(CENTER);
        push()
        // noFill();
        fill(255);
        // noStroke();
        stroke(0);
        strokeWeight(1);
        rect(t.x, t.y, t.w, t.h);
        pop();



        thoughtscollide(t);

        //fill(0);

        push();
        noStroke();
        textAlign(CENTER, CENTER);
        text(t.text, t.x, t.y);


        pop();
        // Make it fall from the side
        t.x += t.speed;

        // Reset when it goes off the screen
        if (t.x / 2 > width) {
            resetThought(t);
        }
    }

    // if (checkCollision()) {
    //   handleCollision(t);
    // }
}

function newThought() {

    // const anxiety = thoughtData.anxiety;

    return {
        x: random(50, width),
        y: random(50, height - 50), // start side of screen
        w: 250,
        h: 20,
        speed: random(1, 4),
        text: random(thoughtData.anxiety),
    };
}

function resetThought(t) {

    // const anxiety = thoughtData.anxiety;

    t.x = random(-200, -50);
    t.y = random(50, height - 50);
    t.text = random(thoughtData.anxiety);
}


// function checkCollision(a, b) {
//   return (
//     abs(a.x - b.x) < (a.w / 2 + b.w / 2) &&
//     abs(a.y - b.y) < (a.h / 2 + b.h / 2)
//   );
// }


// function handleCollision(t) {
//   resetThought(t);
// }


function thoughtscollide(t) {

    //console.log(egoman.x - egoman.w / 2 < t.x + t.w / 2)
    if (
        egoman.x - egoman.w / 2 < t.x + t.w / 2 &&
        egoman.x + egoman.w / 2 > t.x - t.w / 2 &&
        egoman.y - egoman.h / 2 < t.y + t.h / 2 &&
        egoman.y + egoman.h / 2 > t.y - t.h / 2

    ) {
        resetThought(t);
        health.h -= 20;
        console.log(t.text);
        fill(255, 0, 0) // Collision!
    } else {
        fill(0)
    }

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

