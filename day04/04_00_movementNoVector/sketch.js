
// no Vectors

let xPos = 1;
let yPos = 1;
let xDirection = 1;
let yDirection = 1;

function setup() {

    createCanvas( 600, 600 );

}

function draw() {

    background( 0 );
    let xSpeed = map( mouseX, 0, width, 0, 50 );
    let ySpeed = map( mouseY, 0, height, 0, 50 );

    checkWalls();

    xPos += xSpeed * xDirection;
    yPos += ySpeed * yDirection;

    fill( 0, 255, 200 );
    ellipse( xPos, yPos , 10, 10 );

}


function checkWalls() {

    if ( xPos >= width || xPos <= 0 ) {

        xDirection *= -1;
    }

    if ( yPos >= height || yPos <= 0 ) {

        yDirection *= -1

    }

}
