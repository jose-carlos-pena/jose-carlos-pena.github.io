let selfData; //JSON Data
let satellite;

let startButton;
let moodHappy;
let moodNeutral;
let moodSad;

let horoscopeTxt;

let start;
//interface images
let instaHeart;
let instaSave;
let groupHeart;

//image variables
let goatMeme;
let threeCat;
let kirbyTeach;
let allZodiacMeme;
let flaafyMeme;
let fromTwitter;
let earthWaterMeme;
let incompetenceMeme;
let capricornFun;
//tx
let birthMap;


const url = "https://api.spacexdata.com/v2/launches" //constant 2 hold API url


function  preload(){
  //loading JSON
  selfData = loadJSON("DataSelf/horoscopeData.json");


  //Loading Images
  goatMeme = loadImage("DataSelf/memes/goat.jpg");
  threeCat = loadImage("DataSelf/memes/cats.jpg");
  kirbyTeach = loadImage("DataSelf/memes/kirby.jpg");
  allZodiacMeme = loadImage("DataSelf/memes/madlib.jpg");
  flaafyMeme = loadImage("DataSelf/memes/flaafy.jpg");
  fromTwitter = loadImage("DataSelf/memes/smiley.jpg");
  earthWaterMeme = loadImage("DataSelf/memes/earthWater.jpg");
  incompetenceMeme = loadImage("DataSelf/memes/zendaya.jpg");
  capricornFun = loadImage("DataSelf/memes/fun.jpg");

  instaHeart = loadImage("DataSelf/interfaceImage/heart.png");
  instaSave = loadImage("DataSelf/interfaceImage/save.png");
  groupHeart = loadImage("DataSelf/interfaceImage/meHeart.png");
  birthMap = loadImage("DataSelf/images/google.png")
}

function setup(){
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.style("z-index","-5");
  canvas.position(0,0);

  start = false;

//beginningButton
  startButton = createButton(""); //temporary text
  startButton.style("z-index","2");
  startButton.position(windowWidth/2,windowHeight/2);
  startButton.mousePressed(initStart);

  //print(selfData.zodiacData);
  horoscopeTxt = (random(selfData.zodiacData));
  print(horoscopeTxt);
}

function initStart(){
  background(0, 0, 0);
  startButton.hide();
  start = true;

  createDiv("birth place : vallejo, callifornia <br> birth time : 3:00");

  moodHappy = createButton(":)");
  moodHappy.style("z-index","3");
  moodHappy.position(windowWidth/2-50,windowHeight/1.5);
  moodHappy.mousePressed(addMore);

  moodNeutral = createButton(":|");
  moodNeutral.style("z-index","3");
  moodNeutral.position(windowWidth/2,windowHeight/1.5);

  moodSad = createButton(":(");
  moodSad.style("z-index","3");
  moodSad.position(windowWidth/2+50,windowHeight/1.5)
  moodSad.mousePressed(cheerUp);

  //createElement("h1", horoscopeTxt);
}

function addMore(){
  createElement("h1", horoscopeTxt);
  horoscopeTxt = (random(selfData.zodiacData));
  redraw();
}
function cheerUp(){
  r1 = int(random(10));
  print(r1)
  if(r1 == 1){
    image(goatMeme, random(-windowWidth, windowWidth), random(-windowHeight, windowHeight))
  }
  if(r1 == 2){
    image(threeCat, random(-windowWidth, windowWidth), random(-windowHeight, windowHeight))
  }
  if(r1 == 3){
    image(kirbyTeach, random(-windowWidth, windowWidth), random(-windowHeight, windowHeight))
  }
  if(r1 == 4){
    image(allZodiacMeme, random(-windowWidth, windowWidth), random(-windowHeight, windowHeight))
  }
  if(r1 == 5){
    image(flaafyMeme, random(-windowWidth, windowWidth), random(-windowHeight, windowHeight))
  }
  if(r1 == 6){
    image(fromTwitter, random(-windowWidth, windowWidth), random(-windowHeight, windowHeight))
  }
  if(r1 == 7){
    image(earthWaterMeme, random(-windowWidth, windowWidth), random(-windowHeight, windowHeight))
  }
  if(r1 == 8){
    image(incompetenceMeme, random(-windowWidth, windowWidth), random(-windowHeight, windowHeight))
  }
  if(r1 == 9){
    image(capricornFun, random(-windowWidth, windowWidth), random(-windowHeight, windowHeight))
  }
}
function draw(){

  if (start == true) {
    rotateY(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    texture(birthMap);
    sphere(200,200,200);

  } else {
    rotateY(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    normalMaterial();
    sphere(200, 200, 200);
  }
}
