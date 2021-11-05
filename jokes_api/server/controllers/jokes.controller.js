const Joke = require('../models/joke.model');

//CRUD comands go here


//READ all jokes
module.exports.findAllJokes = (req,res)=>{
    Joke.find()
        .then(alljokes=>res.json({jokes: alljokes}))
        .catch(err=>res.json({message: "The program did not like your joke", error: err}))
}



//READ one joke
module.exports.findOneJoke = (req,res)=>{
    Joke.findOne({_id: req.params.id})
        .then(onejoke=>res.json({jokes: onejoke}))
        .catch(err=>res.json({message: "The program did not like your joke", error: err}))
}

//CREATE a new joke
module.exports.createJoke = (req,res)=>{
    Joke.create(req.body)
        .then(newJoke=>res.json({joke: newJoke}))
        .catch(err=>res.status(400).json(err));
}

//UPDATE an existing joke
module.exports.updateJoke = (req,res)=>{
    Joke.updateOne({_id: req.params.id},{
        $set: {
            setup: req.body.setup,
            punchline: req.body.punchline
        }
    })
    .then(oneJoke => res.json({joke: oneJoke}))
    .catch(err => res.status(400).json(err))
}

//DELETE an exisitng joke
module.exports.deleteJoke = (req,res)=>{
    Joke.remove({_id: req.params.id})
    .then(delJoke=>res.json({message: "Got rid of terrible Joke"}))
    .catch(err => res.status(400).json(err))
}
