// Coding Train
// NOC 2.52
// Random Walk

var x;
var y;
var step = 5;
var cx;
var cy;
var fr = 60;

function setup() {
  createCanvas(400, 400);
  x = 200;
  y = 200;
  lx = x;
  ly = y;
  background(21, 21, 21);
}

function draw() {
  lx = x;
  ly = y;
  frameRate(fr);
  stroke(124, 58, 237);
  strokeWeight(4);
  point(lx, ly);
  var r = floor(random(4));
  switch (r) {
    case 0: // up
      if (y + step > height) {
        //console.log("bonk");
        stroke(255, 0, 0);
        strokeWeight(10);
        point(x, y);
        break;
      }
      y += step;
      break;
    case 1: // down
      if (y - step < 0) {
        //console.log("bonk");
        stroke(255, 0, 0);
        strokeWeight(10);
        point(x, y);
        break;
      }
      y -= step;
      break;
    case 2: // left
      if (x - step < 0) {
        //console.log("bonk");
        stroke(255, 0, 0);
        strokeWeight(10);
        point(x, y);
        break;
      }
      x -= step;
      break;
    case 3: // right
      if (x + step > width) {
        //console.log("bonk");
        stroke(255, 0, 0);
        strokeWeight(10);
        point(x, y);
        break;
      }
      x += step;
      break;
  }
  lx = x;
  ly = y;
  stroke(255);
  strokeWeight(4);
  point(x, y);
}
