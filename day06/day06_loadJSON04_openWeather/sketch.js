
// loading JSON from the web
// get your key from https://home.openweathermap.org/
// you neet to sign up for an API key on their website
'use strict'

let dataStr;
let font;

function preload() {

    // load our font
    font = loadFont( 'assets/AlexBrush-Regular.ttf' );

}

function setup() {

    createCanvas( 600, 600 );

}

function draw() {

    background( 0 );

    fill( 0, 255, 50 );
    text( dataStr, 20, 20, 500, height );

}

function keyPressed() {

    // you have restrictions for how many times you can rerquest the data
    // ususally this is once a minute or something like that, maybe its a daily limit
    // so it is better to only request the data when you need to update it
    // otherwise, they will cut you off

    if ( key === ' ' ) {

        getData();

    }

}

function getData() {

    // 'http://api.openweathermap.org/data/2.5/weather?zip=60601&APPID=YOUR_KEY'

    let http = 'https://';
    let url = 'api.openWeathermap.org/data/2.5/'
    let query = 'weather?'
    let location = 'zip=60601'

    let key = '&APPID=';
    let myKey = 'YOUR KEY';


    let data = loadJSON( http + url + query + location + key + myKey,  function() {

        console.log( data );

        // convert json data to a string so we can print it out as is
        dataStr = JSON.stringify( data );
        // find all the commas in the string and replace them with ", " (comma and a space)
        dataStr = dataStr.replace( /,/g, ', ' );

    } );

}
