const express = require("express");
const app = express();
const { Musician, Band } = require("../models/index")
const { db } = require("../db/connection")

const port = 3000;

app.set("json spaces", 2);


//TODO: Create a GET /musicians route to return all musicians 
app.get('/musicians', async (req, res) => {
    const musicians = await Musician.findAll();
    res.json(musicians);
})

app.get('/band', async (req, res) => {
    const bands = await Band.findAll();
    res.json(bands);
})



module.exports = app;