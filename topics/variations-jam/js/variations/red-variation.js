

// let c; let size = 100;

let cols; let rows;

let spacing = 20;
let scl = 0.15;
let size = []


function redSetup() {


    createCanvas(1000, 700);

rectMode(CENTER);

    cols = width/spacing;
    rows = height/spacing;

  

    // c = new Circle(width/2, height/2, 0, 0);

}


function redDraw() {
    background(0);
    
  for(let i=0; i<cols; i++) {
        size[i] = [];
        for(let j=0; j<rows; j++){
            size[i][j]= (dist(mouseX, mouseY, spacing/2 + i*spacing, spacing/2 + j*spacing))*scl;
        }
    }



    //creating a grid from columns and rows
    for(let i=0; i<cols; i++){
        for(let j=0; j<rows; j++){
            fill(255);
            // noStroke();
            rect(spacing/2 + i*spacing, spacing/2 + j*spacing, size[i][j], size[i][j])
        }
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

function walls() {

    push();
    noFill();
    stroke(0);
    strokeWeight(1.6);
    rect(width/2, height/2, width, height);
pop();

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