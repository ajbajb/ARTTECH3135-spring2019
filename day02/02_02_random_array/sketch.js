//

// a look at arrays
// let array = [ 45, 57, 63.777, 20, 56.01 ];
// console.log( array );
//
// let someValue = array[4];
// console.log( someValue );
//
// array[0] = 555;
// console.log( array );
//
// // an empty array
// let anotherArray = [];
//
// console.log( anotherArray );
//
// anotherArray[6] = 474296;
//
// console.log( anotherArray );
//
// console.log( anotherArray.length );

// // a nice approach to random
//
let elegantRandom = [];
//
function setup() {

    createCanvas( 600, 600 );
    colorMode( HSB );

    background( 0 );

    // get 15 random values and store them in a array
    for ( let i = 0; i < 15; i++ ) {

        elegantRandom[i] = random( 100, 500 );

    }

    console.log( elegantRandom );

}

function draw() {
    background( 0 );

    // iterate over the values stored in our Random array
    // stopping at the end ( length ) of the array
    for ( let i = 0; i < elegantRandom.length; i++ ) {

        ellipse( 20 + i*40, elegantRandom[i], 30 );
    }

}


function keyPressed() {

    // rewrite over the values in the array
    for ( let i = 0; i < elegantRandom.length; i++ ) {

        // get another random number
        // put it in the array
        elegantRandom[i] = random( 100, 500 );

    }

}

// these random techniques come from Zach Lieberman
// https://www.instagram.com/zach.lieberman/
