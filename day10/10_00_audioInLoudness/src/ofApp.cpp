#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup()
{
    int bufferSize = 256;
    
    smoothedVol = 0.0;
    unsmoothed = 0.0;
    
    auto devices = stream.getDeviceList();
    for ( auto &device : devices)
    {
        std::cout << device << std::endl;
    }
    
    ofSoundStreamSettings settings;
    settings.setInDevice(devices[0]);
    settings.setInListener(this);
    settings.sampleRate = 44100;
    settings.numOutputChannels = 0;
    settings.numInputChannels = 2;
    settings.bufferSize = bufferSize;
    stream.setup(settings);
    
    bUseSmooth = true;
}

//--------------------------------------------------------------
void ofApp::update(){

}

//--------------------------------------------------------------
void ofApp::draw()
{
    ofBackground(0);
    
    // press 's' to see difference between smoothed and unsmoothed
    float rectHeight = (bUseSmooth
                        ? ofMap(smoothedVol, 0.0, 1.0, 0, 500)
                        : ofMap(unsmoothed, 0.0, 1.0, 0, 500));

    ofPushMatrix();
    ofTranslate(200, 200);
    ofSetColor(255, 100, 0);
    ofFill();
    ofDrawRectangle(0, 0, 50, rectHeight);
    ofPopMatrix();
    
    ofDrawBitmapString(ofToString(smoothedVol), 15, 15);
}

void ofApp::audioIn(ofSoundBuffer &input)
{
    double currentVol;
    int numCounted = 0;
    int channels = input.getNumChannels();
    
    // calculate RMS (root-mean-square) of audio buffer
    for (std::size_t i = 0; i < input.getNumFrames(); i++)
    {
        // collect values at index for left and right channels
        double left = input[i * channels] * 0.5;
        double right = input[i * channels + 1] * 0.5;
        
        // square it to make sure it is always positive
        currentVol += left * left;
        currentVol += right * right;
        numCounted += 2;
    }
    
    // mean-- divide by total counted
    currentVol /= (float)numCounted;
    
    // root -- get the square root
    currentVol = sqrt(currentVol);
    
    unsmoothed = currentVol;
    smoothedVol *= 0.90;
    smoothedVol += currentVol;
}

//--------------------------------------------------------------
void ofApp::keyPressed(int key)
{
    if (key == 's')
    {
        bUseSmooth = !bUseSmooth;
    }
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
