let stars = [];

let speed;

function setup() {
  createCanvas(1450, 700);
  for (let i = 0; i < 800; i++) {
    stars[i] = new warp();
  }
}
var ran = (int)(Math.random() * 255);
function draw() {
  speed = map(mouseX, 0, width, 0, 40);
  background(0);
  translate(width / 2, height / 5);
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}
