

// let c; let size = 100;

function redSetup() {

    createCanvas(1000, 700);

    // c = new Circle(width/2, height/2, 0, 0);

}

function walls() {
 stroke(0);
    strokeWeight(1.6);
    rect(0, 0, width, height);


}

function redDraw() {
background(255);

walls();
eyeballs();

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

ellipse(x,y, diameter);


y += diameter;
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