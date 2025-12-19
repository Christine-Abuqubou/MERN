const mongoose = require('mongoose');
const db = process.env.DB
const username = process.env.ATLAS_USERNAME
const password = process.env.ATLAS_PASSWORD
const uri = `mongodb+srv://${username}:${password}@cluster0.zboyd4e.mongodb.net/?appName=Cluster0`
mongoose.connect(uri)
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));
