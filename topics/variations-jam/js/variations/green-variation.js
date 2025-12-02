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

const thoughty = {
    x: 150,
    y: 200,
    w: 50,
    h: 150,
    speed: 1,

}

const thoughtx = {
    x: 0,
    y: 20,
    w: 100,
    h: 50,
    speed: 4,

}


let thoughtData = undefined;

function preload() {
    thoughtData = loadJSON("assets/data/thoughts.json")
}



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
    background(255);

    interface();
    egomovement();
    egomovementy()
    ego();
    thoughtsy();
    thoughtsx();
    resetthought();

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



function thoughtsx() {

    rect(thoughtx.x, thoughtx.y, thoughtx.w, thoughtx.h);
    thoughtx.x += thoughtx.speed;


    if (thoughtx.x > width) {
        resetthought();
    }

    if (thoughtx.y > width) {
        resetthought();
    }

}

function thoughtsy() {

    rect(thoughty.x, thoughty.y, thoughty.w, thoughty.h);
    thoughty.y += thoughty.speed;

    if (thoughty.y > height) {
        resetthought();
    }
}


function resetthought() {
    thoughty.y = -thoughty.h;
    thoughty.x = random(50, 1000);
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