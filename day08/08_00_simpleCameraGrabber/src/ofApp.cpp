#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup()
{
    
    // request to capture at particular dimentions
    grabber.setup(640, 480);
    
}

//--------------------------------------------------------------
void ofApp::update()
{
    // update the camera frame
    grabber.update();
    
    // if the frame is new
    if (grabber.isFrameNew())
    {
        // do stuff with the new frame
        // Such as getting access to the pixels
        
    }

}

//--------------------------------------------------------------
void ofApp::draw()
{
    
    // draw the original grabber to screen
    grabber.draw(0, 0);

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
