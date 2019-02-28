
'use strict'

let persistForce;
let wind;

let movers = [];
const numMovers = 20;

let getDrag = function( v ) {

    // pass in a force vector and compute the drag force
    // drag = ( speed * speed ) * coefficent * -1

    let c = 0.01; // drag coefficent -- scales drag
    let speed = v.mag();
    let dragMagnitude = c * speed * speed;

    let drag = v.copy();
    drag.mult( -1 );
    drag.normalize();

    return drag.mult( dragMagnitude );

}

function setup() {

    createCanvas( 600, 600 );

    //define out forces
    persistForce = createVector( 0, 0.6 );
    wind = createVector( 2.4, -0.9 );

    for ( let i = 0; i < numMovers; i++ ) {

        createMover();

    }

    console.log( movers );

}

function createMover() {

    let mover = new Mover();
    mover.position = createVector( 50, 50 );
    mover.mass = random( 0.2, 5.0 );

    movers.push( mover );

}

function draw() {

    background( 0 );

    for ( let i = 0; i < movers.length; i++ ) {

        if ( mouseIsPressed ) {

            movers[i].applyForce( wind );

        }

        let m = movers[i].mass;
        let gravity = p5.Vector.mult( persistForce, m );
        movers[i].applyForce( gravity );

        let velo = movers[i].velocity;
        movers[i].applyForce( getDrag( velo ) );

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

    this.applyForce = function( force ) {

        // force is inverse proportional to mass
        let f = p5.Vector.div( force, this.mass );
        this.acceleration.add( f );

    }

    this.update = function() {

        this.velocity.add( this.acceleration );
        this.velocity.limit( this.topSpeed );
        this.position.add( this.velocity );

        // clear acceleration at end of update!
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
