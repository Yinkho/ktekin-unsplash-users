const express = require("express");
const mongoose = require('mongoose');
const User = require('../models/user');

const router = express.Router();

// mongodb
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// db
const db = mongoose.connection;

router.get('/', (req, res) => {
    User.find({}, (err, users) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        res.json(users)
    })
});

router.get('/most-popular', (req, res) => {
    User.aggregate([
        {$match: {} },
        {$sort: {total_likes: -1}},
        {$project: { total_likes: '$total_likes', username: '$username', links: '$links', profile_image: '$profile_image'}}
    ], (err, users) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        res.json(users)
    })
});

router.get('/most-active', (req, res) => {
    User.aggregate([
        {$match: {} },
        {$sort: {total_photos: -1}},
        {$project: { total_photos: '$total_photos', username: '$username', links: '$links', profile_image: '$profile_image'}}
    ], (err, users) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        res.json(users)
    })
});

module.exports = router;

