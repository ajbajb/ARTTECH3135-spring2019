#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup()
{
    sampleRate = 44100;
    bufferSize = 512;

    ofSetWindowShape(512*2 + 50, 500);

    ofSoundStreamSettings settings;

    settings.setOutListener(this);
    settings.numOutputChannels = 2;
    settings.numInputChannels = 0;
    settings.sampleRate = sampleRate;
    settings.bufferSize = bufferSize;

    stream.setup(settings);

    phase = 0.0;
    freq = 441.0;
}

//--------------------------------------------------------------
void ofApp::update()
{
    freq = ofMap(ofGetMouseX(), 0, ofGetWidth(), 60.0, 2000.0, true);
    amp = ofMap(ofGetMouseY(), 0, ofGetHeight(), 0.0, 1.0, true);
}

//--------------------------------------------------------------
void ofApp::draw()
{
    ofBackground(0);
    
    string freqStr = "Frequency:: " + ofToString(freq);
    string ampStr = "Amplitude:: " + ofToString(amp);
    ofDrawBitmapString(freqStr, 15, 15);
    ofDrawBitmapString(ampStr, 15, 30);
}

void ofApp::audioOut(ofSoundBuffer & output)
{
    float phaseStep = (float)(freq * TWO_PI) / (float)sampleRate;

    for (std::size_t i = 0; i < output.size(); i += 2)
    {
        phase += phaseStep;

        //sin() has trouble handling arge numbers
        // so we keep the value of phase to 2PI (one full rotation)
        while (phase >= TWO_PI)
        {
            phase -= TWO_PI; // when phase gets to 2Pi, send it back
        }

        float sample = sin(phase) * amp;
        output[i] = sample;
        output[i + 1] = sample;
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
