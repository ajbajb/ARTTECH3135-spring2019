
// loading JSON from the web

let data;
let font;

function preload() {

    let url = 'http://api.open-notify.org/astros.json';
    //load the json file
    data = loadJSON( url );
    console.log( data );

    // load our font
    font = loadFont( 'assets/AlexBrush-Regular.ttf' );

}

function setup() {

    createCanvas( 600, 600 );

    // set the font for our text
    textFont( font );

    console.log( data );

}

function draw() {

    background( 255 );

    // display who is in space

}
