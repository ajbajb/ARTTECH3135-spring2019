// https://editor.p5js.org/ajbajb/sketches/snSH-Iack

let start;
let currentMills;

function setup() {

  createCanvas( 600, 600 );

	// time when program started
	start = Date.now();

}

function draw() {

  	background( 0 );

	// rolling time
	let dNow = Date.now();

	// rolling = start time
	currentMills = dNow - start;
	console.log( currentMills );

	let sec = second();
	let min = minute();
	let h = hour() % 12;

	// map( # to be mapped, input Lo, input hi, out Lo, output Hi )
	let milliAngle = map( currentMills, 0, 60000, 0, TWO_PI );
	let secondsAngle = map( sec, 0, 60, 0, TWO_PI );
	let minuteAngle = map(min, 0, 60, 0, TWO_PI );
	let hourAngle = map( h, 0, 12, 0, TWO_PI );

	push();
		translate( width / 2, height / 2 );
		rotate( -milliAngle );

		stroke( 255 );
		strokeWeight( 5 );

		line( 0, 0, 0, -200 );
	pop();

	push();
		translate( width / 2, height / 2 );
		rotate( secondsAngle );

		stroke( 255, 0, 0 );
		strokeWeight( 4 );

		line( 0, 0, 0, -200 );
	pop();

	push();
		translate( width / 2, height / 2 );
		rotate( minuteAngle );

		stroke( 'deepskyblue' );
		strokeWeight( 10 );

		line( 0, 0, 0, -180 );
	pop();

	push();
		translate( width / 2, height / 2 );
		rotate( hourAngle );

		stroke( 'thistle' );
		strokeWeight( 20 );

		line( 0, 0, 0, -100 );
	pop();
	
}
