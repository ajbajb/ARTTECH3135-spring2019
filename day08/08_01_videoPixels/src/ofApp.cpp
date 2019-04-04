#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup()
{
    // setup the grabber and allocate memory for the pixels
    grabber.setup(320, 240);
    grabberPix.allocate(grabber.getWidth(), grabber.getHeight(), OF_PIXELS_RGB);

}

//--------------------------------------------------------------
void ofApp::update()
{
    grabber.update();
    if (grabber.isFrameNew())
    {
        grabberPix = grabber.getPixels();
    }
}

//--------------------------------------------------------------
void ofApp::draw()
{
    // draw the original camera frame
    ofSetColor(255);
    grabber.draw(0, 0);
    
    // move the origin of the 'canvas'
    ofPushMatrix();
    ofTranslate(0, grabber.getHeight());
    // we will  iterate through the pixels
    // but we will skip every 10 (or whatever step is set to )
    int step = 10;
    for (int x = 0; x < grabberPix.getWidth(); x += step)
    {
        for (int y = 0; y < grabberPix.getHeight(); y += step )
        {
            // get that color of the pixel at that location
            ofColor col = grabberPix.getColor(x, y);
            
            // use the color to fill in a circle at that location
            ofSetColor(col);
            ofFill();
            ofDrawCircle(x, y, step*0.5);
        }
    }
    
    ofPopMatrix();
}

//--------------------------------------------------------------
void ofApp::keyPressed(int key){

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
