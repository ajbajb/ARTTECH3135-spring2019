
function setup() {

  createCanvas(400, 400);

}

function draw() {

  background(0);

  let time = millis();
  let freq = 0.0001;

  for ( let i = 0; i < 20; i++ ) {

	let sineValue = sin( time * freq * i );
  	let xPos = map( sineValue, -1, 1, 0, width );

    fill( 170 + ( i * 4 ), 0, 250 );
    ellipse( xPos, i * 20, 10, 10 );

  }

}
