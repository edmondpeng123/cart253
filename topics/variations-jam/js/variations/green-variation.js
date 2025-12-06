

let gameOver = false;

var whichscreen = "startgame";

//making the ego box
const egoman = {
    x: 500,
    y: 350,
    w: 40,
    h: 40,
    size: 20,

};

let egotext = "Ego";


//making the healthbar
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

Oh no!
You are mentally tapped out...
Please take some time to rest :-(


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


    //for loops for how many thoughts i want it to appear
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

     //setting up the start screen into the main game screen and the end screen
    if (whichscreen === "startgame") {
        startGame()
       
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
//if the healthbar drops to 0, you lose
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


    textAlign(CENTER, CENTER); // centering the text horizontally and vertically
    fill(255);
    textFont(subfont);
    text(egotext, egoman.x, egoman.y - 2.5);
    pop();
}

//making the startgame text and subtitles with instructions
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


//click anywhere ot start the game
    if (mouseIsPressed) {
        whichscreen = "maingame"
    }
}

function mainGame() {

    fill(255)

    //makes the background square
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

//endscreen with little text blops
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



//takes care of the arrow movements on the x value
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

//takes care of the arrow movements on the y value
function egomovementy() {

    if (keyIsPressed) {
        if (keyCode == 38) {
            egoman.y -= 3;
        } else if (keyCode == 40) {
            egoman.y += 3;
        }
    }
    //make the egoman stay within the height of the screen
    if (egoman.y > (700 - egoman.h / 2)) {
        egoman.y -= 4;
    } else if (egoman.y < (egoman.h / 2)) {
        egoman.y += 4;
    }
}



function healthbar() {


    //makes the border of healthbar
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
let totalThoughts = 35; // quantity of thoughts popping up

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
        speed: random(1, 5),
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

//takes care of the collision, calculating the distance of thought bubbles and egoman
function thoughtscollide(t) {

    //console.log(egoman.x - egoman.w / 2 < t.x + t.w / 2)
    if (
        egoman.x - egoman.w / 2 < t.x + t.w / 2 &&
        egoman.x + egoman.w / 2 > t.x - t.w / 2 &&
        egoman.y - egoman.h / 2 < t.y + t.h / 2 &&
        egoman.y + egoman.h / 2 > t.y - t.h / 2

    ) {

        //resets on collision and makes health bar drop by 20
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

