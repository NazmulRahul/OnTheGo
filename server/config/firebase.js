const admin = require('firebase-admin');
const serviceAccount = require('../firebaseCredentials.json');
require('dotenv').config();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET
});

const bucket = admin.storage().bucket();

module.exports = bucket;
