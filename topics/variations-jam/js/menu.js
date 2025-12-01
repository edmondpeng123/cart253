/**
 * This menu file contains the code to run *only* the menu part of the program.
 * Note how it has its own draw, menuDraw(), and its own keyPressed, menuKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

const menuTitle = `
Design of Anxiety
`


const menuText = `

(G) Imposter Syndrome

(B) Learning Softwares On Your Own`


let titlefont;

function preload() {
  titlefont = loadFont('./assets/font/workbench.ttf');
  subfont = loadFont('./assets/font/spacemono.ttf')
}

/**
 * Display the main menu
 */
function menuDraw() {
     createCanvas(1000, 700);
stroke(0);
strokeWeight(2);
rect(0, 0, width, height);




    push();
    fill(0);
    noStroke();
    textFont(titlefont);
    textSize(44);
    textAlign(CENTER, CENTER);
    text(menuTitle, width / 2, height / 2.2);
    pop();

 push();
    fill(0);
    noStroke();
    textFont(subfont);
    textSize(14);
    textAlign(CENTER, CENTER);
    text(menuText, width / 2, height / 1.6);
    pop();



}

/**
 * Listen to the keyboard
 */
function menuKeyPressed(event) {
    switch (event.keyCode) {
        case 71:
            state = "green-variation";
            greenSetup();
            break;

        case 66:
            state = "blue-variation";
            blueSetup();
            break;
    }
}

/**
 * This will be called whenever the mouse is pressed while the menu is active
 */
function menuMousePressed() {

}