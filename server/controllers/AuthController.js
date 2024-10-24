const User = require('../model/User')
const asyncWrapper=require('../middleware/asyncWrapper')

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const handleLogin = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ 'message': 'Email and password are required.' });

    const foundUser = await User.findOne({ email: email });

    if (!foundUser) return res.status(401).json({ msg: 'User not found' });

    const match = await bcrypt.compare(password, foundUser.password);
    if (match) {
        const accessToken = jwt.sign(
            {
                "emailInfo": {
                    "email": foundUser.email,
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '1d' }
        );
        res.cookie('token', accessToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 });
        res.status(200).json({ msg: 'Login successful' });
    } else {
        res.status(401).json({ msg: 'Invalid credentials' });
    }
};

const handleRegister = asyncWrapper(async (req,res)=>{
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ 'message': 'Name, email, and password are required.' });
    }
    const duplicateUser = await User.findOne({ email: email });
    if (duplicateUser) return res.status(409).json({ 'message': 'User already exists.' });
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const userEntity=await User.create({ name: name, email: email, password: hashedPassword });
    res.status(201).json({ 'message': 'User registered successfully.' ,userEntity});

})

module.exports = { handleLogin, handleRegister };