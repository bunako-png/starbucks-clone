require('dotenv').config()

const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 5000;


app.get("/", (req, res) => {
    res.send("Heloo world");
})

app.listen(PORT, () => {
    console.log(`Server is now listening on port: ${PORT}`);
})