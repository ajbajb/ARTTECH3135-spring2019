
// a nice approach to random

function setup() {

    createCanvas( 600, 600 );

    background( 100 );

}

function draw() {

    // background( 0 );

    randomSeed( frameCount / 50 );

    let col = color( random(255), random(255), random(255), 100 );

    let x1 = 100;
    let x2 = 400;
    let x3 = 400;
    let x4 = 100;

    let y1 = 100;
    let y2 = 100;
    let y3 = 400;
    let y4 = 400;

    x1 = x1 + random( -mouseY, mouseY );
    x2 = x2 + random( -mouseY, mouseY );
    x3 = x3 + random( -mouseY, mouseY );
    x4 = x4 + random( -mouseY, mouseY );

    y1 = y1 + random( -mouseX, mouseX );
    y2 = y2 + random( -mouseX, mouseX );
    y3 = y3 + random( -mouseX, mouseX );
    y4 = y4 + random( -mouseX, mouseX );

    noFill();
    stroke( col );
    beginShape();
    vertex( x1, y1 );
    vertex( x2, y2 );
    vertex( x3, y3 );
    vertex( x4, y4 );
    endShape( CLOSE  );

}

function keyPressed() {

}
