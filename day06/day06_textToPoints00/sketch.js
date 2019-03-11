
'use strict'
// path to out font file
let fontFile = 'assets/AlexBrush-Regular.ttf';
let font;
// an array to hold the points extracted from textToPoints();
let points = [];

function preload() {

    // load the font
    font = loadFont( fontFile, function() {
        console.log( "Font loaded" );
    } );

}

function setup() {

    createCanvas( 600, 600 );

    let textStr = "BLOT";

    // run textToPoints on the font and put the reult in points[]
    //
    // pass in the text to extract the points from
    // the tets location on the canvas, and its size
    // think of the sampleFactor as the 'resolution', lower number will reult in less points
    points = font.textToPoints( textStr, width / 4, height / 2, 90, {

        sampleFactor: 0.5,
        simplifyThreshold: 0

    } );

    console.log( points );

}

function draw() {

    background( 0 );

    let time = millis() * 0.0005;

    // iterate through points array and draw the points
    for ( let i = 0; i < points.length; i++ ) {

        let offset = sin( time + ( -i * 0.0009 ) ) * 25 + 25;
        let p = points[i];
        noStroke();
        fill( 255, 0, 255, p.alpha );
        ellipse( p.x, p.y, offset, offset );

    }

}
