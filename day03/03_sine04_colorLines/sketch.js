
function setup() {

	createCanvas( 400, 400) ;
	colorMode( HSB );

}

function draw() {

	background( 0 );
	randomSeed( mouseX * 500 );
	let weight = map( mouseY, 0, height, 1, width );

	let time = millis() * 0.0003;

	for ( let i = 0; i < width; i++ ) {

        let sineValue = sin( time + i % TWO_PI );
		let xPos = map( sineValue, -1, 1, 0, width );

		stroke( random( 360 ), 100, 100, 0.25 );
  		strokeWeight( weight );
  		line( xPos, 0, xPos, height );

	}

}
