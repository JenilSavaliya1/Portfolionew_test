const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
const fs = require('fs');

app.use(cors());

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