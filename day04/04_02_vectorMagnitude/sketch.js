
// 04_02_vectorNormal

// Normalize or "standardize" a vector
// a normalized vector has a length / magnitude of 1
// a 'unit' vector


// describes a vectors DIRECTION, without regard to its magnitude

function setup() {

    createCanvas( 600, 600 );

}

function draw() {

    background( 40 );

    let mouse = createVector( mouseX, mouseY );
    let origin = createVector( width / 2, height / 2 );

    mouse.sub( origin );
    let magnitude = mouse.mag();

    push();
    translate( origin.x, origin.y );

    stroke( 255 );
    line( 0, 0, mouse.x, mouse.y );

    mouse.normalize();

    stroke( 0, 255, 0 );
    strokeWeight( 5 );
    line( 0, 0, mouse.x * 20, mouse.y * 20 );

    // or smae thing::
    // mouse.mult( 20 );
    // line(0, 0, mouse.x, mouse.y );

    pop();

    fill( 255, 100, 100 );
    rect( 0, 0, magnitude, 30 );
    fill( 255 );
    let magText = "Magnitude:: " + magnitude.toFixed( 4 );
    text( magText, 20, 20 );

}
