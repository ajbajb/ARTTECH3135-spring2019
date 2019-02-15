
function setup() {
  
  createCanvas( 600, 600 );
  
}


function draw() {
 
  background( 0 );
  
  noFill();
  stroke( 255, 0, 0 );
  strokeWeight( 12 );
  point( width / 4, height / 4 );
  rect( width / 4 - 50, height / 4 - 50, 100, 100 );
  
//   // move (0, 0) to another location!
  translate( width / 4, height / 4 );
  
  stroke( 0, 255, 0 );
  strokeWeight( 7 );
  point( 0, 0 );  // point drawn at (0, 0 ) but not at "(0, 0)"
  rect( 0 - 25, 0 -25, 50, 50 );
  
  
}