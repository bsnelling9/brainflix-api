const express = require('express');
const router = express.Router();
const fs = require('fs');
const PORT = process.env.PORT;
const URL = process.env.URL;


//Get all videos that will respond with the array of videos
router.get('/', (req, res) => {
    fs.readFile('./data/videos.json', 'utf8', (err, data) => {
        console.log(data);
        if (err) {
            res.send('error reading comments data');
          } else {
            const videoData = JSON.parse(data);
            const videoList = videoData.map(video => {
                return {
                    id: video.id,
                    title: video.title,
                    channel: video.channel,
                    image: `${URL}:${PORT}/images/${video.image}`
                }
            });
            res.json(videoList);
            console.log('working');
        }
    })  
});

router.get('/videos', (req, res) => {
    res.send('videos page');
})

module.exports = router;
//get /videos/:id that responds with object containing the details based on video id






//post to post new videos to server