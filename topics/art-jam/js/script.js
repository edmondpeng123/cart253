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


let babyfaceimg
let dadimg
let jamiewaveimg
let momimg
let plantsimg
let redleafimg

let earimg
let eyebrowimg
let handimg
let mouthimg
let noseimg

// Load the image.
function preload() {

    babyfaceimg = loadImage('/assets/images/babyface.png');
    dadimg = loadImage('/assets/images/dad.png');
    jamiewaveimg = loadImage('/assets/images/jamiewave.png');
    momimg = loadImage('/assets/images/mom.png');
    plantsimg = loadImage('/assets/images/plants.png');
    redleafimg = loadImage('/assets/images/redleaf.png');

    earimg = loadImage('/assets/images/ear.png');
    eyebrowimg = loadImage('/assets/images/eyebrow.png');
    handimg = loadImage('/assets/images/hand.png');
    mouthimg = loadImage('/assets/images/mouth.png');
    noseimg = loadImage('/assets/images/nose.png');

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

    background('#ffffffff');

   // translate(500, 340);
  //  fill(355);

  //  let angle = frameCount * 0.02;
  //  rotate(angle);

me1();
me2();
me3();
me4();
me5();



}



function me1() {

    push();
    translate(500, 340);

    let angle = frameCount * 0.013;
    rotate(angle);

    image(earimg, 50, 40, 0, 0);
    earimg.resize(120, 120);
    pop();
}

function me2() {

    push();
    translate(500, 340);

    let angle = frameCount * 0.016;
    rotate(angle);

    image(noseimg, 50, 40, 0, 0);
    noseimg.resize(230, 230);
    pop();
}

function me3() {

    push();
    translate(500, 340);

    let angle = frameCount * 0.018;
    rotate(angle);

    image(eyebrowimg, 50, 40, 0, 0);
    eyebrowimg.resize(200, 200);
    pop();
}

function me4() {

    push();
    translate(500, 340);

    let angle = frameCount * 0.026;
    rotate(angle);

    image(mouthimg, 50, 40, 0, 0);
    mouthimg.resize(250, 250);
    pop();
}

function me5() {

    push();
    translate(500, 340);

    let angle = frameCount * 0.032;
    rotate(angle);

    image(handimg, 50, 40, 0, 0);
    handimg.resize(120, 120);
    pop();
}

