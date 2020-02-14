let meData;
let birdData;
let canvas;
let birdOptions;

function preload(){
  meData = loadJSON("JSON/me.json");
  birdData = loadJSON("JSON/bird.json");
}


function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  background(0);

  birdOptions = birdData.birds;
  print(birdData.birds[1].name);
  for(let i = 0; i < birdOptions.length; i++){
    let birdName = birdOptions[i].name;
    let birdWingspan = birdOptions[i].wingspan;
    print(birdName);
    createElement("h1", birdName);
    createP(birdWingspan);
  }




  print(meData);
  //ellipse(50, 80, meData.age);
  //fill(255);
  //text(meData.name, 40, 50);
  //text("age as circle", 40, 60);
}

function draw(){

}
