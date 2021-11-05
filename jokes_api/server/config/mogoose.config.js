const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jokes_api_db',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log('Found the Mongoose'))
    .catch(()=>console.log('Where did the Mongoose go?', err))