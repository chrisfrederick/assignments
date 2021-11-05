const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, 'You need to add a joke'],
        minLength:[10, 'Your joke is too short']
    },
    punchline:{
        type: String,
        required: [true, 'You need to add a punchline'],
        minLength:[3, 'Your punchline is too short']
    }
});

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;