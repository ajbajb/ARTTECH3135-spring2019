

// this is VARIABLE, it stores a value
// in this case 200
var x = 200;

function setup() {

    // create canvas goes in setup
    // and there is only one canvas
    createCanvas( 600, 600 );

    console.log( x );

    x = x + 100;

    console.log( x );

    // background(45);
    //
    // // green ellipse
    // fill( 0, 255, 0);
    // ellipse( 300, 300, 50, 100 );
    //
    // // 1st is the red square
    // fill( 255, 0, 0 );
    // // xpos, ypos, xsize, ysize
    // rect( 200, 200, 200, 200 );
    //
    // // then is the purple square
    // fill( 255, 0, 255);
    // rect( 100, 200, 300, 100);
    //
    // // green ellipse
    // fill( 0, 255, 0);
    // ellipse( 300, 300, 50, 100 );
    //
    // stroke( 100, 50, 255 );
    // noFill();
    // ellipse( 300, 300, 100, 50 );

}

function draw() {

    background(200);

    //console.log( frameCount ) ;

    stroke( 255, 0, 0 );
    strokeWeight( 2 );
    // green ellipse
    fill( 0, 255, 0);
    ellipse( 300, 300, 50, 100 );

    // 1st is the red square
    fill( 255, 0, 0 );
    // xpos, ypos, xsize, ysize
    rect( x, x, x, x );

    // then is the purple square
    fill( 255, 0, 255);
    rect( 100, x, x+100, 100);

    // green ellipse
    fill( 0, 255, 0);
    ellipse( 300, 300, 50, 100 );

    stroke( 100, 50, 255 );
    noFill();
    ellipse( 300, 300, 100, 50 );

    // you need a start point and an end point
    stroke( 200, 200, 0 );
    strokeWeight( 5 );
    line( 0, 0, width, height );
    line( 0, 0, width, height/2 );
    line( 0, 0, width, height/4 );
    line( 0, 0, width, height/8);
}

// __Some Simple P5 functions__
//
// `createCanvas( w, h )`
//
// `background( r, g, b )`
//
// `line( x1, y1, x2, y2 )`
//
// `rect( x1, y1, w, h )`
//
// `ellipse( x1, y1, w, h )`
//
// `triangle(x1, y1, x2, y2, x3, y3)`
//
// `stroke( r, g, b )`
//
// `strokeWeight( weight )`
//
// `fill()`
//
// `noFill()`
//
// these get put inside of other functions above, as replacements for the letters
//
// `random( max )`
//
// `second()`
//
// `frameCount`
//
// ```javascript
// +.
// -,
// *.
// /,
// %
// =
// ===
// ```
