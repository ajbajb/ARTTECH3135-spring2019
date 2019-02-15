
function setup() {

  createCanvas( 600, 600 );

}


function draw() {

  background( 0 );

  noFill();
  stroke( 255, 0, 0 );
  strokeWeight( 15 );
  point( width / 4, height / 4 );
  rect( width / 4 - 50, height / 4 - 50, 100, 100 );

  // push();

  // move (0, 0) to another location!
  translate( width / 4, height / 4 );

  stroke( 0, 255, 0 );
  strokeWeight( 9 );
  point( 0, 0 );  // point drawn at (0, 0 ) but not at "(0, 0)"
  rect( 0 - 25, 0 -25, 50, 50 );

  // pop();

  // move (0, 0) to another location
  // translations accumulate!!
  translate( width / 4, height / 4 );
  stroke( 0, 100, 255 );
  strokeWeight( 3 );
  point( 0, 0 );  // point drawn at (0, 0 ) but not at "(0, 0)"
  rect( 0 - 25, 0 -25, 50, 50 );

  
  //uncomment the push() and pop() lines above

}
