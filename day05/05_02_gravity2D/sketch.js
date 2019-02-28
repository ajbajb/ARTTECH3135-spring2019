
'use strict'

let movers = [];
const numMovers = 500;

let attractors = [];
const g = 0.4;

let img;

function preload() {

    img = loadImage( 'assets/gradient.png' );

}

function setup() {

    createCanvas( 600, 600 );
    //blendMode( ADD );

    for ( let i = 0; i < numMovers; i++ ) {

        createMover();

    }

    // createAttractor( width / 2, height / 2 );

}

function draw() {
    // clear();
    background( 0 );

    let mouse = createVector( mouseX, mouseY );

    for ( let i = 0; i < movers.length; i++ ) {

        for ( let k = 0; k < attractors.length; k++ ) {

            movers[i].computeGravity( attractors[k] );

        }

        movers[i].update();
        movers[i].display();

    }

    // display the attractors
    for ( let i = 0; i < attractors.length; i++ ) {

        attractors[i].display();

    }

}

function mousePressed() {

    createAttractor( mouseX, mouseY );

}

// Mover class creation and stuff =-=-=-=-=-=-=-=-=-=- //
function createMover() {

    let mover = new Mover();
    mover.position = createVector( 100, 100 );
    mover.mass = random( 0.1, 3.0 );
    mover.col = color( random( 255 ), random( 255 ), random( 255 ), 100 );

    movers.push( mover );

}

function Mover() {

    this.position = createVector( 0, 0 );
    this.velocity = createVector( 0, 0 );
    this.acceleration = createVector( 0, 0 );

    this.mass = 0.5;
    this.size = function() {

        return this.mass * 10;

    }

    this.col = color( 255, 200, 0 );

    this.applyForce = function( force ) {

        this.f = p5.Vector.div( force, this.mass );
        this.acceleration.add( this.f )

    }

    this.computeGravity = function( a ) {

        let gravity = p5.Vector.sub( a.position, this.position );
        let distance = gravity.mag();
        distance = constrain( distance, 5, 25.0 );

        let attractorMass = a.mass;
        let magnitude = ( g * attractorMass * this.mass ) / ( distance * distance );

        gravity.normalize();
        gravity.mult( magnitude );

        this.acceleration.add( gravity );

    }

    this.update = function() {

        this.velocity.add( this.acceleration );
        this.position.add( this.velocity );

        this.acceleration.mult( 0 );

    }

    this.display = function() {

        noStroke();
        fill( this.col );
        // tint( this.col );
        //image( img, this.position.x, this.position.y, this.mass * 20, this.mass * 20 );
        ellipse( this.position.x, this.position.y, this.size(), this.size() );
    }

}

// Attractor class creation and stuff
function createAttractor( xPos, yPos ) {

    let attractor = new Attractor();
    attractor.position = createVector( xPos, yPos );
    attractor.mass = random( 5, 50 );

    attractors.push( attractor );

}

function Attractor() {

    this.position = createVector( 0, 0 );
    this.mass = 20;

    this.col = color( 255, 0, 0, 50 );

    this.display = function() {

        noStroke();
        fill( this.col );
        ellipse( this.position.x, this.position.y, this.mass, this.mass );
    }

}
