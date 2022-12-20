require("dotenv").config()

const express = require("express")
const path = require('path');

const app = express()
const port = process.env.PORT || 8000


if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
    });
}

app.post("/hi", (req, res) => {
    console.log("hi")
})
 

app.listen(port, () => console.log("App is live on port" + port))