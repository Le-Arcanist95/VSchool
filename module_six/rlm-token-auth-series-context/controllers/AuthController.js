const User = require('../models/User.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Signup
exports.register = async (req, res, next) => {
    User.findOne({username: req.body.username}, (err, user) => {
        const {username, password} = req.body;
        if(err){
            res.status(500);
            return next(err);
        }
        if(user){
            res.status(403);
            return next(new Error('Username already exists'));
        }
        if(!username || !password){
            res.status(403);
            return next(new Error('Username and password are required'));
        }

        try {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
            const newUser = new User({username: username, password: hash});
            newUser.save();
            return res.status(201).send({user: newUser});
        }
        catch(err){
            res.status(500);
            return next(err);
        }
    });
};

// Login
exports.login = async (req, res, next) => {
    const {username, password} = req.body;
    if(!username || !password){
        res.status(403);
        return next(new Error('Username and password are required'));
    }

    User.findOne({username: username}, async(err, user) => {
        if(err){
            res.status(500);
            return next(err);
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!user){
            res.status(403);
            return next(new Error('Username or password are incorrect'));
        }
        if(!isMatch){
            res.status(403);
            return next(new Error('Username or password are incorrect'));
        } 
        
        const accessToken = jwt.sign(user.toObject(), process.env.ACCESS_TOKEN_SECRET);            
        return res.status(200).send({ accessToken, user });
    });
};