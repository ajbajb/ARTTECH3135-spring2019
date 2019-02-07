
function setup() {

    createCanvas( 600, 600 );

}

function draw() {

    background( 0 );

    masterGrid();

    // yellow Grid
    var currentColor = color( 255, 255, 0 );
    drawGrid( 0, 0, currentColor );
    strokeWeight( 2 );
    fill( 255, 50 );
    rect( 0, 0, 50, 50 );

    // red grid
    push();
    translate( 200, 200 );

        currentColor = color( 255, 0, 100 );
        drawGrid( 0, 0, currentColor );
        strokeWeight( 2 );
        fill( 255, 50 );
        rect( 0, 0, 50, 50 );

    pop();

    // greenish grid
    push();
    translate( 200, 400 );
    rotate( TWO_PI / 10 );

        currentColor = color( 0, 255, 100 );
        drawGrid( 0, 0, currentColor );
        strokeWeight( 2 );
        fill( 255, 50 );
        rect( 0, 0, 50, 50 );

        // blue grid
        push();
        translate( 250, 0 );

            currentColor = color( 50, 0, 255 );
            drawGrid( 0, 0, currentColor );
            fill( 255, 50 );
            rect( 0, 0, 50, 50 );

        pop();

    pop();

}

function masterGrid( ) {

    stroke( 255, 100 );
    strokeWeight( 0.5 );

    // vertical lines
    for ( let x = 0; x < width; x += 10) {

        line( x, 0, x, height );

    }

    // horizontal lines
    for ( let y = 0; y < height; y += 10 ) {

        line( 0, y, width, y );
    }

}


function drawGrid( originX, originY, gridColor ) {

    let lineLength = 100;

    stroke( gridColor );
    strokeWeight( 1 );
    fill( gridColor );

    ellipse( originX, originY, 10 );

    for ( let x = 1; x < 20; x++ ) {

        // vertical line
        line( ( originX - lineLength ) + x * 10,
            originY - lineLength,
            ( originX - lineLength ) + x * 10,
            originY + lineLength
        );

    }

    // horizontal lines
    for ( let y = 1; y < 20; y++ ) {

        line( originX - lineLength,
            ( originY - lineLength ) + y * 10,
            originX + lineLength,
            ( originY - lineLength ) + y * 10
        );

    }

}
