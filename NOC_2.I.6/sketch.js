function setup() {
  createCanvas(100, 100);
  pixelDensity(1);
}

function draw() {
  let noiseLevel = 255;
  let noiseScale = 0.01;
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      // Scale input coordinates.
      let nx = noiseScale * x;
      let ny = noiseScale * y;
      let nt = noiseScale * frameCount;
      // Compute noise value.
      let c = noiseLevel * noise(nx, ny, nt);
      stroke(c);
      point(x, y);
    }
  }
}

