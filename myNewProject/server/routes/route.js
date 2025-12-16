const Controllet = require('../controller/control');
// const router = require('express').Router();


module.exports =app => {
    app.get('/jokes', Controllet.getJokes);
    app.get('/jokes/:id', Controllet.findJokeById);
    app.post('/jokes', Controllet.createJoke);
    app.patch('/jokes/:id', Controllet.updateJoke);
    app.delete('/jokes/:id', Controllet.deleteJoke);
}
