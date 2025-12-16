const mongoose =require('mongoose');

const jokeEntity =new mongoose.Schema({
    setUp :{type:String,required:true ,minlength:[10,'setup must be at least 10 characters long']},
    punchline:{type:String ,required:true,minlength:[3,'punchline must be at least 3 characters long']}
})

module.exports = mongoose.model('Joke',jokeEntity);