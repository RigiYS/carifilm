const express = require('express')
const cors = require('cors')
const axios = require('axios')
const router = require('./routes/router')

require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', router)

app.get('/api/popular-movies', async (req, res) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching popular movies');
    }
});

const port = process.env.port

app.listen(port, () => {
    console.log(`Server run at http://localhost:${port}/api/movie`);
})