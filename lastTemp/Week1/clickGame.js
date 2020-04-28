let playButton;
let playerName;
let canvas;
let greeting;
let nameText;
let scoreText;

let startGame = false;
let endGame = false;

let score = 0;

let cuteX =[];
let cuteY =[];

let cute;

function preload(){
  cute = loadImage("images/cuteASCII.png");
}
function setup(){
  canvas = createCanvas(windowWidth,windowHeight);
  canvas.style("z-index", "-1");
  canvas.position(0, 0);
  background(0);

  greeting = createP ("Please type your name and press enter");
  playerName = createInput('');

  playerName.changed(start);

}

function start(){
  startGame = true;
  greeting.hide();
  playerName.hide();

  playButton = createButton("open new window");
  playButton.style("z-index", "1");

  nameText = createP('');
  scoreText = createP('');

}
function newWindow(){
  nameText.html("Hi " + playerName.value());
  scoreText.html("You've generated " +  score*10 +  " Furbycoins!!");

  playButton.mousePressed(furbyScore);

  for(let i=0; i<cuteX.length; i++){
    image(cute, cuteX[i], cuteY[i], 50, 50 );
  }
}

function furbyScore(){
  score++;

  cuteX.push(random(0, width));
  cuteY.push(random(0, height));

  if (score == 10){
    startGame=true;
    endGame=true;
  }
}

function endScreen(){
  print('hewo')
  background(random(255), random(255), random(255));
  playButton.hide();
  nameText.hide();
  scoreText.hide();
}

function draw(){
  if(startGame == true && endGame == false){
    newWindow();
  }
  if (endGame == true){
    endScreen();
  }
}
