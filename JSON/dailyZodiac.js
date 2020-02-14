let zodiacData; //JSON data
let tarotData; //JSON data
let zodiacSelect; //Menu container holding the zodiac options
let zodiacOptions; //name for the options selected
let submitButton;
let zodiacStorage;

function preload(){
  zodiacData = loadJSON("JSON/zodiac.json")
  tarotData = loadJSON("JSON/tarot_interpretations.json")
}
function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style("z-index","-1");
  canvas.position(0,0);


  zodiacOptions = zodiacData.zodiacSigns;


  print(zodiacOptions[0].name);
  zodiacSelect = createSelect();
  zodiacSelect.style("z-index","2");

  for(let i = 0; i < zodiacOptions.length; i++){
    let zodiacName = zodiacOptions[i].name;
    zodiacSelect.option(zodiacName);
    }
  zodiacSelect.position(0,15);

  submitButton = createButton("Submit");
  submitButton.style("z-index","2");
  submitButton.position(90,15);
  submitButton.mousePressed(submit);
}
function submit(){
  let signChoice = zodiacSelect.value();
  createElement("h1",signChoice);

  for(let i = 0; i < zodiacOptions.length; i++){
    if (signChoice == zodiacData.zodiacSigns[i].name) {
      createP(zodiacData.zodiacSigns[i].gloss);
    }
  }

  
}
