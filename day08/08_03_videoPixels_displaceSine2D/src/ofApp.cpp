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
    grabber.update();
    if (grabber.isFrameNew())
    {
        grabberPix = grabber.getPixels();
    
        float time = ofGetElapsedTimef();
    
        for (int x = 0; x < grabberPix.getWidth(); x++)
        {
            for (int y = 0; y < grabberPix.getHeight(); y++)
            {
                // set the color in the buffer pix from some location in the grabberPix
                // offset by the sin value
            
                float scale = 0.001;
                float sine = 0.5 + 0.5 * sin( ((x * ofGetMouseX()) + (y * ofGetMouseY())) * scale);
                int displacedX = x + (grabberPix.getWidth() * sine);
                int displacedY = y + (grabberPix.getHeight() * sine);
                displacedX = ofWrap(displacedX, 0, grabberPix.getWidth());
                displacedY = ofWrap(displacedY, 0, grabberPix.getHeight());
            
                // get color from displaced location
                ofColor pixelColor = grabberPix.getColor(displacedX, displacedY);
                // set the  color at the current location
                buffer.setColor(x,y, pixelColor);
            }
        }
    }
    
    // load pixel data into the texture
    tex.loadData(buffer);
}

//--------------------------------------------------------------
void ofApp::draw()
{
    ofBackground( 0 );
    
    tex.draw(0, 0);
    
    string frameStr = "Framerate::" + ofToString(ofGetFrameRate());
    ofDrawBitmapString(frameStr, 20, ofGetHeight() - 20);
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

