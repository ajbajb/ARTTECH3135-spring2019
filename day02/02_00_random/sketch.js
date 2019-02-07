
// using random number with randomSeed
function setup() {

    createCanvas( 600, 600 );
    colorMode( HSB );

    // seed the random number generator
    // with the same seed,
    // the results will be the same everytime
    randomSeed( 100 );

    // pick a number between 0 - 100
    let hundred = random( 0, 100 )
    console.log( hundred );

    // pick a number between 0 and 1
    let one = random( 0, 1 );
    console.log( one );

    // get 50 numbers between 0 - 100
    for ( let i = 0; i < 50; i++ ) {

        console.log( 'random number '
            + i
            + '::'
            + random( 100 )
        );

    }

}

function draw() {

    // putting randomSeed in draw 'resets' random numbers
    // every draw loop ( so you see no change )

}

// these random techniques come from Zach Lieberman
// https://www.instagram.com/zach.lieberman/
