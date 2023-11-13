// Coding Train
// Coding Challenge #1
// Starfield
let num_stars = 2500;
let num_planets = num_stars/50;
let stars = [];
let planets = [];
let speed;

function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < num_stars; i++){
    stars[i] = new Star(200,173,252);
  }
  for (var j = 0; j < num_planets; j++){
    planets[j] = new Star(random(255),random(255),random(255), random(1,5));
  }
}

function draw() {
  speed = map(mouseX, -10, width, 0, 50);
  background(21,21,21);
  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++){
    stars[i].update();
    stars[i].show();
  }
  for (var j = 0; j < planets.length; j++){
    planets[j].update();
    planets[j].show();
  }
}