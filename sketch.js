var song = [];
var counter = 0;

function preload() {
  for (var  i = 0; i < 8; i++) {
    song[i] = loadSound("audio/" + i + '.mp3');
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255,0,0);
}

function mousePressed() {
  song[counter].play();
  //song[counter].onended(song[counter].stop());
  counter++;
  if (counter > 7) counter = 0;
}
