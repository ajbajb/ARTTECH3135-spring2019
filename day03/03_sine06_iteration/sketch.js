
function setup() {

  createCanvas(400, 400);
  //rectMode( CENTER );

}

function draw() {

  background( 0 );

  let time = millis() * 0.005;

  for ( let x = 0; x < width; x += 4 ) {

    for ( let y = 0; y < height; y += 4 ) {

      let i = x + y * width;
      let r = 127 + 127 * sin( ( time + i ) % TWO_PI );
      let g = 127 + 127 * cos( ( time + i ) % TWO_PI );
      let b = 127 + 127 * sin( ( time + i * 0.3 ) % TWO_PI );
      let col = color( r, g, b );

      noStroke();
      fill( col );
      rect( x, y, 8, 8)

    }

  }

}
