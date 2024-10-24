const asyncWrapper = require('../middleware/asyncWrapper');
const Trip = require('../model/Trip');
const { getStorage, ref, uploadBytes, getDownloadURL } = require('firebase/storage');
const firebaseApp = require('../config/firebase');

const uploadImage = asyncWrapper(async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    const storage = getStorage(firebaseApp);
    const storageRef = ref(storage, `images/${req.file.originalname}`);
    
    try {
        const snapshot = await uploadBytes(storageRef, req.file.buffer);
        const downloadURL = await getDownloadURL(snapshot.ref);
        res.status(200).json({ url: downloadURL });
    } catch (error) {
        res.status(500).json({ error: 'Failed to upload image' });
    }
});

const searchImages =asyncWrapper( async (req, res) => {
    const { searchTerm } = req.body;

    if (!searchTerm) {
        return res.status(400).json({ error: 'Search term is required' });
    }
    
        const regex = new RegExp(searchTerm, 'i');
        const trips = await Trip.find({ 'Images.imageDetails': regex });
        const images = trips.flatMap(trip => trip.Images.filter(image => regex.test(image.imageDetails)));
        res.status(200).json({ images });
});

module.exports = { searchImages };