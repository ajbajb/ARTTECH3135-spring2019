#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup()
{
    grabber.setup(640, 480);
    grabberPix.allocate(grabber.getWidth(), grabber.getHeight(), OF_PIXELS_RGB);
    buffer.allocate(grabber.getWidth(), grabber.getHeight(), OF_PIXELS_RGB);
    tex.allocate(grabber.getWidth(), grabber.getHeight(), GL_RGB);
}

//--------------------------------------------------------------
void ofApp::update()
{
    float scale = 0.01;
    
    grabber.update();
    if (grabber.isFrameNew())
    {
        grabberPix = grabber.getPixels();
        
        for (int x = 0; x < grabberPix.getWidth(); x++)
        {
            for (int y = 0; y < grabberPix.getHeight(); y++)
            {
                float sine = 0.5 + 0.5 * sin((x + ofGetMouseX()) * scale);
                float xDisplaced = x + (grabberPix.getWidth() * sine);
                xDisplaced = ofWrap(xDisplaced, 0, grabberPix.getWidth());
                
                ofColor displacedColor = grabberPix.getColor(xDisplaced, y);
                grabberPix.setColor(x, y, displacedColor);
            }
        }
    }
    
    // load pixel data into the texture
    tex.loadData(grabberPix);
}

//--------------------------------------------------------------
void ofApp::draw()
{
    ofBackground( 0 );
    
    tex.draw(0, 0);
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
