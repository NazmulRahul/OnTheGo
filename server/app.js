const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const verifyJwt = require('./middleware/verifyJwt');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/MongoConfig');
const PORT = process.env.PORT || 3000;


app.use(cors());

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json 
app.use(express.json());

//middleware for cookies
app.use(cookieParser());


// routes
app.use('/api/v1/auth', require('./routes/auth'));
// app.use('/auth', require('./routes/auth'));
// app.use('/logout', require('./routes/logout'));

app.use(verifyJwt);


app.all('*', (req, res) => {
    res.status(404).send('not found')
});


const start=async ()=>{
    await connectDB();
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
start();