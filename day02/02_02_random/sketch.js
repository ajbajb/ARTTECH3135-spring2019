
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
