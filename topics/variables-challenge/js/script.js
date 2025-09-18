/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";


let skyShade = {

  fill: {
    r: 4,
    g: 255,
    b: 255,
  }
}
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!

 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/




/**
 * Mr. Furious
 * Pippin Barr
 *
 * A guy who becomes visibly furious!
 */

"use strict";

// Our friend Mr. Furious

let mrFurious = {
  // Position and size
  x: 600,
  y: 600,
  size: 200,
  // Colour
  fill: {
    r: 152,
    g: 115,
    b: 90
  }
};

/**
 * Create the canvas
 */
function setup() {
  createCanvas(600, 600);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {

  skyShade.fill.b = skyShade.fill.b-1
   skyShade.fill.g = skyShade.fill.g-1
  background(skyShade.fill.r,skyShade.fill.g,skyShade.fill.b);

  mrFurious.fill.r = mrFurious.fill.r+1
  mrFurious.fill.g = mrFurious.fill.g-1
  mrFurious.fill.b = mrFurious.fill.b-1
  


  // Draw Mr. Furious as a coloured circle
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  ellipse(mrFurious.x/2, mrFurious.y/2, mrFurious.size);
  pop();
}

