
const connectDB= require('./config/db');
connectDB();





const express = require('express');
const app = express();


app.use(express.json()); // ⭐ REQUIRED
app.use(express.urlencoded({ extended: true })); // ⭐ REQUIRED

app.get('/',(req,res)=>{
    res.send('hello')
});
require('dotenv').config();
const port = process.env.PORT;

const route = require('./routes/route');
route(app);
   
app.listen(port, () => console.log(`Listening on port: ${port}`) );

