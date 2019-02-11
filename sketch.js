var angle = 0;
var slider;

function setup() {
  createCanvas(1550, 600);
  slider = createSlider(0, TWO_PI, PI / 9, 0.01);
}

function draw() {
  background(51);
  angle = slider.value();
  var length = 130;
  stroke(255);
  translate(750, height);
  branch(length);
}

function branch(length) {
  line(0, 0, 0, -length);
  translate(0, -length);
  if(length > 10) {
    push();
    rotate(angle);
    branch(length *.8);
    pop();
    push();
    rotate(-angle);
    branch(length * .8);
    pop();
  }
}
