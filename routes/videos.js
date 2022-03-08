const express = require('express');
const router = express.Router();
const fs = require('fs');

const videosData = '../data/videos.json';
const videosPath = require(videosData);


//Get /videos that will respond with the array of videos
router.get('/videos', (req, res) => {

});


//get /videos/:id that responds with object containing the details based on video id


//post to post new videos to server