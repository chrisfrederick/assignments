const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');

app.use(cors());

app.use(express.json(), express.urlencoded({extended:true}));

require('./server/config/mogoose.config')
//require routes for my model

require('./server/routes/joke.routes')(app);

app.listen(port, ()=>console.log(`Your up and rocking on port ${port}`));