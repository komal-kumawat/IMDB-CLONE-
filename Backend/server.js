const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const movies = require('./movies.js');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());


app.get("/",(req,res)=>{
    res.json({msg:"IMDB" });
})
app.get("/movies",(req,res)=>{
    res.json(movies);
})
app.listen(port , ()=>{
    console.log(`app listeniing to port ${port}`);
})