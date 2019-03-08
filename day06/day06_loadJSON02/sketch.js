
// loading ims.json
// from Corpora
// https://github.com/dariusk/corpora/blob/master/data/art/isms.json

// json data
let data;
// our font
let font;

// keep trtack what index we are in our isms array
let index = 0;

// letter spacing
let gap = 0;
// where to place the word
let anchor;

function preload() {

    //load the json file
    data = loadJSON( 'assets/isms.json' );
    console.log( data );

    // load our font
    font = loadFont( 'assets/AlexBrush-Regular.ttf' );

}

function setup() {

    createCanvas( 600, 600 );

    // set the font for our text
    textFont( font );

    let test = data.isms[2];
    console.log( test );
    console.log( test.length );
    console.log( test[1] );

    anchor = width / 2;

}

function draw() {

    background( 255 );

    // // background
    for ( let y = 0; y < height; y += 2 ) {

        let colR = map( y , 0, height, 0, 255 );
        let colG = y  % 127;
        let colB = map( y, 0, height, 255, 0 );

        stroke( colR, colG, colB );
        strokeWeight( 2 );
        line(0, y, width, y );

    }
    //
    gap += 0.2;
    anchor -= 0.9;
    let ism = data.isms[index];
    console.log( "The one ism is::" + ism );
    //
    fill( 0 );
    textSize( 50 );
    for ( let i = 0; i < ism.length; i++ ) {

        let letterSpacing = i * gap;
        text( ism[i], anchor + letterSpacing, height / 2 );

    }
    //
    // //text( ism, width / 2, height / 2 );

}


function keyPressed() {

    if ( key === ' ' ) {

        console.log( "change!" );

        gap = 0;
        anchor = width / 2;
        index++;
        if ( index >= data.isms.length ) {

            index = 0;

        }

    }

}
