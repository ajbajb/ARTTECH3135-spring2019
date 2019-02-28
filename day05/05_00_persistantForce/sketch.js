
'use strict'

let persistForce;
let mover;

function setup() {

    createCanvas( 600, 600 );

    mover = new Mover();

    persistForce = createVector( 0, 0.01 );

}

function draw() {

    background( 0 );

    mover.applyForce( persistForce );
    mover.checkEdges();
    mover.update();
    mover.display();

}

function Mover() {

    this.position = createVector( width / 2, height / 2 );
    this.velocity = createVector( 0, 0 );
    this.acceleration = createVector( 0, 0 );
    this.topSpeed = 10;

    this.size = 10;
    this.col = color( 0, 255, 100 );

    // **** apply a force *** force gets added to acceleration
    this.applyForce = function( force ) {

        this.acceleration.add( force );

    }

    this.update = function() {

        this.velocity.add( this.acceleration );
        this.velocity.limit( this.topSpeed );
        this.position.add( this.velocity );

        // clear acceleration at end of update!
        this.acceleration.mult( 0 );

    }

    this.checkEdges = function() {

        if( this.position.x > width ) {

            // this.acceleration.x *= -1;
            this.velocity.x *= -1;
            this.position.x = width;

        } else if ( this.position.x < 0 ) {

            // this.acceleration.x *= -1;
            this.velocity.x *= -1;
            this.position.x = 0;

        }

        if ( this.position.y > height ) {

            // this.acceleration.y *= -1;
            this.velocity.y += -1;
            this.position.y = height;

        } else if ( this.position.y < 0 ) {

            // this.acceleration.y *= -1;
            this.velocity.y *= -1;
            this.position.y = 0

        }

    }

    this.display = function() {

        fill( this.col );
        ellipse( this.position.x, this.position.y, this.size, this.size );

    }

}
