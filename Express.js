const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3001;
const fs = require('fs');

app.use(cors());

// app.get('/weather', async (req, res) => {
//     const apiKey = 'c7947e91255044b293afb8b1755be499'; 
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=Halifax,CA&appid=${apiKey}&units=metric`;

//     try {
//         const response = await axios.get(url);
//         const { data } = response;
//         console.log(data);        
//         res.json({
//             city: data.name,
//             temperature: data.main.temp,
//             humidity: data.main.humidity,
//             description: data.weather[0].description,
//             icon: data.weather[0].icon
//         });
//     } catch (error) {
//         res.status(500).json({ message: "Error fetching weather data" });
//     }
// });

app.get('/projects', (req, res) => {
    fs.readFile('./projects.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('An error occurred while reading the file.');
            return;
        }
        res.send(JSON.parse(data));
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });