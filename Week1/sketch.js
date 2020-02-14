let canvas;
let select;
let askButton;
let check;
let window1;
let femBot;
let dryWall;
let checkBrush;

let interactiveScene = false;

function preload(){
  window1 = loadImage("images/cuteASCII.png");
  femBot = loadImage("images/cuteFemBots.jpg");
  dryWall = loadImage("images/robotDrywall.jpeg");
}

function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style("z-index","-1");
  canvas.position(0,0);
  background(160);

  select = createSelect();
  select.style("z-index","2");
  select.option("One");
  select.option("Two");
  select.position(125,623);

  askButton = createButton("Submit");
  askButton.style("z-index","2");
  askButton.position(120,412);
  askButton.mousePressed(ask);

  check = createCheckbox(false);
  check.style("z-index","2");
  check.position(0,0);
  check.changed(ask);

  imageMode(CENTER);
}
//custom ask function. triggers when askButton pressed
function ask(){
  let val = select.value();
  //conditional statements that checks what dropdown option is selected

  //if val is One and the checkbox is checked
  if(val == "One" && check.checked()){
    background(0);
  } else if (val =="One") {
    background(255)
  }
  if(val == "Two" && check.checked()){
    background(55,23, 130);
    interactiveScene = false;
    image(window1, width/2, height/2, width, height);
  } else if (val == "Two"){
    interactiveScene = true;
  }

}

function checkBoxBrush(){
  checkBrush = createCheckbox("lol", true);
  checkBrush.position(mouseX, mouseY);
}

function draw(){
  //every frame checking status of interactiveScene boolean
  if(interactiveScene == true){
    checkBoxBrush();
  }
}
