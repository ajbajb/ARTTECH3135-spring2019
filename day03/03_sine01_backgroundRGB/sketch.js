
function setup() {

  createCanvas(400, 400);

}

function draw() {

  	let time = millis();
  	let freq = 0.0008;

	let sinR = sin( time * freq + 0.1 );
	let sinG = sin( time * freq + 0.3 );
	let sinB = sin( time * freq + 0.2 );

  	let redValue = map( sinR, -1, 1, 0, 255 );
  	let greenValue = map( sinG, -1, 1, 0, 255 );
  	let blueValue = map( sinB, -1, 1, 0, 255 );

  	let col = color( redValue, greenValue, blueValue );

  	background( col );


  // alot of times, I will just write it like this

  // let redValue =  127 + 127 * sin( time * freq + 0.1 );

}
