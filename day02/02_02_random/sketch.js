
// using random number with randomSeed
// dynamic
function setup() {

    createCanvas( 600, 600 );
    colorMode( HSB );

    background( 0 );

}

function draw() {

    // try millis() and frameCount
    let seed = floor( millis() );
    console.log( seed );
    randomSeed( seed );

    fill( random( 255), 255, 255 );
    ellipse( width / 2, height / 2, random( width ), random( height ) );

}

// these random techniques come from Zach Lieberman
// https://www.instagram.com/zach.lieberman/
