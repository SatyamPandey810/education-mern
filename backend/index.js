const express = require('express')
const cors = require('cors');
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDb = require('./config/db');
const router = require('./routes/route');

const app = express()
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))

// app.use(cors())

app.use(express.json());
app.use(cookieParser())
app.use('/api', router)

const PORT = 8080 || process.env.PORT
connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running on port number ${PORT}`);
        console.log('database connected');
    })
})