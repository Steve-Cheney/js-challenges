// Coding Train
// Coding Challenge #160
// Spring Forces

let particles = [];
let springs = [];
let spacing = 20;
let k = 0.05;
let n = 10;

let w = 800
let h = 800;

let gravity;

function setup() {
  createCanvas(w, h);
  for (let i = 0; i < n; i++) {
    particles[i] = new Particle(w/2, i * spacing);
    if (i !== 0) {
      let a = particles[i];
      let b = particles[i - 1];
      let spring = new Spring(k, spacing, a, b);
      springs.push(spring);
    }
  }

  gravity = createVector(0, 0.1);
  particles[0].locked = true;
}

function draw() {
  background(21,21,21);
  for (let s of springs){
    s.update();
    s.show();
  }
  for (let p of particles) {
    p.applyForce(gravity);
    p.update();
    p.show();
  }

  let tail = particles[particles.length-1];
  
  
  // Set bob to mouse location
  if (mouseIsPressed) {
    tail.position.set(mouseX,mouseY);
    tail.velocity.set(0, 0);
  }

  //   // F = A
  //   v.add(force);
  //   v.add(gravity);
  //   bob.add(v);
  //   v.mult(0.99);
}
