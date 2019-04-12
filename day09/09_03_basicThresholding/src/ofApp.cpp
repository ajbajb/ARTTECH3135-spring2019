#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup()
{
    // sets app window size
    ofSetWindowShape(640*2, 480);
    grabber.setup(640, 480);
    
    gw = grabber.getWidth();
    gh = grabber.getHeight();
    
    // allocate pixels-- they are only one channel
    grayPix.allocate(gw, gh, OF_PIXELS_GRAY);
    grayTex.allocate(gw, gh, GL_LUMINANCE);
    
    // give initial threshold value
    threshold = 125;
}

//--------------------------------------------------------------
void ofApp::update()
{
    // set threshold based on mouseX position
    // we map mouseX position to the range of 0-255
    threshold = ofMap(ofGetMouseX(), 0, ofGetWidth(), 0, 255);
    
    grabber.update();
    if (grabber.isFrameNew())
    {
        for (int x = 0; x < gw; x++)
        {
            for (int y = 0; y < gh; y++)
            {
                // get the brightness value for current pixel
                int brightness = grabber.getPixels().getColor(x, y).getBrightness();
                
                if (brightness > threshold)
                {
                    grayPix.setColor(x, y, ofColor(0));
                }
                else
                {
                    grayPix.setColor(x, y, ofColor(255));
                }
            }
        }
        
        grayTex.loadData(grayPix);
    }
}

//--------------------------------------------------------------
void ofApp::draw()
{
    grabber.draw(0, 0);
    grayTex.draw(gw, 0);
    
    string threshStr = "Threshold:: " + ofToString(threshold);
    ofDrawBitmapString(threshStr, 20, ofGetHeight() - 20);
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
