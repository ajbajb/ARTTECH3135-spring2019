
function setup() {

    createCanvas( 400, 400 );

    randomSeed( 5 );
    // give me a number between 0 - 100
    let rando = random( 0, 100 );
    console.log( rando );

    // give me a number between 0 - 1
    let rando2 = random( 0, 1 );
    console.log( rando2  );

}

function draw() {

    randomSeed( frameCount * 500 );
    // pick a random number EVERY draw loop
    let b = random( 25 );
    console.log( b );
    //
    background( b );

    let x = random( width );
    let y = random( height );

    ellipse( x, y, 30, 30 );




}
