
// using random number with randomSeed
function setup() {

    createCanvas( 600, 600 );
    colorMode( HSB );

    // get a random number
    // will be different everytime you reload the page
    let randoNumber = random( 1 );
    console.log( randoNumber );

}

function draw() {

    // get a random value between 0 - 255
    // EVERY draw loop
    let rando = random( 255 );
    let c = color(rando, 255, 255 );

    fill( c );
    ellipse( width / 2, height / 2, 100, 100 );

}

// these random techniques come from Zach Lieberman
// https://www.instagram.com/zach.lieberman/
