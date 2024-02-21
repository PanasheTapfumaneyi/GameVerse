
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

let postData = [];

// Serve static files from the directory: index.html
app.use(express.static(path.join(__dirname)));

// route handling GET requests to root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// GET request to Test Web-Service
app.get('/test-web-service', (req, res) => {
    res.json(postData);

});


// parsing the JSON bodies
app.use(express.json());

// POST request handler for Test Web-Service
app.post('/test-web-service', (req, res) => {
    console.log("Received data:", req.body);

    postData.push(req.body);
    res.json({ message: "POST request received", receivedData: req.body });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
