function setup() {
  createCanvas(1200, 900);
  background(20);
}

function draw() {
  
  if (mouseIsPressed) {
    let size = random(100, 150);
    noStroke();
    fill(random(150, 255), random(50, 100), random(50, 150), 50);
    ellipse(mouseX, mouseY, size, size);
    noStroke();
    fill(random(150, 255), random(50, 100), random(0, 150), 100);
    ellipse(mouseX, mouseY, size/3, size/3);
  }
  
  // branch part failed..
}