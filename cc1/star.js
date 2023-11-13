class Star {

  constructor(r,g,b,rad_mult = 1) {
    this.x = random(-width/2, width/2);
    this.y = random(-height/2, height/2);
    this.z = random(width);
    this.pz = this.z;
    this.rgb_r = r;
    this.rgb_g = g;
    this.rgb_b = b;
    this.rad_mult = rad_mult;
  }

  update() {
    this.z = this.z - speed;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
  }

  show() {
    fill(255);
    noStroke();

    let sx = map(this.x / this.z, 0, 1, 0, width);
    let sy = map(this.y / this.z, 0, 1, 0, height);

    let r = map(this.z, 0, width, 4, 0);

    let px = map(this.x / this.pz, 0, 1, 0, width);
    let py = map(this.y / this.pz, 0, 1, 0, height);

    this.pz = this.z;

    stroke(this.rgb_r, this.rgb_g, this.rgb_b)
    strokeWeight(r * this.rad_mult);
    line(px, py, sx, sy);

  }
}