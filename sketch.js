var song = [];
var counter = 0;
var soundTracker = 0;

function preload() {
  for (var  i = 0; i < 8; i++) {
    song[i] = loadSound("audio/" + i + '.mp3');
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50, 50, 50);
}

function mousePressed() {
  if (song[soundTracker].isPlaying()) {
    return;
  } else {
    song[counter].play();
    soundTracker = counter;
    counter++;
    if (counter > 7) counter = 0;
  }
}
