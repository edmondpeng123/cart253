

const titleText = `
Being Self-Taught : Counter-intuitive Software

1. Left/Right/Up/Bottom arrows to move
2. S/A keys to modify stroke
3. E/R keys to leave trails on X/Y value          (2)Back to Menu
`

const titlelogo = `
Microsoft (Pain)t
`



//created our little character
let yourself = {
    x: 500,
    y: 350,
    size: 30,
    // fill: "#000000",
};



function blueSetup() {

    rectMode(CENTER);
    createCanvas(1000, 700);
    stroke(0);
    strokeWeight(1.6);
    rect(width/2, height/2, width, height);


}



//instructions sidebar with texts
function sidebar() {

push();
 stroke(0);
    strokeWeight(1);
    rect(10, 10, width, height / 4);
pop();
    push();
    noStroke();
    textFont(subfont);
    textSize(12);
    textAlign(LEFT, CENTER);
    text(titleText, width/54, 48);
    pop();

 push();
    noStroke();
    textFont(titlefont);
    textSize(20);
    textAlign(LEFT, CENTER);
    text(titlelogo, width/1.23, 20);
    pop();





}
/**
 * This will be called every frame when the blue variation is active
 */
function blueDraw() {




  
    you();
    youmovement();
    yousize();
    yourandomspacex();
    yourandomspacey();
    sidebar();
}

//making the initial ball
function you() {

    stroke(0);
    strokeWeight(1.2);
    ellipse(yourself.x, yourself.y, yourself.size)
}


//to make yourself move with the arrows

function youmovement() {

    if (keyIsPressed) {
        if (keyCode == 38) {
            yourself.y -= 4;
        } else if (keyCode == 40) {
            yourself.y += 4;
        }

        if (keyCode == 37) {
            yourself.x -= 4;
        } else if (keyCode == 39) {
            yourself.x += 4;
        }

    }


}

//if press s or d, will change the size of the stroke; bigger or smaller
function yousize() {

    if (keyIsPressed) {
        if (keyCode == 83) {
            yourself.size += 2;

        } else if (keyCode == 65) {
            yourself.size -= 2;
        }
    }
}
//if press 'r', with create circles at random spots in x value as well as change continuation of the stroke on x
function yourandomspacex() {
    if (keyIsPressed) {
        if (keyCode === 82) {
            yourself.x = random(0, 1000)
        }
    }
}

//if press 'e', with create circles at random spots in y value as well as change continuation of the stroke on y
function yourandomspacey() {
    if (keyIsPressed) {
        if (keyCode === 69) {
            yourself.y = random(0, 700)
        }
    }
}







function blueKeyPressed(event) {
    if (event.keyCode === 50) {
        state = "menu";
    }
}

/**
 * This will be called whenever the mouse is pressed while the blue variation is active
 */
function blueMousePressed() {

}