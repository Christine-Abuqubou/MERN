const Player=require('../models/player.model');


module.exports.getAll=(req,res) =>{
    Player.find()
    .then(players => res.json (players))
    .catch(err => res.status(400).json(err));
}


module.exports.create =(req,res) =>{
    Player.create(req.body)
    .then(player => res.json(player))
    .catch(err => res.status(400).json(err));
}



module.exports.delete=(req,res) =>{
    Player.findByIdAndDelete(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.status(400).json(err));
}


module.exports.updateStatus = (req, res) => {
  Player.findByIdAndUpdate(
    req.params.id,
    { $set: { [`status.${req.params.game}`]: req.body.status } }
  )
    .then(player => res.json(player))
    .catch(err => res.status(400).json(err));
};