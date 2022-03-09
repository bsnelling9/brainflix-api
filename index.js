const express = require('express');
require('dotenv').config();

const videoRoutes = require('./routes/videos');

const cors = require('cors');
const app = express();
const PORT = process.env.PORT;

// middleware
app.use(express.json());
app.use(express.static('public'));
app.use(cors());
app.use(videoRoutes);

app.listen(PORT, () => {
    console.log(`Hello! My server is listening on ${PORT}`);
});