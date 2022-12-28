const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

// middleware
app.use(cors());
app.use(bodyParser.json());


// Routes

app.get('/', (req, res) => {
    res.send('Hello World');
})

// Start server
const PORT = process.env.PORT || 5000;
const startServer = async () => {
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    })
}
startServer();
