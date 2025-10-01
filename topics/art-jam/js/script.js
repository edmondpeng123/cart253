/**
 * Mirror of Fragments
 * Edmond Peng
 * 
 * 
 * I want to make several petal shaped forms (fragment) all rotating around a circle; each petal shaped form will be an image 
 * that is associated with my own perception of the self whether it be physical, psychological or anything visually or 
 * emotionally represented. They will all rotate at different rhythms and overlap one another. When you move your mouse to a fragment, 
 * it will make it grow bigger so that you can observe better but it will start to blur until it becomes indistinguishable. The petals
 * is a visual representation of different facets of my individual although not directly referencing them; they flow in fluctuating
 * rhythms to highlight its ever-changing quality and they all rotate around an invisible circle which represents the core/soul.
 * The blurred effect of holding unto a petal is to replicate the ephemeral and, again, ever-changing quality of how I may
 * associate things/body/ideas to my being, but may also lose them over time as I grow older. The portrait is portrayed as a flower.
 * 
 * 
 */

"use strict";

let babyimg
let babyfaceimg
let dadimg
let jamiewaveimg
let momimg
let plantsimg
let redleafimg

// Load the image.
function preload() {

    babyimg = loadImage('/assets/images/baby.png');
    babyfaceimg = loadImage('/assets/images/babyface.png');
    dadimg = loadImage('/assets/images/dad.png');
    jamiewaveimg = loadImage('/assets/images/jamiewave.png');
    momimg = loadImage('/assets/images/mom.png');
    plantsimg = loadImage('/assets/images/plants.png');
    redleafimg = loadImage('/assets/images/redleaf.png');

}



/**
 * I'm setting up a white blank canvas for the background of the petals.
*/

function setup() {
    createCanvas(1000, 700);


}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    background(0)

    translate(500, 320);
    fill(355);

    let angle = frameCount * 0.05;
    rotate(angle);

    ellipse(100, 100, 200, 80);

    image(babyimg, 200, 200, 0, 0);









}