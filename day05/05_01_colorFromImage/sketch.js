

'use strict'

let movers = [];
const numMovers = 100;

let img;

// keep track of how many movers to draw
let count = 0;


// this is out example sorted array
let sorted = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

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

    // load an image
    // img = loadImage( 'assets/HighResCat.jpg', function() {
    //     console.log( "Image loaded" );
    // } );


    img = loadImage( 'assets/HighResCat.jpg', finished() );

    function finished() {
        console.log( "image has loaded " );
    }

}

function setup() {

    console.log( sorted );
    shuffleArray( sorted );
    console.log( sorted );

    createCanvas( 600, 600 );
    // resize the image
    img.resize( 600, 600 );

    // iterate through the image
    // get color at location
    for ( let x = 0; x < img.width; x += 3 ) {
        for ( let y = 0; y < img.height; y += 3 ) {

            let colorAtLocation = img.get( x, y );

            // create a new mover at that location
            // with that color
            let mover = new Mover();
            mover.position = createVector( x, y );
            mover.mass = random( .1, 5 );
            mover.col = color(
                red( colorAtLocation ),
                green( colorAtLocation),
                blue( colorAtLocation ),
                80 );

            movers.push( mover );
        }

    }

    console.log( movers );
    shuffleArray( movers );

    background( 0 );
}

function draw() {

    background( 0 );
// option 2:
// shuffle array use a counter
    //if count is less than our total movers
    if ( count < movers.length ) {
        // add one more to count
        count += 1
        console.log( count );
    }

    // display our movers
    // iterate through movers array
    // calling display on each one
    for ( let i = 0; i < count; i++ ) {

        // movers[i].update();
        movers[i].display();

    }


// option 1:
// choose random element from sorted array
    // // choose a random mover from our array
    // let r = random( movers );
    // // get index of current mover
    // let index = movers.indexOf( r );
    // // remove it from the array
    // movers.splice( index, 1 );
    // // then display it
    // r.display();

    //display image as bakground
    // background( img );

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
