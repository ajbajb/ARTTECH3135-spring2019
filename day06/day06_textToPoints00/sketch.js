

let fontFile = ' ';

function preload() {

    font = loadFont( fontFile );

}

function setup() {

    creatCanvas( 600, 600 );

    // textToPonts
    let points = textToPoints( textStr, width / 2, height / 2, 60, {

        sampleFactor: 1,
        simplifyThreshold: 0

    } );

}

function draw() {

    background( 0 );


}





// fill( words[0].r, words[0].g, words[0].b );
// textSize( words[0].size );
// text( words[0].word, 100, 100 );
//
// fill( words[1].r, words[1].g, words[1].b );
// textSize( words[1].size );
// text( words[1].word, 200, 200 );
