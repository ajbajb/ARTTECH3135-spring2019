
function setup() {

  createCanvas(400, 400);
  blendMode( ADD );

}

function draw() {

	clear();
	let time = millis();

	let redValue = 127 + 127 * sin( time * 0.0002 );
	let greenValue = 127 + 127 * sin( time * 0.0001 );
	let blueValue = 127 + 127 * sin( time * 0.0003 );

	let diameter = height / 1.5;

	noStroke();

	push();
		translate( width / 2, height / 2 - diameter/6 );

		fill( color( redValue, 0, 0, 250 ) );
		ellipse( 0, 0, diameter, diameter );
  	pop();

	push();
		translate( width / 2 - diameter/6, height / 2 + diameter/6 );

		fill( color ( 0, greenValue, 0, 250 ) );
		ellipse( 0, 0, diameter, diameter );
	pop();

	push();
		translate( width / 2 + diameter / 6, height / 2 + diameter / 6 );

		fill( color ( 0, 0, blueValue, 250 ) );
		ellipse( 0, 0, diameter, diameter );
	pop();

}
