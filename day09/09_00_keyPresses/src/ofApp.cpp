#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup()
{
    // set the background to a draw grey color
    ofBackground(40);
    // by default, oF will redraw a background every frame, setting this
    // to false disables that so that e do not draw a background over previous frames
    ofSetBackgroundAuto(false);
    
    // starting values for xPos and yPos
    xPos = ofGetWidth()/2;
    yPos = ofGetHeight()/2;
    
    // this sets how much we move our circle by each time we hit an arrow key
    stepAmount = 5;
}

//--------------------------------------------------------------
void ofApp::update()
{
    // all we do in update is check the values of xPos and yPos
    // to make sure every value is in the window
    // if yPos is less than zero
    if (yPos < 0)
    {
        // send it to the other side of the sreen
        yPos = ofGetHeight();
    }       // if its greater than the height of the window
    else if ( yPos > ofGetHeight())
    {
        // set it to zero
        yPos = 0;
    }
    
    // same for xPos
    if ( xPos < 0)
    {
        xPos = ofGetWidth();
    }
    else if ( xPos > ofGetWidth())
    {
        xPos = 0;
    }

}

//--------------------------------------------------------------
void ofApp::draw()
{
    //we get the fill color from the values of xPos and yPos
    // mapped to the range of color channels 0-255
    int fillRed = ofMap(xPos, 0, ofGetWidth(), 0, 255);
    int fillGreen = ofMap(yPos, 0, ofGetHeight(), 0, 255);
    int fillBlue = ofMap(xPos + yPos, 0, ofGetWidth()+ofGetHeight(), 255, 0);
    
    ofSetColor(fillRed, fillGreen, fillBlue);
    ofFill();
    // the circle will be at xPos, yPos
    ofDrawCircle( xPos, yPos, 10);
    
    

}

//--------------------------------------------------------------
void ofApp::keyPressed(int key)
{
    // if we hit the let arrow
    if (key == OF_KEY_LEFT)
    {
        // decrease xPos y stepAmount, which will move the circle to the left
        xPos -= stepAmount;
    }       // if we press the right arrow
    else if (key == OF_KEY_RIGHT)
    {
        // increase xPos, which will move the circle to the right
        xPos += stepAmount;
    }
    
    // ditto for yPos
    if (key == OF_KEY_UP)
    {
        yPos -= stepAmount;
    }
    else if (key == OF_KEY_DOWN)
    {
        yPos += stepAmount;
    }
}

//--------------------------------------------------------------
void ofApp::keyReleased(int key){

}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y ){

}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseEntered(int x, int y){

}

//--------------------------------------------------------------
void ofApp::mouseExited(int x, int y){

}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h){

}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg){

}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo){ 

}
