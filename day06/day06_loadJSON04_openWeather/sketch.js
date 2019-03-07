
// loading JSON from the web
// get your key from https://home.openweathermap.org/

let data;
let font;

function preload() {

    // load our font
    font = loadFont( 'assets/AlexBrush-Regular.ttf' );

}

function setup() {

    createCanvas( 1200, 600 );


}

function draw() {

    background( 0 );


}

function keyPressed() {

    if ( key === ' ' ) {

        getData();

    }

}

function getData() {

    //'http://api.openweathermap.org/data/2.5/weather?zip=60601&APPID=keyHere'

    let http = 'http://';
    let url = 'api.openWeathermap.org/data/2.5/'
    let query = 'weather?'
    let location = 'zip=60601'

    let key = '&APPID=';
    let myKey = 'put your key here';


    data = loadJSON( http + url + query + location + key + myKey,  function() {

        console.log( data );

    } );

}
