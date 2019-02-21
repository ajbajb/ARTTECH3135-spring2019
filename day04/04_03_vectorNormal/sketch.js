
//04_02_vectorMagnitude

// the length of a vector

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
    pop();

    fill( 255, 100, 100 );
    rect( 0, 0, magnitude, 20 );

}
