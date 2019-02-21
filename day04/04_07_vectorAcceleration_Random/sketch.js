// 04_04_vectorAcceleration_MousePressed

// now a simple class!!
// motion 101:
// location = location + velocity

// adding in:
//acceleration, the rate of change of velocity

//so,
// velocity is rate of change of location
// acceleration is rate of change of velocity

// CHANGE ACCELERATION WITH MOUSE PRESS

let mover;

function setup() {

    createCanvas( 600, 600 );

    mover = new Mover();
    mover.location = createVector( random( width ), random( height ) );
    mover.velocity = createVector( 0, 0 );
    mover.acceleration = createVector( 0.02, 0.01 );
    background( 25 );

}

function draw() {

    // mover.acceleration = p5.Vector.random2D();
    // mover.acceleration.mult( random( 20 ) );

    if ( mouseIsPressed ) {

        console.log( 'press' );
        mover.acceleration = p5.Vector.random2D();
        mover.acceleration.mult( random( 20 ) );

    } else {

        mover.acceleration = createVector( -0.01, -0.01 );

    }

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
        this.velocity.limit( 10 );
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
