#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup()
{
    ofSetWindowShape(640*2, 480);
    grabber.setup(640, 480);
    
    gw = grabber.getWidth();
    gh = grabber.getHeight();
    
    grayPix.allocate(gw, gh, OF_PIXELS_GRAY);
    grayTex.allocate(gw, gh, GL_LUMINANCE);
    
    threshold = 125;
}

//--------------------------------------------------------------
void ofApp::update()
{
    threshold = ofMap(ofGetMouseX(), 0, ofGetWidth(), 0, 255);
    
    grabber.update();
    if (grabber.isFrameNew())
    {
        for (int x = 0; x < gw; x++)
        {
            for (int y = 0; y < gh; y++)
            {
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
