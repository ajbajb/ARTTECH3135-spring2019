
'use strict'

let movers = [];

let img;
let brush;

// keep track of how many movers to draw
let count = 0;


// function to shuffle an array!
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function preload() {

    img = loadImage( 'assets/Fairytale.jpg', finished() );
    brush = loadImage( 'assets/gradient.png', finished() );

    function finished() {
        console.log( "image has loaded " );
    }

}

function setup() {

    randomSeed( 500 );
    createCanvas( 600, 600 );
    // resize the image
    img.resize( 600, 600 );

    // iterate through the image
    // get color at location
    for ( let x = 0; x < img.width; x += 10 ) {
        for ( let y = 0; y < img.height; y += 10 ) {

            // get color at location
            let colorAtLocation = img.get( x, y );

            // get a random starting point at the one of the corners
            // of the canvas.
            // we will assign this starting point to
            // the position of the mover
            // let startX = floor( random( 2 ) ) * width; // startX will either be 0 or width
            // let startY = floor( random( 2 ) ) * height; // startY eithr 0  or height

            let startX = random( width );
            let startY = random( height );
            // create a new mover at that location
            // with that color
            let mover = new Mover();
            mover.position = createVector( startX, startY );
            mover.home = createVector( x, y );
            mover.mass = random( 2, 30 );
            mover.col = colorAtLocation;

            movers.push( mover );

        }

    }

    shuffleArray( movers );

    background( 0 );
}

function draw() {

    count = 50;

    // display our movers
    // iterate through movers array
    // calling display on each one

    for ( let i = 0; i < count; i++ ) {

        let distance = p5.Vector.sub( movers[i].home, movers[i].position );

        if ( movers.length > 50 ) {

            if ( distance.x < 1 && distance.y < 1 ) {

                movers.splice( i, 1 );

            }

        }

        distance.normalize();
        distance.mult( 1.5 );
        movers[i].acceleration.add( distance );

        let velo = movers[i].velocity;
        movers[i].acceleration.add( getDrag( velo, 0.1 ) );

        movers[i].update();
        movers[i].display();

    }

    // console.log( movers.length );

}

let getDrag = function( v, co ) {

    // pass in a velocity vector and compute the drag force
    // drag = ( speed * speed ) * coefficent * -1

    let c = co;// 0.01; // drag coefficent -- scales drag
    let speed = v.magSq();
    let dragMagnitude = c * speed;

    let drag = v.copy();
    drag.mult( -1 );
    drag.normalize();

    return drag.mult( dragMagnitude );

}

function Mover() {

    this.position = createVector( 0, 0 );
    this.home;
    this.velocity = createVector( 0, 0 );
    this.acceleration = createVector( 0, 0 );

    this.mass = 1;
    this.topSpeed = 10;
    this.col = color( 255, 200, 0 );
    this.opacity = 25;

    this.checkLocation = function() {

        // if we get close to our 'home' location
        // make it opaque
        if (
            ( ( ( this.position.x - this.home.x ) < 2 ) && (this.position.y - this.home.y < 2 ) ) &&
            ( ( ( this.position.x - this.home.x ) > -2 ) && (this.position.y - this.home.y > -2 ) )
        ) {

            this.opacity = 200;

        }
    }

    this.update = function() {

        this.velocity.add( this.acceleration );
        this.velocity.limit( this.topSpeed );
        this.position.add( this.velocity );

        this.acceleration.mult( 0 );

        this.checkLocation();

    }

    this.display = function() {

        // display the mover as the  brush image instead of an ellipse
        // tinting it a color
        noStroke();
        tint( red( this.col ), green( this.col ), blue( this.col ), this.opacity );
        image( brush, this.position.x, this.position.y, this.mass, this.mass );
        
    }

}
