

// moving the json data to an external file

let data;
let font;

function preload() {

    //load the json file
    data = loadJSON( 'assets/words.json' );
    console.log( data );

    // load our font
    font = loadFont( 'assets/AlexBrush-Regular.ttf' );

}

function setup() {

    createCanvas( 600, 600 );
    console.log( data[0] );

    // set the font for our text
    textFont( font );

    console.log( data.length );

}

function draw() {

    textSize( data[0].size );
    fill( data[0].r, data[0].g, data[0].g );
    text( data[0].word, 100, 100 );

    textSize( data[1].size );
    fill( data[1].r, data[1].g, data[1].g );
    text( data[1].word, 300, 300 );

}
