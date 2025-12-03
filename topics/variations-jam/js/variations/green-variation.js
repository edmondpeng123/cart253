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


function interface() {

    createCanvas(1000, 700);
    stroke(0);
    strokeWeight(1.6);
    rect(0, 0, width, height);





}

/**
 * This will be called just before the green variation starts
 */
function greenSetup() {
    createCanvas(800, 600);
    // rectMode(CENTER);


    for (let i = 0; i < totalThoughts; i++) {
        thoughts.push(newThought());
    }
}

//making the little character
function ego() {

    fill(0);
    rect(egoman.x, egoman.y, egoman.w, egoman.h);


    textAlign(CENTER, CENTER); // Center text horizontally and vertically

    fill(255);
    textFont(subfont);
    text(egotext, egoman.x + egoman.w / 2, egoman.y + egoman.h / 2);

}


/**
 * This will be called every frame when the green variation is active
 */
function greenDraw() {

    console.log(thoughtData);
    background(255);
    interface();
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



function egomovement() {

    if (keyIsPressed) {
        if (keyCode == 37) {
            egoman.x -= 6;
        } else if (keyCode == 39) {
            egoman.x += 6;
        }

    }

    //make the egoman stay within the width of the screen
    if (egoman.x > (976 - egoman.w / 2)) {
        egoman.x -= 6;
    } else if (egoman.x < (-30 + egoman.w / 2)) {
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
    if (egoman.y > (680 - egoman.h / 2)) {
        egoman.y -= 6;
    } else if (egoman.y < (-30 + egoman.h / 2)) {
        egoman.y += 6;
    }
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
    //   background(220);

    for (let t of thoughts) {
        // rectMode(CENTER);
        push()
        noFill()
        // fill(255);
        noStroke();
        rect(t.x, t.y, t.w, t.h);
        pop();


        push()
         fill(0);
        noStroke();
        text(t.text, t.x + t.w / 2, t.y + t.h / 2);
        
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
        w: 150,
        h: random(80, 120),
        speed: random(1, 5),
        text: random(thoughtData.anxiety),
    };
}

function resetThought(t) {

    // const anxiety = thoughtData.anxiety;

    t.x = random(-200, -50);
    t.y = random(50, width - 50);
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


// function thoughtscollide(t) {

//     if (
// 		egoman.x - egoman.w/2 < t.x + t.w/2 &&
// 		egoman.x + egoman.w/2 > t.x - t.w/2 &&
// 		egoman.y - egoman.h/2 < t.y + t.h/2 &&
// 		egoman.y + egoman.h/2 > t.y - t.h/2

// 	){
//       fill(255, 0, 0) // Collision!
// 	} else {
//       fill(0)
//     }

// }




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

