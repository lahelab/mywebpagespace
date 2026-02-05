let angle;

function setup() {
  createCanvas(400, 400, WEBGL);
  angle = 0;
  
}

function draw() {
  background("black");
  sphere()
  rotateZ(angle);
  noFill();
  stroke(200);
    normalMaterial();
    torus(130,4,24,12);
  push();
  translate(130,0,0);
  fill(230);
  normalMaterial();
  sphere(18);
  pop();
  angle += 0.001;
  
  
}