const mongoose = require('mongoose')

const cors=require('cors');

const express = require('express');
const app = express();


app.use(express.json()); // ⭐ REQUIRED
app.use(express.urlencoded({ extended: true })); // ⭐ REQUIRED
app.use(cors());

app.get('/',(req,res)=>{
    res.send("Team manager api running");
});
require('dotenv').config();
const port = process.env.PORT;
require('./config/db');
const route = require('./routes/player.routes');
route(app);
   
app.listen(port, () => console.log(`Listening on port: ${port}`) );
