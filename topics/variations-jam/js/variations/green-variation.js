/**
 * This file contains the code to run *only* the green variation part of the program.
 * Note how it has its own draw, greenDraw(), and its own keyPressed, greenKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */


const egoman = {
    x: 20,
    y: 550,
    w: 50,
    h: 50,
    size: 20,

};

let egotext = "EGO"

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

function interface() {


    // createCanvas(1000, 700);
    // rectMode(CENTER);
 stroke(0);
    strokeWeight(1.6);
    rect(width/2, height/2, width, height);


}

//making the little character
function ego() {

    rectMode(CENTER);
    fill(0);
    rect(egoman.x, egoman.y, egoman.w, egoman.h);


    textAlign(CENTER, CENTER); // Center text horizontally and vertically

    fill(255);
    textFont(subfont);
    text(egotext, egoman.x + egoman.w/14, egoman.y - egoman.h/10);

}


/**
 * This will be called every frame when the green variation is active
 */
function greenDraw() {

    console.log(thoughtData);
    background(255);


     //setting up the start screen into the main game screen and the end screen
   if (whichscreen === "maingame") {
        mainGame()

    } else if (whichscreen == "endgame"){
        endScreen()
    }


    
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


function mainGame() {

whichscreen = "maingame";

     background(255);
     
     egomovement();
    egomovementy()
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
}


function egomovement() {

    if (keyIsPressed) {
        if (keyCode == 37) {
            egoman.x -= 6;
        } else if (keyCode == 39) {
            egoman.x += 6;
        }

    }

    //make the egoman stay within the width of the screen
    if (egoman.x > (1000 - egoman.w / 2)) {
        egoman.x -= 6;
    } else if (egoman.x < (egoman.w / 2)) {
        egoman.x += 6;
    }
}

function egomovementy() {

    if (keyIsPressed) {
        if (keyCode == 38) {
            egoman.y -= 6;
        } else if (keyCode == 40) {
            egoman.y += 6;
        }
    }
    if (egoman.y > (700 - egoman.h / 2)) {
        egoman.y -= 6;
    } else if (egoman.y < (egoman.h / 2)) {
        egoman.y += 6;
    }
}

function healthbar() {
    
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
let totalThoughts = 15; // quantity of thoughts popping up

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



        push();
        thoughtscollide(t);
         //fill(0);
        noStroke();
        text(t.text, t.x + t.w / 12, t.y + t.h / 14);
        textAlign(CENTER, CENTER);
        
        pop()
        // Make it fall from the side
        t.x += t.speed;

        // Reset when it goes off the screen
        if (t.x > width) {
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
        w: 300,
        h: random(20, 60),
        speed: random(1, 6),
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
		egoman.x - egoman.w/2 < t.x + t.w/2 &&
		egoman.x + egoman.w/2 > t.x - t.w/2 &&
		egoman.y - egoman.h/2 < t.y + t.h/2 &&
		egoman.y + egoman.h/2 > t.y - t.h/2

	){
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

