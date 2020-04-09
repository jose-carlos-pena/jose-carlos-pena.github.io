
let capture;

let x = 0;

function preload(){


}

function setup(){
createCanvas(800, 240);
capture = createCapture(VIDEO);
capture.size(320, 240)



}


function draw(){
let w = capture.width;
let h = capture.height;

copy(capture, w/2, 0 ,1, h, x, 0, 1, h);
x = x+1;

if (x>width){
  x=0;
};
