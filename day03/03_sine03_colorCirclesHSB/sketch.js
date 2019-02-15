function setup() {

  createCanvas( 400, 400 );

  colorMode( HSB, 255 );
  blendMode( DIFFERENCE );

}

function draw() {

	clear();
	let time = millis();

	let hueValue = 127 + 127 * sin( time * 0.0002 );
	let satValue = 127 + 127 * sin( time * 0.0004 );
	let brightValue = 127 + 127 * sin( time * 0.0003 );

	let diameter = height / 1.5;

  	noStroke();

	push();
  		translate( width / 2, height / 2 - diameter/6 );

		fill( color( hueValue, 255, 255, 250 ) );
  		ellipse( 0, 0, diameter, diameter );
  	pop();

	push();
  		translate( width / 2 - diameter/6, height / 2 + diameter/6 );

  		fill( color ( 255, satValue, 255, 125 ) );
  		ellipse( 0, 0, diameter, diameter );
  	pop();

  	push();
  		translate( width / 2 + diameter / 6, height / 2 + diameter / 6 );

		fill( color ( 255, 255, brightValue, 125 ) );
  		ellipse( 0, 0, diameter, diameter );
  	pop();

}
