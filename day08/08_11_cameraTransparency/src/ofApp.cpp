#include "ofApp.h"
// This is slightly different than the example in class
// this is cleaner, and you only need 1 ofPixels

//--------------------------------------------------------------
void ofApp::setup()
{
    grabber.setup(640, 480);
    
    // make sure to allocate pixels with an alpha channel
    grabberPix.allocate(grabber.getWidth(), grabber.getHeight(), OF_PIXELS_RGBA);
    // also allocate texture with alpha
    tex.allocate(grabber.getWidth(), grabber.getHeight(), GL_RGBA);
}

//--------------------------------------------------------------
void ofApp::update()
{
    // update the grabber
    grabber.update();
    
    // if the frame is new
    if (grabber.isFrameNew())
    {
        // setup a 2d for-loop to iterate through all the grabber pixels
        for (int x = 0; x < grabber.getWidth(); x++)
        {
            for ( int y = 0; y < grabber.getHeight(); y++)
            {
                // get the color of the pixel at the location
                // notice we can CHAIN methods
                // instead of grabbing all the pixels at once and storing it all
                // in an ofPixels, we grab one pixel at a time
                ofColor pixColor = grabber.getPixels().getColor(x, y);
                
                // set an alpha value for a new color
                // using the red, green, blue values of the pix color
                ofColor transparentColor(pixColor.r, pixColor.g, pixColor.b, 50);
                
                // set the color of the pixel in grabberPix with the color
                // that has an alpha
                grabberPix.setColor(x, y, transparentColor);
            }
        }
    }
    
    // load pixels into our ofTexture
    tex.loadData(grabberPix);

}

//--------------------------------------------------------------
void ofApp::draw()
{
    // make a nice pretty background
    ofBackgroundGradient(ofColor::darkSalmon, ofColor::skyBlue, OF_GRADIENT_LINEAR);
    
    // draw the tex
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
