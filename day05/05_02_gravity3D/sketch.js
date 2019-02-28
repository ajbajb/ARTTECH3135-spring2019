
'use strict'

// ------ Gravity ----- //


let movers = [];
let attractors = [];
const num = 300;

let dlCol;
let dlPos;

let boundingBox;
let persistForce;
let wind;

function setup() {

    createCanvas( 600, 600, WEBGL );

    persistForce = createVector( random( -0.01, 0.01 ), random( -0.01, 0.01 ), random( -0.01, 0.01 ) );
    wind = createVector( 0.1, -0.02, -0.01 );

    for ( let i = 0; i < num; i++ ) {

        createMover();

    }

    boundingBox = { x: 300, y: 300, z: 300 };
    ambientLight( 10 );
    // direction light vector
    // where you want the LIGHT TO SHINE TO
    dlPos = createVector( 300, -300, -300 );
    dlCol = color( 255, 255, 255 );
    directionalLight( dlCol, dlPos );

}

function createMover() {

    let mover = new Mover3D();
    mover.mass = random( 0.2, 1 );
    mover.col = color( random( 255 ), random( 255 ), random( 255 ) );

    movers.push( mover );

}


function draw() {

    background( 0 );
    orbitControl();

    for ( let i = 0; i < movers.length; i++ ) {

        if ( keyIsPressed ) {
            if ( key === 'f' ) {

                movers[i].applyForce( wind );

            }

        }

        movers[i].applyForce( persistForce );
        movers[i].update();
        movers[i].checkEdges();
        movers[i].display();

    }

    push();
        fill( 255, 0, 0, 8 );
        box( boundingBox.x );
    pop();

}

function Mover3D() {

    this.position = createVector( 0, 0, 0 );
    this.velocity = createVector( 0, 0, 0 );
    this.acceleration = createVector( 0, 0, 0 );

    this.col = color( 0, 255, 100 );
    this.mass = 1;

    this.applyForce = function( force ) {

        let f = p5.Vector.div( force, this.mass );
        this.acceleration.add( f )

    }

    this.update = function() {

        this.getDrag( this.velocity );
        this.velocity.add( this.acceleration );
        this.velocity.limit( 15 );

        this.position.add( this.velocity );

        this.acceleration.mult( 0 );

    }

    this.getDrag = function( vec ) {

        let dragCo = 0.001;
        let speed = vec.mag();

        let dragMagnitude = dragCo * speed * speed;

        let drag = vec.copy();
        drag.mult( -1 );
        drag.normalize();

        this.applyForce( drag.mult( dragMagnitude ) );
        //return drag.mult( dragMagnitude );

    }

    this.checkEdges = function() {

        let s = this.mass * 20;
        if ( this.position.x > ( boundingBox.x / 2 ) - s  ) {
            this.velocity.x *= -1;
            this.position.x = ( boundingBox.x / 2 ) - s;
        } else if ( this.position.x < ( -boundingBox.x / 2 ) + s ) {
            this.velocity.x *= -1;
            this.position.x = ( -boundingBox.x / 2 ) + s;
        }

        if ( this.position.y > ( boundingBox.y / 2 ) - s  ) {
            this.velocity.y *= -1;
            this.position.y = ( boundingBox.y / 2 ) - s;
        } else if ( this.position.y < ( -boundingBox.y / 2 ) + s ) {
            this.velocity.y *= -1;
            this.position.y = ( -boundingBox.y / 2 ) + s;
        }

        if ( this.position.z > ( boundingBox.z / 2 ) - s ) {
            this.velocity.z *= -1;
            this.position.z = ( boundingBox.z / 2 ) - s;
        } else if ( this.position.z < ( -boundingBox.z / 2 ) + s ) {
            this.velocity.z *= -1;
            this.position.z = ( -boundingBox.z / 2 ) + s;
        }

    }

    this.display = function() {

        push();
            translate( this.position.x, this.position.y, this.position.z );

            noStroke();
            specularMaterial( this.col );
            sphere( this.mass * 20 );
        pop();

    }

}

function keyPressed() {

    if ( keyCode === LEFT_ARROW ) {

        cameraX += -1;
        console.log( "move left!" );

    } else if ( keyCode === RIGHT_ARROW ) {

        cameraX += 1;
        console.log( "move right" );

    }

}
