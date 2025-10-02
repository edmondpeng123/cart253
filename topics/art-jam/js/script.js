/**
 * Fragments of the Self
 * Edmond Peng
 * 
 * This is an experimental visual representation of my identity on the digital platform as well as a reflection of our place
 * as users of the web. It highlights the disconnected relationship that I have with my digital avatar and how every aspect of our digital self can be edited, concealed, exposed and shared under the omnipresent surveillance of the Internet.
 * 
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
    size: 165,
    x: 50,
    y: 40,
    hover: false,
}
let eyebrowimg = {
    size: 200,
    x: 50,
    y: 40,
    hover: false,

}
let handimg = {
    size: 120,
    x: 50,
    y: 40,
    hover: false,

}
let mouthimg = {
    size: 220,
    x: 50,
    y: 40,
    hover: false,

}
let noseimg = {
    size: 140,
    x: 50,
    y: 40,
    hover: false,

}


// Loading the images in assets - created all assets using my own photos and photoshop bitmap effect.
function preload() {


    earimg1 = loadImage('/assets/images/ear.png');
    eyebrowimg1 = loadImage('/assets/images/eyebrow.png');
    handimg1 = loadImage('/assets/images/hand.png');
    mouthimg1 = loadImage('/assets/images/mouth.png');
    noseimg1 = loadImage('/assets/images/nose.png');

}


/**
 * I'm setting up a white blank canvas for the background of the bubbles and centering image.
*/

function setup() {
    createCanvas(1000, 700);
    imageMode(CENTER);


}


/**
 * adding lines on x and y axis to portray the camera-like interface, reminiscent of the controlled surveillance on the web
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




    me1();
    me2();
    me3();
    me4();
    me5();
    hoverstate();
    hoverstate2();
    hoverstate3();
    hoverstate4();
    hoverstate5();

}



/**
 * added the first bubble and made it a rotate animation
*/
function me1() {

    push();



    let angle = frameCount * 0.013;

//calculating the rotation translation effect with the trigonometric formula, thank you so much Sabine for the help ; translating the
//bubble so that it is centered to the canvas

    earimg.y = cos(-angle) * 200 + 340
    earimg.x = sin(-angle) * 200 + 500
    translate(earimg.x, earimg.y)
    rotate(angle)

    // Apply filter or draw original based on hover state
    if (earimg.hover === true) {


        image(earimg1, 0, 0, earimg.size, earimg.size);
        filter(BLUR);
    } else {

        image(earimg1, 0, 0, earimg.size, earimg.size);
    }

    pop();
}




/**
 * added the second bubble and made it a rotate animation
*/
function me2() {

    push();



    let angle = frameCount * 0.016;


    noseimg.y = cos(-angle) * 200 + 340
    noseimg.x = sin(-angle) * 200 + 500
    translate(noseimg.x, noseimg.y)
    rotate(angle)


    if (noseimg.hover === true) {

        scale(2, 2);
        image(noseimg1, 0, 0, noseimg.size, noseimg.size);
        filter(DILATE);

    } else {

        image(noseimg1, 0, 0, noseimg.size, noseimg.size);



    }

    pop();
}
/**
 * added the third bubble and made it a rotate animation
*/





function me3() {

    push();


    let angle = frameCount * 0.020;


    eyebrowimg.y = cos(-angle) * 200 + 340
    eyebrowimg.x = sin(-angle) * 200 + 500
    translate(eyebrowimg.x, eyebrowimg.y)
    rotate(angle)


    if (eyebrowimg.hover === true) {

        scale(1.5, 1.5);
        image(eyebrowimg1, 0, 0, eyebrowimg.size, eyebrowimg.size);
        filter(INVERT);

    } else {

        image(eyebrowimg1, 0, 0, eyebrowimg.size, eyebrowimg.size);



    }

    pop();
}




/**
 * added the fourth bubble and made it a rotate animation
*/

function me4() {

    push();


    let angle = frameCount * 0.026;



    mouthimg.y = cos(-angle) * 200 + 340
    mouthimg.x = sin(-angle) * 200 + 500
    translate(mouthimg.x, mouthimg.y)
    rotate(angle)


    if (mouthimg.hover === true) {


        scale(0.5, 0.5);
        image(mouthimg1, 0, 0, mouthimg.size, mouthimg.size);

    } else {

        image(mouthimg1, 0, 0, mouthimg.size, mouthimg.size);



    }
    pop();


}






function me5() {

    push();

    let angle = frameCount * 0.030;


    handimg.y = cos(-angle) * 200 + 340
    handimg.x = sin(-angle) * 200 + 500
    translate(handimg.x, handimg.y)
    rotate(angle)


    if (handimg.hover === true) {
       
       
        image(handimg1, 0, 0, handimg.size, handimg.size);

    } else {

        image(handimg1, 0, 0, handimg.size, handimg.size);



    }
    pop();


}






//making the hover state for the mouse to register for each bubbles

function hoverstate() {

    let distance = dist(earimg.x, earimg.y, mouseX, mouseY)

    if (distance < earimg.size / 2) {
        earimg.hover = true;
    } else {
        earimg.hover = false;
    }


}


function hoverstate2() {

    let distance2 = dist(noseimg.x, noseimg.y, mouseX, mouseY)

    if (distance2 < noseimg.size / 2) {
        noseimg.hover = true;
    } else {
        noseimg.hover = false;
    }
}




function hoverstate3() {

    let distance3 = dist(eyebrowimg.x, eyebrowimg.y, mouseX, mouseY)

    if (distance3 < eyebrowimg.size / 2) {
        eyebrowimg.hover = true;
    } else {
        eyebrowimg.hover = false;
    }
}






function hoverstate4() {
    let distance4 = dist(handimg.x, handimg.y, mouseX, mouseY)

    if (distance4 < handimg.size / 2) {
        handimg.hover = true;
    } else {
        handimg.hover = false;
    }
}



function hoverstate5() {

    let distance5 = dist(mouthimg.x, mouthimg.y, mouseX, mouseY)

    if (distance5 < mouthimg.size / 2) {
        mouthimg.hover = true;
    } else {
        mouthimg.hover = false;
    }
}


