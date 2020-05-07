const model = new rw.HostedModel({
  url: 'https://diarywriterv2.hosted-models.runwayml.cloud/v1/',
  token: 'OA2zfado3nuDODIMXhQCBg==',
});

const prompt = 'Hey text generation model, finish my sentence';
model.query({ prompt }).then(result => console.log(result));
;
