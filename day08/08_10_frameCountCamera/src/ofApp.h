#pragma once

#include "ofMain.h"

class ofApp : public ofBaseApp{

	public:
		void setup();
		void update();
		void draw();

		void keyPressed(int key);
		void keyReleased(int key);
		void mouseMoved(int x, int y );
		void mouseDragged(int x, int y, int button);
		void mousePressed(int x, int y, int button);
		void mouseReleased(int x, int y, int button);
		void mouseEntered(int x, int y);
		void mouseExited(int x, int y);
		void windowResized(int w, int h);
		void dragEvent(ofDragInfo dragInfo);
		void gotMessage(ofMessage msg);
    
    // camera feed
    ofVideoGrabber grabber;
    
    // store pixels of the grabber
    ofPixels grabberPix;
    
    // we will store the pixels into this ofPixels every maxFrames;
    ofPixels everyTen;
    
    // texture to draw our everyTen pixels
    ofTexture tex;
    
    int maxFrames;
		
};
