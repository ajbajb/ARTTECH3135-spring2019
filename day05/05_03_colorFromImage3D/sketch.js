
'use strict'

let movers = [];

let img;
let imgSize = 400;

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

    // load an image
    // img = loadImage( 'assets/HighResCat.jpg', function() {
    //     console.log( "Image loaded" );
    // } );


    img = loadImage( 'assets/lego.jpg', finished() );

    function finished() {
        console.log( "image has loaded " );
    }

}

function setup() {

    // chnage angle mode to degrees (default is radians)
    angleMode( DEGREES );
    createCanvas( 800, 800, WEBGL );

    // resize the image
    img.resize( imgSize, imgSize );

    let skip = 8;
    // iterate through the image every 'skip' pixels
    // get color at location
    for ( let x = 0; x < img.width; x += skip ) {
        for ( let y = 0; y < img.height; y += skip ) {

            let colorAtLocation = img.get( x, y );

            // create a new mover for that location
            // with that color, give it a random inital position
            let mover = new Mover();
            mover.position = createVector(
                random( 0, width / 2 ),
                random( 0, height / 2 ),
                random( 200, 400 )
            );
            mover.home = createVector( x, y, 0 );
            mover.mass = skip;
            mover.col = color(
                red( colorAtLocation ),
                green( colorAtLocation ),  // you can shift color channels
                blue( colorAtLocation )
            );

            movers.push( mover );

        }

    }

    console.log( movers );

    background( 0 );

    // create some lights
    // ambient light is just geneal light of the scene, a general wash
    // with given color
    ambientLight( 30, 30, 30 );
    // directional light comes from a certain direction
    //but shines in all directions, like a star
    // and has a certain color
    directionalLight( 255, 250, 200, -400, 800, -600 );

}

function draw() {

    // orbit control lets you be able to control the camera with the mouse
    orbitControl();
    background( 0 );



    // display our movers
    // iterate through movers array
    // calling display on each one
    push();
    translate( -imgSize / 2, -imgSize / 2 );
    for ( let i = 0; i < movers.length; i++ ) {

        let distance = p5.Vector.sub( movers[i].home, movers[i].position );
        distance.normalize();
        distance.mult( 0.5 );

        movers[i].applyForce( distance );
        movers[i].applyDrag( 0.05 );
        movers[i].update();
        movers[i].display();

    }
    pop();

}

function Mover() {

    this.position = createVector( 0, 0, 0 );
    this.home = createVector( 0, 0, 0 );
    this.velocity = createVector( 0, 0, 0 );
    this.acceleration = createVector( 0, 0, 0 );

    this.angularAcceleration = createVector( 0, 0, 0 );
    this.angularVelocity = createVector( 0, 0, 0 );
    this.orientation = createVector( 0, 0, 0 );

    this.mass = 0.5;
    this.topSpeed = 20;
    this.col = color( 255, 200, 0 );

    this.applyForce = function( force ) {

        this.acceleration.add( force );
        this.angularAcceleration.add( force );

    }

    this.applyDrag = function( co ) {

        // compute drag based on objects velocity
        // and a drag coefficient

        // let c = co; // drag coefficent -- scales drag
        let speed = this.velocity.magSq();
        let dragMagnitude = co * speed;

        let drag = this.velocity.copy();
        drag.mult( -1 );
        drag.normalize();
        drag.mult( dragMagnitude );

        this.acceleration.add( drag );
        this.angularAcceleration.add( drag );

    }

    this.update = function() {

        this.velocity.add( this.acceleration );
        this.velocity.limit( this.topSpeed );
        this.position.add( this.velocity );

        // zero out accelerations
        // you could do:
        //this.acceleration.mult( 0 )
        // but this is faster and seems to be more consistant
        this.acceleration.x = 0;
        this.acceleration.y = 0;
        this.acceleration.z = 0;


        this.angularVelocity.add( this.angularAcceleration );
        this.angularVelocity.limit( this.topSpeed );
        this.orientation.add( this.angularVelocity );

        this.angularAcceleration.x = 0;
        this.angularAcceleration.y = 0;
        this.angularAcceleration.z = 0;

        // this.angularAcceleration.mult( 0 );

    }

    this.display = function() {

        push();
            translate( this.position.x, this.position.y, this.position.z );
            rotateX( this.orientation.x );
            rotateY( this.orientation.y );
            rotateZ( this.orientation.z );

            noStroke();
            specularMaterial( this.col );
            box( this.mass );
        pop();

    }

}
