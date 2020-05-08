let inp;
let input;
let button;


const model = new rw.HostedModel({
  url: 'https://diarywriterv2.hosted-models.runwayml.cloud/v1/',
  token: 'OA2zfado3nuDODIMXhQCBg==', // not required for public models
});

function setup(){
  inp = createInput('');
  inp.position(60, 210);
  button = createButton('sendTxt2');
  button.position(70,230)
  button.mousePressed(sendTxt)

  const awake = model.isAwake();
  console.log(awake);
}

function sendTxt(){
  const text = inp.value
  inp.value('')
  model.query({ text }).then(result => console.log(result));
}
