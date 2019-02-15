// 03_simpleClock00

function setup() {

    createCanvas( 600, 600 );
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

    	fill( 100, 100, 150 );
    	noStroke();
    	ellipse( 0, 0, 300, 300 );
    pop();

    // hour
    push();
    	translate( width / 2, height / 2 );
    	rotate( hourAngle );

    	strokeWeight( 6 );
    	stroke( 200, 200, 100 );
    	line( 0, 0, 0, -75 );
    pop();


    // minutes
    push();
      translate( width / 2, height / 2 );
    	rotate( minAngle );

    	strokeWeight( 4 );
    	stroke( 0, 255, 0 );
    	line( 0, 0, 0, -150 );
    pop();

    // seconds
    push();
    	translate( width / 2, height / 2 );
    	rotate( secAngle );

    	strokeWeight( 2 );
    	stroke( 255, 0, 0 );
    	line( 0, 0, 0, -150 );
    pop();

}
