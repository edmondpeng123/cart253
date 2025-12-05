

// let c; let size = 100;

let cols; let rows;

let spacing = 20;
let scl = 0.15;
let size = [];
let points = 0;

let gamelose = false;

var screen = "start";

let ethosblob = {

    x: 500,
    y: 350,
    w: 500,
    h: 350

}

const introtitle = 'Design ethos? Where?'

const ethostext = `







Objective: Find your design ethos with the mouse

Click anywhere to Start          (3)Back to Menu

Have you found your design ethos? 
Where do you see yourself in 2.5 years?
Where do you see yourself in 5 years?
Where do you see yourself in 10 years?
What is your purpose in this program?
What is your purpose for life?


`




function redSetup() {


    createCanvas(1000, 700);

    // rectMode(CENTER);

    //     cols = width/spacing;
    //     rows = height/spacing;



    // c = new Circle(width/2, height/2, 0, 0);

}


function redDraw() {
    background(0);

    if (screen === "start") {
        intro()
        //setting up the start screen into the main game screen and the end screen
    }
    else if (screen === "main") {
        mainsearch()

    } else if (screen === "end") {
        endlose()
    }

    if (gamelose) {
        endlose();
        return;
    }



    walls();

    // let distance = dist(mouseX, mouseY, c.x, c.y);
    // c.dh = distance;
    // c.dw = distance;
    // c.display();

    // let distance = dist(mouseX, mouseY, width/2, height/2);

    // stroke(0);
    // strokeWeight(1);

    // fill(255);
    // ellipse(width/2, height/2, 100,100)
    // fill(0);
    // ellipse(width/2, height/2, distance/2, distance)


}

function intro() {
    whichscreen === "start"
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
    text(introtitle, width / 4, height / 2.6);
    pop();


    push();
    fill(0);
    noStroke();
    textFont(subfont);
    textSize(12);
    textAlign(LEFT, CENTER);
    text(ethostext, width / 4, height / 1.9);
    pop();


    if (mouseIsPressed) {
        screen = "main"
    }
}

function mainsearch() {

    ethoshide();
    grid();
    // resetethos();
    pointshow();
    mousePressed();


}



function walls() {

    push();
    noFill();
    stroke(0);
    strokeWeight(1.6);
    rect(width / 2, height / 2, width, height);
    pop();

}

function ethoshide() {
    rectMode(CENTER);

    push();
    stroke(255);
    strokeWeight(1);
    noFill();
    rect(ethosblob.x, ethosblob.y, ethosblob.w/4, ethosblob.h/8);
    pop();

    push();
    fill(255);
    text("purpose", ethosblob.w, ethosblob.h);
    textAlign(CENTER, CENTER);
    pop();

}

function grid() {


    rectMode(CENTER);

    cols = width / spacing;
    rows = height / spacing;

    for (let i = 0; i < cols; i++) {
        size[i] = [];
        for (let j = 0; j < rows; j++) {
            size[i][j] = (dist(mouseX, mouseY, spacing / 2 + i * spacing, spacing / 2 + j * spacing)) * scl;
        }
    }



    //creating a grid from columns and rows
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            fill(255);
            // noStroke();
            rect(spacing / 2 + i * spacing, spacing / 2 + j * spacing, size[i][j], size[i][j])
        }
    }


}

function resetethos() {
ethosblob.x = random(50,900)
ethosblob.y = random(50,600)
}

function pointshow() {
    push();
    fill(255);
    rect(width / 2, 60, width/8, 30);
    pop();

    push();
    fill(0);
    noStroke();
    text("Points: " + points, width / 2, 60);
    pop();
}

function mousePressed() {

    if (
        mouseX > ethosblob.x &&
        mouseX < ethosblob.x + ethosblob.w / 7 &&
        mouseY > ethosblob.y &&
        mouseY < ethosblob.y + ethosblob.h / 11
    ) {
        resetethos();
        points++;
    }
}







function redKeyPressed(event) {
    if (event.keyCode === 51) {
        state = "menu";
    }
}

/**
 * This will be called whenever the mouse is pressed while the red variation is active
 */
function redMousePressed() {

}