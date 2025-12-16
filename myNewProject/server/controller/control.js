const jokeEntity = require('../models/Joke');
module.exports.getJokes = async (req, res) => {
    try {
        const jokes = await jokeEntity.find();
        res.status(200).json(jokes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



module.exports.findJokeById = async (req, res) => {
    try {
        const joke = await jokeEntity.findOne({_id: req.params.id});
        res.status(200).json(joke);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


// module.exports.createJoke = async (req, res) => {
//     try {
//         const joke = await jokeEntity.create(req.body);
//         res.status(200).json(joke);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
    

// }


module.exports.createJoke = async (req, res) => {
  try {
    console.log(req.body);
    
    const joke = await jokeEntity.create(req.body);
    res.status(200).json(joke);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// module.exports.updateJoke = (req, res) => {
//     jokeEntity.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
//     .then(joke => {
//         res.status(200).json(joke);
//     })
//     .catch(error => {
//         res.status(500).json({ message: error.message });
//     });
// }
module.exports.updateJoke = async (req, res) => {
    console.log(req.body);
// 
    try{
        const joke= await jokeEntity.findByIdAndUpdate(
  req.params.id,
  req.body,
  { new: true, runValidators: true }
);

        res.status(200).json(joke);
    }catch(error){
        res.status(500).json({ message: error.message });
    }


}

module.exports.deleteJoke = async (req, res) => {
    jokeEntity.findByIdAndDelete(req.params.id)
    .then(joke => {
        res.status(200).json(joke);
    })
    .catch(error => {
        res.status(500).json({ message: error.message });
    });
}

// module.exports.deleteJoke = async (req, res) => {
//     try{
//         const joke= await jokeEntity.deleteOne(req.params.id);
//         res.status(200).json(joke);
//     }catch(error){
//         res.status(500).json({ message: error.message });   
//     }
// }



