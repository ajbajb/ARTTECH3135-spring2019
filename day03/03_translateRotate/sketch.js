function setup() {

  createCanvas(400, 400);

  rectMode( CENTER );

}

function draw() {

  let time = millis() * 0.004;

  background( 0 );

  push();
  	translate( width / 2, height / 2 );
  	rotate( time % TWO_PI );

  	stroke( 255, 0, 100 );
  	noFill();
  	rect( 0, 0, 100, 100 );
  pop();

}
