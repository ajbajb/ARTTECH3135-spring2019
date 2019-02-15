
function setup() {

	createCanvas(400, 400);

}

function draw() {

	background(22);

	let time = millis() * 0.003;

	let drawHeight = 0;

	for ( let i = drawHeight; i < height*2; i += 1 ) {

		let diameter = map( i, drawHeight, height, 50, 1 );
		let xPos = 120 * sin( time + i/50 % TWO_PI );
		let col = color( 127 + 127 * sin( time + ( i * 0.0015 ) % TWO_PI ),
                     	 127 + 127 * sin( time + ( i * 0.006 ) % TWO_PI ),
                     	 127 + 127 * sin( time + ( i * 0.073 ) % TWO_PI )
                    	);

  		push();
			translate( width / 2, i/2 );

    		noStroke();
    		fill( col );
  			ellipse( xPos, 0, diameter, diameter );

  		pop();
  	}

}
