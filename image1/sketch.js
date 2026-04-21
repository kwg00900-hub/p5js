let img;
function preload() {
  img = loadImage('assets/heart_hands.png'); 
}

function setup() {
  createCanvas(600, 600);
  imageMode(CENTER);
}

let h = 100;
let w = 100;

function draw() {
  background(0);
  do{
  image(img, 300, 300, w, h);
  w += 20;
  h += 20;
  } while(w <= 600);
}