function setup() {

  createCanvas( 600, 600 );

}


function draw() {

  background( 0 );

  // rotations ALWAYS happen around 0, 0 in current matrix
	// so this is a BAD example
  rotate( millis() * 0.002 % TWO_PI);
  noFill();
  stroke( 255, 0, 0 );
  strokeWeight( 15 );
  point( width / 4, height / 4 );
  rect( width / 4 - 50, height / 4 - 50, 100, 100 );

  push();
  	// move (0, 0) to another location!
 	 translate( width / 4, height / 4 );

  	stroke( 0, 255, 0 );
  	strokeWeight( 9 );
 	point( 0, 0 );
  	rect( 0 - 25, 0 -25, 50, 50 );
  
  	//push();
  		// translations accumulate!!
  		translate( width / 4, height / 4 );
  		stroke( 0, 100, 255 );
  		strokeWeight( 3 );
  		point( 0, 0 );
  		rect( 0 - 25, 0 -25, 50, 50 );
  	//pop();

  pop();


}
