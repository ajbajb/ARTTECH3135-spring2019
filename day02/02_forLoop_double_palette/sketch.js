
// create an array to hold our colors
let palette = [];

function setup() {

    // change the seed number to get a different palette
    randomSeed( 6 );

    // add 5 random colors to or palette array
    for ( let i = 0; i < 5; i++ ) {

        // get a random color
        let col = color( random( 255), random( 255), random( 255) );

        // add it to the palette
        palette[i] = col;
        
    }

    // print out our palette array
    console.log( palette );

    createCanvas( 600, 600 );
    background( 255, 255, 200 );

    let spacing = width / 6;

    for ( let i = 0; i < width; i = i + spacing ) {

        for ( let j = 0; j < height; j = j + spacing ) {

            // we will set the color of each square/area
            // pass in an array to random and
            // get a random index from the array yay!
            let myColor = random( palette );
            stroke( 0 );
            fill( myColor );

            // draw a rectangle at ( i, j )
            rect( i, j, spacing, spacing );

            // creating a string that shows the (i, j) values
            let tex = '(' + i + ',' + j + ')';

            // draw it
            fill(0);
            text( tex, i, j+ 20 );

        }

    }


}

function draw() {

}
