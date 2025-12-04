

// let c; let size = 100;

function redSetup() {


    createCanvas(1000, 700);

    // c = new Circle(width/2, height/2, 0, 0);

}

function walls() {
    stroke(0);
    strokeWeight(1.6);
    rect(width/2, height/2, width, height);


}

function redDraw() {
    background(255);
    

    walls();
    eyeballs();
    eyeballsside();
    eyeballsotherside();
    eyeballsbot();
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



function eyeballs() {

    let x = mouseX + 5;
    let y = 0;
    let diameter = 40;

    let numCircles = map(mouseY, 0, height, 0, 15);

    for (let i = 0; i < numCircles; i++) {

        ellipse(x, y, diameter);

        ellipse(x + 40, y + 10, diameter + 10);


        ellipse(x + 80, y + 50, diameter + 2);
        ellipse(x + 120, y + 5, diameter + 30);
        ellipse(x + 160, y + 2, diameter + 15);
        ellipse(x + 200, y + 25, diameter + 5);

        ellipse(x + 240, y, diameter);
        ellipse(x + 340, y + 10, diameter + 10);
        ellipse(x + 280, y + 50, diameter + 2);
        ellipse(x + 300, y + 5, diameter + 30);
        ellipse(x + 400, y + 2, diameter + 15);
        ellipse(x + 440, y + 25, diameter + 5);

        y += diameter;
    }
}


function eyeballsbot() {

    let x = mouseX + 5;
    let y = 1000;
    let diameter = 40;

    let numCircles = map(mouseY, 0, height, 0, 15);

    for (let i = 0; i < numCircles; i++) {

        ellipse(x, y, diameter);
        ellipse(x + 40, y + 10, diameter + 10);
        ellipse(x + 80, y + 50, diameter + 2);
        ellipse(x + 120, y + 5, diameter + 30);
        ellipse(x + 160, y + 2, diameter + 15);
        ellipse(x + 200, y + 25, diameter + 5);

        ellipse(x + 240, y, diameter);
        ellipse(x + 340, y + 10, diameter + 10);
        ellipse(x + 280, y + 50, diameter + 2);
        ellipse(x + 300, y + 5, diameter + 30);
        ellipse(x + 400, y + 2, diameter + 15);
        ellipse(x + 440, y + 25, diameter + 5);

        y += diameter;
    }
}

function eyeballsside() {

    let x = 0;
    let y = mouseY + 5;
    let diameter = 40;

    let numCircles = map(mouseX, 0, height, 0, 15);

    for (let i = 0; i < numCircles; i++) {

        ellipse(x, y, diameter);
        ellipse(x + 10, y + 40, diameter + 10);
        ellipse(x + 50, y + 80, diameter + 2);
        ellipse(x + 5, y + 120, diameter + 30);
        ellipse(x + 2, y + 160, diameter + 15);
        ellipse(x + 25, y + 200, diameter + 5);

        ellipse(x, y, diameter);
        ellipse(x + 10, y + 240, diameter + 10);
        ellipse(x + 50, y + 280, diameter + 2);
        ellipse(x + 5, y + 320, diameter + 30);
        ellipse(x + 2, y + 360, diameter + 15);
        ellipse(x + 25, y + 400, diameter + 5);

        x += diameter;
    }
}



function eyeballsotherside() {

    let x = 700;
    let y = mouseY + 5;
    let diameter = 40;

    let numCircles = map(mouseX, 0, height, 0, 15);

    for (let i = 0; i < numCircles; i++) {

        ellipse(x, y, diameter);
        ellipse(x + 10, y + 40, diameter + 10);
        ellipse(x + 50, y + 80, diameter + 2);
        ellipse(x + 5, y + 120, diameter + 30);
        ellipse(x + 2, y + 160, diameter + 15);
        ellipse(x + 25, y + 200, diameter + 5);

        ellipse(x, y, diameter);
        ellipse(x + 10, y + 240, diameter + 10);
        ellipse(x + 50, y + 280, diameter + 2);
        ellipse(x + 5, y + 320, diameter + 30);
        ellipse(x + 2, y + 360, diameter + 15);
        ellipse(x + 25, y + 400, diameter + 5);

        x += diameter;
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