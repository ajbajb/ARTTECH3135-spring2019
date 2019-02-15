function setup() {

	createCanvas( 600, 600 );
}

function draw() {

	background( 0 );

	let time = millis() * 0.0003;

	let r = 127 + 127 * sin( time * 1 );
	let g = 127 + 127 * sin( time * 0.05 );
	let b = 127 + 127 * sin( time * 0.003 );

	for ( let i = 0; i < 100; i++ ) {

		let sineValue = sin( time + i );  //change the '+' to '*'
		let yPos = map( sineValue, -1, 1, 0, height );

		let d = 10;
		fill(r, g, b );
		ellipse( i * 10, yPos, d, d );

	}

}
