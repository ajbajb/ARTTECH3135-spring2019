#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup()
{
    grabber.setup(640, 480);
    
    gw = grabber.getWidth();
    gh = grabber.getHeight();
    
    bufferPix.allocate(gw, gh, OF_PIXELS_RGB);
    tex.allocate(gw, gh, GL_RGB);
    bufferPix.set(255);
}

//--------------------------------------------------------------
void ofApp::update()
{
    grabber.update();
    if (grabber.isFrameNew())
    {
        grabberPix = grabber.getPixels();
        
        for (int x = 0; x < gw; x++)
        {
            for (int y = 0; y < gh; y++)
            {
                if (x < gw-1)
                {
                    // get the previous color to the RIGHT of the one you currently on
                    ofColor prevLeft = bufferPix.getColor(x+1, y);
                    ofColor current = grabberPix.getColor(x, y);
                    
                    ofColor lerpedColor = prevLeft.getLerped(current, 0.01);
                    bufferPix.setColor(x, y, lerpedColor);
                }
                else
                {
                    ofColor grabberColor = grabberPix.getColor(x,y);
                    bufferPix.setColor(x, y, grabberColor);
                }
            }
        }
        
    }
    
    tex.loadData(bufferPix);

}

//--------------------------------------------------------------
void ofApp::draw()
{
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
