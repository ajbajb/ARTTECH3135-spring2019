
'use strict'

let data;

function preload() {

    let url = 'http://api.open-notify.org/astros.json';
    data = loadJSON( url, function() {
        console.log( 'json loaded' );
    } );

}

function setup() {

    createCanvas( 600, 600 );

    console.log( data );

}

function draw() {

    background( 0 );
    let niceText = "The people in space right now are:"
    fill( 200 );
    text( niceText, 50, 50 );


    let person1 = data.people[0].name;
    let person2 = data.people[1].name;
    let person3 = data.people[2].name;

    fill( 255, 0, 0 );
    text( person1, 50, 100 );

    fill( 255, 0, 0 );
    text( person2, 50, 150 );

    fill( 255, 0, 0 );
    text( person3, 50, 200 );

}
