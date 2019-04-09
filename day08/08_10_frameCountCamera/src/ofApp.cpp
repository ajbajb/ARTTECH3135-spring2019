#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup()
{
    ofSetFrameRate(60);
    
    grabber.setup(640, 480);
    
    grabberPix.allocate(grabber.getWidth(), grabber.getHeight(), OF_PIXELS_RGB);
    everyTen.allocate(grabber.getWidth(), grabber.getHeight(), OF_PIXELS_RGBA);
    tex.allocate(grabber.getWidth(), grabber.getHeight(), GL_RGBA);
    
    everyTen.set(0);
    maxFrames = 120;
}

//--------------------------------------------------------------
void ofApp::update()
{
    grabber.update();
    
    // keep track of the apps frame count
    int frameNumber = ofGetFrameNum();
    if (grabber.isFrameNew())
    {
        grabberPix = grabber.getPixels();
        
        // we will create a cycle using %
        // which returns the remainder of a division a / b
        // the cycle will be maxFrames long
        // in this case, we are dividing frameNumber / maxFrames
        // if the remainder is 0 we will store the grabbers pixel data in another ofPixels
        if (frameNumber % maxFrames == 0)
        {
            for (int x = 0; x < grabberPix.getWidth(); x++)
            {
                for (int y = 0; y < grabberPix.getHeight(); y++)
                {
                    ofColor pixColor = grabberPix.getColor(x, y);
                    ofColor transparentColor(pixColor.r, pixColor.g, pixColor.b, 75);
                    everyTen.setColor(x, y, transparentColor);
                }
            }
        }
    }
    
    tex.loadData(everyTen);

}

//--------------------------------------------------------------
void ofApp::draw()
{
    ofBackgroundGradient(ofColor::steelBlue, ofColor::thistle, OF_GRADIENT_LINEAR);
    
    grabber.draw(0, 0);
    tex.draw(0, 0);
    
    ofSetColor(255);
    string frameStr = ofToString(ofGetFrameRate());
    ofDrawBitmapString(frameStr, 25, ofGetHeight() - 100);
    
    
    // some debugging info
    //
    // display the frame count
    string frameCountStr = ofToString(ofGetFrameNum());
    ofDrawBitmapString(frameCountStr, 25, ofGetHeight() - 75);
    
    // display the frame count cycle
    int frameMod = ofGetFrameNum() % maxFrames;
    string frameModStr = ofToString(frameMod);
    ofDrawBitmapString(frameModStr, 25, ofGetHeight() - 50);
    
    // display this if out cycle going back to 0
    // to let us know when we are capturing a new pic from the camera
    // ideally, we would write>> if ( frameMod < 0 )
    // but at 60 fps, that is way to quick to be noticible
    if ( frameMod < 10 )
    {
        ofDrawBitmapString("YEAH YEAH 🤪", 25, ofGetHeight() - 25);
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
