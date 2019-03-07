
// loading JSON from the web

let data;
let font;

let locData;
let long;
let lat;

function preload() {

    let url = 'http://api.open-notify.org/astros.json';
    //load the json file
    data = loadJSON( url );
    console.log( data );

    // load ISS location json
    // we will put the response in a CALL-BACK
    locData = loadJSON( "http://api.open-notify.org/iss-now.json", function() {

        console.log( locData );
        long = locData.iss_position.longitude;
        lat = locData.iss_position.latitude;
        console.log( "longitude is " + long );

    } );

    // load our font
    font = loadFont( 'assets/AlexBrush-Regular.ttf' );

}

function setup() {

    createCanvas( 1200, 600 );
    getLocation();
    console.log( locData );

    // the the current position and map it to the screen coordinates
    startLong = map(long, -180, 180, 0, height );
    startLat = map(lat, -180, 180, 0, width );

    // set the font for our text
    textFont( font );

    console.log( data );

}

function draw() {

    background( 0 );

    // map the current long and lat values from our data
    let mappedLong = map( long, -180, 180, 0, width );
    let mappedLat = map( lat, 90, -90, 0, height );
    console.log( "mL " + mappedLong + " " + "mLat " + mappedLat );


    // every 600 frames pull data out of the new JSON file
    if ( frameCount % 600 === 0 ) {

        getLocation();

    }

    let mappedChiLong = map( chiTown.long, -180, 180, 0, width );
    let mappedChiLat = map( chiTown.lat, 90, -90, 0, height );

    fill( 255, 0, 255 );
    ellipse( mappedChiLong, mappedChiLat, 5, 5 );

    // display where the ISS was when we started the sketch
    fill( 0, 255, 0 );
    ellipse( startLong, startLat, 10, 10 );

    // display where it is now currently
    fill( 255, 0, 0 );
    ellipse( mappedLong, mappedLat, 10, 10 );



}

function getLocation() {

    locData = loadJSON( "http://api.open-notify.org/iss-now.json", function() {

        console.log( locData );
        long = locData.iss_position.longitude;
        lat = locData.iss_position.latitude;
        console.log( "longitude is " + long );

    } );

}

let chiTown = {

    long: 41.85003,
    lat: -87.65005

}
