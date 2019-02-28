
'use strict'

let movers = [];
const numMovers = 100;

function setup() {

    createCanvas( 600, 600 );

    for ( let i = 0; i < numMovers; i++ ) {

        createMover();

    }

    console.log( movers );

}

function draw() {

    background( 0 );

    for ( let i = 0; i < movers.length; i++ ) {

        movers[i].update();
        movers[i].display();

    }

}

function createMover() {

    let mover = new Mover();
    mover.position = createVector( 100, 100 );
    mover.mass = random( 0.1, 2.0 );
    mover.col = color( random( 255 ), random( 255 ), random( 255 ) );

    movers.push( mover );


}

function Mover() {

    this.position = createVector( 0, 0 );
    this.velocity = createVector( 0, 0 );
    this.acceleration = createVector( 0, 0 );

    this.mass = 0.5;
    // this.size = function() {
    //     return this.mass * 10;
    // }
    this.topSpeed = 20;
    this.col = color( 255, 200, 0 );

    this.update = function() {

        this.velocity.add( this.acceleration );
        this.velocity.limit( this.topSpeed );
        this.position.add( this.velocity );

    }

    this.display = function() {

        noStroke();
        fill( this.col );
        ellipse( this.position.x, this.position.y, this.mass * 10, this.mass*10 );

    }

}
