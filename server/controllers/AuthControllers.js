const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const handleLogin = async (req, res) => {
    const { user, pass } = req.body;
    if (!user || !pass) return res.status(400).json({ 'message': 'Username and password are required.' });
    // const foundUser = usersDB.users.find(person => person.username === user);
    //find user using email
    if (!foundUser) return res.sendStatus(401).json({msg:'User Not found'}); 

    const match = await bcrypt.compare(pass, foundUser.password);
    if (match) {
        const accessToken = jwt.sign(
            {
                "UserInfo": {
                    "username": foundUser.username,
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '1d' }
        );
        res.cookie('token', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 });       
    } else {
        res.sendStatus(401);
    }
}

const handleRegister =async()=>{

}

module.exports = { handleLogin };