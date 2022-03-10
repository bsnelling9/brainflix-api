const express = require('express');
const router = express.Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const PORT = process.env.PORT;
const URL = process.env.URL;


//Get all videos that will respond with the array of videos
router.get('/', (req, res) => {
    fs.readFile('./data/videos.json', 'utf8', (err, data) => {
        if (err) {
            res.send('error reading comments data');
          } else {
            const videoData = JSON.parse(data);
            const videoList = videoData.map(video => {
                return {
                    id: video.id,
                    title: video.title,
                    channel: video.channel,
                    image: `${URL}:${PORT}${video.image}`
                }
            });
            res.json(videoList);
        }
    })  
});

router.get('/:id', (req, res) => {
    fs.readFile('./data/videos.json', 'utf8', (err, data) => { 
        const videosData = JSON.parse(data) 
        const foundVideo = videosData.find(video => video.id === req.params.id);
        if (foundVideo){
            foundVideo.image = `${URL}:${PORT}${foundVideo.image}`
            res.json(foundVideo);
        } else {
            return res.status(404).send({
                message: 'Video does not exist'
            })
        }
    })
});

router.post('/', (req, res) => {
    fs.readFile('./data/videos.json', 'utf8', (err, data) => { 
        const videosData = JSON.parse(data);
        const date = new Date();
        const newVideo = {
            ...req.body,
            id: uuidv4(),
            views: 0,
            likes: 0,
            duration: '0:20',
            timestamp: date.getTime(),
            video: '',
            comments: []
        }
        videosData.push(newVideo);
        fs.writeFile('./data/videos.json', JSON.stringify(videosData), () => {
            res.json({ message: 'data written to file', data: videosData});
        });
    });
});

// router.get('/videos', (req, res) => {
//     res.send('videos page');
// })

module.exports = router;
//get /videos/:id that responds with object containing the details based on video id






//post to post new videos to server