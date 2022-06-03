function preload() {
  dog = loadModel("shinjuku.obj");
}

function setup() {
  createCanvas(w, w, WEBGL);
  colorMode(HSB);
  noStroke();
  noLoop();
}

function draw() {
  background(0);

  ambientLight(10);
  pointLight(200, 100, 100, -w / 2, -w / 2, w);
  specularMaterial(100);

  translate(125, -50);
  rotateX(-PI / 8);
  rotateY(PI / 4);
  rotateZ(PI);
  scale(75);
  model(dog);
}
