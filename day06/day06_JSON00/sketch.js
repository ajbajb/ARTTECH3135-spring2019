

function setup() {

    createCanvas( 400, 400 );

    console.log( rocks );
    console.log( words );
    console.log( words[0] );
    console.log( words[0].word );

}

function draw() {

    background( 0 );

    fill( rocks.r, rocks.g, rocks.b );
    ellipse( 50, 50, 25, 100 );

    fill( words[0].r, words[0].g, words[0].b );
    textSize( words[0].size );
    text( words[0].word, 100, 100 );

    fill( words[1].r, words[1].g, words[1].b );
    textSize( words[1].size );
    text( words[1].word, 200, 200 );

}

//JSON!!
// key: value pairs
let rocks = {

    r: 250,
    g: 20,
    b: 50

};


// values can be anything
// even other objects
let words = {

    0: {

        word: "bug",
        r: 255,
        g: 0,
        b: 255,
        size: 30

    },

    1: {

        word: "puppy",
        r: 0,
        g: 255,
        b: 100,
        size: 14

    }

}
