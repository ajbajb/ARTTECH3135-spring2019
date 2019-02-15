// arc clock

// named colors from:
// https://www.rapidtables.com/web/css/css-color.html

function setup() {

    createCanvas( 600, 600 );
	frameRate( 50 );

}

function draw() {

	background( 0 );

  	// a clock hand rotates around a center point
  	// the angle of which is determined by total seconds,
	// minutes, hours
	let sec = second();
	let min = minute();
	let h = hour()%12;

	let secAngle = map( sec, 0, 60, 0, TWO_PI );
	let minAngle = map( min, 0, 60, 0, TWO_PI );
	let hourAngle = map( h, 0, 12, 0, TWO_PI );

	// backface
	push();
		translate( width / 2, height / 2 );
		fill( 'slateblue' );
    	noStroke();
    	ellipse( 0, 0, 500, 500 );

        // draw the clock stuff
		rotate( -HALF_PI );

        // second
		fill( 'crimson' );
		arc( 0, 0, 400, 400, 0, secAngle );

        // minute
		fill( 'thistle' );
		arc( 0, 0, 300, 300, 0, minAngle );

        // hour
		fill( 'deepskyblue' );
		arc( 0, 0, 200, 200, 0, hourAngle );
    pop();

}
