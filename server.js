
import express from 'express';
import bodyParser from 'body-parser';
import { databaseConnection } from './database.js';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 3000;



// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);

// import path from 'path';


// import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// app.use(express.static('demo');

app.use(bodyParser.json())




app.use(express.static(path.join(__dirname, 'public')));

// route handling GET requests to root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});




// parsing the JSON bodies
app.use(express.json());



// GET request to Test Web-Service
app.get('/M00886801',async (req, res) => {
    // res.json(postData);
    const db = await databaseConnection();
    const query = {};
    const result = await db.collection("users").find(query).toArray();
    res.json(result)
    console.log(result)
    

});

// POST request handler for Test Web-Service
app.post('/M00886801', async (req, res) => {
    console.log("Received data:", req.body);
    const db = await databaseConnection();
    await db.collection("users").insertOne(req.body);
    // postData.push(req.body);
    res.json({ message: "POST request received", receivedData: req.body });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

