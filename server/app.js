const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const verifyJwt = require('./middleware/verifyJwt');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/MongoConfig');
const errorHandler = require('./middleware/errorHandler');
const PORT = process.env.PORT || 3000;

app.use(cors());

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

//middleware for cookies
app.use(cookieParser());
app.use('/vision', require('./routes/vision'));
// routes
app.use('/api/v1/auth', require('./routes/auth'));
// app.use('/api/v1/trip', require('./routes/trip'));
app.use('/api/v1/itinerary', require('./routes/itinerary'));
// app.use('/auth', require('./routes/auth'));
// app.use('/logout', require('./routes/logout'));
// app.use('/api/v1/test',require('./routes/test'));

app.use(verifyJwt);

app.all('*', (req, res) => {
  res.status(404).send('not found');
});

app.use(errorHandler);

const start = async () => {
  await connectDB();
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};
start();
