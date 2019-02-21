
// first Vectors

//usually we need a pair of variables
// x & y
// once we hit 3D, we will need 3
// it might be nice to have a way to organize and 'package'
// up these positions
// so instad of::
// let xPos
// let yPos
// let xspeed
// let ySpeed
// we will have:
let location;  // a vector-- position( x, y )
let velocity;  // speed( x, y )

function setup() {

    createCanvas( 600, 600 );

    location = createVector( width /2, height / 2 );
    velocity = createVector( 5, 3 );

}

function draw() {

    background( 0 );

    // motion 101:
    // location = location + velocity

    checkWalls();

    location.add( velocity );

    fill( 0, 255, 200 );
    ellipse( location.x, location.y, 10, 10 );

}


function checkWalls() {

    // right
    if ( position.x > width ) {

        velocity.x *= -1;
        position.x = width;

    }

    // left
    if ( position.x < 0 ) {

        velocity.x *= -1;
        position.x = 0;

    }

    // bottom
    if ( position.y > height  ) {

        velocity.y *= -1
        position.y = height;

    }

    // top
    if ( position.y < 0  ) {

        velocity.y *= -1
        position.y = 0;

    }

}
