const projectId = process.env.CAIP_PROJECT_ID;
const location = 'us-central1';
const inputFile = 'resources/cat.png';

const aiplatform = require('@google-cloud/aiplatform');

// Imports the Google Cloud Prediction Service Client library
const {PredictionServiceClient} = aiplatform.v1;

// Import the helper module for converting arbitrary protobuf.Value objects
const {helpers} = aiplatform;

// Specifies the location of the api endpoint
const clientOptions = {
  apiEndpoint: `${location}-aiplatform.googleapis.com`,
};

// Instantiates a client
const predictionServiceClient = new PredictionServiceClient(clientOptions);

async function getShortFormImageCaptions() {
  const fs = require('fs');
  // Configure the parent resource
  const endpoint = `projects/${projectId}/locations/${location}/publishers/google/models/imagetext@001`;

  const imageFile = fs.readFileSync(inputFile);
  // Convert the image data to a Buffer and base64 encode it.
  const encodedImage = Buffer.from(imageFile).toString('base64');

  const instance = {
    image: {
      bytesBase64Encoded: encodedImage,
    },
  };
  const instanceValue = helpers.toValue(instance);
  const instances = [instanceValue];

  const parameter = {
    // Optional parameters
    language: 'en',
    sampleCount: 2,
  };
  const parameters = helpers.toValue(parameter);

  const request = {
    endpoint,
    instances,
    parameters,
  };

  // Predict request
  const [response] = await predictionServiceClient.predict(request);
  const predictions = response.predictions;
  if (predictions.length === 0) {
    console.log(
      'No captions were generated. Check the request parameters and image.'
    );
  } else {
    predictions.forEach(prediction => {
      console.log(prediction.stringValue);
    });
  }
}

module.exports = getShortFormImageCaptions;