const express = require('express');
const app = express();

const PORT = 3000;

const cors = require('cors');
app.use(cors());

// DB
const connectDB = require('./DB/db');
connectDB();

app.use(require('./route/User'));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})