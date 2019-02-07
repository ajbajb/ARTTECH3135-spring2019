

function setup() {

    createCanvas( 600, 600 );
    background( 50 );

    stroke( 255, 255, 0 );
    line( 50, 50,  200, 200 );

    // we could do this a lot
    line( 55, 50,  200, 200 );
    line( 60, 50,  200, 200 );
    line( 65, 50,  200, 200 );
    line( 70, 50,  200, 200 );
    line( 75, 50,  200, 200 );
    line( 80, 50,  200, 200 );
    line( 85, 50,  200, 200 );
    line( 90, 50,  200, 200 );

    // or we could use a for() loop


    for ( let i = 0; i < 200; i = i + 1 ) {

        let xpos = i * 5;
        line( 50 + xpos, 50,  200, 200 );

    }

    // for ( let i = 0; i <= 5000; i = i + 1 ) {
    //
    //     // as long as i is less than 5
    //     // do this code
    //
    //     console.log( "i=" + i );
    //     console.log( random( 100 ) );
    //
    //     // at the end of this loop
    //     // add one to the value of i
    // }


}
