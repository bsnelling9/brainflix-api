const express = require('express');
const router = express.Router();
// const fs = require('fs');

const videosData = '../data/videos.json';
const videos = require(videosData);


//Get /videos that will respond with the array of videos
router.get('/', (req, res) => {
    res.send('hello worldsssssssss');
});

router.get('/videos', (req, res) => {
    res.send('videos page');
})

module.exports = router;
//get /videos/:id that responds with object containing the details based on video id


//post to post new videos to server