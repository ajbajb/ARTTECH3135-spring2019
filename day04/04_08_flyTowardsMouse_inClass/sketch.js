
// 04_08_flyTowardsMouse_inClass

'use strict'

// an array to hold all our movers
let moverArray = [];

let words = [ "like", "people", "Bully", " Toe Jam", "glasses", "Mind" ];

let numMovers = 100;

function setup() {

    createCanvas( 600, 600 );

    for ( let i = 0; i < numMovers; i++ ) {

        let mover = new Mover;
        mover.position = createVector( random( width ), random( height ) );
        mover.velocity = createVector( 0, 0 );
        mover.acceleration = createVector( random( 1 ), random( 1 ) );
        mover.topSpeed = random( 1, 10 );
        mover.col = color( random( 255 ), random( 255 ), random( 255 ), 25 );
        mover.word = random( words );

        // add mover to our moverArray
        moverArray.push( mover );
    }

    console.log( moverArray );

    background( 0 );

}

function draw() {

    background( 0, 5 );


    push();
    //change blendMode
    blendMode( ADD );

    let mouse = createVector( mouseX, mouseY );

    for ( let i = 0; i < moverArray.length; i++ ) {

        // 1. get vector from mouse position to our mover position
        let direction = p5.Vector.sub( mouse, moverArray[i].position );

        // 2. normalize that vector
        direction = direction.normalize();

        // 3. scale that normalized vector
        let speed = 0.2;
        direction = direction.mult( speed );

        // 4. set acceleration to direction

        // mouse press flys AWAY from mouse pointer
        // otherwise it flys TOWARDS mouse pointer

        if ( mouseIsPressed ) {

            moverArray[i].acceleration = -direction;

        } else {

            moverArray[i].acceleration = direction;
        }

        moverArray[i].move();
        // moverArray[i].checkEdges();
        moverArray[i].display();

    }

    pop();

}


function Mover() {

    // have a position
    // going to have speed/ acceleration
    // going to have velocity
    // going to have color

    // objects properties
    this.position;
    this.velocity;
    this.acceleration;
    this.topSpeed;

    this.col;
    this.word;

    // objects methods
    this.move = function() {

        this.velocity.add( this.acceleration );
        this.velocity.limit( this.topSpeed );
        this.position.add( this.velocity );

    }

    this.checkEdges = function() {

        // check left and right walls
        if ( this.position.x > width ) {

            this.position.x = 0;

        } else if ( this.position.x < 0 ) {

            this.position.x = width;

        }

        // check top and bottom walls
        if ( this.position.y > height ) {

            this.position.y = 0;

        } else if ( this.position.y < 0 ) {

            this.position.y = height;

        }

    }

    this.display = function() {

        fill( this.col );
        stroke( 0 );
        text( this.word , this.position.x, this.position.y );
        // ellipse( this.position.x, this.position.y, 20, 20 );

    }

}
