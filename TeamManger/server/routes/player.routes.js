const PlayerController=require('../controllers/player.controller');


module.exports=(app) =>{
    app.get('/api/players', PlayerController.getAll);
    app.post('/api/players', PlayerController.create);
    app.delete('/api/players/:id', PlayerController.delete);
    app.patch('/api/players/:id/status/:game', PlayerController.updateStatus);
}