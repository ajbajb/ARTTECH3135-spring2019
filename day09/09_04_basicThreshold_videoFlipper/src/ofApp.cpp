#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup()
{
    ofSetWindowShape(640+320, 480);
    grabber.setup( 640, 480);
    gw = grabber.getWidth();
    gh = grabber.getHeight();
    
    player.load("Blooming.mp4");
    
    grayPix.allocate(gw, gh, OF_PIXELS_GRAY);

}

//--------------------------------------------------------------
void ofApp::update()
{
    threshold = ofMap(ofGetMouseX(), 0, ofGetWidth(), 0, 255);
    
    grabber.update();
    player.update();
    
    if (grabber.isFrameNew())
    {
        for (int x = 0; x < gw; x++)
        {
            for (int y = 0; y < gh; y++)
            {
                int brightness = grabber.getPixels().getColor(x, y).getBrightness();
                
                if (brightness > threshold)
                {
                    // set to black
                    grayPix.setColor(x, y, ofColor(0));
                }
                else
                {
                    // set to white
                    //grayPix.setColor(x, y, ofColor(255));
                    
                    // OR try out setting to brightness
                    grayPix.setColor(x, y, ofColor(brightness));
                    
                }
            }
        }
    }

}

//--------------------------------------------------------------
void ofApp::draw()
{
    ofPixels vidPix = player.getPixels();
    vidPix.resize(gw, gh);
    
    int step = 10;
    for (int x = 0; x < gw; x += step)
    {
        for (int y = 0; y < gh; y += step)
        {
            int bright = grayPix.getColor(x, y).getBrightness();
            float rotation = ofMap(bright, 0, 255, 0., 180. );
            
            //set squares color from the videoplayer
            ofColor vidColor = vidPix.getColor(x, y);
            
            ofPushMatrix();
            ofTranslate(x, y);
            ofRotateXDeg(rotation);
            
            ofSetColor(vidColor);
            ofFill();
            ofDrawRectangle(0-step/2, 0-step/2, step, step);
            ofPopMatrix();
            
            string threshStr = "Thresh:: " + ofToString(threshold);
            ofDrawBitmapString(threshStr, 15, ofGetHeight() - 10);
        }
    }

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
