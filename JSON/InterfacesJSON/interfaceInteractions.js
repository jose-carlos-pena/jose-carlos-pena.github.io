var data;
var dates;
let ads1;

function preload(){
	//loading
	data = loadJSON("interfaceInteractions.json");
  //ads1 = loadImage("images/adsOne.png");
}

function setup(){
	createCanvas(windowWidth, windowHeight);
	//noCanvas();
	//var bird = data.birds[1].members[2];

  //load all of the data into the interactions variable
	var interactions = data.interactions;

  //loop through all of the interaction logs
	for(var i = 0; i< interactions.length; i++){
      //dates stores the date field
      dates = interactions[i].date;
      //create an h1 header for all ofthe date entries
      createElement('h1', dates);

      //specifics stores all of the specific data for each date
      var specifics = interactions[i].specifics;

      //loop through all of the categories in the soecifics array
      for(let j = 0; j < specifics.length; j++){

        //create a div for each time entry
        createDiv("Time: " + specifics[j].time);
        //create a div for each location entry
        createDiv("Location: " + specifics[j].location);
        //create a div for each company entry
        createDiv("Company: " + specifics[j].company);

        if(specifics[j].company == "Google"){
        //  image(ads1, random(width), random(height), 200, 100);
        }

        //services stores the services array fro each date
        let services = specifics[j].services;
        //loop through all of the services in the services array
        for(let s = 0; s<services.length; s++){
          //create a div for each services entry
          createDiv("Services: " + services[s]);
        }

        //input stores the input array for each date
        let input = specifics[j].input;
        //loop through all of the inputs in the inputs array
        for(let s = 0; s<input.length; s++){
          //create a div for each input entry
          createDiv("Inputs: " + input[s]);
        }
        createElement('br');
        createElement('br');
      }
	}


}

function draw(){

	// background(0);
	// fill(255, 0, 0);

	// text(data.birds[1].members[2], 10, 50);
}
