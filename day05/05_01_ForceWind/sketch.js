
'use strict'

let persistForce;
let wind;

let movers = [];
const numMovers = 20;

function setup() {

    createCanvas( 600, 600 );

    persistForce = createVector( 0, 0.2 );
    wind = createVector( 0.05, 0 );

    for ( let i = 0; i < numMovers; i++ ) {

        createMover();

    }

    console.log( movers );

}

function createMover() {

    //create a new mover
    let mover = new Mover();
    mover.position = createVector( 50, 50 );
    mover.mass = random( 0.1, 5.0 );

    // add it to the movers array
    movers.push( mover );

}

function draw() {

    background( 0 );

    // iterate through our movers
    for ( let i = 0; i < movers.length; i++ ) {

        if ( mouseIsPressed ) {

        movers[i].applyForce( wind );

        }

        movers[i].applyForce( persistForce );
        movers[i].checkEdges();
        movers[i].update();
        movers[i].display();

    }

}

function Mover() {

    this.position = createVector( width / 2, height / 2 );
    this.velocity = createVector( 0, 0 );
    this.acceleration = createVector( 0, 0 );
    this.topSpeed = 500;

    this.mass;
    this.col = color( 0, 255, 100 );

    // **** apply a force
    this.applyForce = function( force ) {

        // force is inverse proportional to mass
        let f = p5.Vector.div( force, this.mass );
        this.acceleration.add( f );

    }

    this.update = function() {

        this.velocity.add( this.acceleration );
        this.velocity.limit( this.topSpeed );
        this.position.add( this.velocity );

        // **** clear acceleration at end of update! ****
        this.acceleration.mult( 0 );

    }

    this.checkEdges = function() {

        let s = ( this.mass * 20 ) * 0.5;
        if ( this.position.x > width - s ) {

            this.position.x = width - s;
            this.velocity.x *= -1;

        } else if ( this.position.x < 0 + s ) {

            this.position.x = 0 + s;
            this.velocity.x *= -1;

        }

        if ( this.position.y > height - s ) {

            this.position.y = height - s;
            this.velocity.y *= -1;

        } else if ( this.position.y < 0 + s ) {

            this.position.y = 0 + s;
            this.velocity.y *= -1;

        }

    }

    this.display = function() {

        fill( this.col );
        ellipse( this.position.x, this.position.y, this.mass * 20, this.mass * 20 );

    }

}
