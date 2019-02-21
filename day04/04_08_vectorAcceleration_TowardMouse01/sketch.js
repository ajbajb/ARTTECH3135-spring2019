// 04_04_vectorAcceleration_TowardsMouse01

// now a simple class!!
// motion 101:
// location = location + velocity

// added in:
//acceleration, the rate of change of velocity

//so,
// velocity is rate of change of location
// acceleration is rate of change of velocity

// we need to calculate the vector from an object TO the mouse.
// we need 2 things to calculate the vector--
// 1. Magnitude
// 2. Direction

// our mover object
let mover;

function setup() {

    createCanvas( 600, 600 );

    mover = new Mover();
    mover.location = createVector( random( width ), random( height ) );
    mover.velocity = createVector( 0, 0 );
    mover.acceleration = createVector( 0.01, 0.01 );

}

function draw() {

    background( 25 );
    let mouse = createVector( mouseX, mouseY );

    // 1.
    // get the vector from movers position to the mouse
    // subtract movers location from the mouse position
    let direction = new p5.Vector.sub( mouse, mover.location );

    // 2.
    // normalize that vector
    direction.normalize();

    // 3.
    // scale that vector by some amount ( a speed ? )
    let speed = 0.3;
    direction.mult( speed );

    // 4.
    //assign it to acceleration
    mover.acceleration = direction;

    mover.update();
    mover.checkEdges();
    mover.draw();

}

function Mover() {

    // add properties to your object
    this.location;
    this.velocity;
    this.acceleration;

    // this is a property that is a function
    // a function that is a function is called a method
    this.update = function() {

        // motion 101!
        // velocity + acceleration
        // location + velocity
        this.velocity.add( this.acceleration );
        this.velocity.limit( 2 );
        this.location.add( this.velocity );

    }

    this.checkEdges = function() {

        if ( this.location.x > width ) {

            this.location.x = 0;

        } else if ( this.location.x < 0 ) {

            this.location.x = width;

        }

        if ( this.location.y > height ) {

            this.location.y = 0;

        } else if ( this.location.y < 0 ) {

            this.location.y = height;

        }

    }

    this.draw = function() {

        //stroke( 255 );
        noStroke();
        fill( 255, 100, 255 );
        ellipse( this.location.x, this.location.y, 15, 15 );

    }

}
