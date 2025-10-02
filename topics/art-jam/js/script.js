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

let earimg1 = null
let eyebrowimg1 = null
let handimg1 = null
let mouthimg1 = null
let noseimg1 = null



let earimg = {
    size:165,
    x:50,
    y:40,
    hover:false,
}
let eyebrowimg = {
    size:200,
    x:50,
    y:40,
    hover:false,

}
let handimg = {
    size:120,
    x:50,
    y:40,
    hover:false,

}
let mouthimg = {
    size:220,
    x:50,
    y:40,
    hover:false,

}
let noseimg = {
    size:140,
    x:50,
    y:40,
    hover:false,

}


// Loading the images in assets.
function preload() {


    earimg1 = loadImage('/assets/images/ear.png');
    eyebrowimg1 = loadImage('/assets/images/eyebrow.png');
    handimg1 = loadImage('/assets/images/hand.png');
    mouthimg1 = loadImage('/assets/images/mouth.png');
    noseimg1 = loadImage('/assets/images/nose.png');

}



/**
 * I'm setting up a white blank canvas for the background of the bubbles.
*/

function setup() {
    createCanvas(1000, 700);
    imageMode(CENTER);


}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    background('#ffffffff');

    /**
     * Added the lines on x and y axis
    */
    let mx = mouseX - 0;
    line(mx, -50, mx, 1000);

    let my = mouseY - 0;
    line(1000, my, -50, my);



   // if ((mouseX = earimg.x) (mouseY = earimg.y)) {
    //    scale(1.5)
   // }

   // else {
   //     scale(1)
   // }

    // translate(500, 340);
    //  fill(355);

    //  let angle = frameCount * 0.02;
    //  rotate(angle);

    me1();
    me2();
    me3();
    me4();
    me5();
    hoverstate();

}



/**
 * added the first bubble and made it a rotate animation
*/
function me1() {

    push();
   // translate(500, 340);



    let angle = frameCount * 0.013;
   //rotate(angle);

    earimg.y = cos(-angle)*200 + 340
    earimg.x = sin(-angle)*200 + 500
    translate(earimg.x, earimg.y)
rotate(angle)
 // Apply filter or draw original based on hover state
  if (earimg.hover===true) {
    // Apply a filter, e.g., blur
// earimg.resize(200,200);
  
     image(earimg1, 0, 0, earimg.size, earimg.size);
    filter(BLUR);
  } else {
    // Draw the original image

      image(earimg1, 0, 0, earimg.size, earimg.size);
  }
  fill(255,0,0);
   ellipse(0,0,20,20)
   pop();
}

  

    //earimg.resize(165,165);


/**
 * added the second bubble and made it a rotate animation
*/
function me2() {

    push();
    translate(500, 340);

    let angle = frameCount * 0.016;
    rotate(angle);

    image(noseimg1, 50, 40, 230, 230);
   // noseimg.resize(230, 230);
    pop();
}

/**
 * added the third bubble and made it a rotate animation
*/
function me3() {

    push();
    translate(500, 340);

    let angle = frameCount * 0.020;
    rotate(angle);

    image(eyebrowimg1, 50, 40, 200, 200);
   // eyebrowimg.resize(200, 200);
    pop();
}

/**
 * added the fourth bubble and made it a rotate animation
*/
function me4() {

    push();
    translate(500, 340);

    let angle = frameCount * 0.026;
    rotate(angle);

    image(mouthimg1, 50, 40, 180, 180);
   // mouthimg.resize(180, 180);
    pop();
}

/**
 * added the fifth bubble and made it a rotate animation
*/
function me5() {

    push();
    translate(500, 340);

    let angle = frameCount * 0.032;
    rotate(angle);


    image(handimg1, 50, 40, 120, 120);
   // handimg.resize(120, 120);
    pop();
}


function hoverstate() {


    let distance = dist(earimg.x, earimg.y, mouseX, mouseY)

 if (distance<earimg.size/2) {
    earimg.hover = true;
  } else {
   earimg.hover = false;
  }
}


