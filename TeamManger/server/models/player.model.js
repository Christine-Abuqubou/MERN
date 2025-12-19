const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Name is required"],
        minlength:[2, "Name must be at least 2 characters long"]
    },

    position:{
        type:String
    },

    status: {
    game1: { type: String, default: "Undecided" },
    game2: { type: String, default: "Undecided" },
    game3: { type: String, default: "Undecided" }
  }
});

module.exports=mongoose.model("Player", PlayerSchema);