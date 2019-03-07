
// you are more likely to see JSON written like this in words.json

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
    console.log( data.words );

    // set the font for our text
    textFont( font );

    // now we can do this!
    console.log( data.words.length );

}

function draw() {

    textSize( data.words[0].size );
    fill( data.words[0].r, data.words[0].g, data.words[0].g );
    text( data.words[0].word, 100, 100 );

    textSize( data.words[1].size );
    fill( data.words[1].r, data.words[1].g, data.words[1].g );
    text( data.words[1].word, 300, 300 );

}
