// https://www.youtube.com/watch?v=sj8Sg8qnjOg

const goldenRatio = 1.61803398875 // fun number
let startPoint = 15;
let myInput;
let addElement;
let ogDist = .6 //original distance
let distance = ogDist;
let r = goldenRatio; // main number
let numOfballs = 400;
let ballSize = 5;
let incrToggle = false;

function setup() {
  createCanvas(600, 600);
  myInput = createInput('');
  myInput.position(20, 20);
  myInput.input(updateR);
  myInput.size(100);
  angleMode(DEGREES) ;
  addElement = createButton('increment')
  addElement.position(20, 45);
  addElement.mouseOver(increment);
  addElement.mouseOut(trigger);
}
function draw() {
  background(220);
  fill(0);
  if(r === goldenRatio){
    text(r+" - golden ratio!", 140, 35);
  } else {
    text(r, 140, 35);
  }
  translate(width/2, height/ 2);
  strokeWeight(2);
  line(-10, -10, 10, 10);
  line(-10, 10, 10, -10);
  
  strokeWeight(1) ;
  fill(255, 200, 0);
  for(let i = 0; i <= numOfballs; i++){
    distance -= 0.0005;
    rotate(360*r);
    ellipse(i*distance + startPoint, 0, ballSize);
  }
  distance = ogDist;
  if(incrToggle){
    r += 0.00001;
  }
  // noLoop();
}
function updateR() {
  r = float(this.value());
}
function increment() {
  incrToggle = true;
}
function trigger()  {
  incrToggle = false;
}
