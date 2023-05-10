const express = require("express");
const app = express();
const { Musician, Band } = require("../models/index")
const { db } = require("../db/connection");
const { urlencoded } = require("express");

const port = 3000;

app.set("json spaces", 2);

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//TODO: Create a GET /musicians route to return all musicians 
app.get('/musicians', async (req, res) => {
    const musicians = await Musician.findAll();
    res.json(musicians);
})

app.get('/musicians/:id', async (req, res) => {
    const musicians = await Musician.findByPk(req.params.id);
    res.json(musicians);
})

app.post('/musicians', async (req, res) => {
    const musicians = await Musician.create(req.body);
    res.json(musicians);
})
app.put('/musicians/:id', async (req, res) => {
    const updMusician = await Musician.update(req.body, {where: {id: req.params.id}});
    res.json(updMusician);
})
app.delete('/musicians/:id', async (req, res) => {
    const deleteMusic = await Musician.destroy({where: {id: req.params.id}});
    res.json(deleteMusic);
})

// app.get('/bands', async (req, res) => {
//     const bands = await Band.findAll();
//     res.json(bands);
// })



module.exports = app;