
'use strict ';

let movers = [];
function setup() {

    blendMode( ADD );
    createCanvas( 600, 600 );

    for ( let i = 0; i < 50; i++ ) {

        createMover();

    }

}

function draw() {

    background( 0 );

    let time = millis() * 0.02;
    //console.log( time );

    // our mouse vector
    let mouse = createVector( mouseX, mouseY );

    // iterate through our movers array
    for ( let i = 0; i < movers.length; i++ ) {

        // movers accelerate towards the mouse
        let distance = p5.Vector.sub( mouse, movers[i].position );
        distance.normalize();
        distance.mult( 0.2 );

        movers[i].acceleration = distance;

        movers[i].update( time );
        movers[i].display();

        // if a movers life count get to its lifeSpan
        if ( movers[i].life > movers[i].lifeSpan ) {

            // remove it from the array
            movers.splice( i, 1 );

        }

    }
        // every 120 frames
        if ( frameCount % 120 == 0 ) {

            // add another mover
            console.log( "another mover!" );
            createMover();

        }

}

function createMover() {

    let mover = new Mover();
    mover.position = createVector( random( width ), random( height ) );
    mover.size = random( 15, 50 );
    mover.lifeSpan = random( 100, 1275 );
    movers.push( mover );

}

function Mover() {

    this.position = createVector( 0, 0 );
    this.velocity = createVector( 0, 0 );
    this.acceleration = createVector( 0, 0 );
    this.size = 20;
    this.topSp = 5  - ( this.size * 0.05 );
    this.lifeSpan = 255;
    this.life = 0;

    this.col = color( 255, 200, 100, 100 );
    this. history = [];

    this.update = function( t ) {

        this.wiggle = createVector( 0, sin( t ) * 0.5 );

        //update history
        if ( this.history.length >= 15 ) {

            // remove first element
            this.history.shift();

        }
        // add another to the end
        this.history.push(
            {
                x: this.position.x,
                y: this.position.y
            }
        )

        this.acceleration.add( this.wiggle );
        // update position
        this.velocity.add( this.acceleration );
        this.velocity.limit( this.topSp );
        this.position.add( this.velocity );

        // update life
        this.life += 1;

    }

    this.display = function() {

        let transparency = sin( ( ( this.life  / this.lifeSpan ) * PI ) % PI ) * 75;
        noStroke();
        fill( red( this.col ), green( this.col ), blue( this.col ), transparency
     );
        ellipse( this.position.x, this.position.y, this.size, this.size );

        if ( this.history.length > 4 ) {
            noStroke();
            for ( let i = 0; i < this.history.length; i++ ) {

                fill( 255, 0, 255, transparency - 60 + ( i * 1.5 ) );
                //fill( 255, 0, 255, ( 30 + ( i * 10 ) ) - this.life * 0.2 );
                ellipse( this.history[i].x, this.history[i].y, 10 + ( i * 1.5 ), 10 + ( i * 1.5 ) );

            }
        }

    }

}
