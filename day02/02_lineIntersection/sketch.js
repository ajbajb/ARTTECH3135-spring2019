
//line intersection

//'use strict';
function setup() {

    createCanvas( 400, 400 );

}

function draw() {

    background( 250, 250, 235 );

    strokeWeight( 5 );

    // dynamic mouse conrolled line
    stroke( 0, 100, 255, 100 );
    line( 0, 0, mouseX, mouseY );

    // static line

    // check if it intersects with out dynamic line
    // if it does, color it red else green
    let intersect = new p5.Vector();
    let intersectionDetected = segmentIntersection( 0, 0, mouseX, mouseY, 100, 300, 200, 100, intersect );
    if ( intersectionDetected ) {

        stroke( 0, 150 );
        ellipse( intersect.x, intersect.y, 5, 5 );

        console.log( intersect.x );
        stroke( 255, 50, 0, 100 );

    } else {

        stroke( 0, 255, 100, 100 );

    }

    line( 100, 300, 200, 100 );

}


// write up docs for this

/// \brief Determine the intersection between two lines.
/// \param lineAstartX, lineAstartY - Start points for first line.
/// \param lineAendX, lineAendY - End point for first line.
/// \param lineBstartX, lineBstartY -  Starting points for second line.
/// \param lineBendX, lineBendY - End points for second line.
/// \param intersection - p5.vector or object reference in which to store the computed intersection point.
/// \returns True if the lines intersect.

function segmentIntersection( lineAstartX, lineAstartY, lineAendX, lineAendY,
    lineBstartX, lineBstartY, lineBendX, lineBendY, intersection ) {

    let diffLAx, diffLAy;
    let diffLBx, diffLBy;
    let compareA, compareB;

    diffLAx = lineAendX - lineAstartX;
    diffLAy = lineAendY - lineAstartY;
    diffLBx = lineBendX - lineBstartX;
    diffLBy = lineBendY - lineBstartY;

    compareA = ( diffLAx * lineAstartY ) - ( diffLAy * lineAstartX );
    compareB = ( diffLBx * lineBstartY ) - ( diffLBy * lineBstartX );

    if (
        (
            ( ( diffLAx * lineBstartY - diffLAy * lineBstartX ) < compareA ) ^
            ( ( diffLAx * lineBendY - diffLAy * lineBendX ) < compareA )
        )
        &&
        (
            ( ( diffLBx * lineAstartY - diffLBy * lineAstartX ) < compareB ) ^
            ( ( diffLBx * lineAendY - diffLBy * lineAendX ) < compareB )
        )
    )
    {

        let lDetDivInv = 1 / ( ( diffLAx * diffLBy ) - ( diffLAy * diffLBx ) );
        intersection.x = - ( ( diffLAx * compareB ) - ( compareA * diffLBx ) ) * lDetDivInv;
        intersection.y = - ( ( diffLAy * compareB ) - ( compareA * diffLBy ) ) * lDetDivInv;

        return true;

    }

    return false;

}
