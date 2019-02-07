

'use strict';
// 01_drawing1_00
// TODO: figure out blending

// With color number 1, randomly place 10 dots on the page.
// With color number 1, connect 2 dots to create a circle, repeat until dots are connected.
// with color number 2, make 15 more dots.
// With color number 2, connect 2 dots to make a triangle continue until all dots are connected.
// with color number 3 and 4, fill intersecting sections.

var col1;
var col2;
var col3;
var col4;

// points to hold circle coordinates
var circleX = [];
var circleY = [];

// points to hold triangles coordinates
var triX = [];
var triY = [];

function setup() {

    let backgroundColor = color( 250, 250, 245 );

    // BLEND, DARKEST, LIGHTEST, DIFFERENCE, MULTIPLY, EXCLUSION, SCREEN, REPLACE, OVERLAY, HARD_LIGHT, SOFT_LIGHT, DODGE, BURN, ADD or NORMAL
    blendMode( HARD_LIGHT );

    createCanvas( 600, 600 );
    background( backgroundColor );
    col1 = color( random( 255 ), random( 255 ), random( 255 ) );

    // collect points and draw dots with color number 1
    for ( let i = 0; i < 10; i++ ) {

        let x = random( width );
        let y = random( height );

        circleX.push( x );
        circleY.push( y );

        noStroke();
        fill( col1 );
        ellipse( circleX[i], circleY[i], 5, 5,);

    }

    // draw the circles connecting those dots
    for ( let i = 0; i < circleX.length-1; i += 2 ) {

        // use midPoint formula to get the center of the circle
        // midpoint = [ (x1 + x2) / 2, (y1 + y2 / 2) ]
        let midPointX = ( circleX[i] + circleX[i+1] ) / 2;
        let midPointY = ( circleY[i] + circleY[i+1] ) / 2;

        // diameter is the distance from point1 to point2
        let d = dist( circleX[i], circleY[i], circleX[i+1], circleY[i+1] );

        stroke( col1 );
        noFill();
        ellipse( midPointX, midPointY, d, d );

    }

    // with color number 2, make 15 more dots.
    col2 = color( random( 255), random( 255), random( 255) );

    for ( let i = 0; i < 15; i++ ) {

        let x = random( width );
        let y = random( height );

        triX.push( x );
        triY.push( y );

        noStroke();
        fill( col2 );
        ellipse( triX[i], triY[i], 5, 5,);

    }

    // With color number 2, connect 2 dots to make a triangle
    // continue until all dots are connected.
    col3 = color( random( 255), random( 255), random( 255), 1 );
    col4 = color( random( 255), random( 255), random( 255), 1 );

}

function draw() {

    for ( let i = 0; i < circleX.length-1; i += 2 ) {

        // use midPoint formula to get the center of the circle
        // midpoint = [ (x1 - x2) / 2, (y1 - y2 / 2) ]
        let midPointX = ( circleX[i] + circleX[i+1] ) / 2;
        let midPointY = ( circleY[i] + circleY[i+1] ) / 2;

        // diameter is the distance from point1 to point2
        let d = dist( circleX[i], circleY[i], circleX[i+1], circleY[i+1] );

        stroke( col1 );
        fill( col3 );
        ellipse( midPointX, midPointY, d, d );

    }

    for ( let i = 0; i < triX.length-1; i += 2 ) {

        stroke( col2 );
        fill( col4 );
        triangle( triX[i], triY[i], triX[i+1], triY[i+1], triX[i], triY[i+1] );

    }

    if ( frameCount % 30 === 0 ) {

        noLoop();

    }

}
