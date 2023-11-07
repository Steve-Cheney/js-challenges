// Coding Train
// Coding Challenge #159
// Simple Pendulum Simulationm

let angle;

let angleV = 0;

let bob;
let len;
let origin;

let gravity = 1;

function setup() {
  createCanvas(600, 300);
  origin = createVector(300, 0);
  angle = PI/4
  bob = createVector();
  len = 200;
}

function draw() {
  background(0);
  
  let force = -1 * gravity * sin(angle) / len;
  
  angleA = force;
  angleV += angleA;
  angle += angleV;

  //angleV *= 0.99
  
  bob.x = len * sin(angle) + origin.x;
  bob.y = len * cos(angle) + origin.y;
  
  stroke(255);
  strokeWeight(8);
  fill(127);
  line(origin.x, origin.y, bob.x, bob.y);
  circle(bob.x, bob.y, 64);
}
